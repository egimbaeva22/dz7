const riddlesBox = document.querySelector(".riddlesBox")

const riddles = [
    {
        riddle:'чем больше из нее берешь, тем больше она становится',
        answer:'яма'
    },
    {
        riddle:'что не является вопросом но требует ответа',
        answer:'звонок'
    },
    {
        riddle:'Это ягода. Но многие считают его фруктом. за внешнее сходство назвали так же, как и птицу',
        answer:'киви'
    },
    {
        riddle:'Это то, чем можно поделиться только один раз.',
        answer:'Секрет'
    },
    {
        riddle: 'На весь простор один костер горит над нами с давних пор',
        answer: 'Солнце'
    },
    {
        riddle:'Оно всегда перед нами но видеть и знать его мы не можем',
        answer:'будущее'
    }
]

riddles.forEach(riddle => {
    const riddleBox = document.createElement("div");
    riddleBox.setAttribute("class", "riddleBox")

    const riddleP = document.createElement("p")
    riddleP.setAttribute("class", "riddleP")
    riddleP.innerText = riddle.riddle

    const riddleAnswer = document.createElement("span")
    riddleAnswer.setAttribute("class", "riddleAnswer hideAnswer")
    riddleAnswer.innerText = riddle.answer

    const riddleHideAndShow = document.createElement("button")
    riddleHideAndShow.setAttribute("class", "btn")
    riddleHideAndShow.innerText = "Показать ответ"

    riddleBox.append(riddleP, riddleAnswer, riddleHideAndShow)

    riddlesBox.append(riddleBox)

    let isAnswerShown = false

    riddleHideAndShow.onclick = () => {
        isAnswerShown = !isAnswerShown

        if (isAnswerShown) {
            riddleHideAndShow.innerText = "Скрыть ответ"
        } else {
            riddleHideAndShow.innerText = "Показать ответ"
        }

        riddleAnswer.classList.toggle("hideAnswer")

    }
})