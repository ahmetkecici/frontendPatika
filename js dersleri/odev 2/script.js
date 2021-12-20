const inputElement = document.querySelector("#task");
const todoListElement = document.querySelector("#list");
const addButtonElement = document.querySelector("#liveToastBtn")
const toastElement=document.querySelector(".toast-body")
const todos = [];



addButtonElement.addEventListener("click", addTodo)
todoListElement.addEventListener("click", todoClickEvent)


function addTodo() {
    
 if (inputElement.value=="") {
     message("Listeye Boş Eleman Ekleyemezsiniz")
     return
 }
 const todoLi = document.createElement("li");
  
 todoLi.innerHTML = `${inputElement.value} <span class="close">x</span>`;
 
 todoListElement.appendChild(todoLi);
 inputElement.value = ""
 message("Başarıyla Eklendi")
}


function message(message) {

   toastElement.textContent=message
   $('#liveToast').toast('show');
}


function removeTodo(e) {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement)
    message("Başarıyla Kaldırıldı")
}
function todoClickEvent(e) {
    if (e.target.tagName = "li") {
        if (e.target.classList.contains("close")) {
            removeTodo(e)
        } else {
            checkTodo(e);
        }
    }

}
function checkTodo(e) {

    
        if (e.target.classList.contains("checked")) {
            e.target.classList.remove("checked")
            message("Todo yapılmadı")
        } else {
            e.target.classList.add("checked")
           
            message("Todo yapıldı")
        }
    
}
