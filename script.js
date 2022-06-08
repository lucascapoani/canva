let tela = document.getElementById('tela');

let context = tela.getContext('2d');
/*Criar linhas*/
context.moveTo(0,0);
context.lineTo(250, 250);
context.lineTo(500,0);
/*Dará a "espessura" da linha efetivamente*/
context.lineWidth = 5;
/*Stroke faz a "espessura" da linha efetivamente aparecer na tela*/
context.stroke();

/*Criar retangulos*/
/*Estilização do retângulo*/
context.fillStyle = "red";
context.strokeStyle = "white";
/*Coordenadas: início coord x, coord y, largura, altura*/
context.fillRect(10,10,100,200);

context.stroke();
context.fill();

