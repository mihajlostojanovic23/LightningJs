import Lightning from '@lightningjs/sdk/src/Lightning'
import Sidebar from '../components/Sidebar'

export default class Home extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      SideBar: {
        type: Sidebar,
        rect: true,
        w: 300,
        h: 1080,
        flex: { direction: 'column', alignItems: 'center' },
        color: 0xff000000,
      },
    }
  }
}
