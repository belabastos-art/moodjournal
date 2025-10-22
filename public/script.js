let moodForm = document.querySelector("#moodForm");
let mood = document.querySelector("#mood");
let moodDesc = document.querySelector("#moodDesc");
let submitBtn = document.querySelector("#submitBtn");
let showBtn = document.querySelector("#showMoodsBtn");
let userMoods = document.querySelector("#userMoods");

moodForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let moodValue = mood.value;
    let moodDescValue = moodDesc.value;
    fetch("/new mood", {
        method: "POST",
        headers: { "Content-type" : "application/json"},
        body: JSON.stringify({})
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
    
})
.catch(function (error) {
    console.log ("we got error", error);
});
});