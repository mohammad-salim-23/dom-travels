const allBtn = document.getElementsByClassName('add-btn')
let cnt=0;
for(const btn of allBtn){
    btn.addEventListener("click",function(e){
       cnt=cnt+1;
       setInnerText('cart-count',cnt);
   
    const placename =e.target.parentNode.childNodes[1].innerText; 
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    
    const selectofContainer = document.getElementById("selected-place-container");
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = placename;
    const p2 = document.createElement('p');
    p2.innerText = price;
    li.appendChild(p);
    li.appendChild(p2);
    selectofContainer.appendChild(li);
        

    })
}
   
  

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}