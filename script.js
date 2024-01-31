
document.getElementById("reveal-button").addEventListener("click", function(){
    document.getElementById("hiddenmessage").style.display = 'block';
    this.textContent = "Received!"
});
