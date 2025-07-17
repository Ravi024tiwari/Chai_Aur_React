const btn =document.getElementById("btn")
const inputValue =document.getElementById("input-data")

const AddUserName =document.getElementById("addUsername");

//when the window load set their vale
window.addEventListener('load', ()=>{
    const setValue =localStorage.getItem('username');//we will get the value by using the key of that particlar vlue
    inputValue.value =setValue;//hamesa ke lie
    AddUserName.textContent =`The name of the user is: ${setValue}`
})

//after cliking
btn.addEventListener("click",(e)=>{
    const value =inputValue.value;//her we fetched that vlaue
    console.log("the input value  is..",value);
    localStorage.setItem('username', value)
    location.reload()//its used to reload the page
})

//after setting the item on the local storage we will get the item form there

