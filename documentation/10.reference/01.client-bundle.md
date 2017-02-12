Browser
-------

Detect the browser name:

```
$browser = new Client\Browser(Request $request);
$browser->getOutput();
```


Desktop
-------

Detect the desktop device:

```
$desktop = new Client\Desktop(Request $request);
$desktop->getOutput();
```


Engine
------

Detect the browser engine:

```
$engine = new Client\Engine(Request $request);
$engine->getOutput();
```


Mobile
------

Detect the mobile device:

```
$mobile = new Client\Mobile(Request $request);
$mobile->getOutput();
```


Tablet
------

Detect the tablet device:

```
$tablet = new Client\Tablet(Request $request);
$tablet->getOutput();
```


Version
-------

Detect the browser version:

```
$version = new Client\Version(Request $request);
$version->getOutput();
```