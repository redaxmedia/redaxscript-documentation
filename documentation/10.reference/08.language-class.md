Get instance
------------

Get the instance of the `Language` class:

```
$language = Language::getInstance();
```


Init
----

Init the class:

```
$language->init(string $language);
```


Get
---

Get item from language:

```
$language->get(string $key, string $index);
```


Set
---

Set item to language:

```
$language->set(string $key, mixed $value);
```


Load
----

Load from language path:

```
$language->load(mixed path);
```


Clear instance
--------------

Clear the instance of the `Language` class:

```
$language->clearInstance();
```