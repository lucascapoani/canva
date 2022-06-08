let tela = document.getElementById('tela');

let context = tela.getContext('2d');

let x = 250;
let y = 250;
let raio = 100;

let inicio = 0;
let fim = 1 * Math.PI;

context.beginPath();
context.strokeStyle = "white";
context.fillStyle = "red"
/*Construir um círculo = x (distancia para a borda), y (distancia topo), raio, angulo que ele começa EM RADIANOS, angulo que termina. */
context.arc(x,y,raio,inicio,fim);
context.fill();
context.stroke();