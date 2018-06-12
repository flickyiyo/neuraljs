import autobind from 'autobind-decorator';
export default class Neurona {
  entradas = [];
  pesos = [];
  factorEntrenamiento = 0.2;
  salida = undefined;
  rangoError = 0.001;
  constructor(entradas, umbral = .5, act = undefined) {
    this.entradas = entradas;
    this.pesos = this.entradas.map(() => 0);
    // this.act = act.bind(this);
    this.umbral = umbral;
  }
  @autobind
  activacionSigmoidal() {
    let x = 0;
    this.entradas.forEach((entrada, indice) => {
      x += entrada * this.pesos[indice];
    });
    const resultado = 1 / (1 + Math.pow(Math.E, -x));
    this.salida = resultado;
    return resultado;
  }

  activacion() {
    let acumulador = 0;
    this.entradas.forEach((entrada, indice) => {
      acumulador += this.pesos[indice] * entrada;
    });
    this.salida = acumulador;
    return acumulador > this.umbral ? 1 : 0;
  }

  @autobind
  entrenar(error) {

    const pesosNuevos = [];
    this.entradas.forEach((entrada, indice) => {
      pesosNuevos.push(
        (error * this.factorEntrenamiento * entrada) + this.pesos[indice]
      )
    });
    this.pesos = pesosNuevos;
    this.activacionSigmoidal();
    return this.salida;
  }
}