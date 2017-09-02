var React = require('react');

var Message = React.createClass({
  render: function(){
    var {temp, location} = this.props;
    return(
      <div>
        <h3 className="text-center">It's {temp} in {location}</h3>
      </div>
    )
  }
});

module.exports = Message;
