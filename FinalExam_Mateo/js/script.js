function cart() {
    alert("Added to your imaginary cart. Let's continue shopping!");
    
}

function contact(){
    var name = document.getElementById("c-name").value;
    if (name != "")
        alert("Thank you for your feedback, "+ name+"!");
    else
        alert("Thank you for your feedback!");
}

function order(){
    var fname = document.getElementById("name").value;
    var item = document.getElementById("items").value;
    alert("Thank you for ordering "+item+", "+ fname+ "!\nYour imaginary delivery is on the way!");
}

function review() {
    var rating = document.getElementById("rating").value;

    if (rating == 10)
        alert("We're glad to hear that and we hope we won't let you down! Thank you.")
    else if(rating > 5)
        alert("Thank you for the postive feedback!\nPlease tell us how we could improve.")
    else
        alert("We're very sorry to hear that.\nPlease feel free to tell us how we could improve.")
}


console.log("Hover over media to see the credits.");