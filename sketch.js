//variaveis

var jogador;
var fundo;
var ferramenta = [];
var imgFerramentas = [];
var pontos = 0;
var velocidade = 5;
var sons;
var imgAbertura;
var imgMorte;
var vida = 3;
var controleTela = "INICIO";


//coloca a imagem de fundo
function preload(){
  imgFundo=loadImage("./jogo/imgJogo/fundo.jpg"); 
  
  imgFerramentas[0] = loadImage("jogo/imgJogo/espada.png");
  imgFerramentas[1] = loadImage("jogo/imgJogo/maca.png");
  imgFerramentas[2] = loadImage("jogo/imgJogo/diamante.png");
  imgFerramentas[3] = loadImage("jogo/imgJogo/escudo.png");
  imgFerramentas[4] = loadImage("jogo/imgJogo/arco.png");
  imgFerramentas[5] = loadImage("jogo/imgJogo/tnt.png");

  //define tela de inicio, e a de morte

  imgAbertura = loadImage("img/inicio.gif");
  imgMorte = loadImage("img/morte.gif");
  
  //carrega os sons
  
  som_explosao = loadSound('./jogo/sons/tnt.mp3');
  som_item=loadSound('./jogo/sons/item.mp3');
  
  //esses são os drops (gerador de jogador, e de itens)  
  
  jogador = new Jogador();
  ferramenta[0] = new Ferramenta(5,175);
  ferramenta[1] = new Ferramenta(190,275);
  ferramenta[2] = new Ferramenta(290,305);
  ferramenta[3] = new Ferramenta(320,395);
  ferramenta[4] = new Ferramenta(410,485);
  ferramenta[5] = new Ferramenta(500,590);
  
}


//define o tamanho da tela
function setup() {
  createCanvas(600, 400).parent("jogo");
}

function keyPressed(){
  if(keyCode==13){
    controleTela = "JOGO";
  }
}

//define a imagem de fundo

function draw() {

  if(controleTela == "INICIO"){
    mostraAbertura();
  }

  if(controleTela == "JOGO"){
    executarJogo();
  } 
}
