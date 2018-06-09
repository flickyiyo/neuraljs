import {observable} from 'mobx';
import Red from './Red';
import Conf from './Conf';

class Store {
  @observable red = new Red();
  @observable conf = Conf;

  changeValue(chkIndex, arrIndex) {
    console.log(this.conf[arrIndex]);
    const casilla = this.conf[arrIndex][chkIndex];
    if(casilla===0) {
      this.conf[arrIndex][chkIndex] = 1;
    } else {
      this.conf[arrIndex][chkIndex] = 0;      
    }
  }

}

const store = new Store();

export default store;
