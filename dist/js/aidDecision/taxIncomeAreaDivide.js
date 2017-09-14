"use strict";

var myChart1, myChart2, myChart3, myChart4, myChart5;

$(function () {
	changeNavTo("辅助决策", "税收收入分析", "分行政区划统计");

	regType(); //分行政区划
	deptType(); //分企业

	//页面尺寸发生变化，重绘所有Echart图表
	window.onresize = function () {
		myChart1.resize();
		myChart2.resize();
		myChart3.resize();
		myChart4.resize();
		myChart5.resize();
	};
});

//分行政区划
function regType() {
	function randomData() {
		return Math.round(Math.random() * 90 + 10);
	}
	function randomData2() {
		return Math.round(Math.random() * 1000);
	}
	//柱图数据
	var id = 0;
	var yNameArr = [['潍坊市', '青岛市', '菏泽市', '济宁市', '淄博市'], ['济南市', '泰安市', '枣庄市', '滨州市', '济南市'], ['潍坊市', '青岛市', '菏泽市', '济宁市', '淄博市'], ['泰安市', '济南市', '枣庄市', '滨州市', '济南市'], ['菏泽市', '济宁市', '潍坊市', '青岛市', '淄博市'], ['青岛市', '枣庄市', '滨州市', '青岛市', '济南市']];
	var dataBar = [];
	function changedata() {
		for (var i = 0; i < 5; i++) {
			dataBar[i] = randomData();
		}
	}

	//初始化
	var data0 = [],
	    data1 = [];
	function change() {
		for (var i = 0; i < 3; i++) {
			data0[i] = randomData();
		}
		for (var i = 0; i < 6; i++) {
			data1[i] = randomData();
		}
		chart1();
		chart2(id);
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

	chart1();
	changedata();
	chart2(id);

	function chart1() {
		myChart1 = echarts.init(document.getElementById('chart1'));
		var seriesData = [[{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }], [{ name: '济南市', value: randomData() }, { name: '青岛市', value: randomData() }, { name: '淄博市', value: randomData() }, { name: '枣庄市', value: randomData() }, { name: '东营市', value: randomData() }, { name: '烟台市', value: randomData() }, { name: '潍坊市', value: randomData() }, { name: '济宁市', value: randomData() }, { name: '泰安市', value: randomData() }, { name: '威海市', value: randomData() }, { name: '日照市', value: randomData() }, { name: '滨州市', value: randomData() }, { name: '德州市', value: randomData() }, { name: '聊城市', value: randomData() }, { name: '临沂市', value: randomData() }, { name: '菏泽市', value: randomData() }, { name: '莱芜市', value: randomData() }]];
		var option = {
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
				},
				data: [{ name: '济南市', value: randomData2() }, { name: '青岛市', value: randomData2() }, { name: '淄博市', value: randomData2() }, { name: '枣庄市', value: randomData2() }, { name: '东营市', value: randomData2() }, { name: '烟台市', value: randomData2() }, { name: '潍坊市', value: randomData2() }, { name: '济宁市', value: randomData2() }, { name: '泰安市', value: randomData2() }, { name: '威海市', value: randomData2() }, { name: '日照市', value: randomData2() }, { name: '滨州市', value: randomData2() }, { name: '德州市', value: randomData2() }, { name: '聊城市', value: randomData2() }, { name: '临沂市', value: randomData2() }, { name: '菏泽市', value: randomData2() }, { name: '莱芜市', value: randomData2() }]
			}]

		};

		myChart1.setOption(option);
		myChart1.on('click', function (params) {
			//右侧柱图变化
			if (params.componentType == "series") {
				if (params.name == "烟台市") {
					id = 1;
					changedata();
					chart2(id);
				} else if (params.name == "潍坊市") {
					id = 2;
					changedata();
					chart2(id);
				} else if (params.name == "青岛市") {
					id = 3;
					changedata();
					chart2(id);
				} else if (params.name == "日照市") {
					id = 4;
					changedata();
					chart2(id);
				} else if (params.name == "临沂市") {
					id = 5;
					changedata();
					chart2(id);
				}
				// 点击地图跳转页面	
				layer.open({
					type: 2,
					title: '税收收入分行政区划',
					area: ['1053px', '650px'],
					fixed: false, //不固定
					maxmin: true,
					scrolling: false,
					content: 'taxIncomeAreaDivide_child.html'
				});
			}
		});
	}

	function chart2(id) {
		myChart2 = echarts.init(document.getElementById('chart2'));
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
			//			legend: {
			//				data: ,
			//			},
			grid: {
				left: '1%',
				right: '2%',
				bottom: '10%',
				top: '25%',
				containLabel: true
			},
			yAxis: [{
				type: 'category',
				name: '行政区名称',
				nameTextStyle: {
					color: '#666',
					fontSize: 14
				},
				//				data: ['山海关区', '海港区', '北戴河', '抚宁区', '青龙满族自治县'],
				data: yNameArr[id],
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
					},
					show: true
				}
			}],
			xAxis: [{
				type: 'value',
				//		            name:'数量 (万元)',
				nameTextStyle: {
					color: '#666',
					fontSize: 14
				},
				nameGap: 20,
				max: 100,
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
					},
					show: false
				}
			}],
			series: [{
				name: '纳税金额',
				type: 'bar',
				barWidth: '60%',
				//				data: data2,
				data: dataBar
			}]
		};
		myChart2.setOption(option);
	}
}

