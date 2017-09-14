"use strict";

$(function () {
	changeNavTo("数据采集", "数据质量检测");

	$('#newc').on('click', function () {
		layer.open({
			type: 1,
			title: '规则基本信息',
			area: ['750px', '480px'],
			shadeClose: true, //点击遮罩关闭
			content: $('#newc_box')
		});
	});
});