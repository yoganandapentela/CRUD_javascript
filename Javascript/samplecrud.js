var selectedRow=null;

//Main function...
function formsubmit(){
     if(validate())
     {
        var formdata=fun1();
        if(selectedRow==null)
        {
            insertnewrecord(formdata);
        }
        else{
            updatenewrecord(formdata);
        }
        resetform();
     }

}


// used for retrieving form data
function fun1(){
    formdata={};
    formdata["name"]=document.getElementById("name").value;
    formdata["surname"]=document.getElementById("surname").value;
    formdata["email"]=document.getElementById("email").value;
    formdata["mobile"]=document.getElementById("mobile").value;
    formdata["gender"]=document.querySelector('input[name="gender"]:checked').value;

    formdata["country"]=document.getElementById("country").value;
    formdata["state"]=document.getElementById("state").value;
    formdata["district"]=document.getElementById("district").value;
    formdata["date"]=document.getElementById("date").value;

    
    var checkedValues = []; 
    var inputElements = document.querySelectorAll('input[type="checkbox"][name="check"]');
    for(var i=0; i< inputElements.length; i++){
      if(inputElements[i].checked){
           checkedValues.push(inputElements[i].value);
           //break;
      }
    }
    formdata["checkedvalues"]=checkedValues;
    formdata["yourself"]=document.getElementById("yourself").value;

   // console.log("checkboxes::::"+checkedValues);
   console.log(formdata);
   console.log("**********Just The Beginning******")
return formdata;
    

}

//inserting a row
function insertnewrecord(data){
   var table=document.getElementById("employeeList").getElementsByTagName("tbody")[0];
   var newRow = table.insertRow(table.length);
   cell1 = newRow.insertCell(0);
   cell1.innerHTML=data.name;
   cell1 = newRow.insertCell(1);
   cell1.innerHTML=data.surname;
   cell1 = newRow.insertCell(2);
   cell1.innerHTML=data.email;
   cell1 = newRow.insertCell(3);
   cell1.innerHTML=data.mobile;
   cell1 = newRow.insertCell(4);
   cell1.innerHTML=data.gender;
   cell1 = newRow.insertCell(5);
   cell1.innerHTML=data.country;
   cell1 = newRow.insertCell(6);
   cell1.innerHTML=data.state;
   cell1 = newRow.insertCell(7);
   cell1.innerHTML=data.district;
   cell1 = newRow.insertCell(8);
   cell1.innerHTML=data.date;
   cell1 = newRow.insertCell(9);
   cell1.innerHTML=data.checkedvalues;
   cell1 = newRow.insertCell(10);
   cell1.innerHTML=data.yourself;
   cell1 = newRow.insertCell(11);
   cell1.innerHTML=`<button onClick="onEdit(this)">Edit</button>
                    <button onClick="onDelete(this)">Delete</button>`;
   

}

// function to reset a form

function resetform() {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("country").value = "";
    document.getElementById("state").value = "";
    document.getElementById("district").value = "";
    const genderRadios = document.querySelectorAll('input[name="gender"]');
        genderRadios.forEach(function (radio) {
            radio.checked = false;
        });
   
   const hobbies = document.querySelectorAll('input[name="check"]');
           hobbies.forEach(function (radio) {
            radio.checked = false;
        });
    document.getElementById("yourself").value = "";
    document.getElementById("date").value = "";

    selectedRow = null;
}

//function to edit
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("surname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("mobile").value = selectedRow.cells[3].innerHTML;

    var genderRadioButtons = document.querySelectorAll('input[name="gender"]');
            for (var j = 0; j < genderRadioButtons.length; j++) {
                if (genderRadioButtons[j].value === selectedRow.cells[4].innerHTML) {
                    genderRadioButtons[j].checked = true;
                    break;
                }
            }
    document.getElementById("country").value = selectedRow.cells[5].innerHTML;
    document.getElementById("state").value = selectedRow.cells[6].innerHTML;
    document.getElementById("district").value = selectedRow.cells[7].innerHTML;
    document.getElementById("date").value = selectedRow.cells[8].innerHTML;


    const checkboxes = document.querySelectorAll('input[name="check"]');
    const checkedValues = selectedRow.cells[9].innerHTML.split(", "); // Convert the string to an array
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = checkedValues.includes(checkbox.value); // Check the checkbox if its value is in the array
        console.log("checkbox::"+checkbox.value+" checked: "+checkbox.checked);
    });
    
    document.getElementById("yourself").value = selectedRow.cells[10].innerHTML;

}

