## nextChristmas
Sample Christmas count down in javascript

### Requirement
* jquery 2.1.1
* moment.js 2.8.3
* bootstrap 3.3.1 (optional)

### Usage
**Standalone**

* copy single-page.html to wherever you like with Internet.

**Embed**

* Copy `css/next-christmas.css` and `js/nextChristmas.min.js` to your project.
* Add `<link rel="stylesheet" type="text/css" href="css/next-christmas.css">` onto header.
* Add `<script type="text/javascript" src="js/nextChristmas.min.js"></script>` and at end of html after bootstrap.
* Add `<div id="next-christmas"></div>` into body contain.
* Add on document ready start nextChristmas.

    ```<script type="text/javascript">
        $().ready(function() {
            nextChristmas();
        });
    </script>```

### Custom Style
Create your custom style by using the following element ids. 

* `#next-christmas` - div wrapper 
* `#next-christmas-title` - h2 header tag
* `#count-down-date` - div
* `#count-down-hour` - div
* `#christmas-message` - div