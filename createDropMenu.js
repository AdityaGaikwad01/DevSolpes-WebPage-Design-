function dropdownMenu(){
    let x = document.getElementById("dropdownClick");
    if(x.className === "topnav"){
        x.className += " responsive";
        // changing topnav to topnav.responsive 
    }
    else{
        x.className = 'topnav';
    }
}