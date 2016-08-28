import React, { PropTypes } from 'react'

class ApiKeyMessage extends React.Component {
  render () {
    return(
      <div>
        <p className="lead">You Need An <a href="http://openweathermap.org/api">Open Weather Map</a> API Key To Access Weather Data.</p>
        <p>Once you sign up, enter your api key on line 3 in <code>src/actions/index.js</code>.</p>
        <hr />
        <pre>
          <code>
            const API_KEY='YOUR API KEY';
          </code>
        </pre>
        <hr />
      </div>
    );
  }
}

export default ApiKeyMessage;
