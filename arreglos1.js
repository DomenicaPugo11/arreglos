let edadesIzquierda=[12,15]
let edadesDerecha=[20,25]

function agregarEdad(){
    let txtEdad=document.getElementById("edad");
    let edad=parseInt(txtEdad.value);
    edadesIzquierda.push(edad);
    pintarArregloIzquierda();
}

function pintarArregloIzquierda(){
    let contenidoTabla="";
    let edad;
    let cmpTabla=document.getElementById("tablaIzquierda");
    for (let i=0;i<edadesIzquierda.length;i++){
        edad=edadesIzquierda[i]
        contenidoTabla+="<tr><td>";
        contenidoTabla+=edad;
        contenidoTabla+="</td><td><button onclick='eliminarIzquierdo("+ i +")'>ELIMINAR</button></td>";
        contenidoTabla+="<td><button onclick='moverHaciaDerecha("+i+")'>MOVER</button></td>"
        contenidoTabla+="</tr>"
    }
    cmpTabla.innerHTML=contenidoTabla;
}

function eliminarIzquierdo(posicionElemento){
    edadesIzquierda.splice(posicionElemento,1);
    pintarArregloIzquierda();
}

function pintarArregloDerecha(){
    let contenidoTabla="";
    let edad;
    let cmpTabla=document.getElementById("tablaDerecha");
    for (let i=0;i<edadesDerecha.length;i++){
        edad=edadesDerecha[i]
        contenidoTabla+="<tr><td><button onclick='moverHaciaIzquierda("+i+")'>MOVER</button></td>"
        contenidoTabla+="<td>"+ edad+ "</td>";
        contenidoTabla+="<td><button onclick='eliminarDerecho("+i+")'>ELIMINAR</button></td>";
        contenidoTabla+="</tr>"
    }
    cmpTabla.innerHTML=contenidoTabla;
}

function eliminarDerecho(posicionElemento){
    edadesDerecha.splice(posicionElemento,1);
    pintarArregloDerecha();

}

function moverHaciaDerecha(posicion){
    let edad=edadesIzquierda[posicion];
    edadesDerecha.push(edad);
    edadesIzquierda.splice(posicion,1);
    pintarArregloDerecha();
    pintarArregloIzquierda();
}

function moverHaciaIzquierda(posicion){
    let edad=edadesDerecha[posicion];
    edadesIzquierda.push(edad);
    edadesDerecha.splice(posicion,1);
    pintarArregloDerecha();
    pintarArregloIzquierda();
}