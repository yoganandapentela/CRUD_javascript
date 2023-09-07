var input=document.getElementById("inp");
var listcontainer=document.getElementById("listcontainer");
var del;
function adding()
{

    if(input.value==='')
    {
        alert("please insert any input");
    }
    else{
    console.log(input);
    var ele=document.createElement("li");
    ele.innerHTML=input.value;
    listcontainer.appendChild(ele);
   /* var del=document.createElement("span");
    del.innerHTML=;
    ele.appendChild(del);*/
    del=document.createElement("button");
    del.id="abc";
    del.innerText="delete";
    ele.appendChild(del);
    
    }
    input.value='';

savedata();



del.addEventListener("click",function(e){
    console.log("hello");
    if(e.target.tagName==="BUTTON")
    {
        console.log("hii");
        e.target.parentElement.remove();
    }
}); 
savedata();
};

/*function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showdata()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}
showdata();
*/
