import React from 'react'

export default Parallax extends React.Component { 
  
  render() {
    return <div style={{
	  width: this.porps.options.width: || "100%",
	  height: this.props.options.height || "100%",
	  backgroundImage: 'url("'+this.props.image+'")',
	  backgroundSize: '100%'
	}} ></div>;
  }
  
}