//分企业
function deptType() {
	function randomData() {
		return Math.round(Math.random() * 90 + 10);
	}

	//柱图数据
	var id = 0;
	var nameArr = [['华新圣铭色织有限责任公司', '兴达丝绸有限责任公司', '联达机客车配件有限公司', '宏旺机械设备制造有限公司', '东泰焊管有限公司'], ['鑫鑫机械制造有限公司', '宏旺机械设备制造有限公司', '中陶卫浴制造有限公司', '丰隆机械制造有限公司', '金义铸造有限公司'], ['鸿顺建材有限公司', '砼业建筑材料有限公司', '丰隆机械制造有限公司', '银联建材有限公司', '双龙建材有限公司'], ['玖发煤炭销售有限公司', '宏图煤炭有限公司', '东方石灰厂', '宏林煤炭有限公司', '兴达采石厂']];
	var datalist = [[30, 62, 74, 86, 99], [10, 32, 54, 86, 98], [20, 52, 65, 86, 95], [10, 32, 44, 56, 88]];
	//折线图数据
	var linedata = [];
	var name = "所有行业";
	function changedata() {
		for (var i = 0; i < 13; i++) {
			linedata[i] = randomData();
		}
	}

	function change() {
		chart3();
		chart4(id);
		changedata();
		chart5(name);
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
	createSliderUI("date-slider2", defaultBegin, defaultEnd, min, max, s, ss);

	chart3();
	chart4(id);
	changedata();
	chart5(name);

	//矩阵图
	function chart3() {
		myChart3 = echarts.init(document.getElementById('chart3'));
		var option = {
			tooltip: {
				trigger: 'item',
				borderColor: '#ccc',
				borderWidth: 1,
				backgroundColor: 'rgba(255,255,255,0.9)',
				formatter: function formatter(params) {
					//			            console.log(params);
					return '<span style="color:#008ef2;font-weight:bold; font-size:16px">' + params.name + '</span>' + '<br/>' + '<span style="color:#666;">' + '税收收入' + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;">' + params.value + '</span>' + '<br/>';
				},
				padding: 10
			},
			color: ['#6db8ff', '#aae250', '#fa9841', '#f5754e', '#7390f8', '#6ac64e', '#ffa14d', '#fa641a'],
			series: [{
				name: '矩形图',
				type: 'treemap',
				nodeClick: false,
				zoomToNodeRatio: 0,
				roam: false,
				squareRatio: 0.2 * (1 + Math.sqrt(25)),
				leafDepth: null,
				breadcrumb: {
					itemStyle: {
						normal: {
							color: '#FF7F00'
						}
					},
					show: false
				},
				//		            levels:[{
				//		            	color:color
				//		            }],
				label: {
					normal: {
						textStyle: {
							fontSize: 13
						}
					}
				},
				itemStyle: {
					normal: {
						gapWidth: 0
					},
					emphasis: {}
				},
				data: [{
					name: '冶金行业',
					value: randomData()
				}, {
					name: '有色行业',
					value: randomData()
				}, {
					name: '建材行业',
					value: randomData()
				}, {
					name: '机械行业',
					value: randomData()
				}, {
					name: '轻工行业',
					value: randomData()
				}, {
					name: '纺织行业',
					value: randomData()
				}, {
					name: '烟草行业',
					value: randomData()
				}]
			}] };

		myChart3.setOption(option);
		myChart3.on('click', function (e) {
			var name = e.name;
			if (name == "冶金行业") {
				id = 1;
				chart4(id);
				changedata();
				chart5(name);
			} else if (name == "有色行业") {
				id = 2;
				chart4(id);
				changedata();
				chart5(name);
			} else if (name == "建材行业") {
				id = 3;
				chart4(id);
				changedata();
				chart5(name);
			}
		});
	}

	//柱图
	function chart4(id) {
		myChart4 = echarts.init(document.getElementById('chart4'));
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
			//			legend: {
			//				data:nameArr[id],
			//			},
			grid: {
				left: '1%',
				right: '2%',
				bottom: '10%',
				top: '25%',
				containLabel: true
			},
			yAxis: [{
				type: 'category',
				name: '行业名称',
				nameTextStyle: {
					color: '#666',
					fontSize: 14
				},
				data: nameArr[id],
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
					},
					show: true
				}
			}],
			xAxis: [{
				type: 'value',
				//		            name:'数量 (万元)',
				nameTextStyle: {
					color: '#666',
					fontSize: 14
				},
				nameGap: 20,
				max: 100,
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
					},
					show: false
				}
			}],
			series: [{
				name: '纳税金额',
				type: 'bar',
				barWidth: '60%',
				data: datalist[id]
			}]
		};

		myChart4.setOption(option);
	}

	//折线图
	function chart5(name) {
		myChart5 = echarts.init(document.getElementById('chart5'));
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
				backgroundColor: 'rgba(255,255,255,0.9)',
				formatter: function formatter(params) {
					//		                console.log(params);
					return '<span style="color:#008ef2;font-weight:bold; font-size:16px">' + name + '-' + params[0].name + '</span>' + '<br/>' + '<span style="color:#666;">' + params[0].seriesName + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;font-size:16px">' + params[0].value + '</span>' + '<br/>';
				},
				padding: 10
			},
			legend: {
				show: true,
				data: ['纳税额趋势'],
				right: '2%',
				top: "8%",
				textStyle: {
					fontSize: 14
				}
			},
			calculable: true,
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
			color: ["#19c5fc"],
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
			grid: {
				x: '4%',
				x2: '2%',
				y: '80',
				y2: '30'
			},
			series: [{
				name: '纳税额趋势',
				type: 'line',
				smooth: true,
				//		        data: data3,
				data: linedata,
				symbolSize: 10
			}]
		};

		myChart5.setOption(option);
	}
}