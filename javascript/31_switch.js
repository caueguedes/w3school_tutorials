// SWITCH STATEMENT
// switch(expression) { case x: console.log(x); break; case y: console.log(y); break; default: console.log("Default");}

switch (new Date().getDay()) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sabado");
    break;       
  default:
    console.log("Você esta procurando um dia que não existe.")
}