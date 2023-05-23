import Lightning from '@lightningjs/sdk/src/Lightning'
import { Column } from '@lightningjs/ui-components'
import { getDiscoverMovies } from '../api/ApiService'
import { Items } from '../data/SideBar'

const movies = async function () {
  try {
    const discoverMovies = await getDiscoverMovies()
    console.log(discoverMovies)
  } catch (error) {
    console.log('Error getting discover movies:', error)
  }
}

movies()
export default class Sidebar extends Lightning.Component {
  static _template() {
    return {
      Text: {
        rect: true,
        x: 0,
        y: 0,
        color: 0xffffffff,
        text: {
          text: 'Menu',
        },
      },
      Column: {
        type: Column,
        rect: true,
        x: 0,
        y: 100,
        flex: { justifyContent: 'center' },
        color: 0xff9e9e9e,
        items: Items.map((item) => ({
          rect: true,
          w: 300,
          h: 100,
          color: 0xff525252,
          text: {
            text: item.title,
            fontSize: 20,
            textAlign: 'center',
            verticalAlign: 'middle',
            letterSpacing: 2,
          },
        })),
      },
    }
  }
}
