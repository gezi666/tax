"use strict";

var myChart1, myChart2, myChart3, myChart4;

$(function () {
	changeNavTo("辅助决策", "税收收入分析", "分税务机关统计");

	regType(); //分注册类型
	deptType(); //分税务机关

	//页面尺寸发生变化，重绘所有Echart图表
	window.onresize = function () {
		myChart1.resize();
		myChart2.resize();
		myChart3.resize();
		myChart4.resize();
	};
});

//分注册类型
function regType() {
	function randomData() {
		return Math.round(Math.random() * 90 + 10);
	}
	//柱图数据
	var id = 0;
	var yNameArr = [['华新圣铭色织有限责任公司', '兴达丝绸有限责任公司', '联达机客车配件有限公司', '宏旺机械设备制造有限公司', '东泰焊管有限公司'], ['鑫鑫机械制造有限公司', '宏旺机械设备制造有限公司', '中陶卫浴制造有限公司', '丰隆机械制造有限公司', '金义铸造有限公司'], ['鸿顺建材有限公司', '砼业建筑材料有限公司', '丰隆机械制造有限公司', '银联建材有限公司', '双龙建材有限公司'], ['玖发煤炭销售有限公司', '宏图煤炭有限公司', '东方石灰厂', '宏林煤炭有限公司', '兴达采石厂'], ['宏旺机械设备制造有限公司', '宏旺机械设备制造有限公司', '中陶卫浴制造有限公司', '丰隆机械制造有限公司', '宏林煤炭有限公司'], ['鸿顺建材有限公司', '砼业建筑材料有限公司', '丰隆机械制造有限公司', '银联建材有限公司', '双龙建材有限公司'], ['中陶卫浴制造有限公司', '兴达丝绸有限责任公司', '丰隆机械制造有限公司', '银联建材有限公司', '联达机客车配件有限公司']];
	var dataBar = [];
	function changedata() {
		for (var i = 0; i < 5; i++) {
			dataBar[i] = randomData();
		}
	}

	//初始化
	var data0 = [],
	    data1 = [],
	    data2 = [];
	function change() {
		for (var i = 0; i < 3; i++) {
			data0[i] = randomData();
		}
		for (var i = 0; i < 6; i++) {
			data1[i] = randomData();
		}
		for (var i = 0; i < 5; i++) {
			data2[i] = randomData();
		}
		chart1();
		changedata();
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
	//左侧饼图
	function chart1() {
		myChart1 = echarts.init(document.getElementById('chart1'));
		var option = {
			tooltip: {
				trigger: 'item',
				backgroundColor: 'rgba(255,255,255,0.9)',
				borderColor: "#ccc",
				formatter: function formatter(params, ticket, callback) {
					var str = '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">' + '税收收入' + '</span>';
					//		            console.log(params);
					if (!params) {
						return "暂无数据";
					}

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
				data: ['增值税', '营销广告', '企业所得税', '个人所得税', '资源税', '城市维护建设税', '房产税', '印花税', '城镇土地使用税', '土地增值税', '车船使用税', '车辆购置税', '耕地占用税', '契税', '烟叶税', '环保税'],
				show: false
			},
			color: ['#5ad01c', '#fe9327', '#01abfa', '#009eff', '#22c1fc', '#ffba00', '#ff9400', '#ff5600', '#0182e6'],
			series: [{
				name: '税收收入',
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
				data: [{ value: data0[0], name: '内资' }, { value: data0[1], name: '外资' }, { value: data0[2], name: '港澳台资' }]
			}, {
				name: '税收收入',
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
				data: [{ value: data1[0], name: '增值税' }, { value: data1[1], name: '企业增值税' }, { value: data1[2], name: '个人所得税' }, { value: data1[3], name: '其他' }, { value: data1[4], name: '资源税' }, { value: data1[5], name: '城市维护建设税' }]
			}]
		};

		myChart1.setOption(option);
		myChart1.on('click', function (params) {
			console.log(params);
			if (params.name == "增值税") {
				id = 1;
				changedata();
				chart2(id);
			} else if (params.name == "企业增值税") {
				id = 2;
				changedata();
				chart2(id);
			} else if (params.name == "个人所得税") {
				id = 3;
				changedata();
				chart2(id);
			} else if (params.name == "内资") {
				id = 4;
				changedata();
				chart2(id);
			} else if (params.name == "外资") {
				id = 5;
				changedata();
				chart2(id);
			}
		});
	}
	//右侧柱图
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
			//		    legend: {
			//		        data:['华新圣铭色织有限责任公司','兴达丝绸有限责任公司','联达机客车配件有限公司','宏旺机械设备制造有限公司','东泰焊管有限公司'],
			//		    },
			grid: {
				left: '1%',
				right: '2%',
				bottom: '10%',
				top: '25%',
				containLabel: true
			},
			yAxis: [{
				type: 'category',
				name: '单位名称',
				nameTextStyle: {
					color: '#666',
					fontSize: 14
				},
				//		            data : ['华新圣铭色织有限责任公司','兴达丝绸有限责任公司','联达机客车配件有限公司','宏旺机械设备制造有限公司','东泰焊管有限公司'],
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
				//		            data:data2,
				data: dataBar
			}]
		};

		myChart2.setOption(option);
	}
}

