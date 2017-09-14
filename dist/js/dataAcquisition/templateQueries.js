"use strict";

$(function () {
	changeNavTo("数据采集", "数据查询", "数据模板查询");

	selection('#sel1', ['全部', '北京', '上海'], function (e) {
		alert(e);
	});

	selection('#sel2', ['全部', '北京', '上海'], function (e) {
		alert(e);
	});

	//全选与反选
	$('#checkbox0').on('click', function () {
		if ($(this).is(':checked')) {
			$('.box1 input[type=checkbox]').each(function () {
				if (!$(this)[0].checked) {
					$(this).click();
				}
			});
		} else {
			$('.box1 input[type=checkbox]').each(function () {
				if ($(this)[0].checked) {
					$(this).click();
				}
			});
		}
	});
});