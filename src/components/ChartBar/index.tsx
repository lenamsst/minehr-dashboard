import ReactApexChart, { Props } from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const TasksChart: React.FC<Props> = ({ image }) => {
  const options: ApexOptions = {
    title: {
      text: "Barras",
      align: "left",
      margin: 0,
      offsetX: 23,
      offsetY: 15,
      floating: false,
      style: {
        fontSize: "16px",
        fontWeight: "700",
        fontFamily: "Montserrat",
        color: "#5D405C",
      },
    },
    fill: {
      colors: ["#8DD471"],
    },
    responsive: [
      {
        breakpoint: 730,
        options: {
          chart: {
            width: 350,
            toolbar: {
              offsetX: 10,
              offsetY: 15,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          xaxis: {
            categories: [],
          },
        },
      },
    ],

    chart: {
      type: "bar",
      height: 340,
      width: 680,
      background: "#FFFFFF",
      fontFamily: "Montserrat",
      toolbar: {
        offsetY: 15,
        offsetX: -8,
        tools: {
          download:
            '<img src="https://i.imgur.com/z9wfulb.png" class="" width="22">',
          customIcons: [
            {
              icon: '<img src="https://i.imgur.com/5z9o7cN.png" width="15" height="15" >',
              index: -1,
              title: "Países mais populosos do mundo (2022)",
              class: "custom-icon",
              click: function (chart, options, e) {
                console.log("clicked custom-icon");
              },
            },
          ],
        },
      },
    },

    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#5D405C"],
      },
    },
    xaxis: {
      categories: [
        "Coreia do Sul",
        "Canadá",
        "Reino Unido",
        "Holanda",
        "Itália",
        "França",
        "Japão",
        "Estados Unidos",
        "China",
        "Alemanha",
      ],
    },
  };

  const series = [
    {
      name: "População",
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  return (
    <ReactApexChart
      type="bar"
      options={options}
      series={series}
      height={350}
      width={610}
    />
  );
};

export default TasksChart;
