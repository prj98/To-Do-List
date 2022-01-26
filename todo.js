function addtodo(){
    const inputelement=document.getElementById("myInput");
    if(!inputelement.value){
        alert("input is required.");
    }else
    {
    const newtodo=document.createElement("li");
    newtodo.innerHTML=inputelement.value;
    const btn=document.createElement("button");
    btn.innerHTML="DELETE";
    btn.addEventListener('mouseover',function(){
    btn.style.backgroundColor='red';
    })
   btn.addEventListener('mouseleave',function(){
   btn.style.backgroundColor='white';
  })
    newtodo.appendChild(btn);
    btn.style.float="right";
    const unord=document.getElementById("myUL");
    unord.appendChild(newtodo);
    btn.addEventListener("click",()=>{
     newtodo.remove();
    });
    inputelement.value="";
}
}
addclose();
function addclose(){
    const listitem=document.getElementsByTagName("li");
    for(let i=0;i<listitem.length;i++){
        const item=listitem[i];
      const deletebutton=document.createElement("button");
      deletebutton.innerHTML="DELETE";
    deletebutton.addEventListener('mouseover',function(){
   deletebutton.style.backgroundColor='red';
    })
deletebutton.addEventListener('mouseleave',function(){
   deletebutton.style.backgroundColor='white';
  })
      deletebutton.addEventListener("click",()=>{
          item.remove();
      });
      item.appendChild(deletebutton); 
      deletebutton.style.float="right";
    }
    }
