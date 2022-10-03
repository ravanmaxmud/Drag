let input = document.getElementById('inp');
let count = 1
input.addEventListener('change',function(){
    let value = document.getElementById('inp').value;
    let dragarea =document.querySelector('.dragarea');
    let div = document.createElement('div');
     div.setAttribute('id',count);
     div.setAttribute('draggable','true');
     div.setAttribute('class','bg-dark text-light mt-3 p-3 rounded-3 ');
     let h4 = document.createElement('h4');
     h4.innerHTML =value;
     div.appendChild(h4)
     dragarea.appendChild(div);
     count++; 

    div.ondragstart = function(e){
           e.dataTransfer.setData('param',this.id)
    }
});

let carts = document.querySelectorAll('.cart');
let dropArea = document.querySelectorAll('.dragarea');
for(let cart of carts){
    cart.ondragover =function(e){
       e.preventDefault()
    }
    cart.ondrop = function (e) {
        let id = e.dataTransfer.getData('param');
        let newit = document.getElementById(id);
    
        cart.appendChild(newit);
    }
}