var React = require('react');
var Nav   = require('Nav');

var Main = React.createClass({
  render: function (){
   return(
     <div>
       <Nav/>
       <div className="wrapper">
         <div className="row">
           <div className="columns medium-6 large-6 small-centered">
             {this.props.children}
           </div>
         </div>
       </div>
     </div>
   );
  }
});

module.exports = Main;
