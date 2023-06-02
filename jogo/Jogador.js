//classe para definir padrões do boneco

class Jogador{
  constructor(){
    this.imagem = loadImage("./jogo/imgJogo/steve.png");
    this.posX = 270;
    this.posY = 310;
    this.velocidade = 5;
    this.altura = 80;
    this.largura = 50;
    this.yInicial = this.posY;
    this.yFinal = this.posY + this.altura;
    this.xInicial = this.posX;
    this.xFinal = this.posX + this.largura;
    
}
  
  //faz o jogador mexer o boneco 
  
  mova(){
    image(this.imagem, this.posX, this.posY, this.largura, this.altura);
    
    //faz o boneco ir para a direita, e define até onde ele pode andar (limite)
    if(keyIsDown(39) && (this.xFinal<635)){
      this.posX += this.velocidade; 
    }
    
    //faz o boneco ir para esquerda, e define até onde ele pode andar (limite)
    if(keyIsDown(37) && (this.xInicial>0)){
      this.posX -= this.velocidade;
    }
    
    this.yInicial = this.posY;
    this.yFinal = this.posY + this.largura;
    this.xInicial = this.posX;
    this.xFinal = this.posX + this.altura;
  }
}