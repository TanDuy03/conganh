(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        var act = document.getElementsByClassName("tl-icon");
        var i;
        for (i = 0; i < act.length; i++) {
            act[i].style.color = "#ffffff";
            
        }
    })
})();

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
