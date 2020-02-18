$(document).ready(function () {
    var $iframeHight = $(document).height() + 10;
    $('#refer-application-form').css('height', $iframeHight);

    var $schedulTable = $('#doctor-schedul-table tbody');
    var $sourcTable = $('#doctor-source-table tbody');
    refresPage();

    var patientId = localStorage.getItem('patientId');

    function refresPage() {
        $schedulTable.empty();
        $sourcTable.empty();
        $.getJSON("../mockJson.json", function (data) {
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


    //打印
    $('.print').on('click', '', function () {
        //调接口TODO...
        console.log(patientId);
    });

    //接诊
    $('.accept').on('click', '', function () {
        //调接口TODO...
        console.log(patientId);
    });


});

$(window).resize(function () {
    var $iframeHight = $(window).height() + 30;
    $('#refer-application-form').css('height', $iframeHight)
});