"use strict";

var myChart1, myChart2, myChart3, myChart4;

$(function () {
		changeNavTo("企业监测", "企业变动信息");

		initTrend();
		initRegion();
		initRegtype();
		initIndustry();

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

//初始化XX税趋势图
function initTrend() {
		myChart1 = echarts.init(document.getElementById('chartTrend'));

		var option = {
				baseOption: {
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

								data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月']
						},
						tooltip: {
								trigger: 'axis',
								backgroundColor: 'rgba(255,255,255,0.9)',
								axisPointer: { // 坐标轴指示器，坐标轴触发有效
										type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
								},
								formatter: function formatter(params, ticket, callback) {
										var str = '';
										// console.log(params);
										if (!params) {
												return "暂无数据";
										}

										//   for(var i=0; i<params.length; i++)
										//   {
										//       if(params[i]!==null){
										//   var v=params[i].value?params[i].value:0;
										str += '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">' + params[0].name + '</span>' + '<span style="color:#666;font-size:12px;">' + params[0].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="font-size:14px;color:' + params[0].color + '; font-weight:bold;">' + params[0].value + '</span>' + '<br/>' + '<span style="color:#666;font-size:12px;">' + params[1].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="color:' + params[0].color + ';font-size:14px; font-weight:bold;">' + params[1].value + '</span>' + '<br/>' + '<span style="color:#666;font-size:12px;">' + params[2].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="color:' + params[2].color + ';font-size:14px; font-weight:bold;">' + params[2].value + '</span>' + '<br/>' + '<span style="color:#666;font-size:12px;">' + params[3].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="color:' + params[2].color + ';font-size:14px; font-weight:bold;">' + params[3].value + '</span>' + '<br/>';
										//       }
										//   }
										return str;
								}
						},
						legend: {
								show: true,
								top: '5%',
								right: '5%',
								icon: 'circle',
								textStyle: {
										color: '#999',
										fontSize: 14
								},
								data: ['新增-当月量', '新增-累计量', '注销-当月量', '注销-累计量']
						},
						grid: {
								top: '20%',
								left: '5%',
								right: '5%',
								bottom: '20%',
								containLabel: true
						},
						xAxis: [{
								type: 'category',
								boundaryGap: false,
								data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
								axisTick: {
										alignWithLabel: true,
										show: false
								},
								axisLabel: {
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
						}],
						color: ['#FF9A06', '#FC6169', '#00BE23', '#61AFFE'],
						series: [{
								name: '新增-当月量',
								type: 'line',
								stack: "总量 ",
								smooth: true,
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
								}
						}, {
								name: '新增-累计量',
								type: 'line',
								stack: "总量 ",
								smooth: true,
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
								}
						}, {
								name: '注销-当月量',
								type: 'line',
								stack: "总量 ",
								smooth: true,
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
								}
						}, {
								name: '注销-累计量',
								type: 'line',
								stack: "总量 ",
								smooth: true,
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
								}
						}]
				},
				options: [{
						series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532] }, { data: [240, 230, 170, 350, 140, 250, 320, 464, 226, 300, 232, 332] }, { data: [100, 430, 470, 250, 440, 250, 320, 364, 226, 400, 232, 532] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332] }]
				}, {
						series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132] }]
				}, {
						series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132] }]
				}, {
						series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332] }]
				}, {
						series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332] }]
				}, {
						series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132] }]
				}, {
						series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132] }]
				}, {
						series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 1322] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332] }]
				}, {
						series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332] }, { data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332] }]
				}, {
						series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332] }]
				}, {
						series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332] }]
				}, {
						series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132] }]
				}]
		};

		myChart1.setOption(option);
}

//初始化分地区统计图
function initRegion() {
		myChart2 = echarts.init(document.getElementById('chartRegion'));

		var seriesData = [[{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }]];
		var option = {
				baseOption: {
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
								trigger: 'item',
								backgroundColor: '#303030',
								show: true,
								formatter: '{b} <br/> ' + "企业数量：" + '{c}' + "个"
						},
						visualMap: {
								min: 0,
								max: 1000,
								right: 20,
								bottom: 50,
								text: ['高', '低'], // 文本，默认为数值文本
								calculable: true,
								// color: ['#57d2ff', '#2ca8ff','#108fe5','#108fe5','#18a5ff','#033287' ],
								color: ["#0089F1", '#8FD4FD'],
								textStyle: {
										color: '#999',
										fontSize: 12
								}
						},
						series: [{
								name: '',
								type: 'map',
								mapType: '山东',
								roam: false,
								top: 45,
								bottom: 90,
								itemStyle: {
										normal: { label: { show: true, textStyle: { color: '#000' } } },
										emphasis: { areaColor: '#FFDE00', borderColor: '#40bbca', borderWidth: '5' }
								}
								// showLegendSymbol: true,
								// data:seriesData 
						}]
				},
				options: [{ series: { data: seriesData[0] } }, { series: { data: seriesData[1] } }, { series: { data: seriesData[2] } }, { series: { data: seriesData[3] } }, { series: { data: seriesData[4] } }, { series: { data: seriesData[5] } }, { series: { data: seriesData[6] } }, { series: { data: seriesData[7] } }, { series: { data: seriesData[8] } }, { series: { data: seriesData[9] } }, { series: { data: seriesData[10] } }, { series: { data: seriesData[11] } }]
		};

		myChart2.setOption(option);
}

