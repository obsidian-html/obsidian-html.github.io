// GLOBALS
// -----------------------------------------------------------------------------------------------

var SEARCH_DATA = '';                   // search.json contents
var fuse;                               // fuzzy search object
var index;


// Get data
// -----------------------------------------------------------------------------------------------

//fetch('/obs.html/data/search.json').then(res => res.json()).then(data => {

GzipUnzipLocalFile('/obs.html/data/search.json.gzip').then(data => {
    SEARCH_DATA = JSON.parse(data);

    index = new FlexSearch.Document({
        id: "id",
        index: ["title", "content"],
        tokenize: 'forward'
    });

    let i = 0;
    SEARCH_DATA.forEach(doc => {

        index.add({
            id: i,
            content: doc.keywords,
            title: doc.title,
            url: doc.url
        });

        i++;
    });
});


// Functions
// -----------------------------------------------------------------------------------------------

function run_search(search_string_id, hard_search_id) {
    let search_string_div = document.getElementById(search_string_id);
    let hard_search_div = document.getElementById(hard_search_id);

    return search(search_string_div.value, hard_search_div.checked);
}

function search(string_search, hard_search) {
    // get matches using flexsearch
    results = GetResultsFlex(string_search, hard_search)

    // convert matches to a <ul><li> list
    html = GetHtmlFlex(results, string_search, hard_search)

    // make result div grow based on the number of results, with a max height
    let resultsdivbox = document.getElementById('search-results-box')

    let h = results.length * rem(6)
    if (results.length > 0) {
        h += rem(2)
    }
    h = Math.min(h, 0.8 * vh())

    resultsdivbox.style.height = h + 'px';

    // put results in result div
    let resultsdiv = document.getElementById('search-results')
    resultsdiv.innerHTML = html;

    return results
}

function GetResultsFlex(search_string, hard_search) {
    let match_ids = []
    let matches = []

    index.search(search_string).forEach(field => {
        field.result.forEach(result => {
            let record_id = result

            // append field to match record
            if (match_ids.includes(record_id)) {
                matches.forEach(match => {
                    if (match.id == record_id) {
                        match.matched_on.push(field.field)
                    }
                });
            }
            // add match to list
            else {
                match_ids.push(record_id);
                matches.push({ id: record_id, title: SEARCH_DATA[record_id].title, url: SEARCH_DATA[record_id].url, matched_on: [field.field] })
            }
        })
    });

    return matches
}

function GetHtmlFlex(fs_results, search_string, hard_search) {
    html = '<ul>\n'
    fs_results.forEach(res => {
        html += '\t<li onclick="click_inner_link(this)"><a href="' + res.url + '">' + res.title + '</a> '
        html += '<div class="search-highlights">' + highlight(SEARCH_DATA[res.id].md, search_string, false, 20).join(" ") + '</div></li>'
        html += '\n'
    });
    html += '</ul>'
    return html
}

async function GzipUnzipLocalFile(request_url) {
    return fetch(request_url)                                                   // make request
        .then(res => res.blob())                                            // read byte data in blob form and continue when fully read
        .then(blob => blob.arrayBuffer())                                   // convert blob to arraybuffer and continue when done
        .then(ab => {
            data = pako.inflate(ab)                                         // go from zipped arraybuffer to unzipped arraybuffer
            return String.fromCharCode.apply(null, new Uint16Array(data));  // convert arraybuffer to string
        })
}


function highlight(input_string, match_string, match_middle, border) {
    let s = input_string;
    let m = match_string;

    let m_len = m.length;
    let match_index = 0;

    let match_start = [];
    let match_end = [];

    let nonwordchars2 = '[]() \n.,`↩#…;'  // don't include /,<,> lest the <em> tags are disturbed in a later step.
    let nonwordchars = nonwordchars2 + '/<>'

    // Find match starts and ends
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        // reset matching if mismatch
        if (ch != m[match_index]) {
            match_index = 0;
            // remove last match_start if it never completed
            if (match_start.length > match_end.length){
                match_start.pop()
            }
        }
        // advance match index when matching, and keep track of start and end of match
        if (ch == m[match_index]) {
            if (match_index == 0) {
                // if match_middle == false, the character left of the first match should be a space, or the i should be 0
                if (match_middle || i == 0 || nonwordchars.includes(s[i-1])) {
                    match_start.push(i)
                }
                else {
                    continue;
                }
            }
            
            if (match_index == m_len - 1) {
                match_end.push(i)
            }
            match_index += 1;
        }
        // set up new matching if match complete
        if (match_index == m_len) {
            match_index = 0
        }
    }

    // remove last match_start if it never completed
    if (match_start.length > match_end.length){
        match_start.pop()
    }

    // get chunks containing one match each + the border number of characters
    let chunks = []
    for (let i = 0; i < match_start.length; i++) {
        let ms = match_start[i];
        let me = match_end[i];
        let start = Math.max(0, ms - border);
        let end = Math.min(s.length, me + border + 1);

        let chunk = s.substring(start, end);

        // add emphasis
        let emph_chunk = ''

        let hl_start = ms - start
        let hl_end = hl_start + (me - ms);

        for (let i = 0; i < chunk.length; i++) {
            if (i == hl_start){
                emph_chunk += '<em>'
            }
            emph_chunk += chunk[i]
            if (i == hl_end){
                emph_chunk += '</em>'
            }
        }
        chunk = emph_chunk;

        // add ellipsis
        if (start != 0){
            chunk = '…'+chunk
        }
        if (end != s.length){
            chunk += '…'
        }

        // make gray every nonwordchar
        gr_chunk = ''
        in_gray = false
        for (let i = 0; i < chunk.length; i++) {
            let ch = chunk[i]
            if (nonwordchars2.includes(ch)){
                if (in_gray){
                    gr_chunk += ch
                    continue
                }
                else {
                    in_gray = true;
                    gr_chunk += '<g>' + ch
                    continue
                }
            }
            else {
                if (in_gray){
                    in_gray = false;
                    gr_chunk += '</g>' + ch
                    continue
                }
                else {
                    gr_chunk += ch
                    continue
                }
            }
        }
        if (in_gray){
            gr_chunk += '</g>'
        }
        chunk = gr_chunk

        chunks.push(chunk)
    }

    return chunks
}

function test(){
    let input = SEARCH_DATA[10].md;
    let match = "graph";
    let match_middle = true;
    let border = 20;
    return highlight(input, match, match_middle, border)
}