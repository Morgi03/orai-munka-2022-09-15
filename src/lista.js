const lista = [];

export function hozzaad(num) {
if (num<0) {
    console.log("Hiba! A számérték kisebb mint nulla!");
}else{
    lista.push(num);
}
}

export function atlag(){
   const listaatlag = lista.reduce((a, b) => a + b, 0) / lista.length;
   console.log(listaatlag);
}


