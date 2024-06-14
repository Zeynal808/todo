let inp = document.querySelector("input")
let btn = document.querySelector("button")
let todos = document.querySelector(".todos")
let del = document.querySelector(".delete")
let h3=document.querySelector("h3")

if (localStorage.getItem("aydan")) {
    var sozler = localStorage.getItem("aydan")
    var data=localStorage.getItem("datalar")

    sozler = JSON.parse(sozler)
    data = JSON.parse(data) 
    var count=sozler.length   
    h3.innerText=count
    for (let i=0;i<sozler.length;i++) {
        let p = document.createElement("p")
        p.dataset.name=data[i]
        p.innerHTML = `${sozler[i]} <button data-name="${data[i]}" class="delete">x</button> `
        todos.append(p)
    }
}
else{
    var sozler=[]
    var data=[]
    var count=0
    h3.innerText=count
}


btn.onclick = function () {
    count++
    let text = inp.value
    sozler.push(text)
    data.push(text)
    localStorage.setItem("aydan", JSON.stringify(sozler))
    localStorage.setItem("datalar", JSON.stringify(data))
    let p = document.createElement("p")
    h3.innerText=count
  
    
    
    p.innerHTML = `${text} <button data-name="${text}" class="delete">x</button> `
    todos.append(p)
    inp.value = ""

}
$(document).on("click", ".delete", function () {
    $(this).parent().remove()

    for (let i = 0; i < sozler.length; i++) {
       
        if(this.dataset.name==sozler[i]){
           count--
           sozler.splice(i,1)
           data.splice(i,1)
           localStorage.setItem("aydan",JSON.stringify(sozler))
           localStorage.setItem("datalar",JSON.stringify(data))
           h3.innerText=count
        }
        
    }
})
