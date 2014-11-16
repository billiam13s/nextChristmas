QUnit.test( "Create fields", function( assert ) {
    nextChristmas();

    assert.equal($("#next-christmas").children().length, 4);
    assert.equal($("#next-christmas-title").length, 1);
    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").length, 1);
    assert.equal($("#count-down-hour").length, 1);
    assert.equal($("#christmas-message").length, 1);
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "Christmas day 2014", function( assert ) {
    var date = moment('2014-12-25');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "none");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "It's today");
    assert.equal($("#count-down-hour").html(), "");
    assert.equal($("#christmas-message").css("display"), "block");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "Christmas day 2015", function( assert ) {
    var date = moment('2015-12-25');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "none");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "It's today");
    assert.equal($("#count-down-hour").html(), "");
    assert.equal($("#christmas-message").css("display"), "block");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");
    
});

QUnit.test( "Christmas eve 2014 23:00:00", function( assert ) {
    var date = moment('2014-12-24 23:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "Tomorrow");
    assert.equal($("#count-down-hour").html(), "1:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "Christmas eve 2015 23:00:00", function( assert ) {
    var date = moment('2015-12-24 23:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "Tomorrow");
    assert.equal($("#count-down-hour").html(), "1:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "Christmas eve 2014 00:00:01", function( assert ) {
    var date = moment('2014-12-24 00:00:01');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "Tomorrow");
    assert.equal($("#count-down-hour").html(), "23:59:59");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "Christmas eve 2015 00:00:01", function( assert ) {
    var date = moment('2015-12-24 00:00:01');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "Tomorrow");
    assert.equal($("#count-down-hour").html(), "23:59:59");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "Christmas eve 2014 00:00:00", function( assert ) {
    var date = moment('2014-12-24 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "1 day");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "Christmas eve 2015 00:00:00", function( assert ) {
    var date = moment('2015-12-24 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "1 day");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "2014-12-23", function( assert ) {
    var date = moment('2014-12-23 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "2 days");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "2014-11-26", function( assert ) {
    var date = moment('2014-11-26 00:00:00');
    christmasDisplay(date);
    
    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "29 days");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "2014-11-25", function( assert ) {
    var date = moment('2014-11-25 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "1 month (30 days)");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "2014-11-24", function( assert ) {
    var date = moment('2014-11-24 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "1 month 1 day (31 days)");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});


QUnit.test( "2014-11-23", function( assert ) {
    var date = moment('2014-11-23 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "1 month 2 days (32 days)");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "2014-10-27", function( assert ) {
    var date = moment('2014-10-27 00:00:00');
    christmasDisplay(date);
    
    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "1 month 29 days (59 days)");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "2014-10-26", function( assert ) {
    var date = moment('2014-10-26 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "2 months (60 days)");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "2014-10-25", function( assert ) {
    var date = moment('2014-10-25 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "2 months 1 day (61 days)");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});


QUnit.test( "2014-10-24", function( assert ) {
    var date = moment('2014-10-24 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "2 months 2 days (62 days)");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "2014-01-01", function( assert ) {
    var date = moment('2014-01-01 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "11 months 28 days (358 days)");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "2013-12-31", function( assert ) {
    var date = moment('2013-12-31 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "11 months 29 days (359 days)");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "2013-12-30", function( assert ) {
    var date = moment('2013-12-30 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "12 months (360 days)");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "2013-12-29", function( assert ) {
    var date = moment('2013-12-29 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "12 months 1 day (361 days)");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "2013-12-28", function( assert ) {
    var date = moment('2013-12-28 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "12 months 2 days (362 days)");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "2013-12-27", function( assert ) {
    var date = moment('2013-12-27 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "12 months 3 days (363 days)");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

QUnit.test( "2013-12-26", function( assert ) {
    var date = moment('2013-12-26 00:00:00');
    christmasDisplay(date);

    assert.equal($("#next-christmas-title").css("display"), "block");
    assert.equal($("#next-christmas-title").html(), "Christmas is in");
    assert.equal($("#count-down-date").html(), "12 months 4 days (364 days)");
    assert.equal($("#count-down-hour").html(), "0:00:00");
    assert.equal($("#christmas-message").css("display"), "none");
    assert.equal($("#christmas-message").html(), "Merry Christmas!");

});

