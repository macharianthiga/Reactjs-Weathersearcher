var React = require('react');

var About = React.createClass({
  render: function(){
    return(
      <div>
          <h1 className="text-center">About</h1>
          <div>
            <p>Welcome to Macharia Nthiga's Weather app. A simple Reactjs application that uses the OpenWeatherMap Api to fetch the weather of any city or town in the world.</p>
            <p>I built this application mostly for fun and also to add to my Github which I rarely update and which was lacking any tangible React projects. Hope you find intuitive and fun to use.
              Feel free to contact me for projects on dmdmasha28@gmail.com</p>
            <p>Here are some of the tools I used:</p>
            <ul>
              <li><a href="https://facecook.github.io/react">React</a> - This was the Javascript framework I used.</li>
              <li><a href="http://openweathermap.org">Open Weather Map API</a> - I used the Open Weather Map API to search for weather data by city</li>
            </ul>

          </div>
      </div>


    );
  }
})


module.exports =  About;
