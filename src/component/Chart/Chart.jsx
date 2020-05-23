import React, {useState, useEffect} from "react"
import {fetchDalyData} from './../../Api'
import {Line, Bar} from 'react-chartjs-2'
import {Card, CardContent, Typography, Grid, Container, StylesProvider} from '@material-ui/core';

import styles from './Chart.module.css'

const Chart = ({data:{confirmed, recovered, deaths}, country}) =>{

    const [dailyData, setDailyData] = useState([])

    useEffect(() =>{
        const fetchApi = async () =>{
            setDailyData(await fetchDalyData())
        }
        fetchApi();
    }, [])

    const lineChart = (
        dailyData.length ?(
            <Line 
                data={{
                    labels:dailyData.map(({date}) =>date), 
                    datasets:[{
                        data:dailyData.map(({confirmed}) =>confirmed),
                        label:"Infected",
                        borderColor:"#3333ff",
                        fill:true
                    }, {
                        data:dailyData.map(({deaths}) =>deaths),
                        label:"Deaths",
                        borderColor:"red",
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill:true
                    }]

                }}
            />
        ):null
    );

    console.log(confirmed, recovered, deaths)
    const barChart = (
        confirmed ?(
            <Bar 
                data={{
                    labels:['Infected', 'Recoverd', 'deaths'],
                    datasets:[{
                        label:"People",
                        backgroundColor:[
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)', 
                            'rgba(255, 0, 0, 0.5)'
                        ],
                        data:[confirmed.value, recovered.value, deaths.value],
                    }]

                }}

                options={{
                    legend:{display:false},
                    title:{disply:true, text:`Current state in ${country}` }

                }}
            />
        ):null
    );
    return(
        <Container>
            <div className={styles.container}>
                {country ? barChart : lineChart}
            </div>
        </Container>
    )
}

export default Chart