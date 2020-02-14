$(document).ready(function () {
    //getpatientinf()
})

function getpatientinf() {
    $.getJSON('./outpatient.json', function (res) {
        if (res && res.data) {
            var content = res.data
            $('#name').html(content.name)
            $('#sex').html(content.sex)
            $('#birthday').html(content.birthday)
            $('#idnum').html(content.idnum)
            $('#address').html(content.address)
            $('#tel').html(content.tel)
            $('#settlement').html(content.settlement)
            $('#insurancenum').html(content.insurancenum)
        }
    })
}

function getillinf() {
    $.getJSON('./outpatient.json', function (res) {
        if (res && res.ill) {
            var content = res.ill
            var illinf =
                '<div class="col-lg-12 col-sm-12 plustop"><div class="row"><div class="col-lg-1 col-sm-1 plusbottom">>诊断：</div><div class="col-lg-11 col-sm-11 plusbottom">' +
                content.diagnose +
                '</div></div><div class="row"><div class="col-lg-1 col-sm-1 plusbottom">病情描述：</div><div class="col-lg-11 col-sm-11 plusbottom">' +
                content.illdescription +
                '</div></div><div class="row"><div class="col-lg-3 col-sm-3 plusbottom"><span>就诊机构：</span><span>' +
                content.mechanism +
                '</span></div><div class="col-lg-3 col-sm-3 plusbottom"><span>就诊科室：</span><span>' +
                content.department +
                '</span></div><div class="col-lg-3 col-sm-3 plusbottom"><span>医生：</span><span>' +
                content.doctorname +
                '</span></div><div class="col-lg-3 col-sm-3 plusbottom"><span>就诊类型：</span><span>' +
                content.class +
                '</span></div><div class="col-lg-3 col-sm-3 plusbottom"><span>就诊时间：</span><span>' +
                content.time +
                '</span></div></div></div>'
            $('#baseinf').html(illinf)
        }
    })
}

function getprescription() {
    $.getJSON('./outpatient.json', function (res) {
        if (res && res.prescription) {
            var content = res.prescription
            var prescription =
                '<div class="col-lg-12 col-sm-12 plustop"><div class="row"><div class="col-lg-1 col-sm-1 plusbottom">处方编号：</div><div class="col-lg-11 col-sm-11 plusbottom">' +
                content.diagnose +
                '</div></div><div class="row"><div class="col-lg-4 col-sm-4 plusbottom"><span>开方时间：</span><span>' +
                content.kaifangshijian +
                '</span></div><div class="col-lg-4 col-sm-4 plusbottom"><span>开方机构：</span><span>' +
                content.kaifangjigou +
                '</span></div><div class="col-lg-4 col-sm-4 plusbottom"><span>开方医生：</span><span>' +
                content.kaifangyishen +
                '</span></div><div class="col-lg-4 col-sm-4 plusbottom"><span>皮试：</span><span>' +
                content.pishi +
                '</span></div><div class="col-lg-4 col-sm-4 plusbottom"><span>皮试结果：</span><span>' +
                content.pishijieguo +
                '</span></div><div class="col-lg-4 col-sm-4 plusbottom"><span>是否输液：</span><span>' +
                content.shifoushuye +
                '</span></div></div><div class="row"><div class="col-lg-12 col-sm-12">' +
                '<table class="table table-bordered ">' +
                '<thead><tr><th>序号</th><th>药品名称</th><th>规格</th><th>剂量</th><th>剂量单位</th><th>频率</th><th>使用途径</th><th>数量</th><th>单位</th><th>用药备注</th></tr></thead>' +
                '<tbody>'
            var table = res.prescription.table;
            var tablecont;
            for (var i = 0; i < table.list.lenght; i++) {
                tablecont = tablecont +
                    '<tr><td>' +
                    (i + 1) +
                    '</td><td>' +
                    table.list[i].medicalnanme +
                    '</td><td>' +
                    table.list[i].guige +
                    '</td><td>' +
                    table.list[i].jiliang +
                    '</td><td>' +
                    table.list[i].jiliangdanwei +
                    '</td><td>' +
                    table.list[i].pinlv +
                    '</td><td>' +
                    table.list[i].methods +
                    '</td><td>' +
                    table.list[i].number +
                    '</td><td>' +
                    table.list[i].danwei +
                    '</td><td>' +
                    table.list[i].beizhu +
                    '</td></tr>'
            }
            prescription += tablecont
            prescription += '</tbody ></table></div></div></div>'
            $('#prescription').html(prescription)
        }
    })
}

