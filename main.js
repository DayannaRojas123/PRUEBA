let titulo = document.getElementById('titulo')

let divinicio = document.getElementById('inicio')
let divclientes = document.getElementById('clientes')
let divcredito = document.getElementById('creditos')

function vistainicio() {

   titulo.innerHTML = 'INICIO'


   divinicio.style.visibility = 'visible'

   divclientes.style.visibility = 'hidden'
   divcredito.style.visibility = 'hidden'


}


function vistaclientes() {

   titulo.innerHTML = 'CLIENTES'


   divinicio.style.visibility = 'hidden'

   divclientes.style.visibility = 'visible'
   divcredito.style.visibility = 'hidden'


}


function vistacreditos() {

   titulo.innerHTML = 'NUEVO CREDITO'


   divinicio.style.visibility = 'hidden'

   divclientes.style.visibility = 'hidden'
   divcredito.style.visibility = 'visible'


}


function agregarcliente(texto) {


   let select = document.getElementById('sel1')

   texto = select.options[select.selectedIndex].text

   console.log(texto)


   let nombre = document.getElementById('nombre')
   let nit = document.getElementById('nit')
   let direccion = document.getElementById('direccion')
   let ciudad = texto


   let telefono = document.getElementById('telefono')
   let cupodisponible = document.getElementById('cupodisponible')
   let apellido = document.getElementById('apellido')

   let tbody = document.getElementById('tbody')
   let activo = 'activo'

   ////////


   let trnombre = document.createElement('tr')


   let tdnombre = document.createElement('td')
   let tdnit = document.createElement('td')
   let tdtelefono = document.createElement('td')
   let tdcupodisponible = document.createElement('td')
   let tdapellido = document.createElement('td')
   let tddireccion = document.createElement('td')
   let tdciudad = document.createElement('td')
   let tdactivo = document.createElement('td')

   let btneliminar = document.createElement('button')
   let btneditar = document.createElement('button')


   btneliminar.className = "btn btn-light btn-outline-danger btn-sm float-end delete"
   btneliminar.appendChild(document.createTextNode('🗑️'))


   btneditar.className = 'btn btn-primary'
   btneditar.appendChild(document.createTextNode('✍'))


   tdnit.appendChild(document.createTextNode(nit.value))
   tdapellido.appendChild(document.createTextNode(apellido.value))
   tdnombre.appendChild(document.createTextNode(nombre.value))
   tdtelefono.appendChild(document.createTextNode(telefono.value))
   tdcupodisponible.appendChild(document.createTextNode(cupodisponible.value))
   tddireccion.appendChild(document.createTextNode(direccion.value))
   tdciudad.appendChild(document.createTextNode(ciudad))
   tdactivo.appendChild(document.createTextNode(activo))


   tbody.appendChild(trnombre)
   trnombre.appendChild(tdnombre)
   trnombre.appendChild(tdapellido)
   trnombre.appendChild(tdnit)
   trnombre.appendChild(tddireccion)

   trnombre.appendChild(tdciudad)
   trnombre.appendChild(tdtelefono)
   trnombre.appendChild(tdcupodisponible)
   trnombre.appendChild(tdactivo)
   trnombre.appendChild(btneliminar)
   trnombre.appendChild(btneditar)


   ////////


}