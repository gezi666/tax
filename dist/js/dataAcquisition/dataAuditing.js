"use strict";

$(function () {
  changeNavTo("数据采集", "数据报送/审核", "数据审核");

  //tab切换
  $('button.tabs').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).hasClass('t_box1')) {
      $('.box1').show();
      $('.box2').hide();
      $('.box3').hide();
    } else if ($(this).hasClass('t_box2')) {
      $('.box1').hide();
      $('.box2').show();
      $('.box3').hide();
    } else {
      $('.box1').hide();
      $('.box2').hide();
      $('.box3').show();
    }
  });

  selection('#sel1', ['全部', '北京', '上海'], function (e) {
    alert(e);
  });
  selection('#sel2', ['全部', '北京', '上海'], function (e) {
    alert(e);
  });
  selection('#sel3', ['全部', '北京', '上海'], function (e) {
    alert(e);
  });
  selection('#sel4', ['全部', '北京', '上海'], function (e) {
    alert(e);
  });
  selection('#sel5', ['全部', '北京', '上海'], function (e) {
    alert(e);
  });
  selection('#sel6', ['全部', '北京', '上海'], function (e) {
    alert(e);
  });
  selection('#sel7', ['全部', '北京', '上海'], function (e) {
    alert(e);
  });
  selection('#sel8', ['全部', '北京', '上海'], function (e) {
    alert(e);
  });
  selection('#sel9', ['全部', '北京', '上海'], function (e) {
    alert(e);
  });

  //全选与反选
  $('#checkbox0').on('click', function () {
    if ($(this).is(':checked')) {
      $('.box2 input[type=checkbox]').each(function () {
        if (!$(this)[0].checked) {
          $(this).click();
        }
      });
    } else {
      $('.box2 input[type=checkbox]').each(function () {
        if ($(this)[0].checked) {
          $(this).click();
        }
      });
    }
  });
});