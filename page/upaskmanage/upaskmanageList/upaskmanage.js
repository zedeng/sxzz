$(document).ready(function () {
    $('#stime').dcalendar(); //初始化日历     
    $('#etime').dcalendar(); //初始化日历   

    $('#stime').dcalendarpicker({
        format: 'yyyy-mm-dd'
    });

    $('#etime').dcalendarpicker({
        format: 'yyyy-mm-dd'
    });



    //定义查询条件
    var queryItems = {
        patienName: '',
        idNum: '',
        sex: '',
        applictTime: {
            stime: '',
            etime: '',
        },
        inHospital: '',
        dept: '',
        status: '',
    };


    // console.log(setApi());


    //点击查询按钮
    $('.search').on('click', '', function () {
        queryItems.patienName = $('#patienName').val();
        queryItems.idNum = $('#idNum').val();
        queryItems.sex = $('#sex option:selected').val();
        queryItems.applictTime.stime = $('#stime').val();
        queryItems.applictTime.etime = $('#etime').val();
        queryItems.status = $('#dept').val();
        queryItems.intHospital = $('#inHospital').val();
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
        $('#inHospital').val('');
        $('#dept').val('');
        $('#status').val(0);
    });





});