'use strict';

var myChart1, myChart2, myChart3, myChart4;

$(function () {
		changeNavTo("首页");
		chart1();
		chart2();
		chart3();
		chart4();
		chartLiquidfill();

		//页面尺寸发生变化，重绘所有Echart图表
		window.onresize = function () {
				myChart1.resize();
				myChart2.resize();
				myChart3.resize();
				myChart4.resize();
		};
});
//税额及预测项目数量-柱状图
function chart1() {
		myChart1 = echarts.init(document.getElementById('chart1'));

		var option = {
				baseOption: {
						grid: {
								top: 100,
								bottom: 160
						},
						timeline: {
								left: 60,
								right: 60,
								axisType: 'category',
								autoPlay: false,
								playInterval: 2000,
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
								axisPointer: {
										type: 'shadow'
								},
								backgroundColor: 'rgba(255,255,255,0.9)',
								formatter: function formatter(params) {
										return '<span style="color:#008ef2;font-weight:bold; font-size:16px">' + params[0].name + '</span>' + '<br/>' + '<span style="color:#666;">' + '税额' + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;font-size:16px">' + params[0].value + '</span>' + '<span style="color:#666;"> 万元</span>' + '<br/>' + '<span style="color:#666;">' + '数量' + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;font-size:16px">' + params[1].value + '</span>' + '<span style="color:#666;"> 个</span>';
								},
								padding: 10
						},
						legend: {
								top: 20,
								right: 200,
								textStyle: {
										fontSize: 14
								},
								data: ['税额', '数量']
						},
						calculable: true,
						xAxis: [{
								type: 'category',
								data: ['农、林、牧、渔业', '采掘业', '制造业', '电力、燃气、水的\n生产与供应', '建筑业', '交通运输、仓储', '信息技术业', '批发和零售贸易', '金融、保险业', '房地产业', '社会服务业', '传播与文化产业', '综合类'],
								axisPointer: {
										type: 'shadow'
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
								}
						}],
						yAxis: [{
								type: 'value',
								name: '项目数量(个)',
								nameTextStyle: {
										color: '#b6b6b6'
								},
								axisLine: {
										lineStyle: {
												color: '#ccc'
										}
								},
								axisLabel: {
										textStyle: {
												color: '#666'
										}
								}
						}],
						color: ["#10AEFA", "#FF9000"],
						series: [{ name: '税额', type: 'bar' }, { name: '数量', type: 'bar' }]
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

		myChart1.setOption(option);
		/*myChart.on('click', function (params) {
  // 点击地图跳转页面
  if(params.componentType=="series"){
  location.href="industryStatistics.html";
  }
  });*/
}
//减税热力图-地图
function chart2() {
		myChart2 = echarts.init(document.getElementById('chart2'));
		var seriesData = [[{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }]];
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
						tooltip: {
								trigger: 'item',
								backgroundColor: 'rgba(255,255,255,0.9)',
								borderColor: '#ccc',
								textStyle: {
										color: '#333',
										fontSize: 14
								},
								borderWidth: 1,
								formatter: function formatter(params) {
										return '<span style="color:#008ef2;font-size:16px;">' + params.name + '</span>' + '<br/>' + '企业数量：' + '<span style="color:#ff9100; font-weight:bold; font-size:16px;">' + params.value + '</span>' + '个';
								},
								padding: 10
						},
						visualMap: {
								show: true,
								min: 0,
								max: 1000,
								itemWidth: 10,
								itemHeight: 100,
								right: '8%',
								bottom: '15%',
								text: ['高', '低'], // 文本，默认为数值文本
								color: ["#0792f3", "#8ed2fd"],
								calculable: true
						},
						series: [{
								name: '',
								type: 'map',
								mapType: '山东',
								roam: false,
								top: 45,
								bottom: 90,
								itemStyle: {
										normal: {
												label: {
														show: true,
														textStyle: { color: '#000' } }
										},
										emphasis: {
												areaColor: '#FFDE00',
												borderColor: '#40bbca',
												borderWidth: '5'
										}
								}
								// showLegendSymbol: true,
								// data:seriesData 
						}]
				},
				options: [{ series: { data: seriesData[0] } }, { series: { data: seriesData[1] } }, { series: { data: seriesData[2] } }, { series: { data: seriesData[3] } }, { series: { data: seriesData[4] } }, { series: { data: seriesData[5] } }, { series: { data: seriesData[6] } }, { series: { data: seriesData[7] } }, { series: { data: seriesData[8] } }, { series: { data: seriesData[9] } }, { series: { data: seriesData[10] } }, { series: { data: seriesData[11] } }]
		};

		myChart2.setOption(option);
}
//内资、外资、港澳台资投资情况-柱状图
function chart3() {
		myChart3 = echarts.init(document.getElementById('chart3'));
		var option = {
				color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#ffc000'
				}, {
						offset: 1,
						color: '#ff9000'
				}])],
				tooltip: {
						borderColor: '#ccc',
						borderWidth: 1,
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
								type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						},
						backgroundColor: 'rgba(255,255,255,0.9)',
						formatter: function formatter(params) {
								return '<span style="color:#008ef2;font-weight:bold; font-size:16px">' + params[0].name + '</span>' + '<br/>' + '<span style="color:#666;">' + '资金' + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;font-size:16px">' + params[0].value + '</span>' + '<span style="color:#666;"> 万元</span>' + '<br/>';
						},
						padding: 10
				},
				grid: {
						left: '1%',
						right: '1%',
						bottom: '2%',
						containLabel: true
				},
				xAxis: [{
						type: 'category',
						data: ['内资', '外资', '港澳台资'],
						axisTick: {
								alignWithLabel: true,
								show: false
						},
						axisLabel: {
								textStyle: {
										color: '#666',
										fontSize: 14
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
						name: '资金(万元)',
						nameGap: 30,
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
						name: '内资',
						type: 'bar',
						barWidth: '40%',
						data: [100, 152, 200]
				}]
		};

		myChart3.setOption(option);
}
//服务业占比
function chart4() {
		myChart4 = echarts.init(document.getElementById('chart4'));
		var option = {
				color: ['#e4590d', '#ffb400', '#5ad01c', '#01abfa', '#0182e6'],
				tooltip: {
						show: true,
						backgroundColor: 'rgba(255,255,255,0.9)',
						formatter: function formatter(params, ticket, callback) {
								var str = '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">' + '行业收入分析' + '</span>';
								if (!params) {
										return "暂无数据";
								}
								str += '<span style="color:#666;font-size:12px;">' + params.name + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="font-size:14px;color:' + params.color + '; font-weight:bold;">' + params.value + '</span>' + '<span style="color:#666;"> 个</span>' + '<br/>' + '<span style="color:#666;">占比&nbsp:&nbsp&nbsp(' + params.percent + '%)</span>' + '<br/>';

								return str;
						},
						padding: 10,
						borderColor: '#ccc'
				},
				legend: {
						orient: 'vertical',
						right: 20,
						bottom: 20,
						data: ['咨询服务业', '文化创业服务业', '交通运输服务业', '其他']
				},
				calculable: true,
				series: [{
						z: 0,
						name: '',
						type: 'pie',
						center: ['46%', '50%'],
						radius: ['57%', '58%'],
						labelLine: {
								normal: {
										show: false

								}
						},
						data: [{
								value: 223,
								itemStyle: {
										normal: {
												color: '#c8c8c8' //颜色填充
										}
								},
								tooltip: { show: false }
						}]
				}, {
						name: '服务业占比',
						type: 'pie',
						center: ['46%', '50%'],
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
								name: '咨询服务业'
						}, {
								value: 25,
								name: '文化创业服务业'
						}, {
								value: 50,
								name: '交通运输服务业'
						}, {
								value: 50,
								name: '其他'
						}]
				}]
		};

		myChart4.setOption(option);
}

//减税人员规模
function chartLiquidfill() {
		//一般纳税人减税规模
		var oneData = {
				"status": 200,
				"data": {
						"statisticsDates": ["2017-02-17", "2017-02-18"],
						"onceRate": 79.59
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