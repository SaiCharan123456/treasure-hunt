class Form{
    constructor(){
        this.input = createInput('Entre username');
        this.save = createButton('save');
    }
start(){
   // this.input = createInput('Entre username');
    this.input.position(displayWidth/2,displayHeight/2)
    
    this.save.position(displayWidth/2,displayHeight/2+100);

    this.save.mousePressed(()=>{
    this.input.hide();
    this.save.hide();
    character1.visible=true;
    character2.visible=true;
    })
}

profile(){
    this.input.hide();
    this.save.hide();

}

}