import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import SimpleMap from '../components/simple_map';
import ApiKeyMessage from '../components/api_key_message';

class WeatherList extends Component {
  renderWeather(cityData) {
    if(cityData==undefined){return(<ApiKeyMessage />);}
    else{
      const name = cityData.city.name;
      const { lon, lat } = cityData.city.coord;
      // const lat = cityData.city.coord.lat;
      // const lon = cityData.city.coord.lon;
      const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);

      return (
        <tr key={name}>
          <td><SimpleMap lat={lat} lon={lon}/></td>
          <td><Chart data={temps} color="orange" units="C" /></td>
          <td><Chart data={pressures} color="green" units="hPa" /></td>
          <td><Chart data={humidities} color="black" units="%" /></td>
        </tr>
      );
    }

  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}



// function mapStateToProps(state) {
//   return { weather: state.weather };
// }
// ES6
function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
