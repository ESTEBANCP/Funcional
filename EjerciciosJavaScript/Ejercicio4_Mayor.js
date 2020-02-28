var arreglo  = [5,24,6,3,9,10];
    maximo = 0;

for(var i=0,len=arreglo .length;i<len;i++){
    if(maximo < arreglo [i]){
        maximo = arreglo [i];
    }
}
console.log("El numero mayor es: "+maximo);