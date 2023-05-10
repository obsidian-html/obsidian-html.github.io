---
{}
---
   
Stashing is a standardized way to store information in an ObsidianHtmlModule object for later usage. This is useful as the storing/retrieval of information from the module can be logged. This standardization also gives options later in development to hook other mechanisms to these actions.   
   
## Store/retrieve a value in the stash   
In any method of an ObsidianHtmlModule object, you can use the following line to store information for later retrieval:   
``` python
self.store("key", value)
```
   
   
And to retrieve the information:   
``` python
key = self.retrieve("key")
```
   
   
## Behavior   
### Overwrite   
By default, you can only store a value to a certain key once. To overwrite the value attached to a key, use overwrite:   
``` python
self.store("key", value, overwrite=True)
```
   
### Retrieval of value of non-existant key   
This will result in a normal python error of `KeyError`.   
   
### Access logging   
When the module is configured to be [persistent](../../../Configurations/Modules/Concepts/Persistence.md), the storing and retrieval actions are logged into `self.stored_keys` and `self.retrieved_keys`. These values are read by the [Resource Logger](../../../Configurations/Modules/Resource%20Logger.md) module.