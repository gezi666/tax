"use strict";

var myChart1, myChart2, myChart3, myChart4;

$(function () {

				changeNavTo("企业监测", "重点企业管理", "重点企业统计分析");

				selection('#sel1', ['2017', '2016', '2015']);
				selection('#sel2', ['企业数量', '纳税额']);

				initChanye();
				initRegion();
				initIndustry();
				initRegister();

				//页面尺寸发生变化，重绘所有Echart图表
				window.onresize = function () {
								myChart1.resize();
								myChart2.resize();
								myChart3.resize();
								myChart4.resize();
				};
});

//初始化分产业统计图
function initChanye() {
				myChart1 = echarts.init(document.getElementById('chartChanye'));

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
												top: '5%',
												icon: 'circle',
												itemWidth: 10,
												textStyle: {
																fontSize: 14
												},
												data: ['第一产业', '第二产业', '第三产业']
								},
								grid: {
												left: '1%',
												right: '4%',
												bottom: '3%',
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
																show: true,
																lineStyle: {
																				color: '#ededed'
																}
												},
												data: ['2015-03', '2015-05', '2015-07', '2015-09', '2015-11']
								}],
								yAxis: [{
												type: 'value',
												axisTick: {
																alignWithLabel: true,
																show: false
												},
												axisLabel: {
																formatter: function formatter(value) {
																				var d = value;
																				return d * 100 + "%";
																},
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
																show: true,
																lineStyle: {
																				color: '#ededed'
																}
												}
								}],
								color: ['#FF9A06', '#FC6169', '#00BE23'],
								series: [{
												name: '第一产业',
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
												data: [0.2, 0.1, 0.4, 0.2, 0.3]
								}, {
												name: '第二产业',
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
												data: [0.2, 0.1, 0.4, 0.2, 0.3]
								}, {
												name: '第三产业',
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
												data: [0.2, 0.1, 0.4, 0.2, 0.3]
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

//初始化分行业统计图
function initIndustry() {

				myChart3 = echarts.init(document.getElementById('chartIndustry'));

				var data = [[12, 9, 234, '金融业1'], [32, 6, 234, '金融业3'], [72, 9, 234, '金融业2'], [44, 70, 234, '金融业'], [20, 36, 123, '互联网'], [57, 63, 534, '建筑业'], [53, 28, 334, '教育'], [63, 48, 134, '奢侈品'], [74, 23, 64, '大数据'], [74, 64, 134, '大数据1'], [74, 74, 84, '大数据2'], [74, 34, 134, '大数据2'], [44, 34, 434, '大数据3'], [24, 44, 334, '大数据4'], [24, 64, 94, '大数据5'], [34, 74, 34, '大数据5'], [44, 24, 64, '大数据5'], [4, 24, 84, '大数据6'], [5, 64, 344, '大数据6']];

				var option = {
								grid: {
												left: '1%',
												right: '10%',
												bottom: '3%',
												containLabel: true
								},
								legend: {
												// right: 10,
												top: '5%',
												data: ['纳税额/数量']
								},
								xAxis: {
												name: '纳税额\n(万元)',
												min: 0,
												interval: 20,
												axisTick: {
																show: false
												},
												axisLine: {
																lineStyle: {
																				color: '#666'
																}
												},
												splitLine: {
																lineStyle: {
																				type: 'solid'
																}
												}
								},
								yAxis: {
												name: '数量(个)',
												min: 0,
												interval: 20,
												axisTick: {
																show: false
												},
												axisLine: {
																lineStyle: {
																				color: '#666'
																}
												},
												splitLine: {
																lineStyle: {
																				color: '#C3C3C3',
																				type: 'solid'
																}
												},
												scale: true
								},
								series: [{
												name: '纳税额/数量',
												data: data,
												type: 'scatter',
												symbolSize: function symbolSize(data) {
																return data[2] / 5;
												},
												label: {
																emphasis: {
																				show: true,
																				formatter: function formatter(param) {
																								return param.data[3];
																				},
																				position: 'top'
																}
												},
												itemStyle: {
																normal: {
																				shadowBlur: 10,
																				shadowColor: 'rgba(25, 100, 150, 0.5)',
																				shadowOffsetY: 5,
																				color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
																								offset: 0,
																								color: 'rgb(166, 214, 255)'
																				}, {
																								offset: 1,
																								color: 'rgb(25, 183, 207)'
																				}])
																}
												},
												markLine: {
																label: {
																				normal: {
																								show: false
																				}
																},
																itemStyle: {
																				normal: {
																								lineStyle: {
																												width: 2,
																												type: 'dashed',
																												color: '#E48B77'
																								}
																				},
																				emphasis: {
																								lineStyle: {
																												width: 2,
																												type: 'dashed',
																												color: '#E48B77'
																								}
																				}
																},
																symbol: ['none', 'none'],
																data: [[{
																				value: 40,
																				xAxis: 0,
																				yAxis: 40
																}, // 当xAxis或yAxis为数值轴时，不管传入是什么，都被理解为数值后做空间位置换算
																{
																				xAxis: 80,
																				yAxis: 40
																}], [{
																				value: 40,
																				xAxis: 40,
																				yAxis: 0
																}, // 当xAxis或yAxis为数值轴时，不管传入是什么，都被理解为数值后做空间位置换算
																{
																				xAxis: 40,
																				yAxis: 80
																}]]
												}
								}]
				};
				myChart3.setOption(option);
}

