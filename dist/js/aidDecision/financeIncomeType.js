"use strict";

var myChart1, myChart2, myChart3, myChart4;

$(function () {
		changeNavTo("辅助决策", "财政收入分类分析");
		selection('#sel1', ['2017年', '2016年', '2015年']);
		selection('#sel2', ['2017年', '2016年', '2015年']);
		selection('#sel3', ['2017年', '2016年', '2015年']);
		//	selection('#sel4', ['2017年', '2016年', '2015年']);

		areaCount(); //分行政区划统计
		deptCount(); //分部门统计
		enterCount(); //分企业统计
		//	xxCount();		//分xx统计

		//页面尺寸发生变化，重绘所有Echart图表
		window.onresize = function () {
				myChart1.resize();
				myChart2.resize();
				myChart3.resize();
				//      myChart4.resize();
		};
});
//分行政区划统计
function areaCount() {
		myChart1 = echarts.init(document.getElementById('chart1'));
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
										//	            	console.log(params)
										return '企业数量：' + '<span style="color:#ff9100; font-weight:bold; font-size:16px;">' + params.value + '</span>' + '个';
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

		myChart1.setOption(option);
}

//分部门统计
function deptCount() {
		myChart2 = echarts.init(document.getElementById('chart2'));
		var option = {
				color: ['#e4590d', '#ffb400', '#5ad01c', '#01abfa', '#0182e6'],
				tooltip: {
						show: true,
						backgroundColor: 'rgba(255,255,255,0.9)',
						formatter: function formatter(params, ticket, callback) {
								var str = '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">' + '行业收入分析' + '</span>';
								//	            console.log(params);
								if (!params) {
										return "暂无数据";
								}
								//   for(var i=0; i<params.length; i++)
								//   {
								//   if(params[i]!==null){
								//   var v=params[i].value?params[i].value:0;
								str += '<span style="color:#666;font-size:12px;">' + params.name + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="font-size:14px;color:' + params.color + '; font-weight:bold;">' + params.value + '</span>' + '<span style="color:#666;"> 个</span>' + '<br/>' + '<span style="color:#666;">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(' + params.percent + '%)</span>' + '<br/>';

								//   }
								//   }
								return str;
						},
						padding: 10,
						borderColor: '#ccc'
				},
				calculable: true,
				series: [{
						z: 0,
						name: '',
						type: 'pie',
						center: ['46%', '60%'],
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
						name: '行业收入分析',
						type: 'pie',
						center: ['46%', '60%'],
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
								name: '住房和城乡建设部'
						}, {
								value: 25,
								name: '交通运输部'
						}, {
								value: 50,
								name: '水利部'
						}, {
								value: 50,
								name: '农业部'
						}, {
								value: 50,
								name: '其他'
						}]
				}]
		};

		myChart2.setOption(option);
}

//分企业统计
function enterCount() {
		myChart3 = echarts.init(document.getElementById('chart3'));
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
										color: '#fe7f19'
								}
						},
						// formatter:'{b}<br>{a}：{c}'
						backgroundColor: 'rgba(255,255,255,0.9)',
						formatter: function formatter(params) {
								return '<span style="color:#008ef2;font-weight:bold; font-size:16px">' + params[0].name + '</span>' + '<br/>' + '<span style="color:#666;">' + params[0].seriesName + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;font-size:16px">' + params[0].value + '</span>' + '<span style="color:#666;"> 个</span>' + '<br/>';
						},
						padding: 10
				},
				legend: {
						x: '40%',
						y: '13',
						textStyle: {
								color: '#666',
								fontSize: 14
						},
						data: ['企业数量']
				},
				grid: {
						left: '1%',
						right: '1%',
						bottom: '3%',
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
						name: '数量 (个)',
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
				series: [{
						name: '企业数量',
						type: 'line',
						lineStyle: {
								normal: {
										color: '#16bffb'
								}
						},
						itemStyle: {
								normal: {
										borderColor: '#16bffb',
										borderWidth: '4'
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
						smooth: true,
						data: [13, 26, 36, 48, 69, 74, 86, 96, 62, 51, 42, 35, 23],
						symbolSize: 10
				}]
		};

		myChart3.setOption(option);
}

//分xx统计
function xxCount() {
		myChart4 = echarts.init(document.getElementById('chart4'));
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
								return '<span style="color:#008ef2;font-weight:bold; font-size:16px">' + params[0].name + '</span>' + '<br/>' + '<span style="color:#666;">' + '企业数量' + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;font-size:16px">' + params[0].value + '</span>' + '<span style="color:#666;"> 个</span>' + '<br/>';
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
						data: ['内资', '外资', '港澳台'],
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
						name: '数量 (个)',
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

		myChart4.setOption(option);
}