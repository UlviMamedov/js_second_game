alert("У королівстві, де легенди оживають, молодий оруженосець Люк мріє стати рицарем. Він служить Сір Роберту, рицарю, який вважає, що честь — це найвища добродійність.");

let choice1 = confirm("Сір Роберт ставить перед Люком випробування, що визначить його долю. Вибрати 'OK' для початку шляху, 'Cancel' для іншого вибору.");

if (choice1) {
    let pathChoice = prompt("Виберіть свій шлях: \n1. Вирушити в ліс\n2. Піти через село\n3. Відправитися до замку дракона");

    switch (pathChoice) {
        case "1":
            let potionChoice = confirm("Люк зустрічає чарівницю, що пропонує зілля сили в обмін на обіцянку. Прийняти зілля?");
            if (potionChoice) {
                alert("Люк отримує надприродну силу, але залишається в боргу перед чарівницею.");
            } else {
                alert("Люк вибирає чесний шлях, відмовляючись від легкого успіху.");
            }
            break;
        case "2":
            let villageChoice = prompt("Люк допомагає селянам, які потерпають від голови розбійників. \n1. Допомогти силою\n2. Знайти мирне рішення");
            if (villageChoice === "1") {
                alert("Люк використовує силу для захисту селян, але отримує поранення.");
            } else {
                alert("Люк вирішує конфлікти миром, заробляючи повагу як лідера.");
            }
            break;
        case "3":
            let dragonChoice = confirm("Люк вирішує випробувати себе, викликаючи дракона на бій. Бій з драконом?");
            if (dragonChoice) {
                alert("Люк гине, але його вчинок вважається героїчним.");
            } else {
                alert("Люк дізнається, що дракон не хоче воювати, і вони досягають миру.");
            }
            break;
        default:
            alert("Неправильний вибір.");
    }

    let tournamentChoice = confirm("Після повернення з подорожей Люка викликають на турнір. Брати участь у турнірі?");

    if (tournamentChoice) {
        let tournamentPath = prompt("Виберіть свій шлях на турнірі: \n1. Боротьба за честь\n2. Допомога іншому учаснику\n3. Відмова від бою");

        switch (tournamentPath) {
            case "1":
                alert("Люк демонструє свої навички, здобуваючи повагу.");
                break;
            case "2":
                alert("Люк допомагає пораненому рицарю, показуючи своє серце.");
                break;
            case "3":
                alert("Люк відмовляється боротися, стверджуючи, що справжній рицар знає, коли не варто воювати.");
                break;
            default:
                alert("Неправильний вибір.");
        }

        let kingTrialChoice = confirm("Король, вражений діями Люка, пропонує йому останнє завдання. Прийняти виклик короля?");

        if (kingTrialChoice) {
            let kingPath = prompt("Виберіть завдання короля: \n1. Захистити королівство\n2. Пошук зниклої реліквії");

            switch (kingPath) {
                case "1":
                    alert("Люк веде війська проти ворога, демонструючи свою відвагу.");
                    break;
                case "2":
                    alert("Люк вирушає за древньою реліквією, що може врятувати королівство.");
                    break;
                default:
                    alert("Неправильний вибір.");
            }

            if (pathChoice === "1" && !potionChoice && tournamentPath === "1" && kingPath === "1") {
                alert("Ліс + Відмова від зілля + Бій за честь: Люк стає рицарем, відомим своєю чесністю та мужністю, обираючи шлях служіння королівству.");
            } else if (pathChoice === "2" && villageChoice === "2" && tournamentPath === "3") {
                alert("Село + Мирне рішення + Відмова від бою: Люк залишає турнір, стаючи захисником селян і прикладом для інших, що справжня сила криється в мудрості та співчутті.");
            } else if (pathChoice === "3" && dragonChoice && kingPath === "2") {
                alert("Замок дракона + Бій з драконом: Люк гине, але його ім'я вічно живе в легендах як символ непереможної сміливості та жертовності.");
            } else {
                alert("Завдання завершено, але історія Люка виглядає трошки інакше!");
            }
        } else {
            alert("Люк відмовився від завдання короля. Його історія завершена!");
        }
    } else {
        alert("Люк відмовився від участі в турнірі. Його історія завершена!");
    }
} else {
    alert("Люк відмовився від випробування від Сіра Роберта. Його історія завершена!");
}