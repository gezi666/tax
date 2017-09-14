"use strict";

$(function () {

	changeNavTo("数据采集", "报送统计");

	$('#export').on('click', function () {
		window.location.href = 'submittedStatistics.html';
	});
	$(".up_down").click(function () {
		$(this).toggleClass("active");
		$("#input_box").toggle();
	});
	var chart1 = echarts.init(document.getElementById('chart1'));
	chart1.setOption({
		tooltip: {
			trigger: "item",
			borderColor: '#ccc',
			borderWidth: 1,
			backgroundColor: 'rgba(255,255,255,0.9)',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			formatter: "{b} : {c}",
			textStyle: {
				color: '#666'
			}
		},
		legend: {
			orient: "vertical",
			right: 20,
			bottom: 50,
			data: ["已报", "未报"]
		},
		color: ["#fe9327", "#1aa0fb"],
		calculable: true,
		series: [{
			z: 0,
			name: '',
			type: 'pie',
			center: ['50%', '50%'],
			radius: ['65%', '66%'],
			silent: true,
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
				tooltip: {
					show: false
				}
			}]
		}, {
			name: "",
			type: "pie",
			radius: ["35%", "60%"],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				},
				emphasis: {
					show: true,
					textStyle: {
						fontSize: 20,
						fontWeight: "bold"
					},
					formatter: "{d}%"
				}
			},
			data: [{
				value: 335,
				name: "已报"
			}, {
				value: 310,
				name: "未报"
			}]
		}]
	});

	var chart2 = echarts.init(document.getElementById('chart2'));
	chart2.setOption({
		color: [new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
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
				return '<span style="color:#008ef2;font-weight:bold; font-size:16px">' + params[0].name + '</span>' + '<br/>' + '<span style="color:#666;">' + '未报送数量' + ' : </span>' + '<span style="color:#ff9100;font-weight:bold;">' + params[0].value + '</span>' + '<br/>';
			},
			padding: 10
		},
		grid: {
			left: '10%',
			right: '15%',
			bottom: '10%',
			containLabel: true
		},

		yAxis: [{
			name: '单位名称',
			nameTextStyle: {
				color: '#666',
				fontSize: 14
			},
			nameGap: 10,
			type: 'category',
			data: ['风龙机械有限公司', '万科建筑', '风水泥有限公司', '定金钢铁有限公司', '广大银河'],
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
		xAxis: [{
			name: '数量',
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
				}
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
			data: [120, 132, 101, 134, 90]
		}]
	});

	window.onresize = function () {
		chart1.resize();
		chart2.resize();
	};
});