var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length> 0){
      this.refs.location.value = "";
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <div>
        <h3>Weather Form</h3>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" placeholder="Search weather by city" ref="location"/>
          <input className="button expanded hollow" type="submit" value=" Search"/>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
