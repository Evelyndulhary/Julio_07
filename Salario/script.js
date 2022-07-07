let nombre;
let salario = 0;
let extra = 0;
let cantidad = 0;

let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    leerData()
})

function leerData(){
    nombre = document.getElementById('nombre').value
    cantidad = Number(document.getElementById('horatra').value)
    ValidarData()
}

function ValidarData(){
    if(isNaN(nombre)== false || isNaN(cantidad)== true ||
    nombre.length==0 || cantidad<0){
        swal("Error de informacion", "Ooops...", "Intentalo de nuevo");
    }
    else{
        calcular(cantidad)
    }
}

function calcular(cantidad){
    if(cantidad>=0 && cantidad<=40){
        salario = cantidad * 8000;
    document.getElementById('salarioSem').value = salario;
    document.getElementById('salarioEx').value = 0;
    document.getElementById('pago').value = salario;
    }

    else{
        extra = cantidad - 40;
        salario = (extra * 12000) + (40 * 8000);
        document.getElementById('salarioSem').value = 40 *8000;
        document.getElementById('salarioEx').value = extra * 12000;
        document.getElementById('pago').value = salario;
    }
}