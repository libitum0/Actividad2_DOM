/*
 * Crea las etiquetas de texto y las cajas de texto.
 * Recibe por parámetros un array con las etiquetas y 
 * la tabla donde se van a colocar tanto las etiquetas
 * como las cajas dentro del formulario
*/
function crearCamposTexto(camposT,tabla){

//recorre todas las posiciones del array y devuelve
//el contenido de cada una en la variable campot
 for(let campot of camposT){
  
    let fila=document.createElement("tr"); //<tr></tr>
    let columna1=document.createElement("td");//<td></td>
    let etiqueta=document.createElement("label");//<label></label>
    let tetiqueta=document.createTextNode(campot);//tetiqueta
    etiqueta.setAttribute("class","textoEtiqueta");//<label class="textoEtiqueta"></label>
    etiqueta.appendChild(tetiqueta);//<td></td>
    columna1.appendChild(etiqueta);//<td><label class="textoEtiqueta"></label></td>
    
    let columna2=document.createElement("td");//<td></td>
    let caja=document.createElement("input");//<input>
    caja.setAttribute("class","textoCaja");//<input class="textoCaja">
    columna2.appendChild(caja);//<td><input class="textoCaja"></td>
    fila.appendChild(columna1);//<tr><td><label class="textoEtiqueta"></label></td></tr>
    fila.appendChild(columna2);//<tr>td><input class="textoCaja"></td></tr>
    tabla.appendChild(fila);//<table><tr><td><label class="textoEtiqueta"></label></td></tr><tr>td><input class="textoCaja"></td></tr>
     }

}
/*
 * Crea dos bloques de radio button con varias opciones cada uno.
 * Recibe por parámetros un array con las etiquetas de cada opción,  
 * la tabla donde se van a colocar los radio button y una variable
 * que definirá el nombre de cada uno de los bloques de radio button
*/
function crearRadioB(camposR,tabla,rd){
    
for(let campor of camposR){

    let fila=document.createElement("tr");//<tr></tr>
    let columna=document.createElement("td");//<td></td>
    let radio=document.createElement("input");//<input>
    let etrad=document.createElement("label")//<label></label>
    let tetrad = document.createTextNode(campor)//tetrad
    

    radio.setAttribute("type","radio");//<input type="radio">
    radio.setAttribute("id","seleccion");//<input type="radio" id="seleccion">
    radio.setAttribute("name",rd);//<input type="radio" id="seleccion" name="rd">

    if(campor=="Verde "){
         radio.setAttribute("checked",""); //<input type="radio" id="seleccion" name="rd" checked>
    }
    if(campor=="Gatobús "){
         radio.setAttribute("checked",""); //<input type="radio" id="seleccion" name="rd" checked>
    }

    etrad.setAttribute("for",campor);//<label for=campor></label>
    etrad.setAttribute("class","radiobutton");//<label for=campor class=estilo></label>
    etrad.appendChild(tetrad); //<label for=campor>tetrad</label>
    columna.appendChild(radio); //<td><input type="radio" id="seleccion" name="rd"></td>
    columna.appendChild(etrad);//<td><input type="radio" id="seleccion" name="rd"><label for=campor>tetrad</label></td>
    fila.appendChild(columna);//<tr><td><input type="radio" id="seleccion" name="rd"><label for=campor>tetrad</label></td></tr>
    tabla.appendChild(fila);//<table><tr><td><input type="radio" id="seleccion" name="rd"><label for=campor>tetrad</label></td></tr></table>
 }
}
/*
 * Crea un campo select con multiples opciones.
 * Recibe por parámetros un array con las etiquetas de cada opción,  
 * la tabla donde se va a colocar select 
*/
function crearSelect(camposS,tabla){

    let fila=document.createElement("tr"); //<tr></tr>
    let columna=document.createElement("td");//<td></td>
    let listaselect=document.createElement("label");//<label></label>
    let tListaS = document.createTextNode("Escoge una opción: ");//tListaS
    let select=document.createElement("select");//<select></select>

    select.setAttribute("name","ciudades");//<select name="ciudades"></select>
    select.setAttribute("class","select");//<select name="ciudades" class="select"></select>
    listaselect.setAttribute("class","texto");//<label class="texto"></label>
    listaselect.appendChild(tListaS);//<select name="ciudades" class="select">tListasS</select>
    columna.appendChild(listaselect);//<td><select name="ciudades" class="select">tListasS</select></td>
    fila.appendChild(columna);//<tr><td><select name="ciudades" class="select">tListasS</select></td></tr>
    tabla.appendChild(fila);//<table><tr><td><select name="ciudades" class="select">tListasS</select></td></tr></table>


    for(let campo of camposS){

        fila=document.createElement("tr");//<tr></tr>
        columna=document.createElement("td");//<td></td>

        let opciones=document.createElement("option");//<option></option>
        let topciones=document.createTextNode(campo);//topciones
        opciones.appendChild(topciones);//<option>topciones</option>
        select.appendChild(opciones);//<select name="ciudades" class="select"><option>topciones</option></select>
        columna.appendChild(select);//<td><select name="ciudades" class="select"><option>topciones</option></select></td>
        fila.appendChild(columna);//<tr><td><select name="ciudades" class="select"><option>topciones</option></select></td></tr>
        tabla.appendChild(fila);//<table><tr><td><select name="ciudades" class="select"><option>topciones</option></select></td></tr></table>
 
    }
    

}
/*
 * Crea dos contenedores div para añadir dos imágenes.
 * Recibe por parámetros el contenedor principal bajo el que  
 * se crearán estos dos contenedores
*/
function cargarImg(contPrincipal){

    let contImg1=document.createElement("div"); //<div></div>
    let contImg2=document.createElement("div");//<div></div>
    let imagen1=document.createElement("img");//<img></img>
    let imagen2=document.createElement("img");//<img></img>

    contImg1.setAttribute("id","imagen1"); //<div id="imagen1"></div>
    contImg1.setAttribute("class","imagen1");//<div id="imagen1" class="imagen2"></div>
    contImg2.setAttribute("id","imagen2");//<div id="imagen2"></div>
    contImg2.setAttribute("class","imagen2");//<div id="imagen2" class=imagen2></div>

    imagen1.setAttribute("class", "imagen1");//<img class="imagen1"></img>
    imagen1.setAttribute("src","assets/img/imagen1.jpg");//<img class="imagen1" src="assets/img/imagen1.jpg""></img>
    imagen2.setAttribute("class", "imagen2");//<img class="imagen2"></img>
    imagen2.setAttribute("src","assets/img/imagen2.jpg");//<img class="imagen2" src="assets/img/imagen2.jpg""></img>
    
    contImg1.appendChild(imagen1);//<div id="imagen1"><img class="imagen1" src="assets/img/imagen1.jpg""></img></div
    contImg2.appendChild(imagen2);//<div id="imagen2"><img class="imagen2" src="assets/img/imagen2.jpg""></img></div
    
    contPrincipal.appendChild(contImg1);//<div id="contenedor" class="contenedor"><div id="imagen1"><img class="imagen1" src="assets/img/imagen1.jpg""></img></div</div>
    contPrincipal.appendChild(contImg2);//<div id="contenedor" class="contenedor"><div id="imagen2"><img class="imagen2" src="assets/img/imagen2.jpg""></img></div</div>
}
/*
 * Crea un área de texto editable de 10x50
 * Recibe por parámetros la tabla en la que se colocará  
*/
function cargarTextarea(tabla){

    let area= document.createElement("textarea");//<textarea></textarea>
    let fila=document.createElement("tr");//<tr></tr>
    let columna=document.createElement("td");//<td></td>
    let tarea = document.createTextNode("Escribe tu opinión aquí: "); //tarea

    columna.setAttribute("colspan","2");//<td colspan=2></td>
    area.setAttribute("rows",10);//<textarea rows="10"></textarea>
    area.setAttribute("cols",50);//<textarea rows="10" cols="50"></textarea>
    area.appendChild(tarea);//<textarea rows="10" cols="50">"Escribe tu opinión aquí: "</textarea>
    columna.appendChild(area);//<td><textarea rows="10" cols="50">"Escribe tu opinión aquí: "</textarea></td>
    fila.appendChild(columna);//<tr><td><textarea rows="10" cols="50">"Escribe tu opinión aquí: "</textarea></td></tr>
    tabla.appendChild(fila);//<table><tr><td><textarea rows="10" cols="50">"Escribe tu opinión aquí: "</textarea></td></tr></table>
    
}

