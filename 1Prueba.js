const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

// usar arrays 

var tiposSubs = [
    {nombre: "Free", descp: "Solo puedes tomar los cursos gratis"},
    {nombre: "Basic", descp: "Puedes tomar casi todos los cursos de Platzi durante un mes" },
    {nombre: "Expert", descp: "Puedes tomar casi todos los cursos de Platzi durante un año"},
    {nombre: "ExpertPlus", descp: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" }
]

var miSus = tiposSubs.find(function(sub){
    return sub.nombre==="Basic"
})