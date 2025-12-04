"use client";

import ReactECharts from "echarts-for-react";
import { useTheme } from "next-themes";

export default function EquityChart() {
  const { theme } = useTheme();
  const isDark = theme === "dark" || true; // Force dark for now as per design

  const option = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      },
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#333",
      textStyle: {
        color: "#fff"
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisLine: { lineStyle: { color: "#333" } },
        axisLabel: { color: "#888" }
      }
    ],
    yAxis: [
      {
        type: "value",
        splitLine: { lineStyle: { color: "#333" } },
        axisLabel: { color: "#888" }
      }
    ],
    series: [
      {
        name: "Equity",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 3,
          color: "#006FEE"
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(0, 111, 238, 0.5)" },
              { offset: 1, color: "rgba(0, 111, 238, 0.01)" }
            ]
          }
        },
        emphasis: {
          focus: "series"
        },
        data: [100, 120, 115, 134, 160, 190, 210, 200, 230, 250, 280, 320],
        animationDuration: 2000,
        animationEasing: "cubicOut"
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />;
}