/*
 * Crea 5 ckeckboxs cada uno de ellos con una opción diferente
 * Recibe por parámetros un array con el texto de cada una de las 
 * opciones y la tabla que lo contendrá dentro del formulario
*/
function crearCheck(camposC,tabla){

    for(let campoc of camposC){

        let checkbox = document.createElement('input');//<input></input>
        let label = document.createElement('label');//<label></label>
        let textoLabel = document.createTextNode("Checkbox "+campoc);//textoLabel
        let fila=document.createElement("tr");//<tr></tr>
        let columna=document.createElement("td");//<td></td>
        
        checkbox.setAttribute("type",'checkbox');//<input type="checkbox"></input>
        checkbox.setAttribute("name",'checkbox');//<input type="checkbox" name="checkbox"></input>
        checkbox.setAttribute ("value",campoc);//<input type="checkbox" name="checkbox" value=campoc></input>
        checkbox.setAttribute("id",campoc);//<input type="checkbox" name="checkbox" value="1" id="checkbox1"></input>
        label.setAttribute("class","texto");//<label class="texto"></label>
        label.appendChild(textoLabel);//<label class="texto">campoc</label>
        columna.appendChild(checkbox);//<td>/<input type="checkbox" name="checkbox" value="1" id="checkbox1"></input></td>
        fila.appendChild(columna); //<tr><td><label><input type="checkbox" name="checkbox" value=campoc id=campoc></input>></label></td></tr>
        columna.appendChild(label);//<tr><td><label><input type="checkbox" name="checkbox" value=campoc id=campoc></input>></label>campoc</td></tr>
        tabla.appendChild(fila);//<table><tr><td><label><input type="checkbox" name="checkbox" value=campoc id=campoc></input>></label>campoc</td></tr></table>
    }   
}

