import { Prize, Store, IState } from "../interfaces";

/**
 * Returns the prize object for a specified id from state
 * @param {Object} state
 * @param {number} id
 */

export function getPrizeFromStateById(state: IState, id: number): Prize | null {
  return (
    state.stores
      .reduce((prizes: Prize[], store: Store) => {
        return prizes.concat(store.prizes);
      }, [])
      .find((prize: Prize) => prize.id === id) || null
  );
}

export function getPrizeFromStoreById(store: Store, id: number): Prize | null {
  return store.prizes.find((prize: Prize) => prize.id === id) || null;
}
