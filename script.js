let liItems=document.querySelectorAll("ul li")
let ulitem=document.querySelector("ul");
let liIcons=document.querySelectorAll("ul li span i")
let liInput=document.querySelector(".notInput")
// complate missions
complateMissions()
deleteMissions()



//complate delete



// input missions
liInput.addEventListener("keydown",function(e){
   if(e.key==="Enter")
    {
        inputWrite();
    }

})



function inputWrite()
{
    let paste=
    `
     <li><span><i class="fa-solid fa-rectangle-xmark "></i>${liInput.value}</span></li>
     
    `
ulitem.innerHTML+=paste
liInput.value="";
complateMissions();
deleteMissions();


}

function complateMissions()
{
liItems=document.querySelectorAll("ul li");

liItems.forEach(function(e){
    e.addEventListener("click",function(){
        e.classList.toggle("complate");
    })
})
}

function deleteMissions()
{
    let liIcons=document.querySelectorAll("ul li span i")


    liIcons.forEach(function(e){
        e.addEventListener("click",function(){
            e.parentElement.parentElement.remove();
        })
    })
}


