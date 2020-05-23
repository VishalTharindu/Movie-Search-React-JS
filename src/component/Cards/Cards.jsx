import React from "react"
import {Card, CardContent, Typography, Grid, Container, StylesProvider} from '@material-ui/core';
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'


const Cards =  ({apidata:{confirmed, recovered, deaths, lastUpdate}}) => {
        
    console.log()

    if (!confirmed) {
        return 'Loding.....'
    }
    return(
        <div className={styles.container}>
            <Container fixed>
                <Grid container spacing={3} justify="center">
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                        <CardContent className={cx(styles.infected_color)}>
                            <Typography variant="h5" className={cx(styles.infected_color)}  gutterBottom>
                                Infected
                            </Typography>   
                            <hr></hr>                         
                            <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />   
                            </Typography>
                            <Typography color="">
                                {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <hr></hr>
                            <Typography variant="body2">
                                Number of active cases of covid 19
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recoverd)}>
                        <CardContent className={cx(styles.recoverd_color)}>
                            <Typography  variant="h5">
                                Recovered
                            </Typography>
                            <hr></hr>
                            <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />   
                            </Typography>
                            <Typography color="">
                                {new Date(lastUpdate).toDateString()}
                            </Typography>   
                            <hr></hr>                   
                            <Typography variant="body2">
                                Number of recoverd from covid 19
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                        <CardContent className={cx(styles.deaths_color)}>
                            <Typography variant="h5" color="">
                                Death
                            </Typography>
                            <hr></hr>
                            <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />   
                            </Typography>
                            <Typography color="">
                                {new Date(lastUpdate).toDateString()}
                            </Typography>  
                            <hr></hr>                    
                            <Typography variant="body2">
                                Number of deaths caused by covid 19
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>          
            </Container>
        </div>
 
    )
}

export default Cards