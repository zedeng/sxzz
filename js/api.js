  //接口配置
  var apiInfo = {};
  apiInfo.apiUrl = 'http://192.168.1.1:8080/';

  //   function setApi() {
  //       apiInfo.apiUrl = 'http://192.168.1.1:8080/'
  //       return apiInfo
  //   };

  function getDataWithPost(api, params) {
      $.ajax({
          url: apiInfo.apiUrl + api, //地址
          dataType: 'json', //数据类型
          type: 'POST', //类型
          timeout: 2000, //超时
          data: params, //请求参数
          //请求成功
          success: function (data, status) {
              return data
          },
          //失败/超时
          error: function (XMLHttpRequest, textStatus, errorThrown) {
              if (textStatus === 'timeout') {
                  alert('請求超時');
                  setTimeout(function () {
                      alert('重新请求');
                  }, 2000);
              }
          }
      })
  };


  function getDataWithGet(api, params) {
      $.ajax({
          url: apiInfo.apiUrl + api, //地址
          dataType: 'json', //数据类型
          type: 'GET', //类型
          timeout: 2000, //超时
          data: params, //请求参数
          //请求成功
          success: function (data, status) {
              return data
          },
          //失败/超时
          error: function (XMLHttpRequest, textStatus, errorThrown) {
              if (textStatus === 'timeout') {
                  alert('請求超時');
                  setTimeout(function () {
                      alert('重新请求');
                  }, 2000);
              }
          }
      })
  }