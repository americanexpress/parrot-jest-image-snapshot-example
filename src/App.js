/*
 * Copyright (c) 2018 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

import React, { Component } from 'react';

const OPEN_WEATHER_MAP_API_KEY = 'PLACE_KEY_HERE'; // obvs wouldnt keep this on the client outside of an example like this one
const PHOENIX_ZIP_CODE = '85013';

const GRADIENTS = {
  COOL: 'linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)',
  HOT: 'linear-gradient(to top, #f83600 0%, #f9d423 100%)',
  NEUTRAL: 'linear-gradient(to top, #29323c 0%, #485563 100%)',
};

class App extends Component {
  state = {
    loading: true,
    error: false,
    phxTemperature: '',
  };

  async componentDidMount() {
    try {
      const phxWeatherResponse = await fetch(
        `/weather?zip=${PHOENIX_ZIP_CODE},us&units=imperial&appid=${OPEN_WEATHER_MAP_API_KEY}`
      );
      const phxWeather = await phxWeatherResponse.json();
      const phxTemperature = phxWeather.main.temp;
      this.setState({ phxTemperature, loading: false });
    } catch (e) {
      this.setState({ loading: false, error: true });
    }
  }

  render() {
    const { phxTemperature, loading, error } = this.state;

    let background = GRADIENTS.NEUTRAL;
    let wittyMessageAboutTemperature;
    if (loading) {
      wittyMessageAboutTemperature = 'Let me find out...';
    } else if (error) {
      wittyMessageAboutTemperature = 'I am not sure...';
    } else if (phxTemperature > 90) {
      background = GRADIENTS.HOT;
      wittyMessageAboutTemperature = `Yes, it is ${phxTemperature} degrees but it is a dry heat.`;
    } else {
      background = GRADIENTS.COOL;
      wittyMessageAboutTemperature = `Nope! It is ${phxTemperature} degrees. Perfect snowbird weather.`;
    }

    return (
      <div
        style={{
          position: 'absolute',
          display: 'grid',
          height: '100%',
          width: '100%',
          color: 'white',
          background,
        }}
      >
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <h3>Is it hot in Phoenix right now?</h3>
          <p>{wittyMessageAboutTemperature}</p>
        </div>
      </div>
    );
  }
}

export default App;