//function to update
function updatenewrecord(formdata) {
    selectedRow.cells[0].innerHTML = formdata.name;
    selectedRow.cells[1].innerHTML = formdata.surname;
    selectedRow.cells[2].innerHTML = formdata.email;
    selectedRow.cells[3].innerHTML = formdata.mobile;
    selectedRow.cells[4].innerHTML = formdata.gender;
    selectedRow.cells[5].innerHTML = formdata.country;
    selectedRow.cells[6].innerHTML = formdata.state;
    selectedRow.cells[7].innerHTML = formdata.district;
    selectedRow.cells[8].innerHTML = formdata.date;
    selectedRow.cells[9].innerHTML = formdata.checkedvalues;
    selectedRow.cells[10].innerHTML = formdata.yourself;
    
}

//function to delete operation
function onDelete(td)
{
    var row=td.parentElement.parentElement;
    if(confirm("Are you sure to delete recoed??"))
    {
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetform();
    }
}



    
//logic for getting states dropdown
function coun(){
    var stateselect=document.getElementById("state");
    var c1=document.getElementById("country");
    var c2=c1.value;
   // debugger;
   stateselect.innerHTML="";
    var states={
        usa:["select state","newyork","california","texas"],
        india:["select state","ap","ts","mh"],
        srilanka:["select state","central","eastern","western"],
        nepal:["select state","madhesh","gandhaki","lumbini"],
        australia:["select state","victoria","queensland","tasmania"]
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
        //us
        newyork:["select district","manhattan","brooklyn","queens"],
        california:["select district","cerritos","los-angels","Oakland"],
        texas:["select district","houston","dallas","Albany"],
        //bharat
        ap:["select district","krishna","ntr","guntur"],
        ts:["select district","khammam","nalgonda","suryapeta"],
        mh:["select district","pune","nanded","nashik"],
        //srilanka
        central:["select district","hatton","campola","matale"],
        eastern:["select distrcict","ampara","batticoala","ampara"],
        western:["select district","colombo","negambo","gampaha"],
        //nepal
        madhesh:["select state","janakpur","birgunj","kalaiya"],
        gandhaki:["select user","pokhara","waling","gorkha"],
        lumbini:["select user","bhutwal","ghorahi","tulsipur"],
        //australia
        victoria:["select user","melboune","ballarat","bendigo"],
        queensland:["select user","brisbane","mackey","cairns"],
        tasmania:["select user","hobort","devonport","launceston"]



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

//logic for form validations
/*document.getElementById("name").addEventListener("input",validateInput);

function validateInput(event){
    const fieldId=event.target.id;
    const errorMessageId="err"+fieldId.id;
    if(event.target.value==="")
    {
        document.getElementById(errorMessageId).textContent="The field is Required";
    }
    else{
        document.getElementById(errorMessageId).textContent="";
    }
}*/
var nameinp=document.getElementById("name");
var surnameinp=document.getElementById("surname");
    var emailinp=document.getElementById("email");
//var gender=document.querySelector('input[name="gender"]:checked').value;
    var mobileinp=document.getElementById("mobile");
    var countryinp=document.getElementById("country");
     var stateinp=document.getElementById("state");
     var districtinp=document.getElementById("district");
     var dateinp=document.getElementById("date");
     var checkedValues = []; 
     var inputElements = document.querySelectorAll('input[type="checkbox"][name="check"]');
     for(var i=0; i< inputElements.length; i++){
       if(inputElements[i].checked){
            checkedValues.push(inputElements[i].value);
            //break;
       }
     }
    var yourselfinp=document.getElementById("yourself");
    
    nameinp.addEventListener("input",function(){
    if (nameinp.value.trim()==="") {
   
        document.getElementById("errname").innerText="the field is required";

        isValid = false;
     }
     else{
        document.getElementById("errname").innerText="";
     }
});

surnameinp.addEventListener("input",function(){
    if (surnameinp.value.trim()==="") {
   
        document.getElementById("errsurname").innerText="the field is required";

        isValid = false;
     }
     else{
        document.getElementById("errsurname").innerText="";
     }
});

countryinp.addEventListener("change",function(){
    if (countryinp.value==="") {
   
        document.getElementById("errcountry").innerText="the field is required";

        isValid = false;
     }
     else{
        document.getElementById("errcountry").innerText="";
     }
});

stateinp.addEventListener("change",function(){
    if (state.value==="select state") {
   
        document.getElementById("errstate").innerText="the field is required";

        isValid = false;
     }
     else{
        document.getElementById("errstate").innerText="";
     }
});




//validate function
function validate() {
    isValid = true;
     errname=document.getElementById("errname");
     
    
    if (document.getElementById("name").value =="") {
       
        errname.innerText="the field is required";

        isValid = false;

    }
    return isValid;
}

