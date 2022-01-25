// let todos=[];
// todos=[{
//     title:"",
// complted:false,
// }]
//whenever add-->add item to array using push()--->show todolist();
//wherever deleted=-->delete from array-->>showtodolist();
// function addtodo(){
//     const inputelement=document.getElementById("myInput");
//     if(!inputelement.value){
//         alert("input is req.");
//     }else
//     {
//     const newtodo=document.createElement("li");
//     newtodo.innerHTML=inputelement.value;
//     const btn=document.createElement("button");
//     btn.innerHTML="DELETE";
//     newtodo.appendChild(btn);
//     const unord=document.getElementById("myUL");
//     unord.appendChild(newtodo);
//     btn.addEventListener("click",()=>{
//      newtodo.remove();
//     });
//     inputelement.value="";
// }
// }
// addclose();
// function addclose(){
//     const listitem=document.getElementsByTagName("li");
//     for(let i=0;i<listitem.length;i++){
//         const item=listitem[i];
//       const deletebutton=document.createElement("button");
//       deletebutton.innerHTML="DELETE";
//       deletebutton.addEventListener("click",()=>{
//           item.remove();
//       });
//       item.appendChild(deletebutton); 
//     }
//     }
// console.log("hii")