function navshow() {
    document.getElementById("nav").classList.add("active");
    document.getElementById("mouse").classList.add("mouse");
};
function navclose() {
    document.getElementById("nav").classList.remove("active");
    document.getElementById("mouse").classList.remove("mouse");
};
function onTopClick() {
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
    }); 
};
function onBottomClick() {
    //window.location.hash = "#def";
    window.scrollTo({ 
        top: 1000, 
        behavior: "smooth" 
    }); 
};