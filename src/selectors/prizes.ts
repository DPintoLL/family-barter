import { Prize, Store, State } from '../interfaces'

/**
 * Returns the prize object for a specified id from state
 * @param {Object} state
 * @param {Number} id
 */

export function getPrizeFromStateById(state: State, id: Number): Prize | null {
  return (
    state.stores
      .reduce((prizes: Array<Prize>, store: Store) => {
        return prizes.concat(store.prizes);
      }, [])
      .find((prize: Prize) => prize.id === id) || null
  );
}

export function getPrizeFromStoreById(store: Store, id: Number): Prize | null {
  return store.prizes.find((prize: Prize) => prize.id === id) || null
}