function gettest() {
    $.getJSON('./outpatient.json', function (res) {
        if (res && res.test) {
            var content = res.test
            var test =
                '<div class="col-lg-12 col-sm-12 plustop"><div class="row"><div class="col-lg-1 col-sm-1 plusbottom">报告编号：</div><div class="col-lg-11 col-sm-11 plusbottom">' +
                content.bianhao +
                '</div></div><div class="row"><div class="col-lg-3 col-sm-3 plusbottom"><span>报告名称：</span><span>' +
                content.name +
                '</span></div><div class="col-lg-3 col-sm-3 plusbottom"><span>样品名称：</span><span>' +
                content.yangping +
                '</span></div><div class="col-lg-3 col-sm-3 plusbottom"><span>检验机构：</span><span>' +
                content.jianyanjigou +
                '</span></div><div class="col-lg-3 col-sm-3 plusbottom"><span>科室：</span><span>' +
                content.keshi +
                '</span></div><div class="col-lg-3 col-sm-3 plusbottom"><span>样本采集时间：</span><span>' +
                content.caijishijian +
                '</span></div><div class="col-lg-3 col-sm-3 plusbottom"><span>接受时间：</span><span>' +
                content.jieshoushijian +
                '</span></div><div class="col-lg-3 col-sm-3 plusbottom"><span>报告时间：</span><span>' +
                content.baogaoshijian +
                '</span></div><div class="col-lg-3 col-sm-3 plusbottom"><span>检验医师：</span><span>' +
                content.jianyanyishi +
                '</span></div><div class="col-lg-3 col-sm-3 plusbottom"><span>复核医师：</span><span>' +
                content.fuheyishi +
                '</span></div><div class="col-lg-3 col-sm-3 plusbottom"><span>备注：</span><span>' +
                content.beizhu +
                '</span></div></div>'
            var list = res.test.list //检查结果
            var listcontent
            if (list.lenght < 15) {
                listcontent =
                    '<div class="row">' +
                    '<div class="col-lg-3 col-sm-3">项目</div>' +
                    '<div class="col-lg-4 col-sm-4">结果</div>' +
                    '<div class="col-lg-5 col-sm-5">参考值</div>' +
                    '</div>' +
                    '<div class="row shizixianyou"></div>'
                var listresult
                for (var j = 0; j < list.lenght; j++) {
                    listresult = listresult +
                        '<div class="row">' +
                        '<div class="col-lg-3 col-sm-3">' +
                        list[j].name +
                        '</div>' +
                        '<div class="col-lg-2 col-sm-2">' +
                        list[j].num +
                        '</div>' +
                        '<div class="col-lg-2 col-sm-2">' +
                        list[j].status +
                        '</div>' +
                        '<div class="col-lg-5 col-sm-5">' +
                        list[j].cankao +
                        '</div></div>'
                }
                listcontent += listresult
            } else {
                listcontent =
                    '<div class="row">' +
                    '<div class="col-lg-6 col-sm-6">' +
                    '<div class="row">' +
                    '<div class="col-lg-3 col-sm-3">项目</div>' +
                    '<div class="col-lg-4 col-sm-4">结果</div>' +
                    '<div class="col-lg-5 col-sm-5">参考值</div>' +
                    '</div><div class="row shizixianzuo"></div></div>' +
                    '<div class="col-lg-6 col-sm-6">' +
                    '<div class="row">' +
                    '<div class="col-lg-3 col-sm-3">项目</div>' +
                    '<div class="col-lg-4 col-sm-4">结果</div>' +
                    '<div class="col-lg-5 col-sm-5">参考值</div>' +
                    '</div><div class="row shizixianyou"></div></div>' +
                    '</div>'
                var listresultleft
                var listresultright
                var listresulttotal =
                    '<div class="row"><div class="col-lg-6 col-sm-6 rightline ">'
                for (var j = 0; j < 15; j++) {
                    listresultleft = listresultleft +
                        '<div class="row">' +
                        '<div class="col-lg-3 col-sm-3">' +
                        list[j].name +
                        '</div>' +
                        '<div class="col-lg-2 col-sm-2">' +
                        list[j].num +
                        '</div>' +
                        '<div class="col-lg-2 col-sm-2">' +
                        list[j].status +
                        '</div>' +
                        '<div class="col-lg-5 col-sm-5">' +
                        list[j].cankao +
                        '</div>' +
                        '</div>'
                }
                listresulttotal = listresulttotal + listresultleft + '</div>' +
                    '<div class="col-lg-6 col-sm-6">'
                for (var k = 15; k < list.lenght; k++) {
                    listresultright = listresultright +
                        '<div class="row">' +
                        '<div class="col-lg-3 col-sm-3">' +
                        list[k].name +
                        '</div>' +
                        '<div class="col-lg-2 col-sm-2">' +
                        list[k].num +
                        '</div>' +
                        '<div class="col-lg-2 col-sm-2">' +
                        list[k].status +
                        '</div>' +
                        '<div class="col-lg-5 col-sm-5">' +
                        list[k].cankao +
                        '</div>' +
                        '</div>'
                }
                listresulttotal = listresulttotal + listresultright + '</div></div>'
                listcontent += listresulttotal
            }
            listcontent = listcontent + '<div class="row bottomline"></div>' +
                '</div>'
            test += listcontent
            $('#test').html(test)
        }
    })
}

