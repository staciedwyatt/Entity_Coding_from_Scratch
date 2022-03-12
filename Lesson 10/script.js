//createfunction//

function idCard() {
 var first = document.getElementById("firstName").value;//declare variables needed//
 console.log(firstName);//first name//
 var last = document.getElementById("lastName").value;
 console.log(lastName);
 var age = parseInt(document.getElementById("age").value);
 console.log(age);//age//
 var phone = parseInt(document.getElementById("phoneNumber").value);
 console.log(phone);//phone number//
 var address = document.getElementById("address").value;
 console.log(address);//address//
 var FullName= first + " " + last;//full name//
 //use innerhtml to push variables onto the id card//

document.getElementById("postFullName").innerHTML= "Full Name: " + FullName;
document.getElementById("postAddress").innerHTML= "Address: " + address;

//create an empty array//
var numberArray = [];

numberArray.push(age,phone);//numberarray =[age, phone number]. push elements into the array//

for (var i = 0; i < numberArray.length; i++) { //use for loop to go through array//
    if(numberArray[i] <= 100) {//use if statements to check conditions and perform specific actions, based on results//
     document.getElementById("postAge").innerHTML = "Age" + numberArray[i];
   }else {//code//
    document.getElementById("postPhoneNumber").innerHTML = "Phone Number" + numberArray[i];
   }
}
}