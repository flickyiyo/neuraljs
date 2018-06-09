import {observable} from 'mobx';
import Red from './Red';

class Store {
  @observable red = new Red();
}

const store = new Store();

export default store;
