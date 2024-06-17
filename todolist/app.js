const botonAgregar=document.getElementById("botonAdd")
const inputTarea=document.getElementById("inputTarea")
const ul=document.querySelector(".lista_de_tareas")


botonAgregar.addEventListener("click",(e)=>{

if(inputTarea.value==""){
alert("Debe agregar una tarea");
}
else{
    const li=document.createElement("li")
li.innerHTML= `<label><input type="checkbox">
${inputTarea.value}</label><span class="delete">X</span>` 

ul.appendChild(li)
inputTarea.value=""
eliminarItem(li)

}






})

function eliminarItem(item){
    const DeleteBtn=item.querySelector(".delete")
DeleteBtn.addEventListener("click",(e)=>{
 e.target.parentElement.remove();

})

}