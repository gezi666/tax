"use strict";

var myChart1, myChart2;

$(function () {
	changeNavTo("企业监测", "企业统计");

	//点击返回按钮跳转页面
	goBackTo('regionalStatistics.html');

	selection('#sel1', ['2017年', '2016年', '2015年']);
	selection('#sel2', ['2017年', '2016年', '2015年']);

	initNumber();
	initTrend();

	//页面尺寸发生变化，重绘所有Echart图表
	window.onresize = function () {
		myChart1.resize();
		myChart2.resize();
	};
});

//初始化企业增减统计图
function initNumber() {
	myChart1 = echarts.init(document.getElementById('chartNumber'));

	var option = {
		title: {
			text: '',
			subtext: '',
			sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			formatter: function formatter(params) {

				return params[2].name + '<br/>' + params[2].seriesName + ' : ' + params[2].value + '<br/>' + params[3].seriesName + ' : ' + params[3].value;
			}
		},
		legend: {
			top: 20,
			right: 250,
			textStyle: {
				fontSize: 14
			},
			data: ['增加', '减少']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			name: '月份',
			nameTextStyle: {
				color: '#000'
			},
			type: 'category',
			axisLine: {
				lineStyle: {
					color: '#D1D1D1'
				}
			},
			axisLabel: {
				textStyle: {
					color: '#666'
				}
			},
			splitLine: { show: false },
			data: function () {
				var list = [];
				for (var i = 1; i <= 12; i++) {
					list.push(i + '月');
				}
				return list;
			}()
		},
		yAxis: {
			name: '数量（个）',
			nameTextStyle: {
				color: '#000'
			},
			axisLine: {
				lineStyle: {
					color: '#D1D1D1'
				}
			},
			axisLabel: {
				textStyle: {
					color: '#666'
				}
			},
			type: 'value'
		},
		color: ['#FF9900', '#19CDFC'],
		series: [{
			name: '辅助',
			type: 'bar',
			stack: '总量',
			itemStyle: {
				normal: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				},
				emphasis: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				}
			},
			data: [0, 800, 945, 1145, 1275, 1525, 1665, 1965, 2065, 2445, 2535, 2835]
		}, {
			name: '辅助',
			type: 'bar',
			stack: '总量1',
			itemStyle: {
				normal: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				},
				emphasis: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				}
			},
			data: [800, 945, 1145, 1275, 1525, 1665, 1965, 2065, 2445, 2535, 2835, 2985]
		}, {
			name: '增加',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'top'
				}
			},
			data: [900, 345, 300, 230, 400, 300, 400, 300, 500, 450, 500, 250]
		}, {
			name: '减少',
			type: 'bar',
			stack: '总量1',
			label: {
				normal: {
					show: true,
					position: 'top'
				}
			},
			data: [100, 200, 100, 100, 150, 160, 100, 200, 120, 360, 200, 100]
		}]
	};

	myChart1.setOption(option);
}

//初始化企业纳税额的趋势折线图
function initTrend() {
	myChart2 = echarts.init(document.getElementById('chartTrend'));

	var option = {
		title: {
			text: '',
			textStyle: {
				fontSize: 12
			}
		},
		tooltip: {
			trigger: 'axis',
			borderColor: '#ccc',
			borderWidth: 1,
			axisPointer: {
				lineStyle: {
					color: '#ccc'
				}
			},
			// formatter:'{b}<br>{a}：{c}'
			backgroundColor: 'rgba(255,255,255,0.9)',
			formatter: function formatter(params) {
				return '<span style="color:#008ef2;font-weight:bold; font-size:16px">' + params[0].name + '</span>' + '<br/>' + '<span style="color:#666;">' + params[0].seriesName + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;font-size:16px">' + params[0].value + '</span>' + '<span style="color:#666;"> 万元</span>' + '<br/>';
			},
			padding: 10
		},
		legend: {
			top: 20,
			right: 250,
			textStyle: {
				color: '#666',
				fontSize: 14
			},
			data: ['企业纳税额趋势']
		},
		grid: {
			left: '5%',
			right: '5%',
			bottom: '5%',
			containLabel: true
		},
		calculable: true,
		xAxis: [{
			// name:'月份',
			type: 'category',
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月'],
			axisLine: {
				lineStyle: {
					//color: "red",
					width: 0
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				formatter: '{value}',
				textStyle: {
					color: '#333'
				}
			}, splitLine: {
				show: false
			}
		}],
		color: ["#16bffb"],
		yAxis: [{
			type: 'value',
			name: '单位(万元)',
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
				},
				show: false
			},
			splitLine: {
				lineStyle: {
					color: '#ededed'
				}
			}
		}],
		series: [{
			name: '企业纳税额趋势',
			type: 'line',
			lineStyle: {
				normal: {
					color: '#16bffb'
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0.2,
						color: '#9bcff7'
					}, {
						offset: 1,
						color: '#f0fbfc'
					}]),
					opacity: 0.5

				}
			},
			itemStyle: {
				normal: {
					borderColor: '#16bffb',
					borderWidth: '4'
				}
			},
			smooth: true,
			data: [13, 26, 36, 48, 69, 74, 86, 96, 62, 51, 42, 35, 23],
			symbolSize: 10
		}]

	};

	myChart2.setOption(option);
}