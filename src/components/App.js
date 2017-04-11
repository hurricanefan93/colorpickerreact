import React, { Component } from 'react'
import Swatch from './Swatch'
import Colorvalue from './Colorvalue'
import Input from './Input'


class App extends Component {
  state = {
    hue: 0,
    saturation: 50,
    lightness: 50,
    alpha: 1
  }

  handleHueChange = (event) => {
    this.setState({hue: event.target.value})
  }
  handleSaturationChange= (event) => {
    this.setState({saturation: event.target.value})
  }
  handleLightnessChange= (event) => {
    this.setState({lightness: event.target.value})
  }
  handleAlphaChange= (event) => {
    this.setState({alpha: event.target.value})
  }

  render () {
    return <div className='colorpicker'>
      <h1>ColorPicker</h1>
      <div className='colordisplaybackground'>
      <div className='image'><Swatch hue={this.state.hue}
        saturation={this.state.saturation}
        lightness={this.state.lightness} alpha={this.state.alpha} /></div>
        <Colorvalue hue={this.state.hue}
        saturation={this.state.saturation}
        lightness={this.state.lightness} alpha={this.state.alpha} />
        <div className='slidetitle'>
        <p>HUE</p>
        <Input min='0' max='360' onInput={this.handleHueChange} />
        </div>
        <div className='slidetitle'>
        <p>Sat</p>
        <Input min='0' max='100' onInput={this.handleSaturationChange} />
        </div>
        <div className='slidetitle'>
        <p>Lightness</p>
        <Input min='0' max='100' onInput={this.handleLightnessChange} />
        </div>
        <div className='slidetitle'>
        <p>Alpha</p>
        <Input min='0'max='1' step='.01' onInput={this.handleAlphaChange} />
        </div>
      </div>
    </div>
  }
}

export default App
