import React, { useRef } from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";

const stockData: [string, number][] = [
  ["2025-01-01", 100],
  ["2025-01-02", 105],
  ["2025-01-03", 110],
  ["2025-01-04", 103],
  ["2025-01-05", 115],
  ["2025-01-06", 118],
  ["2025-01-07", 121],
];

export function StockBrushChart(): React.ReactElement {
  const chartRef = useRef<ReactECharts | null>(null);

  const option: EChartsOption = {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: stockData.map(([date]) => date),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "line",
        name: "Stock Price",
        data: stockData.map(([, price]) => price),
        smooth: true,
        lineStyle: {
          width: 2,
        },
        areaStyle: {},
      },
    ],
    brush: {
      toolbox: ["lineX"], // changed from 'rect' to 'lineX'
      xAxisIndex: 0,
      brushMode: "single",
    },
    toolbox: {
      feature: {
        brush: {
          type: ["lineX"], // changed from ['rect'] to ['lineX']
        },
        restore: {},
      },
    },
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
