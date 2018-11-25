import Vue from 'vue'
import Vuex from 'vuex'

import game from './module-game'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store(game)
  return Store
}
