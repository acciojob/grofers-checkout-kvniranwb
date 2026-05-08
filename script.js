const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
    const prices = document.querySelectorAll(".prices");

    let sum = 0;

    prices.forEach(price => {
        sum += Number(price.textContent);
    });

    document.getElementById("ans").textContent = sum;
});