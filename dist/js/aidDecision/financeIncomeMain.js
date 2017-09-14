"use strict";

var myChart1, myChart2;

$(function () {
	changeNavTo("辅助决策", "财政收入总体分析");
	selection('#sel1', ['2017年', '2016年', '2015年']);
	selection('#sel2', ['2017年', '2016年', '2015年']);

	incomeMain(); //政府收入分析-总体图
	incomeType(); //政府收入分析-同比图

	//页面尺寸发生变化，重绘所有Echart图表
	window.onresize = function () {
		myChart1.resize();
		myChart2.resize();
	};
});

//政府收入分析-总体图
function incomeMain() {
	myChart1 = echarts.init(document.getElementById('chartMain'));
	var option = {
		tooltip: {
			trigger: 'axis',
			borderColor: '#ccc',
			borderWidth: 1,
			backgroundColor: 'rgba(255,255,255,0.9)',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			formatter: function formatter(params) {
				//	            console.log(params);
				return '<span style="color:#008ef2;font-weight:bold; font-size:16px">' + params[0].name + '</span>' + '<br/>' + '<span style="color:#666;">' + params[0].seriesName + ' : </span>' + '<span style="color:#73ddf4;font-weight:bold;">' + params[0].value + '</span>' + '<br/>' + '<span style="color:#666;">' + params[1].seriesName + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;">' + params[1].value + '</span>' + '<br/>';
			},
			padding: 10
		},
		legend: {
			show: true,
			data: ['税收收入', '非税收入'],
			top: '5%',
			left: '65%',
			textStyle: {
				fontSize: 14
			}
		},
		grid: {
			left: '1%',
			right: '1%',
			bottom: '3%',
			top: '16%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月'],
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
		yAxis: [{
			type: 'value',
			name: '单位 (万元)',
			nameGap: 35,
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
		color: ['#10aefa', '#cef0fd'],
		series: [{
			name: '税收收入',
			type: 'bar',
			stack: '总量',
			barWidth: '50%',
			data: [10, 52, 200, 34, 190, 330, 220, 123, 234, 126, 345, 215, 105]
		}, {
			name: '非税收入',
			type: 'bar',
			stack: '总量',
			barWidth: '50%',
			itemStyle: {
				normal: {
					borderColor: '#4EC1FA',
					borderWidth: 1,
					borderType: 'dashed'
				}
			},
			data: [30, 62, 150, 234, 310, 240, 300, 223, 184, 156, 245, 195, 155]
		}]
	};

	myChart1.setOption(option);
}

//政府收入分析-同比图
function incomeType() {
	myChart2 = echarts.init(document.getElementById('chartType'));
	function randomData() {
		return Math.round(Math.random() * 50 + 100);
	}
	var data = [[randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()], [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()]];
	var startBar = [],
	    lineBar = [];
	var colors = ['#ffc000', '#16bffb'];
	for (var i = 0; i < data[0].length; i++) {
		if (data[0][i] >= data[1][i]) {
			// 上升
			startBar.push(data[1][i]);
			lineBar.push({
				value: data[0][i] - data[1][i],
				itemStyle: { normal: { color: colors[0] } }
			});
		} else {
			//下降
			startBar.push(data[0][i]);
			lineBar.push({
				value: data[1][i] - data[0][i],
				itemStyle: { normal: { color: colors[1] } }
			});
		}
	}
	var option = {
		tooltip: {
			trigger: 'axis',
			borderColor: '#ccc',
			borderWidth: 1,
			axisPointer: {
				lineStyle: {
					color: '#ccc'
				}
			},
			backgroundColor: 'rgba(255,255,255,0.9)',
			formatter: function formatter(params) {
				return '<span style="color:#008ef2;font-weight:bold; font-size:16px">' + params[0].name + '</span>' + '<br/>' + '<span style="color:#666;">' + params[0].seriesName + ' : </span>' + '<span style="color:#73ddf4;font-weight:bold;">' + params[0].value + '</span>' + '<br/>' + '<span style="color:#666;">' + params[1].seriesName + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;">' + params[1].value + '</span>' + '<br/>' + '<span style="color:#666;">' + params[3].seriesName + ' : ' + (params[0].value - params[1].value > 0 ? '-' : '+') + params[3].value + '</span>' + '<br/>';
			},
			padding: 10
		},
		legend: {
			show: true,
			data: ['2015', '2016'],
			top: '5%',
			left: '65%',
			textStyle: {
				fontSize: 14
			}
		},
		grid: {
			left: '1%',
			right: '1%',
			bottom: '3%',
			top: '16%',
			containLabel: true
		},
		color: ['#ffc000', '#16bffb'],
		xAxis: {
			type: 'category',
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
		},
		yAxis: {
			name: '单位 (万元)',
			nameGap: 35,
			nameTextStyle: {
				color: '#666',
				fontSize: 14
			},
			type: 'value',
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
			min: 100,
			max: 150
		},
		series: [{
			name: '2015',
			type: 'line',
			smooth: true,
			data: data[0]
		}, {
			name: '2016',
			type: 'line',
			symbol: 'none',
			smooth: true,
			itemStyle: {
				normal: {
					lineStyle: {
						width: 2,
						type: 'dashed'
					}
				}
			},
			data: data[1]
		}, {
			name: '2016年',
			type: 'bar',
			stack: '1',
			barWidth: 10,
			itemStyle: {
				normal: {
					color: 'rgba(0,0,0,0)'
				},
				emphasis: {
					color: 'rgba(0,0,0,0)'
				}
			},
			data: startBar
		}, {
			name: '变化',
			type: 'bar',
			stack: '1',
			data: lineBar
		}]
	};

	myChart2.setOption(option);
}