import { Lightning, Utils, Router } from '@lightningjs/sdk'
import routes from './Routes/routes'

export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  _setup() {
    Router.startRouter(routes)
  }

  static _template() {
    return {
      ...super._template(),
    }
  }

  // _init() {
  //   this.tag('Background')
  //     .animation({
  //       duration: 15,
  //       repeat: -1,
  //       actions: [
  //         {
  //           t: '',
  //           p: 'color',
  //           v: { 0: { v: 0xfffbb03b }, 0.5: { v: 0xfff46730 }, 0.8: { v: 0xfffbb03b } },
  //         },
  //       ],
  //     })
  //     .start()
  // }
}
