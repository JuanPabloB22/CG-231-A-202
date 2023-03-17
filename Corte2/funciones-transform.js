/**
 * Geometria: Construye una geometria THREEJS y la retorna
 * ENTRADAS: vx = Arreglo de vertices(arreglo de enteros)
 * SALIDAS: geom = Geometría generada a partir de vx 
 */
function Geometria (vx){
    geom=new THREE.Geometry();
    var largoVertice = vx.length;
    for (i = 0; i < largoVertice; i++) {
        x = vx[i][0];
        y = vx[i][1];
        z = vx[i][2];
        vector = new THREE.Vector3(x, y, z);
        geom.vertices.push(vector);
    }
    return geom;
}
/**
 * Escalado: Construye la matriz de translación THREEJS para el vector vs y la retorna
 * ENTRADAS: vs = Vector de escalado (arreglo de enteros)
 * SALIDA: matriz = Matriz de escalado para el vector vs
 */

function Escalado (vs) {
    var matrizS = new THREE.Matrix4();
    matrizS.set(vs[0], 0, 0, 0,
                0, vs[1], 0, 0,
                0, 0, vs[2], 0,
                0, 0, 0, 1);

    return matrizS;
    }
/**
 * EscaladoReal: Aplica el vector de escalado vs al objeto fig
 * ENTRADAS: fig = Objeto tipo THREE.Line que representa el objeto gráfico
 *           posini= Posición inicial del fig (array de enteros)
 *           vs = Vector de escalado (arreglo de enteros)
 * SALIDA: 
 */


function EscaladoReal(fig, posini ,vs){
    tr = [-posini[0],-posini[1],-posini[2]];    // Vector para llevar al origen
    fig.applyMatrix(Traslacion(tr));   //Se aplica la matriz de translación a fig al origen
    fig.applyMatrix(Escalado(vs));     //Se aplica la matriz de escalado a fig 
    fig.applyMatrix(Traslacion(posini)); //Se aplica la matriz de translación con posición inicial a fig
}
/**
 * Translación: Construye la matriz de translación para el vector vt y la retorna 
 * ENTRADAS: vt= Vector de translación (Arreglo de enteros)
 * SALIDAS: matrizT= Matriz de translación para el vector vt
 */
function Traslacion(vt){
    var matrizT = new THREE.Matrix4();
    matrizT.set(1, 0, 0, vt[0],
                0, 1, 0, vt[1],
                0, 0, 1, vt[2],
                0, 0, 0, 1);
    return matrizT;
    }


/**
 * RotacionX: Construye la matriz de rotacion en el eje x y la retorna
 * ENTRADAS: angulo =  Angulo de rotacion en el eje x 
 * SALIDAS: matrizRX = Matriz de rotacion para el angulo ingresado
 */
function RotacionX(angulo){
    var matrizRX = new THREE.Matrix4(); 
    var alpha = angulo*Math.PI/180; 
    var cos = Math.cos(alpha);
    var sen = Math.sin(alpha);   
    matrizRX.set(1,   0,   0, 0,
                0, cos,-sen, 0,
                0, sen, cos, 0,
                0 ,  0,  0,  1)

    return matrizRX;   

}
function RotacionRealX(fig, posini, angulo){
    tr = [-posini[0],-posini[1], -posini[2]];    // Vector para llevar al origen
    fig.applyMatrix(Traslacion(tr));   //Se aplica la matriz de translación a fig al origen
    fig.applyMatrix(RotacionX(angulo)); //Se aplica el angulo de rotacion en el eje X
    fig.applyMatrix(Traslacion(posini)); //Se aplica la matriz de translación con posición inicial a fig  
    
}

/**
 * RotacionY: Construye la matriz de rotacion en el eje Y y la retorna
 * ENTRADAS: angulo =  Angulo de rotacion en el eje Y 
 * SALIDAS: matrizRX = Matriz de rotacion para el angulo ingresado
 */
function RotacionY(angulo){
    var matrizRY = new THREE.Matrix4();  
    var alpha = angulo*Math.PI/180; 
    var cos = Math.cos(alpha);
    var sen = Math.sin(alpha);  
    matrizRY.set(cos,   0, sen, 0,
                  0,   1,   0, 0,
                -sen,  0, cos, 0,
                  0,   0,  0,  1)

    return matrizRY; 
}
function RotacionRealY(fig, posini, angulo){
    tr = [-posini[0],-posini[1], -posini[2]];    // Vector para llevar al origen
    fig.applyMatrix(Traslacion(tr));   //Se aplica la matriz de translación a fig al origen
    fig.applyMatrix(RotacionY(angulo)); //Se aplica el angulo de rotacion en el eje Y
    fig.applyMatrix(Traslacion(posini)); //Se aplica la matriz de translación con posición inicial a fig  
    
}
/**
 * RotacionZ: Construye la matriz de rotacion en el eje Z y la retorna
 * ENTRADAS: angulo =  Angulo de rotacion en el eje Z 
 * SALIDAS: matrizRZ = Matriz de rotacion para el angulo ingresado
 * 
 */

function RotacionZ(angulo){
    var matrizRZ = new THREE.Matrix4();
    var alpha = angulo*Math.PI/180; 
    var cos = Math.cos(alpha);
    var sen = Math.sin(alpha);    
    matrizRZ.set(cos,-sen, 0, 0,
                sen, cos, 0, 0,
                 0,   0,  1, 0,
                 0,   0,  0, 1)

    return matrizRZ;
}
function RotacionRealZ(fig, posini, angulo){
    tr = [-posini[0],-posini[1], -posini[2]];    // Vector para llevar al origen
    fig.applyMatrix(Traslacion(tr));   //Se aplica la matriz de translación a fig al origen
    fig.applyMatrix(RotacionZ(angulo)); //Se aplica el angulo de rotacion en el eje Z
    fig.applyMatrix(Traslacion(posini)); //Se aplica la matriz de translación con posición inicial a fig  
    
}