/*
 * Crea una fila vacía en la tabla que contienen el formulario
 * Su funcionalidad es introducir un espacio para separar componentes 
 * y aportar una mayor claridad.
 * Recibe por parámetros la tabla y el valod de sepación vertical 
 * que se aplicará a la fila.
*/

function separar(tabla,espacio){
    let fila=document.createElement("tr");//<tr></tr>
    fila.setAttribute("height",espacio)//<tr height=espacio></tr>
    tabla.appendChild(fila) //<table>//<tr height=espacio></tr></table>
}

/*
 * Carga cada una de las funciones creadas con anterioridad para 
 * dar forma al formulario
*/

function cargar(){

 let camposT=['DNI ','Nombre ','Apellidos ','Direccion ','Telefono ']; //contiene los valores para las etiquetas e imputs
 let camposR1=['Rojo ','Azul ','Verde ','Amarillo ']; //contiene lo valores del radio button 1
 let camposR2=['Gatobús ','Tren ','Avión ','A Pie ']; //contiene lo valores del radio button 2
 let camposS=['Matsugou ','Ushinuma ','Tokorozawa ','Saitama ','Tokyo ']; //contiene lo valores del Select
 let camposC=['1 ','2 ','3 ','4 ','5 '] //contiene lo valores del Checkbox
 
 let formulario=document.createElement("form"); //<form></form>
 let tabla = document.createElement("table");//<table></table>
 
 formulario.setAttribute("id","formulario");//<form id="formulario"></form>
 contenedor.appendChild(formulario);//<div id="contenedor"><form></form></div>
 
 tabla.setAttribute("class","tabla");//<table class="tabla"></table>
 formulario.appendChild(tabla);//<form id="formulario"><table class="tabla"></table></form>


   crearCamposTexto(camposT,tabla)
   separar(tabla,20)
   crearRadioB(camposR1,tabla,"colores")
   separar(tabla,20)
   crearRadioB(camposR2,tabla,"numeros")
   separar(tabla,20)
   crearSelect(camposS,tabla)
   separar(tabla,20)
   cargarTextarea(tabla)
   separar(tabla,20)
   cargarImg(contenedor)
   crearCheck(camposC,contenedor)
}
