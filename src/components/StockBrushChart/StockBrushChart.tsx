import { useEffect, useRef } from "react";
import ReactECharts from "echarts-for-react";
import type { ECharts, EChartsOption } from "echarts";

const stockData = [
    { date: "2025-01-01", price: 100 },
    { date: "2025-01-02", price: 105 },
    { date: "2025-01-03", price: 110 },
    { date: "2025-01-04", price: 103 },
    { date: "2025-01-05", price: 115 },
    { date: "2025-01-06", price: 118 },
    { date: "2025-01-07", price: 121 },
];

export const StockBrushChart = () => {
    const chartRef = useRef<ReactECharts | null>(null);

    useEffect(() => {
        const echartsInstance = chartRef.current?.getEchartsInstance() as ECharts | undefined;
        if (echartsInstance) {
            echartsInstance.dispatchAction({
                type: "takeGlobalCursor",
                key: "brush",
                brushOption: {
                    brushType: "lineX",
                    brushMode: "single",
                    xAxisIndex: 0,
                },
            });
        }
    }, []);

    const option: EChartsOption = {
        tooltip: {
            trigger: "axis",
        },
        xAxis: {
            type: "category",
            data: stockData.map((d) => d.date),
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                type: "line",
                name: "Stock Price",
                data: stockData.map((d) => d.price),
                smooth: true,
                lineStyle: {
                    width: 2,
                },
                areaStyle: {},
            },
        ],
        brush: {
            toolbox: ["lineX"],
            // brushType: 'lineX',
            xAxisIndex: 0,
            brushMode: "single",
        },
        // toolbox: {
        //   feature: {
        //     brush: {
        //       type: ["lineX"],
        //     },
        //     restore: {},
        //   },
        // },
    };

    const onEvents = {
        brushSelected: (params: {
            batch: { selected: { dataIndex: number[] }[] }[];
        }) => {
            const indices = params.batch?.[0]?.selected?.[0]?.dataIndex ?? [];
            const selectedData = indices.map((i) => stockData[i]);
            console.log("Selected data:", selectedData);
        },
    };

    return (
        <ReactECharts
            ref={chartRef}
            option={option}
            style={{ height: "400px", width: "100%" }}
            onEvents={onEvents}
        />
    );
}
