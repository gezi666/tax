'use strict';

console.log('home');

//下拉框函数有三个参数，分别为：下拉框id名，下拉选项（数组），回调函数
selection('#sel1', ['全部', '北京', '上海'], function (e) {
	alert(e);
});

function selection(id, opts, cb) {

	$(id + ' .sel_show').html(opts[0]);

	for (var i = 0; i < opts.length; i++) {
		$(id + ' ul').append('<li>' + opts[i] + '</li>');
	}

	$(id).on('click', function () {
		$(this).children('ul').toggle();
	});
	$(id + ' li').on('click', function () {
		var html = this.innerHTML;
		$(id + ' .sel_show').html(html);
		cb(html);
	});
}