//初始化分注册类型图
function initRegtype() {
		myChart3 = echarts.init(document.getElementById('chartRegtype'));

		var option = {
				baseOption: {
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
										// console.log(params);
										if (!params) {
												return "暂无数据";
										}

										//   for(var i=0; i<params.length; i++)
										//   {
										//       if(params[i]!==null){
										//   var v=params[i].value?params[i].value:0;
										str += '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">' + params[0].name + '</span>' + '<span style="color:#666;font-size:12px;">' + params[0].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="font-size:14px;color:' + params[0].color + '; font-weight:bold;">' + params[0].value + '</span>' + '<br/>' + '<span style="color:#666;font-size:12px;">' + params[1].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="color:' + params[0].color + ';font-size:14px; font-weight:bold;">' + params[1].value + '</span>' + '<br/>' + '<span style="color:#666;font-size:12px;">' + params[2].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="color:' + params[2].color + ';font-size:14px; font-weight:bold;">' + params[2].value + '</span>' + '<br/>' + '<span style="color:#666;font-size:12px;">' + params[3].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="color:' + params[2].color + ';font-size:14px; font-weight:bold;">' + params[3].value + '</span>' + '<br/>';
										//       }
										//   }
										return str;
								}
						},
						legend: {
								show: true,
								top: '5%',
								right: '5%',
								textStyle: {
										color: '#999',
										fontSize: 14
								},
								data: ['新增-当月量', '新增-累计量', '注销-当月量', '注销-累计量']
						},
						grid: {
								left: '5%',
								right: '5%',
								bottom: '25%',
								containLabel: true
						},
						xAxis: [{
								type: 'value',
								axisTick: {
										alignWithLabel: true,
										show: false
								},
								axisLabel: {
										interval: 0,
										margin: 15,
										textStyle: {
												color: '#666'
										}
								},
								axisLine: {
										show: false,
										lineStyle: {
												color: '#ccc'
										}
								},
								splitLine: {
										show: false,
										lineStyle: {
												color: '#ededed'
										}
								}
						}],
						yAxis: [{
								type: 'category',
								data: ['内资', '外资', '港澳台资'],
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
										show: false
								},
								splitLine: {
										show: true,
										lineStyle: {
												color: '#ededed'
										}
								}
						}],
						color: ['#10adfa', '#cef0fd', '#ff9000', '#fed39a'],
						series: [{ name: '新增-当月量', type: 'bar', stack: "新增 " }, { name: '新增-累计量', type: 'bar', stack: "新增 ",
								itemStyle: {
										normal: {
												borderColor: '#4EC1FA',
												borderWidth: 1,
												borderType: 'dashed'
										}
								}
						}, { name: '注销-当月量', type: 'bar', stack: "注销" }, { name: '注销-累计量', type: 'bar', stack: "注销",
								itemStyle: {
										normal: {
												borderColor: '#FFC06D',
												borderWidth: 1,
												borderType: 'dashed'
										}
								}
						}]
				},
				options: [{
						series: [{ data: [300, 230, 270] }, { data: [140, 130, 370] }, { data: [300, 230, 270] }, { data: [140, 130, 370] }]
				}, {
						series: [{ data: [500, 130, 370] }, { data: [340, 230, 170] }, { data: [500, 130, 370] }, { data: [340, 230, 170] }]
				}, {
						series: [{ data: [100, 330, 470] }, { data: [240, 300, 570] }, { data: [500, 130, 370] }, { data: [340, 230, 170] }]
				}, {
						series: [{ data: [300, 230, 270] }, { data: [140, 130, 370] }, { data: [100, 330, 470] }, { data: [240, 300, 570] }]
				}, {
						series: [{ data: [500, 130, 370] }, { data: [340, 230, 170] }, { data: [100, 330, 470] }, { data: [240, 300, 570] }]
				}, {
						series: [{ data: [100, 330, 470] }, { data: [240, 300, 570] }, { data: [500, 130, 370] }, { data: [340, 230, 170] }]
				}, {
						series: [{ data: [300, 230, 270] }, { data: [140, 130, 370] }, { data: [500, 130, 370] }, { data: [340, 230, 170] }]
				}, {
						series: [{ data: [500, 130, 370] }, { data: [340, 230, 170] }, { data: [100, 330, 470] }, { data: [240, 300, 570] }]
				}, {
						series: [{ data: [100, 330, 470] }, { data: [240, 300, 570] }, { data: [300, 230, 270] }, { data: [140, 130, 370] }]
				}, {
						series: [{ data: [300, 230, 270] }, { data: [140, 130, 370] }, { data: [100, 330, 470] }, { data: [240, 300, 570] }]
				}, {
						series: [{ data: [500, 130, 370] }, { data: [340, 230, 170] }, { data: [100, 330, 470] }, { data: [240, 300, 570] }]
				}, {
						series: [{ data: [100, 330, 470] }, { data: [240, 300, 570] }, { data: [500, 130, 370] }, { data: [340, 230, 170] }]
				}]
		};

		myChart3.setOption(option);
}

