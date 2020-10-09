document.getElementsByClassName('switch')[0].getElementsByTagName('input')[0].addEventListener('click', changeMode);
var cards = document.getElementsByClassName('card');

var darkMode = false;


function changeMode(){
    var timeLine = new TimelineMax();
    if(!darkMode){

        darkMode = true;
        timeLine.to('.nav-background',0.20,{backgroundColor:" hsl(232, 19%, 15%)",ease:Linear.easeNone});
        timeLine.to('.title',0.20,{color:" hsl(0, 0%, 100%)",ease:Linear.easeNone},'-=0.18');
        timeLine.to('#dark-mode > p',0.20,{color:" hsl(228, 34%, 66%)",ease:Linear.easeNone},'-=0.18');
        timeLine.to('.container > nav > div > p:last-child',0.20,{color:" hsl(228, 34%, 66%)",ease:Linear.easeNone},'-=0.18');
        timeLine.to('html',0.15,{backgroundColor:" hsl(230, 17%, 14%)",ease:Linear.easeNone},'-=0.18')   ;  
        timeLine.to('h3',0.20,{color:" hsl(0, 0%, 100%)",ease:Linear.easeNone},'-=0.18');
        timeLine.to('.attribution',0.20,{color:" hsl(0, 0%, 100%)",ease:Linear.easeNone},'-=0.18');
        for(var card of cards){
            card.classList.add("card-dark-mode")
            timeLine.to(card,0.15,{backgroundColor:"hsl(228, 28%, 20%)",ease:Linear.easeNone},'-=0.14')
            if(card.getElementsByTagName('div')[1].getElementsByTagName('h2')[0] != undefined){
                timeLine.to(card.getElementsByTagName('div')[1].getElementsByTagName('h2')[0],0.15,{color:"hsl(228, 34%, 66%)",ease:Linear.easeNone},'-=0.14');
            }else{
                if (card.getElementsByTagName('div')[0].getElementsByTagName('h4')[0] != undefined) {
                    timeLine.to(card.getElementsByTagName('div')[0].getElementsByTagName('h4')[0],0.15,{color:"hsl(228, 34%, 66%)",ease:Linear.easeNone},'-=0.14');
                }
            }
            timeLine.to(card.getElementsByTagName('p')[0],0.2,{color:"hsl(0, 0%, 100%)",ease:Linear.easeNone},'-=0.19')
        }
    }else{

        darkMode = false;
        timeLine.to('.nav-background',0.20,{backgroundColor:" hsl(225, 100%, 98%)",ease:Linear.easeNone});
        timeLine.to('.title',0.20,{color:"hsl(230, 17%, 14%)",ease:Linear.easeNone},'-=0.18');
        timeLine.to('#dark-mode > p',0.20,{color:"hsl(228, 12%, 44%)",ease:Linear.easeNone},'-=0.18');
        timeLine.to('.container > nav > div > p:last-child',0.20,{color:"hsl(228, 12%, 44%)",ease:Linear.easeNone},'-=0.18');
        timeLine.to('html',0.15,{backgroundColor:" hsl(0, 0%, 100%)",ease:Linear.easeNone},'-=0.18')
        timeLine.to('h3',0.20,{color:"hsl(230, 17%, 14%)",ease:Linear.easeNone},'-=0.18');
        timeLine.to('.attribution',0.20,{color:"hsl(230, 17%, 14%)",ease:Linear.easeNone},'-=0.18');
        for(var card of cards){
            timeLine.to(card,0.15,{backgroundColor:"hsl(227, 47%, 96%)",ease:Linear.easeNone},'-=0.14')
            card.classList.remove("card-dark-mode")
            if(card.getElementsByTagName('div')[1].getElementsByTagName('h2')[0] != undefined){
                timeLine.to(card.getElementsByTagName('div')[1].getElementsByTagName('h2')[0],0.15,{color:"hsl(228, 12%, 44%)",ease:Linear.easeNone},'-=0.14');
            }else{
                if (card.getElementsByTagName('div')[0].getElementsByTagName('h4')[0] != undefined) {
                    timeLine.to(card.getElementsByTagName('div')[0].getElementsByTagName('h4')[0],0.15,{color:"hsl(228, 12%, 44%)",ease:Linear.easeNone},'-=0.14');
                }
            }
            timeLine.to(card.getElementsByTagName('p')[0],0.15,{color:"hsl(230, 17%, 14%)",ease:Linear.easeNone},'-=0.14')    
        }
    }
}