function numero(n){
    if ((n >= 1) && (n <= 10))
      return n+ " Se encuentra dentro del rango determinado";
    else
      return "Se encuentra fuera del rango determinado";
  }

console.log(numero(11));
