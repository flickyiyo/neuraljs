import Neurona from './Neurona';

export default class Capa {
  /**
   * Array de neuronas
   */
  neuronas = [];
  constructor(nNeuronas, entradas) {
    for(let i = 0; i < nNeuronas; i++) {
      this.neuronas.push(new Neurona(entradas));
    }
  }

  setEntradas(entradas) {
    for(let i = 0; i < this.neuronas.length; i++){
      this.neuronas[i].entradas = entradas;
    }
  }

  /**
   * 
   * @param {Array} valoresDeseados Es un arreglo de igual longitud que las neuronas de la capa
   */
  entrenarNeuronas(valoresDeseados) {
    if(valoresDeseados.length === this.neuronas.length) {
      this.neuronas.forEach((neurona, indiceNeurona) => {
        neurona.activacion();
        neurona
      });
    }
  }

}