function getcheck() {
    $.getJSON('./outpatient.json', function (res) {
        if (res && res.check) {
            var content = res.check
            var check =
                '<div class="col-lg-12 col-sm-12 plustop">' +
                '<div class="row"><div class="col-lg-1 col-sm-1 plusbottom">报告编号：</div><div class="col-lg-11 col-sm-11 plusbottom">' +
                content.baogaobianhao +
                '</div></div><div class="row">' +
                '<div class="col-lg-3 col-sm-3 plusbottom"><span>项目名称：</span><span>' +
                content.name +
                '</span></div>' +
                '<div class="col-lg-3 col-sm-3 plusbottom"><span>检查方法：</span><span>' +
                content.methods +
                '</span></div>' +
                '<div class="col-lg-3 col-sm-3 plusbottom"><span>检验机构：</span><span>' +
                content.jigou +
                '</span></div>' +
                '<div class="col-lg-3 col-sm-3 plusbottom"><span>科室：</span><span>' +
                content.keshi +
                '</span></div>' +
                '<div class="col-lg-3 col-sm-3 plusbottom"><span>检查时间：</span><span>' +
                content.checktime +
                '</span></div>' +
                '<div class="col-lg-3 col-sm-3 plusbottom"><span>检查医师：</span><span>' +
                content.doctorname +
                '</span></div>' +
                '<div class="col-lg-3 col-sm-3 plusbottom"><span>报告时间：</span><span>' +
                content.reporttime +
                '</span></div>' +
                '<div class="col-lg-3 col-sm-3 plusbottom"><span>报告医师：</span><span>' +
                content.reportdoctor +
                '</span></div>' +
                '<div class="col-lg-3 col-sm-3 plusbottom"><span>检验医师：</span><span>' +
                content.checkdoctor +
                '</span></div>' +
                '<div class="col-lg-3 col-sm-3 plusbottom"><span>复核医师：</span><span>' +
                content.recheckdoctor +
                '</span></div>' +
                '<div class="col-lg-3 col-sm-3 plusbottom"><span>备注：</span><span>' +
                content.etc +
                '</span></div></div>'
            check = check +
                '<div class="row">' +
                '<div class="col-lg-4 col-sm-4 col-lg-offset-4 col-sm-offest-4">' +
                '<div class="row">'
            var imglist = res.check.imglist
            var imgc
            for (var l = 0; l < imglist.lenght; l++) {
                imgc = imgc + '<div class="col-lg-6 col-sm-6"><img class="img-thumbnail" src="' + imglist[l].src + ' alt=""></div>'
            }
            check = check + imgc + '</div></div></div>'
            check = check + '<div class="row">' +
                '<div class="col-lg-2 col-sm-2 plusbottom">检查结果所见：</div>' +
                '<div class="col-lg-10 col-sm-10 plusbottom">' +
                content.suojian +
                '</div></div>' +
                '<div class="row">' +
                '<div class="col-lg-2 col-sm-2 plusbottom">检查结果建议：</div>' +
                '<div class="col-lg-10 col-sm-10 plusbottom">' +
                content.jieguojianyi +
                '</div></div>' +
                '</div>'
            $('#check').html(check)
        }
    })
}