var box = document.createElement('input');
var contenedor = document.createElement('div');
var tarj=0;

function crear(obj){
	espacio = document.getElementById('espacio');
	contenedor.id ='div'
	espacio.appendChild(contenedor);
	
	box.setAttribute('type', 'text');
	box.setAttribute('placeholder', 'ingrese nombre de la lista');
	box.setAttribute('class', 'espace')
	contenedor.appendChild(box);
	 
	var boton = document.createElement('button');
	boton.className='btn btn-success marl';
	boton.innerHTML ='Guardar';
	contenedor.appendChild(boton);
	boton.setAttribute('onclick','guardar()');
	box.focus();

}

function guardar(){
 	contenedor2 = document.createElement('div');
 	contenedor2.setAttribute('class', 'div1');
 	contenedor.appendChild(contenedor2);

	var texto = document.createElement('p');
 	
 	contenedor2.appendChild(texto);
 	var tituloList = document.createElement('h2');
 	texto.appendChild(tituloList);
 	tituloList.innerHTML = box.value;

 	var boton2 = document.createElement('button');
 	boton2.className='btn btn-success marl';
 	boton2.setAttribute('id', 'boton');
 	boton2.innerHTML='crear tarjeta';
	
	contenedor2.appendChild(boton2);
	box.value='';

 	boton2.onclick = function (){
 		var contenedor3 = document.createElement('div');
		contenedor2.appendChild(contenedor3);
		var box2 = document.createElement('input');
		box2.setAttribute('type', 'text');
		box2.setAttribute('placeholder', 'ingrese nombre de la tarjeta');
		box2.setAttribute('class', 'espace');
		contenedor3.appendChild(box2);
		contenedor3.setAttribute('draggable','true');

		var boton3 = document.createElement('button');
		boton3.className='btn btn-success';
	 	boton3.setAttribute('id', 'boton3');
	 	boton3.innerHTML='guardar targeta';
	 	contenedor3.appendChild(boton3);
	 	box2.focus();

	 	boton3.onclick = function(){
	 		box2.focus();
	 		if (box2.value==='') {
	 			box2.setAttribute('placeholder','ingrese un nombre');
	 			return false;
	 		}
	 		var contenedor4 = document.createElement('div');
	 		contenedor4.setAttribute('class', 'div2');
	 		contenedor3.appendChild(contenedor4);
	 		var contenido = document.createElement('textarea');
	 		contenido.innerHTML=box2.value;
	 		contenedor4.appendChild(contenido);
	 		var insertar = contenedor2.insertBefore(contenedor4,contenedor3);
	 		tarj++;
	 		contenedor4.setAttribute('id',+tarj);
	 		contenedor4.setAttribute('draggable','true');

	 		contenedor4.ondragstart=function(e){
	 			e.dataTransfer.setData('text',this.id);
	 		}
	 		contenedor4.ondragenter=function(e){
	 			
	 		}
	 		contenedor2.ondragover=function(e){
	 			/*var clase =e.target.getAttribute('class');*/
	 			/*if (clase=='div1') */
	 			e.preventDefault();
	 			/*return;*/
	 		}
	 		contenedor2.ondrop=function(e){
	 			var id =e.dataTransfer.getData('text');
	 			this.insertBefore(document.getElementById(id),this.childNode);
	 		}

	 		box2.value='';
	 	}
	
 	}
}



