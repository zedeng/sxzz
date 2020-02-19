$(document).ready(function () {
    var $recepttable = $('#reception-table tbody');
    refresPage();


    function refresPage() {
        $recepttable.empty();
        $.getJSON("../mockJson.json", function (data) {
            data && data.list.forEach(function (item, index) {
                var $tdindex = $('<td>').html(index + 1);
                var $tdname = $('<td>').html(item.name);
                var $tdsex = $('<td>').html(item.sex);
                var $tdidNumber = $('<td>').html(item.idNumber);
                var $tdoutHospital = $('<td>').html(item.outHospital);
                var $tddepartment = $('<td>').html(item.department);
                var $tddoctor = $('<td>').html(item.doctor);
                var $tdtime = $('<td>').html(item.time);

                var statusDiscribe = item.status == 0 ? '未接诊' : item.status == 1 ? '已接诊' : '驳回';
                var $tdstatus = $('<td>').html(statusDiscribe);
                var $tdctrl = $('<td>');

                if (item.status == 0) {
                    var acceptBtn = "<button style='margin: 0 5px' data-id='" + item.id + "' class='btn btn-danger btn-xs recept-accept'><a href='../referralApplication/referralApplication.html' target='mainFrame'>接诊</a></button>";
                    var detailBtn = "<button style='margin: 0 5px' data-id='" + item.id + "' class='btn btn-primary btn-xs recept-detail'><a href='../../diagnosisRecord/hospitalizationRecords/hospitalization.html'>详情</a></button>";
                    $tdctrl.append(detailBtn, acceptBtn);
                } else if (item.status == 1) {
                    if (item.ifInHospital) {
                        var detailBtn = "<button style='margin: 0 5px' data-id='" + item.id + "' class='btn btn-primary btn-xs recept-detail'><a href='../../diagnosisRecord/hospitalizationRecords/hospitalization.html'>详情</a></button>";
                        $tdctrl.append(detailBtn);
                    } else {
                        var detailBtnOut = "<button style='margin: 0 5px' data-id='" + item.id + "' class='btn btn-primary btn-xs recept-detail'><a href='../../diagnosisRecord/outpatientRecords/outpatient.html'>详情</a></button>";
                        $tdctrl.append(detailBtnOut);
                    };
                } else {
                    var detailBtnReject = "<button style='margin: 0 5px' data-toggle='modal' data-target='#myModal'  data-id='" + item.id + "' class='btn btn-primary btn-xs recept-detail'>详情</button>";
                    $tdctrl.append(detailBtnReject);
                }
                var $tRow = $('<tr>');
                $tRow.append($tdindex, $tdname, $tdsex, $tdidNumber, $tdoutHospital, $tdoutHospital, $tddepartment, $tddoctor, $tdtime, $tdstatus, $tdctrl);
                $recepttable.append($tRow);
            });
        });
    };

    //定义查询条件
    var queryItems = {
        patienName: '',
        idNum: '',
        sex: '',
        applictTime: {
            stime: '',
            etime: '',
        },
        receptTime: {
            rstime: '',
            retime: ''
        },
        outHospital: '',
        status: '',
    };




    //点击查询按钮
    $('.search').on('click', '', function () {
        queryItems.patienName = $('#patienName').val();
        queryItems.idNum = $('#idNum').val();
        queryItems.sex = $('#sex option:selected').val();
        queryItems.applictTime.stime = $('#stime').val();
        queryItems.applictTime.etime = $('#etime').val();
        queryItems.receptTime.rstime = $('#rstime').val();
        queryItems.receptTime.retime = $('#retime').val();
        queryItems.outHospital = $('#outHospital').val();
        queryItems.status = $('#status option:selected').val();

        console.log(queryItems);

        //调查询接口

    });


    //点击重置按钮
    $('.reset').on('click', '', function () {
        $('#patienName').val('');
        $('#idNum').val('');
        $('#sex').val(1);
        $('#stime').val('');
        $('#etime').val('');
        $('#rstime').val('');
        $('#retime').val('');
        $('#outHospital').val('');
        $('#status').val(0);

    });


    //日历
    $('#stime').dcalendar();
    $('#etime').dcalendar();
    $('#rstime').dcalendar();
    $('#retime').dcalendar();

    $('#stime').dcalendarpicker({
        format: 'yyyy-mm-dd'
    });

    $('#etime').dcalendarpicker({
        format: 'yyyy-mm-dd'
    });

    $('#rstime').dcalendarpicker({
        format: 'yyyy-mm-dd'
    });

    $('#retime').dcalendarpicker({
        format: 'yyyy-mm-dd'
    });

    //点击跳转到转诊申请单
    $recepttable.on('click', '.recept-detail', function () {
        var id = $(this).attr('data-id');
        localStorage.setItem('patientId', id);
    });

});