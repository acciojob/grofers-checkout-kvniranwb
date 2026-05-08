const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let prices = document.querySelectorAll(".price")
const getSum = () => {
//Add your code here
	let sum = 0;
	prices.forEach((price) => {
        sum += Number(price.textContent);
    });

	let c = document.getElementById("price");
	c.textContent = sum; 
	
};

getSumBtn.addEventListener("click", getSum);

