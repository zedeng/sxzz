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
                var $tdstatus = $('<td>').html(item.status);
                var $tdctrl = $('<td>');
                var acceptBtn = "<button style='margin: 0 5px' data-id='" + item.id + "' class='btn btn-danger btn-xs recept-accept'><a href='../referralApplication/referralApplication.html' target='mainFrame'>接诊</a></button>";
                if (item.ifInHospital) {
                    var detailBtn = "<button style='margin: 0 5px' data-id='" + item.id + "' class='btn btn-primary btn-xs recept-detail'><a href='../../diagnosisRecord/hospitalizationRecords/hospitalization.html'>详情</a></button>";
                    $tdctrl.append(detailBtn, acceptBtn);
                } else {
                    var detailBtnOut = "<button style='margin: 0 5px' data-id='" + item.id + "' class='btn btn-primary btn-xs recept-detail'><a href='../../diagnosisRecord/outpatientRecords/outpatient.html'>详情</a></button>";
                    $tdctrl.append(detailBtnOut, acceptBtn);
                };
                var $tRow = $('<tr>');
                $tRow.append($tdindex, $tdname, $tdsex, $tdidNumber, $tdoutHospital, $tdoutHospital, $tddepartment, $tddoctor, $tdtime, $tdstatus, $tdctrl);
                $recepttable.append($tRow);
            });
        });
    };

    //点击跳转到转诊申请单
    $recepttable.on('click', '.recept-detail', function () {
        var id = $(this).attr('data-id');
        localStorage.setItem('patientId', id);
    });

});