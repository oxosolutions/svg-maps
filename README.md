svg-maps
=================

> A simple and light weight angular directive for create svg maps.

Built using core angular and css transitions. Works smoothly on desktop and mobile browsers without any flickering in transitions. No jquery, bootstrap or any other dependency required.

## Usage

Include the required libraries
```html
<!-- For simple styling and transitions, include "angular-accordion.css". You can edit styles to meed your look and feel -->
<link rel="stylesheet" type="text/css" href="../css/svg-maps.css">

<!-- Then include "angular.js" and "angular-accordion.js" to your page -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.15/angular.min.js"></script>
<script type="text/javascript" src="../js/svg-maps.js"></script>
```

Declare a dependency on the `svgMaps` module
``` javascript
var app = angular.module('app', ['svgMaps']);
```
That's all you need to start create svg map on your page. Project files are also available through your favourite package manager:
* **Bower**: `bower install svg-maps`

## Html Markup

```html
<india-map></india-map>
```

## Author

**SGS Sandhu** (https://github.com/sgssandhu)

## Copyright and license

    The MIT License

	Copyright (c) 2014 Will Palahnuk

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
