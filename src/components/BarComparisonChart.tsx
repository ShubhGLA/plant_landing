// src/components/BarComparisonChart.tsx

import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import GraphLayout from "./GraphLayout";

const BarComparisonChart = () => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  const chartOptions: Highcharts.Options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      height: 300,
    },
    title: { text: undefined },
    xAxis: {
      categories: ["9:00", "10:00", "0:00", "1:00", "2:00", "3:00", "6:00"],
      crosshair: true,
      labels: { style: { color: "#ccc" } },
    },
    yAxis: {
      min: 0,
      title: { text: null },
      labels: { style: { color: "#ccc" } },
      gridLineColor: "#444",
    },
    tooltip: { shared: true },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
      itemStyle: { color: "#ccc" },
    },
    series: [
      {
        name: "Upfirst Coffinguast",
        type: "column",
        data: [50, 60, 55, 52, 58, 65, 70],
        color: "#4A90E2",
      },
      {
        name: "Load Demand",
        type: "column",
        data: [45, 55, 50, 48, 54, 60, 62],
        color: "#F5A623",
      },
      {
        name: "PMI Oversed",
        type: "column",
        data: [20, 22, 19, 21, 23, 25, 26],
        color: "#7ED321",
      },
    ],
    credits: { enabled: false },
    exporting: { enabled: false },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  const handleDownloadPNG = () => {
    chartRef.current?.chart.exportChart({ type: "image/png" });
  };

  const handleDownloadCSV = () => {
    chartRef.current?.chart.downloadCSV();
  };

  return (
    <GraphLayout
      title="Bar Comparison"
      onDownloadPNG={handleDownloadPNG}
      onDownloadCSV={handleDownloadCSV}
    >
      <Box
        mt={4}
        w="100%"
        overflowX="auto"
      >
        <Box
          minW={["320px", "100%"]}
          height="300px"
        >
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            ref={chartRef}
            containerProps={{ style: { width: "100%", height: "100%" } }}
          />
        </Box>
      </Box>
    </GraphLayout>
  );
};

export default BarComparisonChart;
