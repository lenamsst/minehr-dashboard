
import ReactApexChart, { Props } from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';


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
              color: "#5D405C"   
                                 
            },  
               
                
          
        },
          responsive: [{
            breakpoint: 640,
            options: {
              chart: {
                toolbar: {
                  offsetX: 10,
                  offsetY: -20,
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
          }],
    
        chart: {
          type: 'bar',         
          height: 350,
          width: 680,   
          background: '#FFFFFF',
          fontFamily: "Montserrat",
          toolbar: {              
            offsetY: 12,    
            offsetX: -12,      
            tools: {              
              download: '<img src="https://i.imgur.com/z9wfulb.png" class="" width="22">',
              customIcons: [{ 
                icon: '<img src="https://i.imgur.com/5z9o7cN.png" width="22" >',
                index: -1,
                title: 'Gráfico de barras',
                class: 'custom-icon',
                click: function (chart, options, e) {
                  console.log("clicked custom-icon")
                }
                }]  
                     
            }, 
           
           
          },
          
        },

        plotOptions: {
          bar: {
            borderRadius: 0,
            horizontal: true,
          
          }
          
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        }
      }
  
    const series = [
       {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }
      
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