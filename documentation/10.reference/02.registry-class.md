Get instance
------------

Get the instance of the `Registry` class:

```
$registry = Registry::getInstance();
```


Init
----

Init the class:

```
$registry->init(array $registryArray);
```


Get
---

Get item from registry:

```
$registry->get(string $key);
```


Set
---

Set item to registry:

```
$registry->get(string $key, string $value);
```


Clear instance
--------------

Clear the instance of the `Registry` class:

```
$registry->clearInstance();
```