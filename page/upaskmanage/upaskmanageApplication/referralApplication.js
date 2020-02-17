$(document).ready(function () {
    var $iframeHight = $(document).height() + 20;
    $('#refer-application-form').css('height', $iframeHight);

    var $schedulTable = $('#doctor-schedul-table tbody');
    var $sourcTable = $('#doctor-source-table tbody');
    refresPage();

    $('#mydatepicker').dcalendarpicker({
        format: 'yyyy-mm-dd'
    });
    $('#mycalendar').dcalendar(); //初始化日历     


    function refresPage() {
        $schedulTable.empty();
        $sourcTable.empty();
        $.getJSON("../../upreception/mockJson.json", function (data) {
            var schedulTableItem = '';
            var schedulTableItems = '';
            var sourcTableItem = '';
            var sourcTableItems = '';

            data && data.table1.forEach(function (item, index) {
                schedulTableItem = "<tr><td><input style='margin-right: 5px;vertical-align: inherit;' type='radio' name='schedulIndex'/><span>" + (index + 1) + "</span></td><td>" + item.doctorName + "</td><td>" + item.date + "</td><td>" +
                    item.noon + "</td><td>" + item.status + "</td><td>" + item.cost + "</td></tr>"
                schedulTableItems += schedulTableItem;
            });

            data && data.table2.forEach(function (item, index) {
                sourcTableItem = "<tr><td><input style='margin-right: 5px;vertical-align: inherit;' type='radio' name='schedulIndex'/><span>" + (index + 1) + "</span></td><td>" + item.stime + "</td><td>" + item.etime + "</td><td>" +
                    item.surplus + "</td><td>" + item.total + "</td><td>" + item.visited + "</td></tr>"
                schedulTableItems += schedulTableItem;
                sourcTableItems += sourcTableItem;
            });
            $schedulTable.append(schedulTableItems);
            $sourcTable.append(sourcTableItems);
        });
    };
});

$(window).resize(function () {
    var $iframeHight = $(window).height() + 90;
    $('#refer-application-form').css('height', $iframeHight)
});