---
tags:
- type/test_page
- date/2022-05-05
---
> This is the documentation for [[v3.5.0]] and lower, for documentation for **v4.0.0** and higher, see https://obsidian-html.github.io/v4

# Implementing Latex
At the moment only the math based latex is enabled. (It's hard to find what Obsidian supports other than the math based latex.)


## Inline Latex (single $)
``` latex
A nice equation for testing is $\int_0^{2\pi} d\theta x+e^{-i\theta}$

I can also use symbols like $\pi$ inside of a line.
```

A nice equation for testing is $\int_0^{2\pi} d\theta x+e^{-i\theta}$

I can also use symbols like $\pi$ inside of a line.


## Centered block latex (double $)
``` latex
$$
\begin
{vmatrix}a & b \\ c & d
\end
{vmatrix}=ad-bc
$$
```

$$
\begin
{vmatrix}a & b \\ c & d
\end
{vmatrix}=ad-bc
$$
## Centernot
``` latex
$$
\begin{array}{c}
  A \not\longrightarrow B\\
  A \centernot\longrightarrow B
\end{array}
$$
```
$$
\begin{array}{c}
  A \not\longrightarrow B\\
  A \centernot\longrightarrow B
\end{array}
$$

## Double centered block
``` latex
$$
\text{block 1}
$$
$$
\text{block 2}
$$
```

$$
\text{block 1}
$$
$$
\text{block 2}
$$
