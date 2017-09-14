"use strict";

$(function () {
	changeNavTo("企业监测", "企业对比分析", "差异企业登记信息");

	selection('#sel1', ['金融', '房地产', '互联网']);
	selection('#sel2', ['北京', '上海', '深圳']);

	$(".infoLine button").click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
});