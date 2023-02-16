let eid = document.getElementById("emp-id");
let ename = document.getElementById("emp-name");
let eage = document.getElementById("emp-age");
let egender = document.getElementById("emp-gender");
let form = document.getElementById("empForm");
let err = document.getElementById("input-area");
let testarr = [];
let id_list = [];
var isEdit;
let delIndex
document.getElementById('update').setAttribute("class","check")
form.addEventListener('submit', (event) => {
    let val = event.submitter.innerHTML
    console.log("addEvent",event.submitter.innerHTML)
    event.preventDefault();
    if(val == 'ADD'){
    validateAge();
     validateName();
     validateID();
     validateGen();
    if ( validateID() == true && validateName() == true && validateAge() == true && validateGen() == true){
        addData(); 
    }
    else{
        console.log("Error");
    }
}
});
function validateID(){
    console.log("calling validateId")
    let isValid = true;

    if (eid.value.trim() == "" || eid.value < 0){
        setError(eid, "Please enter valid ID.")
        isValid = false;
    }
    else if(id_list.includes(eid.value)){
        setError(eid, "ID already present.")
        isValid = false;

    }
    else{
        setSuccess(eid);
        isValid = true;
    }    
    return isValid;
}
function validateName(){
    console.log("Calling Validate name")
    let isValid = true;
    var letters = /^[A-Za-z]+$/;
   
    if (ename.value.trim() == ""){
        setError(ename, "Please enter Name")
        isValid = false;
    }
    else if(!ename.value.match(letters)){
        setError(ename, "Only Alphabets.")
        isValid = false;
    }

    else{
        setSuccess(ename);
        isValid = true;
    }

    return isValid;
}

function validateAge(){
    let isValid = true;
    if (eage.value.trim() == ""){
        setError(eage, "Please enter Age.")
        isValid = false;
    }
    else if(eage.value < 18 || eage.value >60){
        setError(eage, "Age be in 18-60")
        isValid = false;

    }
    else{
        setSuccess(eage);
        isValid = true;
    }
    return isValid;
}

function validateGen(){
    let isValid = true;
    if (egender.value == ""){
        setError(egender, "Select Gender")
        isValid = false;
    }
    else{
        setSuccess(egender);
        isValid = true;
    }
    return isValid;
}

