var list=document.getElementById("list")
function addTodo(){
var todoItem=document.getElementById("todoItem")
if (todoItem.value.length > 2) {
console.log(todoItem.value);

var li=document.createElement("li")
var liText = document.createTextNode(todoItem.value)
li.appendChild(liText)
list.appendChild(li)
todoItem.value =""
console.log(li);
var editBtn=document.createElement("Button");
var editText=document.createTextNode("")
editBtn.appendChild(editText)
editBtn.setAttribute("onclick","editItem(this)")
editBtn.setAttribute("class","fa-solid fa-pen-to-square editbtn")
 li.appendChild(editBtn)
/////////////////// delete/////////////////
var delBtn=document.createElement("button")
var deltxt=document.createTextNode("")
delBtn.setAttribute("class","fas fa-trash dltbtn") 
delBtn.setAttribute("onclick","deleteItem(this)") 
delBtn.appendChild(deltxt)
li.appendChild(delBtn)
} else {
    alert("Enter Value")
}
////////////////// Edit//////////////////////
}
function deleteItem(e){
    e.parentNode.remove()
}
function deleteAll(){
list.innerHTML="" 
}
function editItem(e){
   var val=e.parentNode.firstChild.nodeValue;
   var ediValue=prompt("enter edit value",val)    
   e.parentNode.firstChild.nodeValue=ediValue;
    console.log(e.parentNode.firstChild)
}
