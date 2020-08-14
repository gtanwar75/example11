
function onFormSubmit(){
    var formData =readFormData();
    insertNewRecord(formData);
    
}


function readFormData(){
    var formData={};
    formData["fname"]= document.getElementById("fname").value;
    formData["lname"]= document.getElementById("lname").value;
    formData["mobile"]= document.getElementById("Mobile").value;
    formData["title"]= document.getElementById("title").value;
    return formData;
}
function insertNewRecord(data){
    var table= document.getElementById("contactDiary").getElementsByTagName('tbody')[0];
    //debugger;
    var rownum = datainof.length+1;
    //alert(rownum);
    var newRow =table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.fname;
    cell1=newRow.insertCell(1);
    cell1.innerHTML=data.lname;
    cell1=newRow.insertCell(2);
    cell1.innerHTML=data.mobile;
    cell1=newRow.insertCell(3);
    cell1.innerHTML=data.title;
    
}