//初始化分注册类型统计图
function initRegister() {

				myChart4 = echarts.init(document.getElementById('chartRegister'));

				var option = {
								tooltip: {
												trigger: 'item',
												backgroundColor: 'rgba(255,255,255,0.9)',
												borderColor: "#ccc",
												// formatter: "{a} <br/>{b}： {c} <br/>税收占比：{d}%",
												// textStyle:{
												//     color:'#666',
												// },
												formatter: function formatter(params, ticket, callback) {
																var str = '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">' + '财政收入' + '</span>';
																console.log(params);
																//   if (!params) {
																//       return "暂无数据"

																//   } 

																//   for(var i=0; i<params.length; i++)
																//   {
																//   if(params[i]!==null){
																//   var v=params[i].value?params[i].value:0;
																str += '<span style="color:#666;font-size:12px;">' + params.name + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="font-size:14px;color:' + params.color + '; font-weight:bold;">' + params.value + '</span>' + '<br/>' + '<span style="color:#666;font-size:12px;">' + '税收占比' + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="color:' + params.color + ';font-size:14px; font-weight:bold;">' + params.percent + '%</span>' + '<br/>';
																//   }
																//   }
																return str;
												}
								},
								legend: {
												//orient: 'vertical',
												x: 'center',
												data: ['增值税', '营销广告', '企业所得税', '个人所得税', '资源税', '城市维护建设税', '房产税', '印花税', '城镇土地使用税', '土地增值税', '车船使用税', '车辆购置税', '耕地占用税', '契税', '烟叶税', '环保税']
								},
								color: ['#5ad01c', '#fe9327', '#01abfa', '#009eff', '#22c1fc', '#ffba00', '#ff9400', '#ff5600', '#0182e6'],
								series: [{
												name: '财政收入',
												type: 'pie',
												selectedMode: 'single',
												radius: [0, '30%'],

												label: {
																normal: {
																				position: 'inner'
																}
												},
												labelLine: {
																normal: {
																				show: false
																}
												},
												data: [{ value: 335, name: '内资' }, { value: 679, name: '外资' }, { value: 1548, name: '港澳台资' }]
								}, {
												name: '财政收入',
												type: 'pie',
												label: {
																normal: {
																				textStyle: {
																								fontSize: 14
																				},
																				formatter: '{b} \n {d}%'
																}
												},
												labelLine: {
																normal: {
																				textStyle: {
																								fontSize: 14
																				},
																				length: 20,
																				length2: 30,
																				lineStyle: {
																								width: 1
																				}
																}
												},
												radius: ['40%', '55%'],
												data: [{ value: 335, name: '国有企业' }, { value: 310, name: '集体企业' }, { value: 234, name: '股份合作企业' }, { value: 135, name: '联营企业' }, { value: 135, name: '有限责任公司' }, { value: 148, name: '其他' }]
								}]
				};

				myChart4.setOption(option);
}