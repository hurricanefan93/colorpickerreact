import { observable, computed } from 'mobx'

class Store {
  @observable hue = 0
  @observable saturation = 50
  @observable lightness = 50
  @observable alpha = 1

@computed
  get color () {
    if (store.alpha < 1) {
      return `hsla(${this.hue}, ${this.saturation}, ${this.lightness}, ${this.alpha})`
    } else {
      return `hsl(${this.hue}, ${this.saturation}, ${this.lightness})`
    }
  }
}
const store = new Store()

export default store
