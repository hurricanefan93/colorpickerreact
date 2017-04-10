import React, { Component } from 'react'

class Swatch extends Component {
  render () {
    let color = `hsla(${this.props.hue}, ${this.props.saturation}%, ${this.props.lightness}%, ${this.props.alpha})`
    return <div>
      <div className='swatch' style={{backgroundColor: color}} />
    </div>
  }
}

export default Swatch
