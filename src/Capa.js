import Neurona from './Neurona';

export default class Capa {
  /**
   * Array de neuronas
   */
  neuronas = [];
  constructor(nNeuronas, entradas) {
    if (entradas !== undefined) {
      for (let i = 0; i < nNeuronas; i++) {
        this.neuronas.push(new Neurona());
      }
    }
  }
  setEntradas(entradas) {
    for (let i = 0; i < this.neuronas.length; i++) {
      this.neuronas[i].entradas = entradas;

    }
  }

  getSalidas() {
    return this.neuronas.map((neurona) => neurona.activacion());
  }

  /**
   * 
   * 
   * @param {Array} valoresDeseados Es un arreglo de igual longitud que las neuronas de la capa
   */
  entrenarNeuronas(valoresDeseados) {
    if (valoresDeseados.length === this.neuronas.length) {
      this.neuronas.forEach((neurona, indiceNeurona) => {
        const salida = neurona.activacion();
        const error = valoresDeseados[indiceNeurona] - salida;
        let valor = undefined;
        neurona.entrenar(error, valoresDeseados[indiceNeurona]);
        while (
          neurona.salida !== valoresDeseados[indiceNeurona]
          // neurona.salida < valoresDeseados[indiceNeurona] - neurona.rangoError ||
          // neurona.salida > valoresDeseados[indiceNeurona] + neurona.rangoError
        ) {
          console.log(neurona);
          valor = neurona.activacion();
          neurona.entrenar(error, valoresDeseados[indiceNeurona]);
        }
      });
      
    }
  }

}