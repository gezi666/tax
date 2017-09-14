"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var myChart1, myChart2, myChart3, myChart4, myChart5;

$(function () {
		changeNavTo("辅助决策", "收入概况");

		chart1(); //政府收入分析-柱状图
		chart2(); //税收占比
		chart3(); //分注册状态
		chart4(); //分地区统计
		chart5(); //企业分行业统计

		//页面尺寸发生变化，重绘所有Echart图表
		window.onresize = function () {
				myChart1.resize();
				myChart2.resize();
				myChart3.resize();
				myChart4.resize();
				myChart5.resize();
		};
});

//政府收入分析-柱状图
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
								borderColor: '#ccc',
								borderWidth: 1,
								axisPointer: { // 坐标轴指示器，坐标轴触发有效
										type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
								},
								formatter: function formatter(params, ticket, callback) {
										var str = '';
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
								top: 20,
								right: 200,
								textStyle: {
										fontSize: 14,
										color: '#999'
								},
								data: ['新增-当月量', '新增-累计量', '注销-当月量', '注销-累计量']
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

		myChart1.setOption(option);
}
//税收占比
function chart2() {
		myChart2 = echarts.init(document.getElementById('chart2'));
		var option = {
				color: ['#5ad01c', '#fe9327', '#01abfa', '#009eff', '#22c1fc', '#ffba00', '#ff9400', '#ff5600', '#0182e6'],
				tooltip: _defineProperty({
						show: true,
						backgroundColor: 'rgba(255,255,255,0.9)',
						borderColor: '#ccc',
						borderWidth: 1,
						formatter: function formatter(params, ticket, callback) {
								var str = '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">' + '财政收入' + '</span>';
								if (!params) {
										return "暂无数据";
								}
								str += '<span style="color:#666;font-size:12px;">' + params.name + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="font-size:14px;color:' + params.color + '; font-weight:bold;">' + params.value + '</span>' + '<br/>' + '<span style="color:#666;font-size:12px;">' + '税收占比' + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="color:' + params.color + ';font-size:14px; font-weight:bold;">' + params.percent + '%</span>' + '<br/>';

								return str;
						},
						padding: 10
				}, "borderColor", '#ccc'),
				legend: {
						show: false
				},
				calculable: true,
				series: [{
						name: '财政收入',
						type: 'pie',
						selectedMode: 'single',
						radius: [0, '30%'],
						center: ['50%', '50%'],
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
						center: ['50%', '50%'],
						radius: ['38%', '60%'],
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
						data: [{ value: 335, name: '国有企业' }, { value: 310, name: '集体企业' }, { value: 234, name: '股份合作企业' }, { value: 135, name: '联营企业' }, { value: 135, name: '有限责任公司' }, { value: 148, name: '其他' }]
				}]
		};

		myChart2.setOption(option);
}
//分注册状态
function chart3() {
		myChart3 = echarts.init(document.getElementById('chart3'));
		var option = {
				color: ['#e4590d', '#ffb400', '#5ad01c', '#01abfa', '#0182e6'],
				tooltip: _defineProperty({
						show: true,
						backgroundColor: 'rgba(255,255,255,0.9)',
						borderColor: '#ccc',
						borderWidth: 1,
						formatter: function formatter(params, ticket, callback) {
								var str = '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">' + '注册状态' + '</span>';
								if (!params) {
										return "暂无数据";
								}
								str += '<span style="color:#666;font-size:12px;">' + params.name + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="font-size:14px;color:' + params.color + '; font-weight:bold;">' + params.value + '</span>' + '<span style="color:#666;"> 个</span>' + '<br/>' + '<span style="font-size:14px;color:#666;">占比&nbsp:&nbsp&nbsp(' + params.percent + '%)</span>' + '<br/>';

								return str;
						},
						padding: 10
				}, "borderColor", '#ccc'),
				legend: {
						show: false
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
						name: '注册状态',
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
								name: '地税'
						}, {
								value: 25,
								name: '工商'
						}, {
								value: 50,
								name: '国税'
						}]
				}]
		};

		myChart3.setOption(option);
} //企业分地区统计
//分地区统计
function chart4() {
		myChart4 = echarts.init(document.getElementById('chart4'));
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

		myChart4.setOption(option);
}
//企业分行业统计
function chart5() {
		myChart5 = echarts.init(document.getElementById('chart5'));
		var option = {
				color: ['#e4590d', '#ffb400', '#5ad01c', '#01abfa', '#0182e6'],
				tooltip: _defineProperty({
						show: true,
						backgroundColor: 'rgba(255,255,255,0.9)',
						borderColor: '#ccc',
						borderWidth: 1,
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
								str += '<span style="color:#666;font-size:12px;">' + params.name + '&nbsp:&nbsp&nbsp' + '</span>' + '<span style="font-size:14px;color:' + params.color + '; font-weight:bold;">' + params.value + '</span>' + '<span style="color:#666;"> 个</span>' + '<br/>' + '<span style="color:#666;">占比&nbsp:&nbsp&nbsp(' + params.percent + '%)</span>' + '<br/>';

								//   }
								//   }
								return str;
						},
						padding: 10
				}, "borderColor", '#ccc'),
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
						center: ['50%', '50%'],
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
						center: ['50%', '50%'],
						radius: ['28%', '50%'],
						avoidLabelOverlap: false,
						label: {
								normal: {
										show: false,
										position: 'center'
								},
								emphasis: {
										show: true,
										textStyle: {
												fontSize: 26,
												fontWeight: "bold"
										},
										formatter: "{d}%"
								}
						},
						labelLine: {
								normal: {
										show: false
								}
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

		myChart5.setOption(option);
}