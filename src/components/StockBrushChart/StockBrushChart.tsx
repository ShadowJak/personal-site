import { useEffect, useRef } from "react";
import ReactECharts from "echarts-for-react";
import type { ECharts, EChartsOption } from "echarts";
import { fencePost } from "../../utils/utils";

const stockData: { date: string; price: number }[] = Array.from(
    { length: 36 },
    (_, i) => {
        const year = 2022 + Math.floor(i / 12);
        const month = (i % 12) + 1;
        const date = `${year}-${month.toString().padStart(2, "0")}`;
        const price = 100 + Math.round(Math.random() * 50); // Random prices
        return { date, price };
    }
);

export const StockBrushChart = () => {
    const chartRef = useRef<ReactECharts | null>(null);

    useEffect(() => {
        // const echartsInstance = chartRef.current?.getEchartsInstance() as ECharts | undefined;
        // if (echartsInstance) {
        //     echartsInstance.dispatchAction({
        //         type: "takeGlobalCursor",
        //         key: "brush",
        //         brushOption: {
        //             brushType: "lineX",
        //             brushMode: "single",
        //             xAxisIndex: 0,
        //         },
        //     });
        // }
    }, []);

    const option: EChartsOption = {
        tooltip: {
            trigger: "axis",
        },
        xAxis: {
            type: "category",
            data: stockData.map((d) => d.date),
            boundaryGap: false,
        },
        yAxis: {
            type: "value",
            scale: false,
        },
        series: [
            {
                type: "line",
                name: "Stock Price",
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
            toolbox: ["lineX"],
            // brushType: 'lineX',
            xAxisIndex: 0,
            brushMode: "single",
        },
        toolbox: {
            feature: {
                brush: {
                    type: ["lineX"],
                },
                restore: {},
            },
        },
        dataZoom: [
            {
                type: "slider",
                zoomOnMouseWheel: false,
                start: fencePost(12, stockData.length),
                end: 100,
                xAxisIndex: 0,
                filterMode: 'filter',
            },
            {
                type: "inside",
                zoomOnMouseWheel: false,
                start: 0,
                end: 100,
                xAxisIndex: 0,
            },
        ],
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