//分税务机关
function deptType() {
	function randomData() {
		return Math.round(Math.random() * 90 + 10);
	}
	//柱图数据
	var id = 0;
	var yNameArr = [['华新圣铭色织有限责任公司', '兴达丝绸有限责任公司', '联达机客车配件有限公司', '宏旺机械设备制造有限公司', '东泰焊管有限公司'], ['鑫鑫机械制造有限公司', '宏旺机械设备制造有限公司', '中陶卫浴制造有限公司', '丰隆机械制造有限公司', '金义铸造有限公司'], ['鸿顺建材有限公司', '砼业建筑材料有限公司', '丰隆机械制造有限公司', '银联建材有限公司', '双龙建材有限公司'], ['中陶卫浴制造有限公司', '兴达丝绸有限责任公司', '丰隆机械制造有限公司', '银联建材有限公司', '宏旺机械设备制造有限公司'], ['玖发煤炭销售有限公司', '宏图煤炭有限公司', '东方石灰厂', '宏林煤炭有限公司', '兴达采石厂']];
	var dataBar = [];
	function changedata() {
		for (var i = 0; i < 5; i++) {
			dataBar[i] = randomData();
		}
	}

	//初始化
	var data2 = [];
	function change() {
		for (var i = 0; i < 5; i++) {
			data2[i] = randomData();
		}
		chart3();
		changedata();
		chart4(id);
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
	changedata();
	chart4(id);
	//左侧饼图	
	function chart3() {
		myChart3 = echarts.init(document.getElementById('chart3'));
		var option = {
			tooltip: {
				trigger: 'item',
				backgroundColor: 'rgba(255,255,255,0.9)',
				borderColor: "#ccc",
				formatter: function formatter(params, ticket, callback) {
					var str = '<span style="color:#008ef2; display:block; width:100%; font-weight:bold;font-size:14px;">' + '税收收入' + '</span>';
					//		            console.log(params);
					if (!params) {
						return "暂无数据";
					}

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
				x: 'center',
				y: 'top',
				data: ['税务机关A', '税务机关B', '税务机关C', '税务机关D', '其它'],
				show: false
			},
			calculable: true,
			color: ['#e35810', '#fda100', '#57cf26', '#09c0fc', '#0caaf8'],
			series: [{
				name: '',
				type: 'pie',
				radius: '60%',
				center: ['50%', '50%'],
				roseType: 'angle',
				label: {
					normal: {
						show: true
					},
					emphasis: {
						show: true
					}
				},
				labelLine: {
					normal: {
						length: 10,
						length2: 20
					}
				},
				data: [{ value: data2[0], name: '税务机关A' }, { value: data2[1], name: '税务机关B' }, { value: data2[2], name: '税务机关C' }, { value: data2[3], name: '税务机关D' }, { value: data2[4], name: '其它' }]
			}]
		};

		myChart3.setOption(option);
		myChart3.on('click', function (params) {
			//			console.log(params);
			if (params.name == "税务机关A") {
				id = 1;
				changedata();
				chart4(id);
			} else if (params.name == "税务机关B") {
				id = 2;
				changedata();
				chart4(id);
			} else if (params.name == "税务机关C") {
				id = 3;
				changedata();
				chart4(id);
			} else if (params.name == "税务机关D") {
				id = 4;
				changedata();
				chart4(id);
			} else if (params.name == "其他") {
				id = 5;
				changedata();
				chart4(id);
			}
		});
	}
	//右侧柱图
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
			//		    legend: {
			//		        data:['华新圣铭色织有限责任公司','兴达丝绸有限责任公司','联达机客车配件有限公司','宏旺机械设备制造有限公司','东泰焊管有限公司'],
			//		    },
			grid: {
				left: '1%',
				right: '2%',
				bottom: '10%',
				top: '25%',
				containLabel: true
			},
			yAxis: [{
				type: 'category',
				name: '单位名称',
				nameTextStyle: {
					color: '#666',
					fontSize: 14
				},
				//		            data : ['华新圣铭色织有限责任公司','兴达丝绸有限责任公司','联达机客车配件有限公司','宏旺机械设备制造有限公司','东泰焊管有限公司'],
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
				//		            data:data2,
				data: dataBar
			}]
		};

		myChart4.setOption(option);
	}
}