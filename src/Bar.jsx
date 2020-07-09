import React from 'react';
import { Line } from 'react-chartjs-2';



const Bar = ({labelData, bmiData}) =>{
    const data = canvas =>{
        const ctx = canvas.getContext('2d');
        const gradient =ctx.createLinearGradient(63,81,181,700);
        gradient.addColorStop(0, '#BA097E');
        gradient.addColorStop(1, '#AD1200');

        return{
            labels: labelData,
            datasets: [
                {
                    label:'BMI',
                    data: bmiData,
                    backgroundColor: gradient,
                    borderColor: 'black',
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointHoverBorderColor: 'black',
                    pointHoverBorderWidth: 2
                }
            ]
        };
    };

    const options = {
        responsive: true,
        scales:{
            xAxes:[
                {
                    scaleLabel: {
                        display: true,
                        labelString: 'Date',
                        fontSize:18,
                        fontColor:'black'
                    },
                    gridLines: {
                        display: false,
                        color: 'black'
                    },
                      ticks: {
                        fontColor: 'black',
                        fontSize: 16
                    }
                }
            ],
            yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'BMI',
                    fontSize: 18,
                    fontColor: 'black'
                  },
                  gridLines: {
                    display: false,
                    color: 'black'
                  },
                  ticks: {
                    fontColor: 'black',
                    fontSize: 16,
                    beginAtZero: true
                  }
                }
              ]        
        },
        tooltips: {
            titleFontSize:13,
            bodyFontSize:13
        }
    };


    return (
        <div>
            {/* <Line data={data}  /> */}
            <Line data={data} options={options} />
        </div>
    )
}


export default Bar;