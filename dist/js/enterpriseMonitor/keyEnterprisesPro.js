"use strict";

var myChart1, myChart2, myChart4, myChart5;

$(function () {
				changeNavTo("企业监测", "重点企业管理", "重点企业占比分析");
				chart1();
				chart2();
				chartLiquidfill();
				chart4();
				chart5();

				//页面尺寸发生变化，重绘所有Echart图表
				window.onresize = function () {
								myChart1.resize();
								myChart2.resize();
								myChart4.resize();
								myChart5.resize();
				};
});
//重点企业同比/环比分析
function chart1() {
				myChart1 = echarts.init(document.getElementById('chart1'));
				var option = {
								baseOption: {
												grid: {
																top: 100,
																bottom: 160
												},
												timeline: {
																left: '5%',
																right: '5%',
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

																data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
												},
												tooltip: {
																trigger: 'axis',
																backgroundColor: 'rgba(255,255,255,0.9)',
																axisPointer: { // 坐标轴指示器，坐标轴触发有效
																				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
																},
																formatter: function formatter(params, ticket, callback) {
																				var str = '';
																				if (!params) {
																								return "暂无数据";
																				}
																				str += '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">' + params[0].name + '</span>' + '<span style="color:#666;font-size:12px;">' + params[0].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="font-size:14px;color:' + params[2].color + '; font-weight:bold;">' + params[0].value + '</span>' + '<br/>' + '<span style="color:#666;font-size:12px;">' + params[1].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="color:' + params[2].color + ';font-size:14px; font-weight:bold;">' + params[1].value / 10 + '%</span>' + '<br/>' + '<span style="color:#666;font-size:12px;">' + params[2].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="color:' + params[2].color + ';font-size:14px; font-weight:bold;">' + params[2].value / 10 + '%</span>' + '<br/>';
																				return str;
																}
												},
												legend: {
																top: 20,
																right: 200,
																textStyle: {
																				fontSize: 14,
																				color: '#999'
																},
																data: ['重点企业数量', '同比', '环比']
												},
												xAxis: [{
																type: 'category',
																data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
																axisTick: {
																				alignWithLabel: true,
																				show: false
																},
																axisLabel: {
																				rotate: 45,
																				interval: 0,
																				margin: 15,
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
																name: '数量（个）',
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
												}, {
																type: 'value',
																name: '比例（%）',
																nameTextStyle: {
																				color: '#666',
																				fontSize: 14
																},
																min: 0,
																max: 1000,
																axisTick: {
																				alignWithLabel: true,
																				show: false
																},
																axisLabel: {
																				textStyle: {
																								color: '#666'
																				},
																				formatter: function formatter(value) {
																								return value / 10;
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
												color: ['#10aefa', '#4eb816', '#fe9112'],
												series: [{ name: '重点企业数量', type: 'bar' }, { name: '同比', type: 'line', yAxisIndex: 1 }, { name: '环比', type: 'line', yAxisIndex: 1 }]
								},
								options: [{
												series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332] }, { data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532] }]
								}, {
												series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }]
								}, {
												series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }]
								}, {
												series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }]
								}, {
												series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }]
								}, {
												series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }]
								}, {
												series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }]
								}, {
												series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }]
								}, {
												series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332] }, { data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532] }]
								}, {
												series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }]
								}, {
												series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }]
								}, {
												series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }]
								}]
				};

				myChart1.setOption(option);
}
//重点企业纳税占比
function chart2() {
				var dataStyle = {
								normal: {
												label: { show: false },
												labelLine: { show: false }
								}
				};
				var placeHolderStyle = {
								normal: {
												color: 'rgba(0,0,0,0)',
												label: { show: false },
												labelLine: { show: false }
								},
								emphasis: {
												color: 'rgba(0,0,0,0)'
								}
				};
				myChart2 = echarts.init(document.getElementById('chart2'));
				var option = {
								color: ['#009eff', '#00c1fe', '#ff9400', '#ffba00'],
								tooltip: {
												show: true,
												backgroundColor: 'rgba(255,255,255,0.9)',
												formatter: function formatter(params, ticket, callback) {
																var str = '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">' + '入库金额' + '</span>';
																if (!params) {
																				return "暂无数据";
																}
																if (params.name != 'invisible') {
																				str += '<span style="color:#666;font-size:12px;">' + params.name + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="font-size:14px;color:' + params.color + '; font-weight:bold;">' + params.value + '</span>' + '<span style="color:#666;"> </span>' + '<br/>' + '<span style="font-size:14px;color:#666;">占比&nbsp:&nbsp&nbsp(' + params.percent + '%)</span>' + '<br/>';

																				return str;
																}
												},
												padding: 10,
												borderColor: '#ccc'
								},
								legend: {
												orient: 'vertical',
												right: '15%',
												top: '10%',
												itemGap: 12,
												data: ['20-50万元', '50-100万元', '100-1000万元', '1000万元以上']
								},
								calculable: true,
								series: [{
												name: '入库金额',
												type: 'pie',
												clockWise: false,
												radius: [125, 150],
												itemStyle: dataStyle,
												data: [{
																value: 68,
																name: '20-50万元'
												}, {
																value: 32,
																name: 'invisible',
																itemStyle: placeHolderStyle
												}]
								}, {
												name: '入库金额',
												type: 'pie',
												clockWise: false,
												radius: [100, 125],
												itemStyle: dataStyle,
												data: [{
																value: 42,
																name: '50-100万元'
												}, {
																value: 58,
																name: 'invisible',
																itemStyle: placeHolderStyle
												}]
								}, {
												name: '入库金额',
												type: 'pie',
												clockWise: false,
												radius: [75, 100],
												itemStyle: dataStyle,
												data: [{
																value: 55,
																name: '100-1000万元'
												}, {
																value: 45,
																name: 'invisible',
																itemStyle: placeHolderStyle
												}]
								}, {
												name: '入库金额',
												type: 'pie',
												clockWise: false,
												radius: [50, 75],
												itemStyle: dataStyle,
												data: [{
																value: 20,
																name: '1000万元以上'
												}, {
																value: 80,
																name: 'invisible',
																itemStyle: placeHolderStyle
												}]
								}]
				};

				myChart2.setOption(option);
}
//减税人员规模
function chartLiquidfill() {
				//一般纳税人减税规模
				var oneData = {
								"status": 200,
								"data": {
												"statisticsDates": ["2017-02-17", "2017-02-18"],
												"onceRate": 39.59
								}
				};
				waterPoloOpt.defaultParam.percent = oneData.data.onceRate; //初始化百分比
				waterPoloOpt.defaultParam.color = '#ff9101'; //初始化颜色
				waterPoloOpt.isMouse = false;
				waterPoloOpt.legend = false;
				initPie({
								id: 'liquidfill1',
								title: '一般纳税人减税规模',
								titleColor: '#777',
								titleGrid: { top: '82%', left: 'center' },
								color: ['#e8e8e8', '#ff9101'],
								radius: ['50%', '60%'],
								center: ['50%', '45%'],
								data: [{ value: 100 - oneData.data.onceRate }, { value: oneData.data.onceRate }]
				});

				//纳税人整体减税规模
				var twoData = {
								"status": 200,
								"data": {
												"statisticsDates": ["2017-02-17", "2017-02-18"],
												"onceRate": 30
								}
				};
				waterPoloOpt.defaultParam.percent = twoData.data.onceRate; //初始化百分比
				waterPoloOpt.defaultParam.color = '#02b04f'; //初始化颜色
				waterPoloOpt.isMouse = false;
				waterPoloOpt.legend = false;
				initPie({
								id: 'liquidfill2',
								title: '纳税人整体减税规模',
								titleColor: '#777',
								titleGrid: { top: '82%', left: 'center' },
								color: ['#e8e8e8', '#54c4ff'],
								radius: ['50%', '60%'],
								center: ['50%', '45%'],
								data: [{ value: 100 - twoData.data.onceRate }, { value: twoData.data.onceRate }]
				});

				//小规模纳税人减税规模
				var threeData = {
								"status": 200,
								"data": {
												"statisticsDates": ["2017-02-17", "2017-02-18"],
												"onceRate": 11
								}
				};
				waterPoloOpt.defaultParam.percent = threeData.data.onceRate; //初始化百分比
				waterPoloOpt.defaultParam.color = '#f15018'; //初始化颜色
				waterPoloOpt.isMouse = false;
				waterPoloOpt.legend = false;
				initPie({
								id: 'liquidfill3',
								title: '小规模纳税人减税规模',
								titleColor: '#777',
								titleGrid: { top: '82%', left: 'center' },
								color: ['#e8e8e8', '#ef732f'],
								radius: ['50%', '60%'],
								center: ['50%', '45%'],
								data: [{ value: 100 - threeData.data.onceRate }, { value: threeData.data.onceRate }]
				});

				resetOpt();
}
//行业占比
function chart4() {
				myChart4 = echarts.init(document.getElementById('chart4'));
				var option = {
								color: ['#e4590d', '#ffb400', '#5ad01c', '#01abfa', '#0182e6'],
								tooltip: {
												show: true,
												backgroundColor: 'rgba(255,255,255,0.9)',
												formatter: function formatter(params, ticket, callback) {
																var str = '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">' + '行业占比' + '</span>';
																if (!params) {
																				return "暂无数据";
																}
																str += '<span style="color:#666;font-size:12px;">' + params.name + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="font-size:14px;color:' + params.color + '; font-weight:bold;">' + params.value + '</span>' + '<span style="color:#666;"></span>' + '<br/>' + '<span style="font-size:14px;color:#666;">占比&nbsp:&nbsp&nbsp(' + params.percent + '%)</span>' + '<br/>';

																return str;
												},
												padding: 10,
												borderColor: '#ccc'
								},
								legend: {
												show: false
								},
								calculable: true,
								series: [{
												name: '',
												type: 'pie',
												center: ['50%', '50%'],
												radius: ['28%', '50%'],
												label: {
																normal: {
																				position: 'outside',
																				show: true,
																				formatter: "{b}\n{d}%",
																				textStyle: {
																								fontSize: 14
																				}
																}
												},
												labelLine: {
																normal: {
																				textStyle: {
																								fontSize: 14
																				},
																				length: 20,
																				length2: 40,
																				lineStyle: {
																								width: 1
																				}
																}
												},
												tooltip: {
																borderColor: '#ccc'
												},
												data: [{
																value: 20,
																name: '农林牧渔业'
												}, {
																value: 25,
																name: '制造业'
												}, {
																value: 50,
																name: '采掘业'
												}, {
																value: 40,
																name: '电力、燃气及水\n的供应业'
												}, {
																value: 10,
																name: '其他'
												}]
								}]
				};

				myChart4.setOption(option);
}
//地区占比
function chart5() {
				myChart5 = echarts.init(document.getElementById('chart5'));
				var option = {
								color: ['#5ad01c', '#fe9327', '#01abfa', '#009eff', '#22c1fc', '#ffba00', '#ff9400', '#ff5600', '#0182e6'],
								tooltip: {
												show: true,
												backgroundColor: 'rgba(255,255,255,0.9)',
												formatter: function formatter(params, ticket, callback) {
																var str = '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">' + '地区占比' + '</span>';
																if (!params) {
																				return "暂无数据";
																}
																str += '<span style="color:#666;font-size:12px;">' + params.name + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="font-size:14px;color:' + params.color + '; font-weight:bold;">' + params.value + '</span>' + '<span style="color:#666;"></span>' + '<br/>' + '<span style="font-size:14px;color:#666;">占比&nbsp:&nbsp&nbsp(' + params.percent + '%)</span>' + '<br/>';

																return str;
												},
												padding: 10,
												borderColor: '#ccc'
								},
								legend: {
												show: false
								},
								calculable: true,
								series: [{
												name: '',
												type: 'pie',
												center: ['50%', '50%'],
												radius: ['28%', '50%'],
												label: {
																normal: {
																				position: 'outside',
																				show: true,
																				formatter: "{b}\n{d}%",
																				textStyle: {
																								fontSize: 14
																				}
																}
												},
												labelLine: {
																normal: {
																				textStyle: {
																								fontSize: 14
																				},
																				length: 20,
																				length2: 40,
																				lineStyle: {
																								width: 1
																				}
																}
												},
												tooltip: {
																borderColor: '#ccc'
												},
												data: [{
																value: 20,
																name: '北戴河'
												}, {
																value: 25,
																name: '山海关'
												}, {
																value: 50,
																name: '海港区'
												}, {
																value: 40,
																name: '抚宁县'
												}, {
																value: 10,
																name: '昌黎县'
												}, {
																value: 10,
																name: '青龙满族自治县'
												}]
								}]
				};

				myChart5.setOption(option);
}