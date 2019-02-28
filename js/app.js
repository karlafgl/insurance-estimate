//Constructor para seguro

function Seguro(marca, anio, tipo){
    this.marca = marca
    this.anio = anio
    this.tipo = tipo
}

//Todo lo que se muestra
function Interfax(){

}

//EventListener

const formulario = document.getElementById('cotizar-seguro').addEventListener('submit', function(e){
     //Leer la marca seleccionada del selected
     const marca = document.getElementById('marca')
     const marcaSeleccionada = marca.options[marca.selectedIndex].value

     //Leer el valor del anio seleccionado del <select>
     const anio = document.getElementById('anio')
     const anioSeleccionado = anio.options[anio.selectedIndex].value

     //Leer el valor del radio button 
     const tipo = document.querySelector('input[name="tipo"]:checked').value

     //Crear instancia de interafaz
     const interfaz = new Interfax();

     //Revisamos que los campos no esten vacios
     if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
         console.log('Faltan datos')
     } else {
         console.log('siii correcto')
     }



  
    
    
    e.preventDefault()
})

//Codigo que generara los años del selector

const max = new Date().getFullYear() //<-- este sera el ano maximo
const min = max - 20;

const selectAnios = document.getElementById('anio')
for(let i = max; i > min; i --){
    let option = document.createElement('option')
    option.value = i
    option.innerHTML = i
    selectAnios.appendChild(option)
}


