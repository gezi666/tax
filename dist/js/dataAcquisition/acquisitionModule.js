"use strict";

$(function () {
	changeNavTo("数据采集", "采集模板设计");

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

	$('#newc').on('click', function () {
		layer.open({
			type: 1,
			title: '新建信息',
			area: ['1050px', '670px'],
			shadeClose: true, //点击遮罩关闭
			content: $('#newc_box')
		});
	});
});