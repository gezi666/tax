'use strict';

$(function () {
	selection('#sel1', ['2015年', '2016年', '2017年']);

	initType();
});

//企业规模趋势图
function initType() {
	//数据
	var data0 = [];
	function change() {
		for (var i = 0; i < 12; i++) {
			data0[i] = randomData();
		}
		initTypeLine();
	}
	change();
	//企业规模趋势折线图
	function initTypeLine() {
		var myChart = echarts.init(document.getElementById('chartType'));

		var option = {
			tooltip: {
				trigger: 'axis',
				borderColor: '#ccc',
				borderWidth: 1,
				axisPointer: {
					lineStyle: {
						color: '#fe7f19'
					}
				},
				backgroundColor: 'rgba(255,255,255,0.9)',
				formatter: function formatter(params) {
					return '<span style="color:#008ef2;font-weight:bold; font-size:16px">' + params[0].name + '</span>' + '<br/>' + '<span style="color:#666;">' + params[0].seriesName + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;font-size:16px">' + params[0].value + '</span>' + '<br/>';
				},
				padding: 10
			},
			legend: {
				show: true,
				top: 10,
				left: 600,
				data: ['企业纳税额趋势'],
				textStyle: {
					color: "#333",
					fontSize: 14
				}
			},
			grid: {
				left: '5%',
				right: '5%',
				bottom: '6%',
				top: '11%'
			},
			color: ["#62d8fd", "#fe8f0d"],
			xAxis: [{
				type: 'category',
				nameTextStyle: {
					color: '#666',
					fontSize: 14
				},
				nameGap: 30,
				axisTick: {
					alignWithLabel: true,
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#666'
					}
				},
				axisLine: {
					lineStyle: {
						color: '#ccc'
					},
					show: false
				},
				splitLine: {
					lineStyle: {
						color: '#ededed'
					}
				},
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

			}],
			yAxis: {
				name: '数量（万元）',
				type: 'value',
				// min:'-1',
				// max:'1',
				nameTextStyle: {
					color: '#666',
					fontSize: 14
				},
				nameGap: 30,
				axisTick: {
					alignWithLabel: true,
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#666'
					}
				},
				axisLine: {
					lineStyle: {
						color: '#ccc'
					},
					show: false
				},
				splitLine: {
					lineStyle: {
						color: '#ededed'
					}
				}
			},
			series: [{
				name: '企业纳税额趋势',
				type: 'line',
				smooth: true,
				symbolSize: 10,
				markLine: {
					symbol: 'none',
					label: {
						show: true,
						position: 'end',
						formatter: '{a}'
					},
					lineStyle: {
						normal: {
							color: 'red'

						}
					},
					data: [{
						name: '平均线',
						type: 'average'
					}]
				},
				data: data0
			}]
		};
		window.onresize = myChart.resize;
		myChart.setOption(option);
	}
}