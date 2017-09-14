'use strict';

$(function () {

	changeNavTo("企业监测");

	selection('#sel1', ['类型1', '类型2', '类型3']);
	selection('#sel2', ['近1年', '近2年', '近3年']);

	initScale();
});

//初始化企业规模趋势图
function initScale() {
	//初始化
	var data0 = [],
	    data1 = [],
	    data2 = [];
	function change() {
		for (var i = 0; i < 12; i++) {
			data0[i] = randomData();
			data1[i] = randomData();
			data2[i] = randomData();
		}
		initScaleLine();
	}
	change();

	//时间轴
	var min = new Date("2016-05");
	var max = new Date("2017-05");
	var defaultBegin = new Date("2016-06");
	var defaultEnd = new Date("2016-12");

	var s = function s(event, ui) {
		var startDate = new Date(ui.values[0]);
		var endDate = new Date(ui.values[1]);
		change();
	};

	var ss = {
		format: "yyyy-MM",
		dateCls: "dateSpan",
		offsetFontPath: 32
	};
	createSliderUI("changeYear", defaultBegin, defaultEnd, min, max, s, ss);

	//初始化企业规模趋势折线图
	function initScaleLine() {
		var myChart = echarts.init(document.getElementById('chartScale'));

		var option = {

			tooltip: {
				trigger: 'axis',
				axisPointer: {
					lineStyle: {
						color: '#ccc'
					}
				},
				backgroundColor: 'rgba(255,255,255,0.9)',
				textStyle: {
					color: '#666'
				}

			},
			legend: {
				top: 13,
				left: '30%',
				textStyle: {
					fontSize: 14
				},
				data: ["内资", "外资", "港澳台资"]
			},
			grid: {
				top: '15%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				nameTextStyle: {
					color: '#666'
				},
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
					}
				},
				splitLine: {
					lineStyle: {
						color: '#ededed'
					}
				},
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			}],
			yAxis: [{
				name: '单位(万元)',
				type: 'value',
				nameTextStyle: {
					color: '#666',
					fontSize: 14
				},
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
					}
				},
				splitLine: {
					lineStyle: {
						color: '#ededed'
					}
				}
			}],
			color: ['#fea019', '#fa6569', '#02bf2c', '#5eaefe', '#6386f8', '#2898ed'],
			series: [{
				name: '内资',
				type: 'line',
				smooth: true,
				stack: '总量',
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#f8c77c'
						}, {
							offset: 1,
							color: '#faefe1'
						}]),
						opacity: 0.8

					}
				},
				data: data0
			}, {
				name: '外资',
				type: 'line',
				smooth: true,
				stack: '总量',
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#f7a57d'
						}, {
							offset: 1,
							color: '#f4bea3'
						}]),
						opacity: 0.8

					}
				},
				data: data1
			}, {
				name: '港澳台资',
				type: 'line',
				smooth: true,
				stack: '总量',
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#98cfa4'
						}, {
							offset: 1,
							color: '#b5ddbf'
						}]),
						opacity: 0.8

					}
				},
				data: data2
			}]

		};

		window.onresize = myChart.resize();
		myChart.setOption(option);
	}
}