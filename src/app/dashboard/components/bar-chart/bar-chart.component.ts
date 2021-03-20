import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  grid: ApexGrid
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Inflation",
          data: [2.3, 3.1, 4.0, 10.1]
        }
      ],
      chart: {
        height: 150,
        type: "bar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom,
          },
          borderRadius: 5,
        }
      },
      dataLabels: {
        enabled: false,
        formatter: function(val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr"
        ],
        position: "top",
        labels: {
          offsetY: -18,
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          show: false,
          fill: {
            type: "solid",
            // gradient: {
            //   colorFrom: "#D8E3F0",
            //   colorTo: "#BED1E6",
            //   stops: [0, 100],
            //   opacityFrom: 0.4,
            //   opacityTo: 0.5
            // }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        // type: "gradient",
        // gradient: {
        //   shade: "light",
        //   type: "horizontal",
        //   shadeIntensity: 0.25,
        //   gradientToColors: undefined,
        //   inverseColors: true,
        //   opacityFrom: 1,
        //   opacityTo: 1,
        //   stops: [50, 0, 100, 100]
        // }
        colors: ['#AEDC8A'],
      },
      grid: {
        show: false
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val) {
            return val + "%";
          }
        }
      },
      title: {
        text: "",
        // floating: 0,
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  ngOnInit(): void {
  }

}
