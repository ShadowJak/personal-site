import { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import type { ECharts, EChartsOption } from 'echarts';
import { fencePost } from '../../utils/utils';

const stockData: { date: string; price: number }[] = Array.from(
    { length: 36 },
    (_, i) => {
        const year = 2022 + Math.floor(i / 12);
        const month = (i % 12) + 1;
        const date = `${year}-${month.toString().padStart(2, '0')}`;
        const price = 100 + Math.round(Math.random() * 50); // Random prices
        return { date, price };
    }
);

export const StockBrushChart = () => {
    const chartRef = useRef<ReactECharts | null>(null);

    // The fact this is needed is really stupid.
    useEffect(() => {
        const handleResize = () => {
            chartRef.current?.getEchartsInstance().resize();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const option: EChartsOption = {
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            show: false,
            zlevel: 0,
            z: 0,
            left: 40,
            top: 60,
            right: 30,
            bottom: 60,
            width: 'auto',
            height: 'auto',
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
            // max: 150, ///TODO: Make dynamic, but probably leave blank
        },
        series: [
            {
                type: 'line',
                name: 'Stock Price',
                data: stockData.map((d) => d.price),
                smooth: true,
                // clip: true,
                // progressive: 0,
                lineStyle: {
                    width: 2,
                },
                areaStyle: {},
                animation: false,
            },
        ],
        brush: {
            toolbox: ['lineX'],
            // brushType: 'lineX',
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

    // const onEvents = {
    //     brushSelected: debouncedBrushSelected,
    // };

    return (
        <ReactECharts
            ref={chartRef}
            option={option}
            style={{ height: '400px', width: '100%' }}
        // onEvents={onEvents}
        />
    );
}
