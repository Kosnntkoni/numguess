let max = 101;
let min = 0;
let num = 0;
let used = [];
let move = true;
let po; 
let play = 0;


document.getElementById("less").onclick = function () {
    let placeholder = document.getElementById("lola").textContent;
    used.push(placeholder)
    min = num;
    num = Math.floor(Math.random() * (max - min) + min);
    while(Number(placeholder) === num){
        num = Math.floor(Math.random() * (max - min) + min);
    }
        po = 0; 
        used.forEach((x) => {
            if(x !== num || po === 0){
                move = false;
            }
            if(x === num){
                num = Math.floor(Math.random() * (max - min) + min);}
                move = true;  
                po = 1;
    })
    document.getElementById("lola").textContent = num
    play ++;
}
document.getElementById("more").onclick = function () {
    let placeholder = document.getElementById("lola").textContent;
    used.push(placeholder)
    max = num;
    num = Math.floor(Math.random() * (max - min) + min);
    while(Number(placeholder) === num){
        num = Math.floor(Math.random() * (max - min) + min);
    }
        po = 0; 
        used.forEach((x) => {
            if(x !== num || po === 0){
                move = false;
            }
            if(x === num){
                num = Math.floor(Math.random() * (max - min) + min);}
                move = true;  
                po = 1;
    })
    document.getElementById("lola").textContent = num
    play ++;
}
document.getElementById("ok").onclick = function(){
    document.getElementById("lola").textContent = `it took me ${play} times to guess your number`
    document.getElementById("more").remove();
    document.getElementById("ok").remove();
    document.getElementById("less").remove();
}
