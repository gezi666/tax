"use strict";

var myChart1, myChart2, myChart3;

$(function () {
	changeNavTo("企业监测", "企业统计");

	selection('#sel1', ['2017年', '2016年', '2015年']);
	selection('#sel2', ['企业数量', '企业税额']);
	selection('#sel3', ['2017年', '2016年', '2015年']);

	initRegion();
	initRegister();
	initIndustry();

	//页面尺寸发生变化，重绘所有Echart图表
	window.onresize = function () {
		myChart1.resize();
		myChart2.resize();
		myChart3.resize();
	};
});

//初始化企业分地区统计图
function initRegion() {
	myChart1 = echarts.init(document.getElementById('chartRegion'));

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

	myChart1.setOption(option);
	myChart1.on('click', function (params) {
		// 点击地图跳转页面
		if (params.componentType == "series") {
			location.href = "zonalStatistics.html";
		}
	});
}

//初始化企业分注册类型图
function initRegister() {
	myChart2 = echarts.init(document.getElementById('chartRegister'));

	var option = {
		// tooltip: {
		//     trigger: "item",
		//     formatter: "({d}%)<br/>{a}"
		// },
		// legend: {
		//     orient: "vertical",
		//     x: "left",
		//     data: ["港澳台", "外资", "内资"]
		// },
		calculable: true,
		color: ["#E4590D", "#FFBA00", "#1AA0FB"],
		series: [{
			name: "",
			type: "pie",
			radius: ["30%", "50%"],
			itemStyle: {
				normal: {
					label: {
						show: true,
						formatter: "{b}\n{d}%",
						textStyle: {
							fontWeight: 'bold',
							fontSize: 20
						}
					},
					labelLine: {
						show: true
					}
				},
				emphasis: {
					label: {
						show: true
					}
				}
			},
			data: [{
				value: 135,
				name: "港澳台"
			}, {
				value: 210,
				name: "外资"
			}, {
				value: 334,
				name: "内资"
			}]
		}]
	};

	myChart2.setOption(option);
	myChart2.on('click', function (params) {
		// 点击地图跳转页面
		if (params.componentType == "series") {
			layer.open({
				type: 2,
				title: '企业分注册类型统计',
				area: ['1053px', '650px'],
				fixed: false, //不固定
				maxmin: true,
				scrolling: false,
				content: 'registerTypeStatistics.html'
			});
		}
	});
}

//初始化企业分行业图
function initIndustry() {
	myChart3 = echarts.init(document.getElementById('chartIndustry'));

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
				axisPointer: {
					type: 'cross',
					crossStyle: {
						color: '#999'
					}
				}
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
				data: ['农、林、牧、渔业', '采掘业', '制造业', '电力、燃气、水的生产与供应', '建筑业', '交通运输、仓储', '信息技术业', '批发和零售贸易', '金融、保险业', '房地产业', '社会服务业', '传播与文化产业', '综合类'],
				axisPointer: {
					type: 'shadow'
				},
				axisLabel: {
					interval: 0,
					rotate: 35
				}
			}],
			yAxis: [{
				type: 'value',
				name: '税额(万元)',
				min: 0
			}, {
				type: 'value',
				name: '数量(个)',
				min: 0,
				splitLine: {
					show: false
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

	myChart3.setOption(option);
	myChart3.on('click', function (params) {
		// 点击地图跳转页面
		if (params.componentType == "series") {
			location.href = "industryStatistics.html";
		}
	});
}