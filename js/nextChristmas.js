function christmasDisplay(current) {
    if(!moment.isMoment(current))
        throw "moment object required!";

    if(current.isDST())
        current.add(1, 'hour');

    var year = current.format('YYYY');
    $('#next-christmas-title').show();
    $('#christmas-message').hide();

    if('12' == current.format('MM') && '25' < current.format('DD')) {
        year++;
    }

    var upComingChristmas = moment(year+"1225", "YYYYMMDD");

    var remainMillis   = upComingChristmas.diff(current);
    var remainDuration = moment.duration(remainMillis, 'ms');

    var remainAsDays = Math.floor(remainDuration.asDays());

    var remainMonth  = remainDuration.months();
    var remainDay    = remainDuration.days();
    var remainHour   = remainDuration.hours();
    var remainMinute = remainDuration.minutes();
    var remainSecend = remainDuration.seconds();

    var remainDateStr = '';
    if(remainAsDays > 0) {
        if(remainMonth > 0) {
            remainDateStr += remainMonth + ' month';
            if(remainMonth > 1)
                remainDateStr += 's';
        } else if(remainAsDays > 359) {
            remainDateStr += '12 months'
        }
        if(remainMonth > 0 && remainDay > 0 || remainAsDays > 360)
            remainDateStr += ' '; 
        if(remainDay > 0) {
            remainDateStr += remainDay + ' day';
            if(remainDay > 1)
                remainDateStr += 's';
        }

        if(remainAsDays > 29)
            remainDateStr += ' ('+remainAsDays+' day'+(remainAsDays>1?'s':'')+')';
    } else if(remainAsDays == 0 && remainHour > 0 || remainMinute > 0 || remainSecend > 0) {
        remainDateStr = 'Tomorrow';
    } else {
        remainDateStr = 'It\'s today';
    }

    $('#count-down-date').html(remainDateStr);

    if(remainAsDays > 0 || remainHour > 0 || remainMinute > 0 || remainSecend > 0) {
        $('#count-down-hour').html(remainHour+':'+(remainMinute<10?'0':'')+remainMinute+':'+(remainSecend<10?'0':'')+remainSecend);

    } else {
        $('#next-christmas-title').hide();
        $('#count-down-hour').empty();
        $('#christmas-message').show();

    }
}

function loop() {
    christmasDisplay(moment());
    setTimeout(function() {loop()}, 1000);

}

function nextChristmas() {
    var title = $('<h2>').attr('id', 'next-christmas-title').html('Christmas is in');
    var countDownDate  = $('<div>').attr('id', 'count-down-date').addClass('lead');
    var countDownHour  = $('<div>').attr('id', 'count-down-hour').addClass('lead');
    var merryChristmas = $('<div>').attr('id', 'christmas-message').addClass('lead').html("Merry Christmas!");

    $('#christmas-message').hide();
    $("#next-christmas").append(title).append(countDownDate).append(countDownHour).append(merryChristmas);
    loop();

}