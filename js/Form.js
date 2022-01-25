class Form {
  constructor() {
   this.input=createInput("name");
   this.button=createButton('Jugar');
   this.greeting=createElement('h2')
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Juego de Carreras de Autos");
    title.position(130, 0);
    
    //var input = createInput("Name");
    //var button = createButton('Play');
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(function(){
      this.input.hide();
      this.button.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      //var greeting = createElement('h3');
      this.greeting.html("Hola " + name )
      this.greeting.position(130, 160)
    });

  }
}
