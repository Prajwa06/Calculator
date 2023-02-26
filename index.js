let string ="";
let buttons=document.getElementsByTagName('button');
let a=Array.from(buttons);

a.forEach((button)=>{
    button.addEventListener('click' ,(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
        }
        else{
            string= string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})

let b=document.querySelector('input');
document.addEventListener('keypress',(e)=>{
    if(e.key=='Enter'){
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.key=='C' || e.key=='c'){
        string="";
        document.querySelector('input').value=string;
    }
    else{
        string=string+e.key;
        document.querySelector('input').value=string;
    }
})





