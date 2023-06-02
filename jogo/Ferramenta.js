//classe para definir padrões dos objetos

class Ferramenta{
  constructor(){
    this.imagem = imgFerramentas[int(random(0,5.5))]
    this.posX = random(50,500);
    this.posY = -200;
    this.velocidade = random(5,velocidade);
    this.largura = 40;
    this.altura = 40;
    this.yInicial = this.posY;
    this.yFinal = this.posY + this.altura;
    this.xInicial = this.posX;
    this.xFinal = this.posX + this.largura;
  }
  
  mova(){
    this.posY += this.velocidade;
    image(this.imagem,this.posX,this.posY,this.largura,this.altura);
    this.yInicial = this.posY;
    this.yFinal = this.posX + this.largura;
    this.yInicial = this.posY;
    this.yFinal = this.posY + this.altura;
    
  }
}