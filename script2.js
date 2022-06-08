let tela = document.getElementById('tela');

let context = tela.getContext('2d');

/*criar "caminhos"*/
context.beginPath();

context.lineWidth = 4;
context.strokeStyle = "white";
context.moveTo(10,10);
context.lineTo(400, 300);
context.stroke()

/*outra linha*/
context.beginPath();

context.lineWidth = 7;
/*estilo da linha*/
context.strokeStyle = "red";
/*estilo do preenchimento*/
context.fillStyle = "green";
/*moveTo = inicio da linha*/
context.moveTo(50,50);
context.lineTo(300, 300);
context.lineTo(200,300);
/*"Fecha" o caminho*/
context.closePath();
context.fill();
context.stroke();