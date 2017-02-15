Access
------

Validate the access:

```
$validator = new Validator\Access();
$validator->validate(string $access, string $groups);
```


Alias
-----

Validate the alias:

```
$validator = new Validator\Alias();
$validator->validate(string $alias, integer $mode);
```


Captcha
-------

Validate the captcha:

```
$validator = new Validator\Captcha();
$validator->validate(string $task, string $hash);
```


DNS
---

Validate the DNS:

```
$validator = new Validator\Dns();
$validator->validate(string $host, string $type);
```


Email
-----

Validate the email:

```
$validator = new Validator\Email();
$validator->validate(string $email, boolean $dns);
```


Login
-----

Validate the login:

```
$validator = new Validator\Login();
$validator->validate(string $login);
```


Password
--------

Validate the password:

```
$validator = new Validator\Password();
$validator->validate(string $password, string $hash);
```


Search
------

Validate the search:

```
$validator = new Validator\Search();
$validator->validate(string $search, string $placeholder);
```


URL
---

Validate the URL:

```
$validator = new Validator\Url();
$validator->validate(string $url, boolean $dns);
```
