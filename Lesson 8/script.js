function nameinfo() {
    var firstName = document.getElementById("First Name").value;
    var middleName = document.getElementById("Middle Name").value;
    var lastName = document.getElementById("Last Name").value;
    console.log("First Name: " + firstName);
    console.log("Middle Name: " + middleName);
    console.log("Last Name: " + lastName);

    document.getElementById("Full Name").innerHTML = firstName + " " + middleName +" " + lastName
 }



