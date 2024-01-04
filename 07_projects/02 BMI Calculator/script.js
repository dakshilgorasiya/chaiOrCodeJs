const form = document.querySelector("form");

// this will give empty value as page load it will return value
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height";
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight";
    } else {
        let bmi = weight / ((height * height) / 10000);
        bmi = bmi.toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        if (bmi < 18.6) {
            const under = document.querySelector("#under");
            under.style.backgroundColor = "yellow";
            under.style.borderRadius = "10px";
            under.style.width = "250px";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            const normal = document.querySelector("#normal");
            normal.style.backgroundColor = "yellow";
            normal.style.borderRadius = "10px";
            normal.style.width = "250px";
        } else {
            const over = document.querySelector("#over");
            over.style.backgroundColor = "yellow";
            over.style.borderRadius = "10px";
            over.style.width = "250px";
        }
    }
});
