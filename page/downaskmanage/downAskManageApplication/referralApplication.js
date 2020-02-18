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


    //刷新页面
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
                sourcTableItem = "<tr><td><input style='margin-right: 5px;vertical-align: inherit;' type='radio' name='sourceIndex'/><span>" + (index + 1) + "</span></td><td>" + item.stime + "</td><td>" + item.etime + "</td><td>" +
                    item.surplus + "</td><td>" + item.total + "</td><td>" + item.visited + "</td></tr>"
                schedulTableItems += schedulTableItem;
                sourcTableItems += sourcTableItem;
            });
            $schedulTable.append(schedulTableItems);
            $sourcTable.append(sourcTableItems);
        });
    };

    //提交申请表
    $('.application-action-btn').on('click', '.submit-application-btn', function () {
        //表单信息
        var applicationInfo = {
            hospital: '',
            depts: '',
            doctor: '',
            receptType: '',
            payMthord: '',
            outDate: '',
            diagnosis: '',
            describe: '',
            reason: '',
            sendMethord: ''
        };
        applicationInfo.hospital = $('#hospitals option:selected').val();
        applicationInfo.depts = $('#depts option:selected').val();
        applicationInfo.doctor = $('#doctors option:selected').val();
        applicationInfo.receptType = $('#receptType option:selected').val();
        applicationInfo.payMthord = $('#payMethords option:selected').val();
        applicationInfo.outDate = $('#mydatepicker').val();
        applicationInfo.diagnosis = $('#diagnosis').val();
        applicationInfo.describe = $('#describe').val();
        applicationInfo.reason = $('#reason').val();
        applicationInfo.sendMethord = $("input[name='sendMethords']:checked").val();;
        // 若需要非空，加判断函数
        //调接口做提交操作 TODO....
        $('.submit-application-btn').hide();
        $('.application-recept-info input').attr("disabled", true);
        $('.application-recept-info select').attr("disabled", "disabled");
        $('.application-recept-info textarea').attr("disabled", "disabled");
        $('.application-doctor-info input').attr("disabled", true);
        $('.print-application').show();
    });


    //打印申请表
    $('.application-action-btn').on('click', '.print-application', function () {
        //调打印接口做提交操作 TODO....
        console.log('打印中.....');
    });



});

$(window).resize(function () {
    var $iframeHight = $(window).height() + 90;
    $('#refer-application-form').css('height', $iframeHight)
});