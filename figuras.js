//Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: "+ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;

console.log("Perimetro del cuadrado es: "+ perimetroCuadrado +" cm" )

const areaCuadrado = ladoCuadrado * 2;

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
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 +baseTriangulo;
console.log("El perimetro dle triángulo es: "+perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triangulo es de: " + areaTriangulo);



console.groupEnd()


//Código circulo

console.group("Circulo")
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: "+radioCirculo);

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: "+diametroCirculo);
//PI
const PI = 3.1415; //ó PI = Math.PI

//Circunferencia
const perimetroCirculo = diametroCirculo * PI; //2pi R
console.log("El perimetro del circulo es: "+perimetroTriangulo);
//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: "+ areaCirculo);
console.groupEnd()