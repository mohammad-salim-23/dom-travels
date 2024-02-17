const allBtn = document.getElementsByClassName('add-btn')
let cnt=0;
for(const btn of allBtn){
    btn.addEventListener("click",function(e){
      
   
    const placename =e.target.parentNode.childNodes[1].innerText; 
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    const convertedprice = parseInt(price);

    e.target.parentNode.parentNode.style.backgroundColor="tomato"
    e.target.setAttribute("disabled",true)
    
    const selectofContainer = document.getElementById("selected-place-container");
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = placename;
    const p2 = document.createElement('p');
    p2.innerText = price;

    // total budget
    const budget = document.getElementById("budget");
    const totalbudget = budget.innerText;
    convertedbudget = parseInt(totalbudget);
    
    const nowbudget = convertedbudget-convertedprice;
    if(nowbudget<0){
        alert("low budget mamma, jaita parba na");
        return;
    }
    setInnerText("budget",nowbudget);
    li.appendChild(p);
    li.appendChild(p2);
    selectofContainer.appendChild(li);
    const totalcost = document.getElementById('total-cost');
    const cost = totalcost.innerText;
    const constInt = parseInt(cost);
    const sum = constInt + convertedprice;
    setInnerText('total-cost',sum);
    grandTotal("other");

    cnt=cnt+1;
    setInnerText('cart-count',cnt);
        

    })
}
   
  function grandTotal(catagory){
    const totalcost = document.getElementById('total-cost');
    const cost = totalcost.innerText;
    const constInt = parseInt(cost);
    if(catagory==='bus'){
        setInnerText('grand-total',constInt+100);
        return 100;
    }else if(catagory==='train'){
        setInnerText('grand-total',constInt-200);
        return -200;
    }else if(catagory==='flight'){
        setInnerText('grand-total',constInt+500);
        return 500;
    }else{
        setInnerText('grand-total',constInt);
        return 0;
    }
   


  }

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}