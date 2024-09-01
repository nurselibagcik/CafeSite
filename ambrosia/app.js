document.getElementById("toggleButton").addEventListener("click", function() {
    var reviewsContainer = document.querySelector("#reviews .container"); // .container'ı seçiyoruz
    var toggleButton = document.getElementById("toggleButton");

    if (reviewsContainer.style.maxHeight === "200px" || reviewsContainer.style.maxHeight === "") {
        reviewsContainer.style.maxHeight = "none";
        toggleButton.innerText = "Daha Az Göster";
    } else {
        reviewsContainer.style.maxHeight = "200px";
        toggleButton.innerText = "Daha Fazla Göster";
    }
});

// document.addEventListener('DOMContentLoaded', function () {
//     var showFormLink = document.getElementById('');
//     var evaluationSection = document.getElementById('evaluation');

//     showFormLink.addEventListener('click', function (event) {
//         event.preventDefault();
//         evaluationSection.classList.toggle('hidden');
//     });
// });

document.querySelector("#link-evaluation").addEventListener("click" ,function(e){
    e.preventDefault();
    const evaulationSection = document.querySelector("#evaluation");
    evaulationSection.classList.toggle("hidden");
})