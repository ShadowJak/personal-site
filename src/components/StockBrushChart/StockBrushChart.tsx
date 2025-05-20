import { useEffect, useRef, useCallback, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import type { ECharts, EChartsOption } from 'echarts';
import { fencePost } from '../../utils/utils';

const stockData: { date: string; price: number }[] = Array.from(
    { length: 36 },
    (_, i) => {
        const year = 2022 + Math.floor(i / 12);
        const month = (i % 12) + 1;
        const date = `${year}-${month.toString().padStart(2, '0')}`;
        const price = 100 + Math.round(Math.random() * 50);
        return { date, price };
    }
);

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
                    // console.log('Grid width (plot area):', gridRect.width);
                } catch (err) {
                    console.warn('Failed to get grid dimensions:', err);
                }
            }, 20);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', updateGridWidth);
        return () => {
            window.removeEventListener('resize', updateGridWidth);
        };
    }, [updateGridWidth]);

    useEffect(() => {
        const handleResize = () => {
            chartRef.current?.getEchartsInstance().resize();
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleChartReady = (echartsInstance: ECharts) => {
        setTimeout(() => {
            updateGridWidth();
        }, 100)
        
    };

    // Brush event handler
    const onBrushSelected = useCallback((params: any) => {
        params.batch.forEach((brushItem: any) => {
            const coordRange = brushItem.areas?.[0]?.coordRange;
            console.log('brushItem', brushItem);
            if (coordRange && coordRange.length === 2) {
                const [start, end] = coordRange;
                // slice the selected points from your data
                const selectedPoints = stockData.slice(start, end + 1);
                console.log('Selected Points:', selectedPoints);
                console.log('gridWidthRef.current', gridWidthRef.current);
                ///TODO: Use gridwidthref.current with the 12-1 number cut in
                /// half to get the current selected points behavior
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
                },
                areaStyle: {},
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
                start: fencePost(12, stockData.length),
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
