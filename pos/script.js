
//customer ge data tika me array ekata store karanawa
let customer_array = [];

const loadCustomers = () => {
    $("#customerTableBody").empty();
    customer_array.map((item,index)=>{
        console.log(item);
        //create table row
        let data = `<tr><td>${item.firstName}</td><td>${item.lastName}</td><td>${item.mobile}</td><td>${item.email}</td><td>${item.address}</td></tr>`
        $("#customerTableBody").append(data);//table walata data add kara gannawa
    })

}
//add customer button
$("#customer_add_button").on("click", function() {
    /*console.log("click add customer button");*/

    //value tika alla gannawa
    let fName = $("#firstName").val();
    let lName = $("#lastName").val();
    let mobile = $("#mobile").val();
    let email = $("#email").val();
    let address = $("#address").val();

    //console eke print karala balanawa me harida allagenada kiyala
    console.log("fName :", fName);
    console.log("lName :", lName);
    console.log("mobile :", mobile);
    console.log("email :", email);
    console.log("address :", address);

    //customers la array ekata add kara gannawa
    let customer ={
        id:customer_array.length + 1,
        firstName: fName,
        lastName: lName,
        mobile: mobile,
        email: email,
        address: address
    };
    customer_array.push(customer);
    loadCustomers();//customer la load wenne meke dn table walata add wenne

    /*  //create table row
     let data = `<tr><td>${fName}</td><td>${lName}</td><td>${mobile}</td><td>${email}</td><td>${address}</td></tr>`
     //table body eka allagannawa
     $("#customerTableBody").append(data);//table walata data add kara gannawa*/

});

