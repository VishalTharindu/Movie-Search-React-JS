import React, {useState, useEffect} from "react"
import {NativeSelect, FormControl, Container} from "@material-ui/core"
import styles from './CountryPicker.module.css'
import {fetchCountries} from './../../Api'


const CountryPicker = ({handleCountryChange}) =>{

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() =>{
        const fetchCountryApi = async () =>{
            setFetchedCountries(await fetchCountries())

        }
        fetchCountryApi()
    }, [setFetchedCountries])

    // console.log(fetchedCountries)
    return(
        <div className={styles.container}>
            <Container>
                <FormControl className={styles.formControl} md={12}>
                    <NativeSelect defaultChecked="" onChange={(e) =>handleCountryChange(e.target.value)}>
                        <option value="">Global</option>
                        {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
                    </NativeSelect>
                </FormControl>
            </Container>
        </div>
    )
}

export default CountryPicker