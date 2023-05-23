import Lightning from '@lightningjs/sdk/src/Lightning'
import { Button } from '@lightningjs/ui-components'

export default class Buttons extends Button {
  static _template() {
    return {
      rect: true,
      w: 300,
      h: 100,
      color: 0xffffffff,
      text: {
        text: '1',
        fontSize: 20,
        textAlign: 'center',
        verticalAlign: 'middle',
        letterSpacing: 2,
      },
    }
  }
}
