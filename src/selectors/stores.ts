import { Store, State } from '../interfaces'

/**
 * Returns the prize object for a specified id
 * @param {Object} state
 * @param {Number} id
 */
export default function getStoreById(state: State, id: number) {
  return state.stores.find((store: Store) => store.id === id)
}