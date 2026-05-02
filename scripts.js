function validateForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if(name==="" || email===""){
        alert("Please fill out required fields");
        return false;}
    return true;
}

function toggleDesc(id){
    var element = document.getElementById(id);

    if(element.style.display === "none"){
        element.style.display = "block";}
    else {
        element.style.display = "none"
    }
}

window.onload = function (){
    var quote = document.getElementById("quote")
    if (quote){
        quote.addEventListener("mouseover", function(){
            quote.style.backgroundColor = "lightgray"
        });
        quote.addEventListener("mouseout", function(){
            quote.style.backgroundColor = ""
        });
    }


    if(window.location.pathname.includes("index.html")){
        var p = document.createElement("p");

        var date = new Date();
        var text = document.createTextNode(("Page loaded on: " + date));
        p.appendChild(text);

        var footer = document.querySelector("footer");
        footer.appendChild(p);
    }
}
