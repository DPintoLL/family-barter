import { Store, IState } from "../interfaces";

/**
 * Returns the prize object for a specified id
 * @param {Object} state
 * @param {Number} id
 */
export default function getStoreById(state: IState, id: number) {
  return state.stores.find((store: Store) => store.id === id);
}