function setError(element, errorMessage){
    const parent = element.parentElement;
   // console.log(parent);
    if (parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if (parent.classList.contains('error')){
        parent.classList.remove('error');
    }
}

function displayData(){

    var htmltab = "<table>";

        htmltab += "<thead>";
        htmltab += "<tr>";
        htmltab += "<th>"+'ID'+"</th>";
        htmltab += "<th>"+'Name'+"</th>";
        htmltab += "<th>"+'Age'+"</th>";
        htmltab += "<th>"+'Gender'+"</th>";
        htmltab += "<th>"+'Action'+"</th>";
        htmltab += "</tr>";
        htmltab += "</thead>";
        for (let i = 0; i < testarr.length; i++){
            console.log(testarr[0])
            htmltab += "<tr>";
            htmltab += "<td>"+testarr[i].id+"</td>";
            htmltab += "<td>"+testarr[i].name+"</td>";
            htmltab += "<td>"+testarr[i].age+"</td>";
            htmltab += "<td>"+testarr[i].gender+"</td>";
            htmltab += "<td>"+`<button class="btn delete-btn" onclick="deleteData(${testarr[i].id})">Delete</button> `+"</td>";
        htmltab += "<td>"+`<button class='edit' onclick="EditData(${testarr[i].id},'edit')">Edit</button> `+"</td>";
       // htmltab += "<td>"+`<button onclick="Update(${testarr[i].id})">Update</button> `+"</td>";

        }

        htmltab += "</table>";
        document.getElementById("emp-table").innerHTML = htmltab;
    }
    console.log(id_list);
    console.log(testarr);


function clearForm(){
    eid.value = "";
    ename.value = "";
    eage.value = "";
    egender.value = "";
}

function addData(){
    var eid = document.getElementById("emp-id").value;
    var ename = document.getElementById("emp-name").value;
    var eage = document.getElementById("emp-age").value;
    var egender = document.getElementById("emp-gender").value;
    var errorArea = document.getElementById("error-area");
    // console.log(eid);
    // console.log(ename);
     //console.log(eage);
     //console.log(egender);
     //console.log(errorArea);

    var errorMsg = "";
    var letters = /^[A-Za-z]+$/;

    // if (eid == "" || ename == "" || eage == "" || egender == ""){
    //     alert("All fields are Manndotary");
    //     errorArea.innerHTML += "\nAll fields are Manndotary\n";
    // }
    // if(!ename.match(letters)){
    //     alert("Name should only contain Alpha");  
    //     errorArea.innerHTML += "Name should only contain Alphabets.";
    // }
       if(true){
       let vl= window.confirm("Do you want to Add ? ");
       console.log(vl && !isEdit)
        if(vl){
            testarr.push({id:eid, name:ename, age:eage, gender:egender})
        id_list.push(eid);
        }else{
            // let index = testarr.findIndex(i => i.id == eid)
            // console.log('index ',index)
            // testarr[index]['id']=eid,
            // testarr[index]['name']=ename,
            // testarr[index]['age']=eage,
            // testarr[index]['gender']=egender

            // this.isEdit = false
        }
        let var3=totalNumberOfEmployee();
        document.getElementById("fortotalCount").innerHTML =var3 ;
        clearForm();
        displayData();
        // console.log("key Checkng ",this.isEdit)
        this.isEdit = false

        }
       
        
        
      //  errorArea.innerHTML = `${id_list}` + " is used";
        
}




function deleteData(elementId){
    console.log('Delete id ',elementId)

    /* let del = testarr.filter((item,index) => {
        if (elementId == item.id){
            testarr.splice(index,1);
            displayData();
        }
    })  */
    let vl= window.confirm("Do you want to delete ? ");
       console.log(vl)
        if(vl){
            let del = testarr.filter((item,index) => {
                if (elementId == item.id){
                    testarr.splice(index,1);
                   
                    displayData();
                }
            }) 

        }

        let var3=totalNumberOfEmployee();
        document.getElementById("fortotalCount").innerHTML =var3 ;
}
function EditData(elementId,edit){
    delIndex = elementId
    document.getElementById('submit').setAttribute("class","check")
    this.isEdit = true
    console.log('key ',edit)
   console.log("edit",elementId)
   let data=[]
   let del = testarr.filter((ele)=>ele.id==elementId)
console.log('filter array ',del)
document.getElementById("emp-id").value=del[0].id;
document.getElementById("emp-name").value=del[0].name;
document.getElementById("emp-age").value=del[0].age;
document.getElementById("emp-gender").value=del[0].gender;
}
/*
function validateNameandAge(){
    let isValid = true;
    var letters = /^[A-Za-z]+$/;
    
    if (ename.value.trim() == "" && eage.value.trim() == ""){
        setError(ename, "Please enter Name and age")
        isValid = false;
    }
    else if(!ename.value.match(letters) && eage.value < 18 || eage.value >60){
        setError(ename, "Only Alphabets.")
        isValid = false;
    }

    else{
        setSuccess(ename);
        isValid = true;
    }

    return isValid;
}*/
function totalNumberOfEmployee(){
    let total=0;
    for(let i=0;i<testarr.length;i++){
        total=total+1;
    }

    return total;
}
function Update(eid){
    console.log("Id before ",delIndex)
    
    validateAge();
     validateName();
    //  validateID();
     validateGen();
    console.log("value of eis",eid)
    console.log("Total Array ",testarr)
    let vin= window.confirm("Do you want to Update ? ");
    console.log('vin ',vin)
    if (  validateName() == true && validateAge() == true && validateGen() == true && vin){
        
    var eid = document.getElementById("emp-id").value;
    var ename = document.getElementById("emp-name").value;
    var eage = document.getElementById("emp-age").value;
    var egender = document.getElementById("emp-gender").value;
    var errorArea = document.getElementById("error-area");
    console.log("Id after ",eid)
    
    let index = testarr.findIndex(i => i.id == eid)
    if(index !==-1){
    if(testarr[index]['id'] == eid && testarr[index]['name']==ename && testarr[index]['age'] && testarr[index]['gender']==egender){
    //    setError(errorArea, "Please enter fjecdn ID.")
    //    setTimeout(function(){
    //        document.getElementById('error-area').setAttribute("class","check");//setError(errorArea, "Please enter fjecdn ID.");
    //    }, 5000);
    }
        console.log("Else part")
     
    console.log('index ',index)
    testarr[index]['id']=eid,
    testarr[index]['name']=ename,
    testarr[index]['age']=eage,
    testarr[index]['gender']=egender
}
else{
    testarr.filter((ele,index)=>{
        if(ele.id == delIndex){
            testarr.splice(index,1)
        }
    })
    displayData();
    testarr.push({id:eid, name:ename, age:eage, gender:egender})
        id_list.push(eid);
        console.log("Test array ",testarr)
    // testarr.splice(delIndex,1)

}
    let var3=totalNumberOfEmployee();
    document.getElementById("fortotalCount").innerHTML =var3 ;
    clearForm();
    displayData();
    

    // console.log("key Checkng ",this.isEdit)
    this.isEdit = false
    }
    document.getElementById('update').setAttribute("class","check")
}