// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const confirmButton = document.getElementById("getUserButton");
const input = document.getElementById("userNameInput");
const city = document.getElementById("userCity");

confirmButton.addEventListener("click", (e) => {
	fetch("https://jsonplaceholder.typicode.com/users")
		.then((response) => response.json())
		.then((data) => {
			let userCity = data
				.filter((user) => user.name === input.value)
				.map((user) => user.address.city);
			city.textContent = userCity;
		});
});
