$(document).ready(function () {
    var $recepttable = $('#reception-table tbody');
    refresPage();


    function refresPage() {
        $recepttable.empty();
        $.getJSON("./mockJson.json", function (data) {
            console.log(data);
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
                var $btnupdate = $("<button style='margin: 0 5px'>").addClass('btn btn-primary btn-xs').html('详情');
                var $btndelete = $("<button style='margin: 0 5px'>").addClass('btn btn-danger btn-xs').html('接诊');
                $tdctrl.append($btnupdate, $btndelete);
                var $tRow = $('<tr>');
                $tRow.append($tdindex, $tdname, $tdsex, $tdidNumber, $tdoutHospital, $tdoutHospital, $tddepartment, $tddoctor, $tdtime, $tdstatus, $tdctrl);
                $recepttable.append($tRow);
            });

        });
    }
});