alert("Добро пожаловать в игру: Угадай число!");

const wantsToPlay = confirm("Хотите ли вы сыграть?");

if (!wantsToPlay) {
    alert("Может в другой раз, спасибо!");
} else {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    const userGuess = prompt("Выбери любое число от 1 до 10");

    if (userGuess === null || userGuess === "" || isNaN(userGuess)) {
        alert("Подберите число");
    } else {
        const guess = parseInt(userGuess);

        if (guess === randomNumber) {
            alert("Прекрасно! Вы угадали загадонное число " + randomNumber);
        } else {
            alert("К сожалению вы не угадали, правильная цифра была " + randomNumber + ". Удачи в другой раз");
        }
    }
    alert("Спасибо за игру!");
}