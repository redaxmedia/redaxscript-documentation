Alias
-----

Filter the alias:

```
$filter = new Filter\Alias();
$filter->sanitize(string $alias);
```


Boolean
-------

Filter the boolean:

```
$filter = new Filter\Boolean();
$filter->sanitize(string $boolean);
```


Email
-----

Filter the email:

```
$filter = new Filter\Email();
$filter->sanitize(string $email);
```


HTML
----

Filter the HTML:

```
$filter = new Filter\Html();
$filter->sanitize(string $html, boolean $filter);
```


Path
----

Filter the path:

```
$filter = new Filter\Path();
$filter->sanitize(string $path);
```


Special
-------

Filter the special:

```
$filter = new Filter\Special();
$filter->sanitize(string $special);
```


URL
---

Filter the URL:

```
$filter = new Filter\Url();
$filter->sanitize(string $url);
```
