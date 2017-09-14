"use strict";

var myChart1, myChart2;

$(function () {
    changeNavTo("辅助决策", "政府收入分析");
    selection('#sel1', ['2017年', '2016年', '2015年']);

    catagaryAnalysis(); //分科目分析
    areaAnalysis(); //分区域分析

    //页面尺寸发生变化，重绘所有Echart图表
    window.onresize = function () {
        myChart1.resize();
        myChart2.resize();
    };
});

//分科目分析
function catagaryAnalysis() {
    myChart1 = echarts.init(document.getElementById('chartCatagary'));
    var option = {
        tooltip: {
            trigger: 'axis',
            borderColor: '#ccc',
            borderWidth: 1,
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
            right: 10,
            top: '15%',
            icon: 'circle',
            itemWidth: 10,
            textStyle: {
                fontSize: 14
            },
            data: ['非税收入', '社保基金收入', '税收收入', '转移性收入', '债务收入', '贷款转贷回收本金收入']
        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '3%',
            top: '25%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
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
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月']
        }],
        yAxis: [{
            name: '单位 (万元)',
            nameGap: 30,
            type: 'value',
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
        color: ['#fea019', '#fa6569', '#02bf2c', '#5eaefe', '#6386f8', '#2898ed'],
        series: [{
            name: '非税收入',
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
            data: [120, 132, 101, 134, 90, 230, 210, 140, 160, 120, 90, 210, 230]
        }, {
            name: '社保基金收入',
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
            data: [220, 182, 191, 234, 290, 330, 310, 150, 130, 210, 205, 90, 130]
        }, {
            name: '税收收入',
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
            data: [320, 332, 301, 334, 390, 330, 320, 280, 265, 190, 180, 290, 130]
        }, {
            name: '转移性收入',
            type: 'line',
            smooth: true,
            stack: '总量',
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
            },
            data: [420, 532, 401, 434, 490, 430, 420, 480, 465, 490, 280, 390, 230]
        }, {
            name: '债务收入',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#9bbbfc'
                    }, {
                        offset: 1,
                        color: '#bed3fc'
                    }]),
                    opacity: 0.8

                }
            },
            data: [420, 432, 401, 434, 490, 430, 420, 380, 365, 290, 380, 390, 630]
        }, {
            name: '贷款转贷回收本金收入',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#80c6fe'
                    }, {
                        offset: 1,
                        color: '#aadbff'
                    }]),
                    opacity: 0.8

                }
            },
            data: [120, 332, 401, 434, 490, 430, 420, 380, 365, 390, 580, 690, 530]
        }]
    };

    myChart1.setOption(option);
}

//分区域分析
function areaAnalysis() {
    myChart2 = echarts.init(document.getElementById('chartArea'));
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

    myChart2.setOption(option);
}