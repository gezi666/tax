"use strict";

$(function () {
	//阻止点击事件冒泡
	$("input[type='checkbox'],label").click(function (e) {
		e.stopPropagation();
	});
	/*var bodyHeight=$(document).height();
 var conHeight=bodyHeight-97;
 $("#login_banner").height(conHeight*5/7);
 $("#login_footer").height(conHeight*2/7);*/
});