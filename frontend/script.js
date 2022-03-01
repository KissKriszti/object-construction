// 1. Get data; 2. Prepare data; 3. Components = Html elements we'd like to add to the document later; 4. Render = add the components to the document

function Month(name, id, nth, days) {
    this.name = name;
    this.id = id;
    this.nth = nth;
    this.days = days;
}

const months = [
    new Month("January", "jan", 1, 31),
    new Month("February", "feb", 2, 28),
    new Month("March", "mar", 3, 31),
    new Month("April", "apr", 4, 30),
    new Month("May", "may", 5, 31),
    new Month("June", "jun", 6, 30),
    new Month("July", "jul", 7, 31),
    new Month("August", "aug", 8, 31),
    new Month("September", "sep", 9, 30),
    new Month("October", "oct", 10, 31),
    new Month("November", "nov", 11, 30),
    new Month("December", "dec", 12, 31)
];

console.log(months)

const monthSection = (id, h1, days) => {
    return `
    <section id="${id}">
        <h1>${h1}</h1>
        <div class="days">${days}</div>
    </section>
    `;
}

const dayCard = (year, month, day) => {
    return `
    <div class="card">
        <time>${year}</time>
        <time>${month}</time>
        <time>${day}</time>
        <button class="card-btn">Get Day Name</button>
    </div>
    `;
}

const dayCards = (month, callDayCard) => {
    let toReturn = "";
    for (let i = 1; i <= month.days; i++) {
        toReturn += callDayCard(2022, month.nth, i)
    }

    return toReturn
}

// console.log(dayCards(months[0], dayCard))

const loadEvent = () => {
    // const rootElement = document.getElementById("root")
    let content = ""
    for (const month of months) {
        // rootElement.insertAdjacentHTML('beforeend', dayCards(month, dayCard))
        content += monthSection(month.id, month.name, dayCards(month, dayCard))
    }
    document.getElementById("root").insertAdjacentHTML("beforeend", content)

    //click event
    /* function cardButtonClickEvent(event) {
        console.log(event.target.parentElement)
        event.target.parentElement.classList.toggle("clicked")
    }

    const cardList = document.querySelectorAll(".card")
    for (let card of cardList) {
        // console.log(card)
        card.querySelector("button").addEventListener('click', cardButtonClickEvent)
    } */
    function clickEvent(event) {
        // console.log(event.target)
        if (event.target.classList.contains("card-btn")) {
            console.log("Hello click")
            event.target.innerHTML = "This button was clicked"
        }
    }

    document.addEventListener('click', clickEvent)
}

window.addEventListener('load', loadEvent)