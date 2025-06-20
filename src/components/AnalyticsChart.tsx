import { Box, Text } from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const chartOptions: Highcharts.Options = {
  chart: {
    type: "spline",
    backgroundColor: "transparent",
    height: undefined,
  },
  title: { text: undefined },
  xAxis: {
    categories: ["3:00", "5:20", "13:00", "20:00"],
    labels: { style: { color: "#ccc" } },
  },
  yAxis: {
    labels: { style: { color: "#ccc" } },
    gridLineColor: "#444",
  },
  legend: {
    align: "center",
    verticalAlign: "bottom",
    itemStyle: { color: "#ccc" },
  },
  series: [
    {
      name: "Battery Power",
      data: [90, 110, 95, 120],
      type: "spline",
      color: "blue",
    },
    {
      name: "Load Demand",
      data: [100, 130, 125, 90],
      type: "spline",
      color: "red",
    },
    {
      name: "PY Generation",
      data: [80, 95, 135, 100],
      type: "spline",
      color: "green",
    },
  ],
  credits: { enabled: false },
};

export default function AnalyticsChart() {
  return (
    <Box
      bg="gray.900"
      borderRadius="md"
      p={2}
      color="white"
      height="100%" 
      width="100%"
    >
      <Text fontWeight="bold" mb={2}>
        Analytics
      </Text>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        containerProps={{ style: { height: "calc(100% - 24px)" } }} 
      />
    </Box>
  );
}
