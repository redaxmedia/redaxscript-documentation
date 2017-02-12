Get instance
------------

Get the instance of the `Config` class:

```
$config = Config::getInstance();
```


Init
----

Init the class:

```
$config->init(string $configFile);
```


Get
---

Get item from config:

```
$config->get(string $key);
```


Set
---

Set item to config:

```
$config->get(string $key, string $value);
```


Parse
-----

Parse from database url:

```
$config->write(string $dbUrl);
```


Write
-----

Write config to file:

```
$config->write();
```


Clear instance
--------------

Clear the instance of the `Config` class:

```
$config->clearInstance();
```