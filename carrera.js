function dado(){
    let a=Math.floor(Math.random()*6+1)
    return a;
}
var segmento="";
var b=dado();

function carrera(){
    
var turno=1,lapiz=0,borrador=0;
do{
    if(turno==1){

        lapiz+=avanza();
        turno--;


    }else{

        borrador+=avanza();
        turno++;
    }
    segmento += "T1 = " + lapiz + " ... T2 = " + borrador + " \n";
}while(lapiz<100 && borrador<100);
if (lapiz>=100 && borrador>=100)
    segmento +=  "empate";
else if(lapiz>=100){
    segmento += "lapiz Gano!!";
}else{
    segmento += "borrador gano!!";
}

return segmento;
}

console.log(carrera());


function avanza(){
    var b=dado();
    if(b==1||b==2){
        return 1;
    }else{
        if(b==3){
            return 3;
        }else{
            return 2;
        }
    }
}