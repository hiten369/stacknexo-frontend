import React, { useContext, useEffect } from 'react'
import { Chart } from 'chart.js';
import * as ChartGeo from 'chartjs-chart-geo'
import { Tooltip } from 'chart.js';
import MainContext from './context/MainContext';

Chart.register([Tooltip])

const Chart1 = () => {
    const context = useContext(MainContext);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let data1 = await context.getCountryData();

        const find = (str) => {
            for (let i of data1) {
                // console.log(str);
                if (str === 'United States of America' && i.dimensionValues[0].value === 'United States') {
                    return i.metricValues[0].value;
                    // console.log('yes');
                    // str='United States';
                }
                if (i.dimensionValues[0].value === str) {
                    // console.log(i.metricValues[0].value);
                    return i.metricValues[0].value;
                }
            }
            return 0;
        };

        // console.log(Math.random());
        // data1.map((e)=>{console.log(e.dimensionValues[0].value)});
        fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json()).then((data) => {
            const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;
            // data1.map((e)=>{console.log(e.metricValues[0].value)});
            // countries.map((e)=>{console.log(e.properties.name)});
            const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
                type: 'choropleth',
                data: {
                    labels: countries.map((d) => d.properties.name),
                    datasets: [{
                        label: 'Countries',
                        data: countries.map((d) => ({ feature: d, value: Number(find(d.properties.name)) })),
                        // data: data1.map((d) => ({ feature: d.dimensionValues[0].value, value: d.metricValues[0].value })),
                    }],

                },
                options: {
                    showOutline: true,
                    showGraticule: true,
                    showTooltips: true,
                    plugins: {
                        legend: {
                            display: true
                        },
                    },
                    scales: {
                        xy: {
                            projection: 'equalEarth'
                        }
                    }
                }
            });
        });
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <div style={{ height: '70vh', width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <canvas id="canvas"></canvas>
                </div>
            </div>
        </>
    )
}

export default Chart1;
