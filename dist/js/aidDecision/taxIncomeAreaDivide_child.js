'use strict';

$(function () {
	selection('#sel1', ['2015年', '2016年', '2017年']);
	selection('#sel2', ['xx市', 'xx市', 'xx市']);

	initArea(); //企业规模趋势图
});

//企业规模趋势图
function initArea() {
	//数据
	var data0 = [],
	    data1 = [],
	    data2 = [];
	function change() {
		for (var i = 0; i < 12; i++) {
			data0[i] = randomData();
			data1[i] = randomData();
			data2[i] = randomData();
		}
		initAreaLine();
	}
	change();
	//企业规模趋势折线图
	function initAreaLine() {
		var myChart = echarts.init(document.getElementById('chartArea'));

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
					// console.log(params);
					return '<span style="color:#008ef2;font-weight:bold; font-size:16px">' + params[0].name + '</span>' + '<br/>' + '<span style="color:#666;">' + params[0].seriesName + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;">' + params[0].value + '</span>' + '<br/>' + '<span style="color:#666;">' + params[1].seriesName + ' : </span>' + '<span style="color:#10aefa;font-weight:bold;">' + params[1].value + '</span>' + '<br/>' + '<span style="color:#666;">' + params[2].seriesName + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;">' + params[2].value + '</span>' + '<br/>';
				},
				padding: 10
			},
			legend: {
				show: true,
				data: ['企业税收额', '非企业税收额', '环比增加趋势'],
				top: 12,
				left: 200
			},
			grid: {
				left: '4%',
				right: '4%',
				bottom: '2%',
				top: '20%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
			}],
			yAxis: [{
				type: 'value',
				name: '数量 (万元)',
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
			}],
			color: ['#10aefa', '#cef0fd', '#fe9112'],
			series: [{
				name: '企业税收额',
				type: 'bar',
				stack: '总量',
				//barWidth: '60%',
				//	                data:[10, 52, 200, 34, 190, 330, 220,123 ,234,126,345,215]
				data: data0
			}, {
				name: '非企业税收额',
				type: 'bar',
				stack: '总量',
				itemStyle: {
					normal: {
						borderColor: '#4EC1FA',
						borderWidth: 1,
						borderType: 'dashed'
					}
				},
				//barWidth: '60%',
				//	                data:[30, 62, 150, 234, 310, 240, 300,223 ,184,156,245,195]
				data: data1
			}, {
				name: '环比增加趋势',
				type: 'line',
				//	                data:[30, 62, 150, 234, 310, 240, 300,223 ,184,156,245,195],
				symbolSize: 10,
				data: data2
			}]

		};
		window.onresize = myChart.resize;
		myChart.setOption(option);
	}
}