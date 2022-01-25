//USANDO FUNCIONES 

//Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;

//console.log("Los lados del cuadrado miden: "+ladoCuadrado);

function perimetroCuadrado (lado) {
    return lado * 4;
} 

//console.log("Perimetro del cuadrado es: "+ perimetroCuadrado +" cm" )

//const areaCuadrado = ladoCuadrado * 2;

function areaCuadrado (lado){
    return lado * lado;
}

console.log("Area del cuadrado es: "+ areaCuadrado + " cm2");
console.groupEnd();
//Código del triangulo
console.group("Triangulo");

const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 5;


console.log(`Los lados del triangulo miden 
${ladoTriangulo1} cm 
${ladoTriangulo2} cm y 
${baseTriangulo} cm`);

const alturaTriangulo = 2;
console.log("La altura del triangulo es de : "+alturaTriangulo);
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 +baseTriangulo;
//console.log("El perimetro dle triángulo es: "+perimetroTriangulo);
function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
function areaTriangulo (baseTriangulo, alturaTriangulo){
     return ((baseTriangulo * alturaTriangulo)/2);
    
} 
console.log("El área del triangulo es de: " + areaTriangulo);

function isIsosceles(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    if (ladoTriangulo1 == ladoTriangulo2 && ladoTriangulo1 == baseTriangulo)
    {
        return Math.sqrt((ladoTriangulo1 ** 2) - ((ladoTriangulo1/2) ** 2))
    }
    
}


console.groupEnd()


//Código circulo

console.group("Circulo")
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: "+radioCirculo);

//Diametro
function diametroCirculo (radio){
    return radio * 2;
}


//console.log("El diametro del circulo es: "+diametroCirculo);
//PI
const PI = 3.1415; //ó PI = Math.PI

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI; //2pi R

} 
console.log("El perimetro del circulo es: "+perimetroTriangulo);
//Area
function areaCirculo (radioCirculo){
    
    return (radioCirculo * radioCirculo) * PI;
} 
console.log("El area del circulo es: "+ areaCirculo);
console.groupEnd()


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTrianguloBase");
    
    const value1 =  parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const value1 = parseInt(document.getElementById("InputTrianguloBase").value);
    const value2 = parseInt(document.getElementById("InputTrianguloAltura").value);

    const area = areaTriangulo(value1, value2);
    alert(area)
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

function calcularIsIsosceles(){
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTrianguloBase");

    const value1 =  parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const altura = isIsosceles(value1, value2, value3);

    document.getElementById("InputTrianguloAltura").value = altura;
    
}