"use strict";

var myChart1, myChart2, myChart3, myChart4;

$(function () {

	changeNavTo("企业监测", "企业统计");

	//点击返回按钮跳转页面
	goBackTo('regionalStatistics.html');

	selection('#sel1', ['2017年', '2016年', '2015年']);
	selection('#sel2', ['地区1', '地区2']);
	selection('#sel3', ['2017年', '2016年', '2015年']);

	initTaxesBar();
	initTaxesPie();
	initTaxesTimeLine();
	initScale();

	$(".changeType span").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
	});

	//页面尺寸发生变化，重绘所有Echart图表
	window.onresize = function () {
		myChart1.resize();
		myChart2.resize();
		myChart3.resize();
		myChart4.resize();
	};
});

//初始化纳税规模统计柱状图
function initTaxesBar() {
	myChart1 = echarts.init(document.getElementById('chartTaxesBar'));

	var option = {
		grid: {
			top: 100
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		legend: {
			top: 20,
			right: 20,
			textStyle: {
				fontSize: 14
			},
			data: ['企业数量', '纳税额']
		},
		calculable: true,
		xAxis: [{
			name: '纳税额\n(万元)',
			type: 'category',
			data: ['0-50', '50-100', '100-500', '500-1000', '1000-5000'],
			axisPointer: {
				type: 'shadow'
			},
			axisLabel: {
				interval: 0
			}
		}],
		yAxis: [{
			type: 'value',
			name: '数量(个)',
			min: 0,
			splitLine: {
				show: false
			}
		}],
		color: ["#10AEFA", "#FF9000"],
		series: [{
			name: '企业数量',
			type: 'bar',
			barWidth: 27,
			data: [randomData(), randomData(), randomData(), randomData(), randomData()]
		}, {
			name: '纳税额',
			type: 'bar',
			barWidth: 27,
			data: [randomData(), randomData(), randomData(), randomData(), randomData()]
		}]
	};

	myChart1.setOption(option);
}

//初始化纳税规模统计饼图
function initTaxesPie() {
	myChart2 = echarts.init(document.getElementById('chartTaxesPie'));

	var option = {
		tooltip: {
			trigger: "item",
			formatter: "{b} : {c} 家"
		},
		legend: {
			orient: "vertical",
			right: 5,
			bottom: 30,
			data: ["0-50万元", "50-100万元", "100-500万元", "500-1000万元", "1000-5000万元"]
		},
		color: ["#E4590D", "#FFB400", "#5AD01C", "#01ABFA", "#0182E6"],
		calculable: true,
		series: [{
			name: "",
			type: "pie",
			radius: ["40%", "60%"],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				},
				emphasis: {
					show: true,
					textStyle: {
						fontSize: 30,
						fontWeight: "bold"
					},
					formatter: "{d}%"
				}
			},
			data: [{
				value: randomData(),
				name: "0-50万元"
			}, {
				value: randomData(),
				name: "50-100万元"
			}, {
				value: randomData(),
				name: "100-500万元"
			}, {
				value: randomData(),
				name: "500-1000万元"
			}, {
				value: randomData(),
				name: "1000-5000万元"
			}]
		}]
	};

	myChart2.setOption(option);
}

//初始化纳税规模统计时间轴
function initTaxesTimeLine() {
	myChart3 = echarts.init(document.getElementById('timeline'));

	var option = {
		timeline: {
			left: '5%',
			right: '5%',
			axisType: 'category',
			autoPlay: false,
			playInterval: 5000,
			lineStyle: {
				color: '#9d9d9d'
			},
			itemStyle: {
				normal: {
					color: '#9d9d9d'
				},
				emphasis: {
					color: '#4fc3ff',
					borderColor: '#4fc3ff'
				}
			},
			checkpointStyle: {
				symbolSize: 8,
				color: '#4fc3ff',
				borderColor: '#4fc3ff'
			},
			controlStyle: {
				normal: {
					color: '#4fc3ff',
					borderColor: '#4fc3ff'
				},
				emphasis: {
					color: '#4fc3ff',
					borderColor: '#4fc3ff'
				}
			},

			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		}
	};

	myChart3.setOption(option);
	myChart3.on('timelinechanged', function (params) {
		initTaxesBar();
		initTaxesPie();
	});
}

//初始化企业规模趋势图
function initScale() {
	//初始化
	var data0 = [],
	    data1 = [],
	    data2 = [],
	    data3 = [],
	    data4 = [];
	function change() {
		for (var i = 0; i < 12; i++) {
			data0[i] = randomData();
			data1[i] = randomData();
			data2[i] = randomData();
			data3[i] = randomData();
			data4[i] = randomData();
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
		myChart4 = echarts.init(document.getElementById('chartScale'));

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
				right: '1%',
				top: '16%',
				icon: 'circle',
				itemWidth: 10,
				textStyle: {
					fontSize: 14
				},
				data: ["0-50万元", "50-100万元", "100-500万元", "500-1000万元", "所有企业"]
			},

			grid: {
				left: '1%',
				right: '1%',
				bottom: '3%',
				top: '26%',
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
				name: '单位：万元',
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
				name: '0-50万元',
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
				name: '50-100万元',
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
				name: '100-500万元',
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
			}, {
				name: '500-1000万元',
				type: 'line',
				smooth: true,
				stack: '总量',
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#7abaf9'
						}, {
							offset: 1,
							color: '#a5d0fb'
						}]),
						opacity: 0.8

					}
				},
				data: data3
			}, {
				name: '所有企业',
				type: 'line',
				smooth: true,
				stack: '总量',
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#9bbbfc'
						}, {
							offset: 1,
							color: '#bed3fc'
						}]),
						opacity: 0.8

					}
				},
				data: data4
			}]

		};

		myChart4.setOption(option);
	}
}