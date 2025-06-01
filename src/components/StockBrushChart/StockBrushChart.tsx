import { useEffect, useRef, useCallback, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import type { ECharts, EChartsOption } from 'echarts';
import { fencePost } from '../../utils/utils';
import { TimespanInMonths } from '../../utils/consts';
import chroma from 'chroma-js';

const stockData: { date: string; price: number }[] = Array.from(
    { length: 36 },
    (_, i) => {
        const year = 2022 + Math.floor(i / 12);
        const month = (i % 12) + 1;
        const date = `${year}-${month.toString().padStart(2, '0')}`;
        const price = 0 + Math.round(Math.random() * 150);
        return { date, price };
    }
);

const chartLineColor = 'white';
const chartAreaColor = 'red';
const chartItemColor = 'white';

let timespan = TimespanInMonths.YEAR;

export const StockBrushChart = () => {
    const chartRef = useRef<ReactECharts | null>(null);
    const gridWidthRef = useRef<number | null>(null);

    const updateGridWidth = useCallback(() => {
        const echartsInstance = chartRef.current?.getEchartsInstance();
        if (echartsInstance) {
            echartsInstance.resize(); // Ensure chart layout is updated

            // Delay slightly to ensure layout stabilizes
            setTimeout(() => {
                try {
                    const model = (echartsInstance as any).getModel();
                    const gridComponent = model.getComponent('grid', 0);
                    const coordSystem = gridComponent.coordinateSystem;
                    const gridRect = coordSystem.getRect();
                    gridWidthRef.current = gridRect.width;
                } catch (err) {
                    console.warn('Failed to get grid dimensions:', err);
                }
            }, 20);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            updateGridWidth();
            chartRef.current?.getEchartsInstance().resize();
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [updateGridWidth]);

    const handleChartReady = (echartsInstance: ECharts) => {
        setTimeout(() => {
            updateGridWidth();
        }, 100)

    };

    // Brush event handler
    const onBrushSelected = useCallback((params: any) => {
        params.batch.forEach((brushItem: any) => {
            const coordRange = brushItem.areas?.[0]?.coordRange;
            if (coordRange && coordRange.length === 2) {
                const [start, end] = coordRange;
                const selectedPoints = stockData.slice(start, end + 1);

                const firstDate = selectedPoints[0].date;
                const lastDate = selectedPoints[selectedPoints.length - 1].date;

                const firstPixel = chartRef.current?.getEchartsInstance().convertToPixel({ xAxisIndex: 0 }, firstDate);
                const lastPixel = chartRef.current?.getEchartsInstance().convertToPixel({ xAxisIndex: 0 }, lastDate);

                const brushStart = brushItem.areas?.[0]?.range?.[0];
                const brushEnd = brushItem.areas?.[0]?.range?.[1];

                if (firstPixel && (firstPixel < brushStart)) {
                    selectedPoints.shift();
                }

                if (lastPixel && (lastPixel > brushEnd)) {
                    selectedPoints.pop();
                }
            }
        });
    }, []);

    const option: EChartsOption = {
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            show: false,
            left: 40,
            top: 60,
            right: 30,
            bottom: 60,
            containLabel: false,
        },
        xAxis: {
            type: 'category',
            data: stockData.map((d) => d.date),
            boundaryGap: false,
        },
        yAxis: {
            type: 'value',
            scale: false,
        },
        series: [
            {
                type: 'line',
                name: 'Stock Price',
                data: stockData.map((d) => d.price),
                smooth: true,
                lineStyle: {
                    width: 2,
                    color: chroma.mix(chartLineColor, '#000000', 0.0).hex(),
                },
                areaStyle: {
                    color: chroma.mix(chartAreaColor, '#000000', 0.4).hex(),
                    opacity: 0.5,
                },
                itemStyle: {
                    color: chartItemColor,
                },
                emphasis: {
                    disabled: true,
                },
                animation: false,
            },
        ],
        brush: {
            toolbox: ['lineX'],
            xAxisIndex: 0,
            brushMode: 'single',
        },
        toolbox: {
            right: 30,
            feature: {
                brush: {
                    type: ['lineX'],
                },
                restore: {},
            },
        },
        dataZoom: [
            {
                type: 'slider',
                zoomOnMouseWheel: false,
                brushSelect: false,
                zoomLock: true,
                handleSize: 0,
                start: fencePost(timespan, stockData.length),
                end: 100,
                xAxisIndex: 0,
                filterMode: 'filter',
            },
            {
                type: 'inside',
                zoomOnMouseWheel: false,
                start: 0,
                end: 100,
                xAxisIndex: 0,
            },
        ],
    };

    // Register the brushSelected event handler
    const onEvents = {
        brushSelected: onBrushSelected,
    };

    return (
        <ReactECharts
            ref={chartRef}
            onChartReady={handleChartReady}
            option={option}
            style={{ height: '400px', width: '100%' }}
            onEvents={onEvents}
        />
    );
};
