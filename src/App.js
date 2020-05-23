import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './component/Cards/Cards'
import Chart from './component/Chart/Chart'
import CountryPicker from './component/CountryPicker/CountryPicker'
import {fetchData} from './Api'

import coronaImage from './imagees/coronalabel.png'
class App extends Component {

  constructor(){
    super()
    this.state = {
      data : {},
      country:''

    }
  }
  async componentDidMount(){
    const fetchedData = await fetchData()

    this.setState({data:fetchedData})
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country)
    this.setState({data:fetchedData, country:country})
    console.log(fetchedData)
  }
render(){
  const {data, country} = this.state
    return (
      <div className="container">
        <img src={coronaImage} className="image" alt="corona Label"/>
        <Cards apidata={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );    
  }
}

export default App;
