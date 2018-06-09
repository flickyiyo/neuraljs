import autobind from 'autobind-decorator';
export default class Neurona {
  entradas = [];
  pesos = [];
  factorEntrenamiento = 0.1;
  salida = undefined;
  constructor(entradas) {
    this.entradas = entradas;
    this.pesos = this.entradas.map(() => 0);
  }

  activacion() {
    let acumulador = 0;
    this.entradas.forEach((entrada, indice) => {
      acumulador += this.pesos[indice] * entrada;
    });
    this.salida = acumulador;
    return acumulador > .5 ? 1 : 0;
  }

  @autobind
  entrenar(error, valorDeseado) {

    const pesosNuevos = [];
    this.entradas.forEach((entrada, indice) => {
      pesosNuevos.push(
        (error * this.factorEntrenamiento * entrada) + this.pesos[indice]
      )
    });
    this.pesos = pesosNuevos;
    this.salida = this.activacion();
    return this.salida;
  }
}