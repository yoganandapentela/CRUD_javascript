var b1=document.getElementById("but1");



function fun1(){
    var n=document.getElementById("name").value;
    var a=document.getElementById("age").value;
    var g=document.getElementById("gender").value;
    var c=document.getElementById("country").value;
    var d=document.getElementById("date").value;
    var s=document.getElementById("state").value;
    var dis=document.getElementById("district").value;

    
    var checkedValues = []; 
    var inputElements = document.querySelectorAll('input[type="checkbox"][name="check"]');
    for(var i=0; i< inputElements.length; i++){
      if(inputElements[i].checked){
           checkedValues.push(inputElements[i].value);
           //break;
      }
    }

   // console.log("checkboxes::::"+checkedValues);
    
    console.log(n);
    console.log(a);
    console.log(c);
    console.log(d);
    console.log(s);
    console.log(dis);
    console.log(g);
    console.log(selectedFile.name);
    console.log(checkedValues);
    

}

//function for getting file upload
 selectedFile="";
var fileInput=document.getElementById("myFile");
fileInput.addEventListener("change",function(){
     selectedFile=fileInput.files[0];
   // console.log("f"+selectedFile.name);
})

    
//logic for getting states dropdown
function coun(){
    var stateselect=document.getElementById("state");
    var c1=document.getElementById("country");
    var c2=c1.value;
   // debugger;
   stateselect.innerHTML="";
    var states={
        usa:["select state","newyork","california","texas"],
        india:["select state","ap","ts","mh"]
    };

     var selectedstate=states[c2];
   // console.log(selectedstate);

    selectedstate.forEach((s)=>{
     var option=document.createElement("option");
     option.value=s;
     option.id=s;
     option.text=s;
     option.name=s;
    stateselect.appendChild(option);
    
    
    })
}

//logic for getting districts dropdown
function stat(){
   var selectedone=document.getElementById("state").value;
   var selecteddistrict=document.getElementById("district");
   selecteddistrict.innerHTML="";
   //console.log(selectedone);

    var districts={
        newyork:["select district","manhattan","brooklyn","queens"],
        california:["select district","cerritos","los-angels","Oakland"],
        texas:["select district","houston","dallas","Albany"],
        ap:["select district","krishna","ntr","guntur"],
        ts:["select district","khammam","nalgonda","suryapeta"],
        mh:["select district","pune","nanded","nashik"]

    }
    var dis=districts[selectedone];
    dis.forEach((d)=>{
        var option=document.createElement("option");
        option.value=d;
        option.id=d;
        option.name-d;
        option.text=d;
       selecteddistrict.appendChild(option);
       districts=undefined;
    })


}