//初始化分行业统计图
function initIndustry() {
		myChart4 = echarts.init(document.getElementById('chartIndustry'));

		var option = {
				baseOption: {
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

								data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月']
						},
						tooltip: {
								trigger: 'axis',
								backgroundColor: 'rgba(255,255,255,0.9)',
								axisPointer: { // 坐标轴指示器，坐标轴触发有效
										type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
								},
								formatter: function formatter(params, ticket, callback) {
										var str = '';
										// console.log(params);
										if (!params) {
												return "暂无数据";
										}

										//   for(var i=0; i<params.length; i++)
										//   {
										//       if(params[i]!==null){
										//   var v=params[i].value?params[i].value:0;
										str += '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">' + params[0].name + '</span>' + '<span style="color:#666;font-size:12px;">' + params[0].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="font-size:14px;color:' + params[0].color + '; font-weight:bold;">' + params[0].value + '</span>' + '<br/>' + '<span style="color:#666;font-size:12px;">' + params[1].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="color:' + params[0].color + ';font-size:14px; font-weight:bold;">' + params[1].value + '</span>' + '<br/>' + '<span style="color:#666;font-size:12px;">' + params[2].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="color:' + params[2].color + ';font-size:14px; font-weight:bold;">' + params[2].value + '</span>' + '<br/>' + '<span style="color:#666;font-size:12px;">' + params[3].seriesName + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="color:' + params[2].color + ';font-size:14px; font-weight:bold;">' + params[3].value + '</span>' + '<br/>';
										//       }
										//   }
										return str;
								}
						},
						legend: {
								show: true,
								top: '5%',
								right: '5%',
								textStyle: {
										color: '#999',
										fontSize: 14
								},
								data: ['新增-当月量', '新增-累计量', '注销-当月量', '注销-累计量']
						},
						grid: {
								top: '20%',
								left: '5%',
								right: '5%',
								bottom: '20%',
								containLabel: true
						},
						xAxis: [{
								// name:'行业',
								// nameTextStyle:{
								//     color:'#666' 
								// },
								type: 'category',
								data: ['农、林、牧、渔业', '采掘业', '制造业', '电力、燃气及水的\n生产和供应', '建筑业', '交通运输、仓储', '信息技术业', '批发和零售贸易', '金融、保险业', '房地产业', '社会服务业', '传播与文化产业', '综合类'],
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
								name: '税额(万元)',
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
						color: ['#10adfa', '#cef0fd', '#ff9000', '#fed39a'],
						series: [{ name: '新增-当月量', type: 'bar', barGap: 0, stack: "新增 " }, { name: '新增-累计量', type: 'bar', stack: "新增 ",
								itemStyle: {
										normal: {
												borderColor: '#4EC1FA',
												borderWidth: 1,
												borderType: 'dashed'
										}
								}
						}, { name: '注销-当月量', type: 'bar', stack: "注销" }, { name: '注销-累计量', type: 'bar', stack: "注销",
								itemStyle: {
										normal: {
												borderColor: '#FFC06D',
												borderWidth: 1,
												borderType: 'dashed'
										}
								}
						}]
				},
				options: [{
						series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532, 232] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332, 132] }, { data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532, 232] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332, 132] }]
				}, {
						series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232, 432] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132, 332] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232, 432] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132, 332] }]
				}, {
						series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132, 432] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332, 350] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232, 432] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132, 332] }]
				}, {
						series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532, 232] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332, 132] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132, 432] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332, 350] }]
				}, {
						series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232, 432] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132, 332] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132, 432] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332, 350] }]
				}, {
						series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132, 432] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332, 132] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232, 432] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132, 332] }]
				}, {
						series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532, 232] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332, 132] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232, 432] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132, 332] }]
				}, {
						series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232, 432] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132, 332] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132, 432] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332, 570] }]
				}, {
						series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132, 432] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332, 570] }, { data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532, 232] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332, 132] }]
				}, {
						series: [{ data: [300, 230, 270, 450, 240, 150, 520, 264, 326, 200, 432, 532, 232] }, { data: [140, 130, 370, 250, 140, 250, 320, 464, 226, 300, 232, 332, 132] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132, 432] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332, 570] }]
				}, {
						series: [{ data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232, 432] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132, 332] }, { data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132, 432] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332, 570] }]
				}, {
						series: [{ data: [100, 330, 470, 250, 500, 250, 320, 464, 526, 400, 232, 132, 432] }, { data: [240, 300, 570, 350, 650, 220, 164, 346, 430, 432, 132, 332, 300] }, { data: [500, 130, 370, 250, 640, 250, 320, 564, 326, 700, 332, 232, 432] }, { data: [340, 230, 170, 450, 540, 350, 220, 564, 426, 200, 132, 132, 332] }]
				}]
		};

		myChart4.setOption(option);
}