'use strict';

/**
 * Created by 魏阁 on 2017-4-19.
 */

//切换导航菜单
function changeNavTo(navTxt, lb1, lb2) {
	$('ul.navbar-list li').each(function () {
		if ($(this).find('span').text() == navTxt) {
			$(this).addClass('active').siblings().removeClass('active');
		}
	});
	$('.left-bar>ul>li').each(function () {
		if ($(this).find('span').text() == lb1) {
			$(this).addClass('active').siblings().removeClass('active');
		}
	});

	if (lb2) {
		$('.second-ul>li').each(function () {
			if ($(this).find('a').text() == lb2) {
				$(this).addClass('active').siblings().removeClass('active');
			}
		});
	}
}

//下拉框公用函数
function selection(id, opts, cb) {

	$(id + ' .sel_show').html(opts[0]);

	for (var i = 0; i < opts.length; i++) {
		$(id + ' ul').append('<li>' + opts[i] + '</li>');
	}
	$(id).on('click', function (event) {
		event.stopPropagation();
		if ($('.select_box').not($(this)).find('ul').is(":visible")) {
			$('.select_box>ul').hide();
		};
		$(this).children('ul').toggle();
	});
	$(id + ' li').on('click', function (event) {
		var html = this.innerHTML;
		$(id + ' .sel_show').html(html);

		if (cb) {
			cb(html);
		}
	});
}
$(document).click(function (event) {
	if ($('.select_box>ul').is(":visible")) {
		$('.select_box>ul').hide();
	}
});

//随机数
function randomData() {
	return Math.round(Math.random() * 1000);
}

//返回功能
//参数：url -- 要跳转到的链接
function goBackTo(url) {
	$('.goBack').click(function () {
		location.href = url;
	});
}