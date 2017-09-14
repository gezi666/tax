'use strict';

$(function () {
	initNormal();
});

//初始化企业对比统计图
function initNormal() {

	var myChart = echarts.init(document.getElementById('chartNormal'));

	var option = {
		tooltip: {
			trigger: 'item',
			formatter: "{b}: {c}"
		},
		calculable: false,
		series: [{
			name: '韦恩图',
			type: 'venn',
			itemStyle: {
				normal: {
					label: {
						show: true,
						textStyle: {
							fontFamily: 'Arial, Verdana, sans-serif',
							fontSize: 16,
							fontStyle: 'italic',
							fontWeight: 'bolder'
						}
					},
					labelLine: {
						show: false,
						length: 10,
						lineStyle: {
							// color: 各异,
							width: 1,
							type: 'solid'
						}
					}
				},
				emphasis: {
					color: '#cc99cc',
					borderWidth: 3,
					borderColor: '#996699'
				}
			},
			data: [{ value: 120, name: '国税' }, { value: 200, name: '地税' }, { value: 50, name: '公共' }]
		}]
	};

	window.onresize = myChart.resize();
	myChart.setOption(option);
}