let nombre= document.getElementById('nombre')
let gasto= document.getElementById('gasto')
let button = document.querySelector('button')
let monto = [];
let persona = [];

button.onclick= function enviar() {

if (nombre.value.length && gasto.value.length > 0){
    let list= document.createElement('li');
    list.innerHTML = nombre.value + ' ' + '$' + gasto.value; //uno nombre y gasto
    lista.appendChild(list); //muestro cada entrada con nombre y gasto
}

if(monto.length === 0 || persona.indexOf(nombre.value) === -1){
    
    persona.push(nombre.value)//me guardo el nombre de cada persona
    monto.push(parseFloat(gasto.value))//me guardo el valor de cada gasto
    
} else {
    
    let index = persona.indexOf(nombre.value) //busco el nombre en la posición array
    monto[index] += parseFloat(gasto.value) //si lo encontro lo sumo al gasto
    
}
        
    let suma= 0 //PARA INCIAR LA SUMA
    let division= 0 // para dividir cada monto

    for (let i = 0; i < monto.length; i++) { //CALCULO DEL TOTAL
        suma += parseFloat (monto [i])
        division = suma / monto.length
    }
   

    let total= document.getElementById('textototal'); //PARA MOSTRAR TOTAL
    total.innerHTML = '$' + suma;
    totalmostra.appendChild(total)
    
    
    let promedio= document.getElementById('textocadauno')
    promedio.innerHTML= '$' +  division
    cadauno.appendChild(promedio)

    nombre.value = '';
    gasto.value = '';
}