"use strict";

$(function () {
				changeNavTo("企业监测", "企业对比分析", "非正常企业比对分析");
				initAbnormal();
});

//初始化非正常企业对比统计图
function initAbnormal() {

				var myChart = echarts.init(document.getElementById('chartAbnormal'));

				var option = {
								tooltip: {
												trigger: 'axis',
												axisPointer: {
																type: 'shadow',
																crossStyle: {
																				color: '#999'
																}
												}
								},
								legend: {
												top: 20,
												right: 20,
												textStyle: {
																fontSize: 14
												},
												data: ['国税', '地税']
								},
								calculable: true,
								xAxis: [{
												name: '地区',
												type: 'category',
												data: ['北戴河', '山海关', '海港区', '抚宁县', '昌黎县', '卢龙县', '青龙满族自治县'],
												axisPointer: {
																type: 'shadow'
												},
												axisLine: {
																show: false
												},
												axisTick: {
																show: false
												},
												axisLabel: {
																interval: 0
												}
								}],
								yAxis: [{
												type: 'value',
												name: '数量(个)',
												min: 0,
												axisLine: {
																show: false
												},
												axisTick: {
																show: false
												},
												splitLine: {
																show: true
												}
								}],
								color: ["#17C2FC", "#CEF0FD"],
								series: [{
												name: '国税',
												type: 'bar',
												barWidth: 27,
												barGap: 0,
												data: [300, 230, 270, 450, 240, 450, 240]
								}, {
												name: '地税',
												type: 'bar',
												barWidth: 27,
												itemStyle: {
																normal: {
																				borderColor: '#4EC1FA',
																				borderWidth: 2,
																				borderType: 'dashed'
																}
												},
												data: [140, 130, 370, 250, 140, 450, 240]
								}]
				};
				window.onresize = myChart.resize;
				myChart.setOption(option);
}