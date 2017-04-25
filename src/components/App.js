import React, { Component } from 'react'
import Swatch from './Swatch'
import Colorvalue from './Colorvalue'
import Input from './Input'
import store from '../store'
import { observer } from 'mobx-react'

@observer
class App extends Component {
  handleHueChange = (event) => {
    store.hue = event.target.value
  }
  handleSaturationChange= (event) => {
    store.saturation = event.target.value
  }
  handleLightnessChange= (event) => {
    store.lightness = event.target.value
  }
  handleAlphaChange= (event) => {
    store.alpha = event.target.value
  }

  render () {
    return <div className='colorpicker'>
      <h1>ColorPicker</h1>
      <div className='colordisplaybackground'>
        <div className='image'>
          <Swatch hue={store.hue}
            saturation={store.saturation}
            lightness={store.lightness} alpha={store.alpha} /></div>
        <Colorvalue hue={store.hue}
          saturation={store.saturation}
          lightness={store.lightness} alpha={store.alpha} />
        <div className='slidetitle'>
          <p>Hue</p>
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
