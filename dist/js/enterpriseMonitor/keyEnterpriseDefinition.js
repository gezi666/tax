'use strict';

$(function () {
	changeNavTo("企业监测");

	//全选与反选
	$('#checkbox0').on('click', function () {
		if ($(this).is(':checked')) {
			$('table input[type=checkbox]').each(function () {
				if (!$(this)[0].checked) {
					$(this).click();
				}
			});
		} else {
			$('table input[type=checkbox]').each(function () {
				if ($(this)[0].checked) {
					$(this).click();
				}
			});
		}
	});

	//点击返回按钮跳转页面
	goBackTo('keyEnterprisesAnalysis.html');
});