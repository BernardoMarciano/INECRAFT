function executarJogo(){
    background(imgFundo);

  jogador.mova();
  
  //define a posição que os objetos são gerados 
  
  for(let i=0;i<ferramenta.length;i++){
    ferramenta[i].mova();
    
    if (ferramenta[i].posY > 400){
      ferramenta[i] = new Ferramenta(ferramenta[i].posX);
    }
    
  //define a hitbox do personagem
    if (
        jogador.xInicial<ferramenta[i].xFinal &&
    jogador.xFinal>ferramenta[i].xInicial &&
    jogador.yInicial<ferramenta[i].yFinal &&
    jogador.yFinal>ferramenta[i].yInicial
       ){
      
  //Faz a bomba reiniciar a pontuação 
      if(ferramenta[i].imagem == imgFerramentas[5]){
        ferramenta[i] = new Ferramenta(ferramenta[i].posY)
        //coloca o som de explosão
        som_explosao.play();
        vida -= 1; 
      } 
      else{
      ferramenta[i] = new Ferramenta(ferramenta[i].posY)
      pontos++
      //faz a velocidade aumentar de acordo com a quatidade de itens coletados
      velocidade += 1;
      //coloca o som de item
      som_item.play();
      }
      if (vida == 0){
        controleTela = ("MORTE");
        mostraMorte();
        pontos = 0;
        velocidade = 5;
        vida = 3;
        }
    }   
  }
  //escreve e mostra a pontuação
  textSize(20);
  text("PONTOS: "+ pontos ,10,30);
  text("VIDAS: " + vida , 10,50); 

}