import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["Russia", 700],
    ["India", 100],
];
// export const data = [
//     ["City", "Popularity","Area"],
//     ["Rome", 200,1100],
//     ["Milan", 300,600],
//     ["Naples", 400,300],
//     ["Turin", 500,900],
//     ["Palermo", 600,1500],
//     ["Genoa", 700,200],
//     ["Florence", 100,800],
// ];
// export const data = [
//     ['State', 'Select'],
//     ['US-AL', 0],
//     ['US-AK', 0],
//     ['US-AR', 0],
//     ['US-AK', 0],
//     ['US-AZ', 0],
//     ['US-Colorado', 0],
//     ['US-CO', 0],
//     ['US-DE', 0],
//     ['US-FL', 0],
//     ['US-HI', 0],
//     ['US-KS', 0],
//     ['US-KY', 0],
//     ['US-MI', 0],
//     ['US-MO', 0],
//     ['US-MS', 0],
//     ['US-MT', 10],
//     ['US-NE', 20],
//     ['US-NJ', 30],
//     ['US-NM', 40],
//     // ['US-NY',500],
//     ['New York',500],
//     ['US-OR', 60],
//     ['US-PA', 70],
//     ['US-TX', 80],
//     ['US-UT', 90],
//     ['US-VA', 0],
//     ['US-WA', 0],
//     ['US-WV', 0],
//     ['US-WY', 0],
// ];

const Chart2 = () => {
    return (
        <>
            <Chart
                chartEvents={[
                    {
                        eventName: "select",
                        callback: ({ chartWrapper }) => {
                            const chart = chartWrapper.getChart();
                            const selection = chart.getSelection();
                            if (selection.length === 0) return;
                            const region = data[selection[0].row + 1];
                            console.log("Selected : " + region);
                        },
                    },
                ]}
                chartType="GeoChart"
                width="100%"
                height="400px"
                data={data}
            // options={
            //     {
            //         // region: "IT", // Africa
            //         // colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
            //         backgroundColor: "#81a1fa",
            //         displayMode: 'regions',
            //         displayMode: 'markers' ,
            //         colorAxis: {colors: ['green', 'blue']},
            //         resolution: 'provinces',
            //         // datalessRegionColor: "#c1bbd0",
            //         defaultColor: "#f5f5f5"
            //     }
            // }
            />
        </>
    )
}

export default Chart2
