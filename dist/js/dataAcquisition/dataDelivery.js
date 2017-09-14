"use strict";

$(function () {
  changeNavTo("数据采集", "数据报送/审核", "数据报送");

  selection('#sel1', ['全部', '北京', '上海'], function (e) {
    alert(e);
  });

  selection('#sel2', ['全部', '北京', '上海'], function (e) {
    alert(e);
  });

  $('.uploader').on('click', function () {
    layer.open({
      type: 1,
      title: '报送上传',
      area: ['600px', '260px'],
      shadeClose: true, //点击遮罩关闭
      content: $('#upload')
    });
  });
});