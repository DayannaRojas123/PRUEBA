let titulo = document.getElementById('titulo')

let divinicio = document.getElementById('inicio')
let divclientes = document.getElementById('clientes')
let divcredito = document.getElementById('creditos')





function vistainicio() {

   titulo.innerHTML = 'INICIO'


   divinicio.style.display = 'block'

   divclientes.style.display = 'none'
   divcredito.style.display = 'none'


}


function vistaclientes() {

   titulo.innerHTML = 'CLIENTES'


   divinicio.style.display = 'none'

   divclientes.style.display = 'block'
   divcredito.style.display = 'none'


}


function vistacreditos() {

   titulo.innerHTML = 'NUEVO CREDITO'


   divinicio.style.display = 'none'

   divclientes.style.display = 'none'
   divcredito.style.display = 'block'


}

let cantclientes=0
let cantcreditos=0



let gracia=document.getElementById('gracia')

let nombredt=document.getElementById('nombredt')
let nitdt=document.getElementById('nitdt')

let ciudaddt=document.getElementById('sel1dt')


let apellidodt=document.getElementById('apellidodt')
let direcciondt=document.getElementById('direcciondt')

let telefonodt=document.getElementById('telefonodt')
let cupototaldt=document.getElementById('cupototaldt')
let cupodisponibledt=document.getElementById('cupodisponibledt')
let graciadt=document.getElementById('graciadt')
let estadodt=document.getElementById('estadodt')


let activo = 'inactivo'
let info=[]
let data


function agregarcliente() {

   event.preventDefault()



   let select = document.getElementById('sel1')

   ciudadindex=select.selectedIndex

   texto = select.options[select.selectedIndex].text

   console.log(texto)


   let nombre = document.getElementById('nombre')
   let nit = document.getElementById('nit')
   let direccion = document.getElementById('direccion')
   let ciudad = texto


   let telefono = document.getElementById('telefono')

   let cupodisponible = document.getElementById('cupodisponible')

   if(cupodisponible.value ==''){

      cupodisponible=document.getElementById('cupototal')

   }else(document.getElementById('cupototal').value==cupodisponible.value)


   let apellido = document.getElementById('apellido')

   let tbody = document.getElementById('tbody')
 

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
   btneliminar.setAttribute('id','delete')


   btneditar.className = 'btn btn-primary edit'
   btneditar.appendChild(document.createTextNode('✍'))
   btneditar.setAttribute('data-bs-toggle','modal')
   btneditar.setAttribute('data-bs-target','#modaldetalles')



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

   cantclientes++

trnombre.addEventListener('click',(evento)=>{

   console.log(evento)
   
   if(evento.target.classList.contains("delete")) {
		if(confirm("¿Seguro de eliminar este cliente?")) { //muestra un mensaje de confirmacion y elimina al hijo de li de la lista
			let li = evento.target.parentNode;
        
         li.remove()

         cantclientes--

       
      
            let numeroclientes=document.getElementById('numeroclientes')
         
            numeroclientes.innerHTML=cantclientes
            console.log(cantclientes)
       
         
		
		}
	}




   if(evento.target.classList.contains("edit")){


    /*  let select1=document.getElementById('sel1')
      let selectcliente=select1.options[select1.selectedIndex].text
    
      let select2=document.getElementById('sel1dt')
      select2.append('<option value="' +selectcliente + '" selected>'+ selectcliente + '</option>')*/



      data=evento.target.parentNode.children

 
      nombredt.value=data[0].textContent
      nitdt.value=data[2].textContent
      apellidodt.value=data[1].textContent
      direcciondt.value=data[3].textContent
      telefonodt.value=data[5].textContent
      cupototaldt.value=data[6].textContent
      cupodisponibledt.value=data[6].textContent
      graciadt.value=gracia.value


  //sel1dt=sel1dt.options[ciudadindex].value




      info.push(data)



   



   }
   


})
   

if(cantclientes>0){

   let numeroclientes=document.getElementById('numeroclientes')

   numeroclientes.innerHTML=cantclientes
   console.log(cantclientes)
}



}


let tabla=document.getElementById('tablacliente')


function editarcliente(){

   event.preventDefault()



  
data[0].textContent=nombredt.value
   data[1].textContent=apellidodt.value
   data[2].textContent= nitdt.value
   data[3].textContent=direcciondt.value
   data[5].textContent=telefonodt.value
   data[6].textContent= cupototaldt.value
graciadt=gracia.value
   data[7].textContent=estadodt.options[estadodt.selectedIndex].value
   data[4].textContent=ciudaddt.options[ciudaddt.selectedIndex].value




}

function crearcredito(){

   event.preventDefault()

   cantcreditos++

   if(cantcreditos>0){

      let numerocreditos=document.getElementById('numerocreditos')
   
      numerocreditos.innerHTML=cantcreditos
      console.log(cantcreditos)
   }

   alert('credito creado exitosamente')


}

let lupa1=document.getElementById('lupa1')


lupa1.addEventListener('keyup',(element)=>{


 

   console.log(element.target.value)
   
let tdnombre=document.getElementsByTagName('td')
let trnombre=document.getElementsByTagName('tr')


for(let i=0;i<tdnombre.length;i++){



tdnombre[i].textContent.toLowerCase().includes(element.target.value.toLowerCase())

?tdnombre[i].classList.remove('filtro')
:tdnombre[i].classList.add('filtro')

}



   /*   trnombre.forEach(e => {

         console.log(e.value)

        e.value.toLowerCase().includes(element.target.value.toLowerCase())
         ?e.classList.remove('filtro')
         :e.classList.add('filtro')
         
      })*/

   }
)

document.addEventListener('beforeunload',()=>{

   alert('estas seguro de querer recargar la pagina?')
})
