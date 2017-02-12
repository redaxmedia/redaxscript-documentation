Directory
---------

Get the directory:

```
$directory = new Server\Directory(Request $request);
$directory->getOutput();
```


File
----

Get the file:

```
$file = new Server\File(Request $request);
$file->getOutput();
```


Host
----

Get the host:

```
$host = new Server\Host(Request $request);
$host->getOutput();
```


Protocol
--------

Get the protocol:

```
$protocol = new Server\Protocol(Request $request);
$protocol->getOutput();
```


Root
----

Get the root:

```
$root = new Server\Root(Request $request);
$root->getOutput();
```


Token
-----

Get the token:

```
$token = new Server\Token(Request $request);
$token->getOutput();
```