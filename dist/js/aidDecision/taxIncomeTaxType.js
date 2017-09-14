"use strict";

var myChart1, myChart2;

$(function () {
		changeNavTo("辅助决策", "税收收入分析", "分税种统计");

		barChart(); //总体柱图

		lineChart(); //同比环比折线图

		//页面尺寸发生变化，重绘所有Echart图表
		window.onresize = function () {
				myChart1.resize();
				myChart2.resize();
		};
});

//总体柱图
function barChart() {
		//数据
		var data1 = [],
		    data2 = [],
		    data3 = [];
		function change() {
				for (var i = 0; i < 18; i++) {
						data1[i] = randomData();
				}
				chart1();
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
		createSliderUI("date-slider", defaultBegin, defaultEnd, min, max, s, ss);

		//柱图
		function chart1() {
				myChart1 = echarts.init(document.getElementById('chart1'));
				var option = {
						color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#1dd8fd'
						}, {
								offset: 1,
								color: '#10acfa'
						}])],
						tooltip: {
								trigger: 'axis',
								borderColor: '#ccc',
								borderWidth: 1,
								backgroundColor: 'rgba(255,255,255,0.9)',
								axisPointer: { // 坐标轴指示器，坐标轴触发有效
										type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
								},
								formatter: function formatter(params) {
										//			            console.log(params);
										return '<span style="color:#008ef2;font-weight:bold; font-size:16px">' + params[0].name + '</span>' + '<br/>' + '<span style="color:#666;">' + '税收收入' + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;">' + params[0].value + '</span>' + '<br/>';
								},
								padding: 10

						},
						grid: {
								left: '1%',
								right: '4%',
								top: '15%',
								bottom: '20%',
								containLabel: true
						},
						legend: {
								data: ['增值税', '营销广告', '企业所得税', '个人所得税', '资源税', '城市维护建设税', '房产税', '印花税', '城镇土地使用税', '土地增值税', '车船使用税', '车辆购置税', '耕地占用税', '契税', '烟叶税', '环保税', '关税', '船舶吨税']
						},
						xAxis: [{
								name: '税种',
								nameTextStyle: {
										color: '#666',
										fontSize: 14
								},
								nameGap: 10,
								type: 'category',
								data: ['增值税', '营销广告', '企业所得税', '个人所得税', '资源税', '城市维护建设税', '房产税', '印花税', '城镇土地使用税', '土地增值税', '车船使用税', '车辆购置税', '耕地占用税', '契税', '烟叶税', '环保税', '关税', '船舶吨税'],
								axisTick: {
										alignWithLabel: true,
										show: false
								},
								axisLabel: {
										textStyle: {
												color: '#666',
												fontSize: 14
										},
										rotate: 45,
										interval: 0
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
								name: '数量 (万元)',
								nameTextStyle: {
										color: '#666',
										fontSize: 14
								},
								nameGap: 30,
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
								name: '',
								type: 'bar',
								barWidth: '60%',
								areaStyle: {
										normal: {}
								},
								//		            data:[120, 132, 101, 134, 90, 230, 210, 300, 230, 160, 430,120, 132, 101, 134, 370]
								data: data1
						}]
				};

				myChart1.setOption(option);
				myChart1.on('click', function (params) {
						// 点击柱图跳转页面
						if (params.componentType == "series") {
								layer.open({
										type: 2,
										title: 'XX税趋势图',
										area: ['1053px', '600px'],
										fixed: false, //不固定
										maxmin: true,
										scrolling: false,
										shadeClose: true,
										content: 'taxIncomeTaxType_child.html'
								});
						}
				});
		}
}

//环比同比图
function lineChart() {
		chart2();
		function randomData() {
				return Math.round(Math.random() * 80);
		}
		function randomData2() {
				return Math.round(Math.random() * 60);
		}

		//同比环比折线
		function chart2() {
				myChart2 = echarts.init(document.getElementById('chart2'));
				var option = {
						baseOption: {
								timeline: {
										left: 10,
										right: 10,
										axisType: 'category',
										autoPlay: false,
										playInterval: 1000,
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

										data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月']
								},
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
														color: '#fe7f19'
												}
										},
										backgroundColor: 'rgba(255,255,255,0.9)',
										formatter: function formatter(params) {
												return '<span style="color:#008ef2;font-weight:bold; font-size:16px">' + params[0].name + '</span>' + '<br/>' + '<span style="color:#666;">' + params[0].seriesName + ' : </span>' + '<span style="color:#17c5fc;font-weight:bold;font-size:16px">' + params[0].value + ' %</span>' + '<br/>' + '<span style="color:#666;">' + params[1].seriesName + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;font-size:16px">' + params[1].value + ' %</span>' + '<br/>';
										},
										padding: 10
								},
								grid: {
										top: '20%',
										left: '4%',
										right: '4%',
										bottom: '20%'
								},
								calculable: true,
								legend: {
										top: 20,
										right: 20,
										data: ['同比', '环比'],
										textStyle: {
												color: "#333",
												fontSize: 14
										}
								},
								xAxis: [{
										type: 'category',
										data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月'],
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
								color: ["#62d8fd", "#fe8f0d"],
								yAxis: [{
										type: 'value',
										//				        name: '同比',
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
												},
												formatter: '{value}',
												show: true
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
								}, {
										type: 'value',
										//				        name: '环比',
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
												},
												formatter: '{value}'
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
								series: [{ name: '同比', type: 'line', yAxisIndex: 0, symbolSize: 10 }, { name: '环比', type: 'line', yAxisIndex: 1, symbolSize: 10 }]
						},
						options: [{
								series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532, 232] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332, 132] }]
						}, {
								series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232, 432] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132, 332] }]
						}, {
								series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132, 432] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332, 350] }]
						}, {
								series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532, 232] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332, 132] }]
						}, {
								series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232, 432] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132, 332] }]
						}, {
								series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132, 432] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332, 132] }]
						}, {
								series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532, 232] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332, 132] }]
						}, {
								series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232, 432] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132, 332] }]
						}, {
								series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132, 432] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332, 570] }]
						}, {
								series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532, 232] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332, 132] }]
						}, {
								series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232, 432] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132, 332] }]
						}, {
								series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132, 432] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332, 300] }]
						}]

				};

				myChart2.setOption(option);
		}
}