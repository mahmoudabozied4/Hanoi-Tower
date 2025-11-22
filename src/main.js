// Refactored Tower of Hanoi Visualization
import '../style.css'

// Helpers moved into main file
async function sleep(SLEEP_TIME = 1000) {
    await new Promise(r => setTimeout(r, SLEEP_TIME))
}

function mapDiscWidth(X, DISC_LENGTH) {
    const A = 1,
        B = DISC_LENGTH,
        C = 20,
        D = 100
    return ((X - A) / (B - A)) * (D - C) + C
}

/** CONFIG **/
let DISC_LENGTH = 0
let SLEEP_TIME = 1000
let started = false

/** DOM ELEMENTS **/
const resetBtn = document.getElementById("reset-button")
const startBtn = document.getElementById("start-button")

/** APPLICATION STATE **/
const state = {
    a: [],
    b: [],
    c: [],
    stack: [],

    renderStack() {
        const moveTo = document.getElementById("move-to")
        const stackContainer = document.querySelector("#stack")

        moveTo.innerHTML = this.stack.at(-1)?.substring(20) || ""
        stackContainer.innerHTML = ""

        this.stack.forEach(item => {
            stackContainer.innerHTML += `<div class="stack">${item}</div>`
        })

        stackContainer.innerHTML += '<div class="p-1"></div>'
    },

    pushToStack(entry) {
        this.stack.push(entry)
        this.renderStack()
    },

    popFromStack() {
        this.stack.pop()
        this.renderStack()
    },

    swapBetween(from, to) {
        from = from.toLowerCase()
        to = to.toLowerCase()

        const src = this[from]
        const dest = this[to]

        if (src.length === 0) {
            src.push(dest.pop())
        } else if (dest.length === 0) {
            dest.push(src.pop())
        } else if (src.at(-1) < dest.at(-1)) {
            dest.push(src.pop())
        } else {
            src.push(dest.pop())
        }

        render()
    }
}

/** RENDERING THE PEGS **/
function render() {
    const pipes = document.querySelectorAll(".flex-col-reverse")
    const labels = ["A", "B", "C"]
    const keys = ["a", "b", "c"]

    keys.forEach((key, i) => {
        pipes[i].innerHTML = `<div class="base-plate">${labels[i]}</div>`
        state[key].forEach(disc => {
            pipes[i].innerHTML += `
        <div class="plate" style="width: ${mapDiscWidth(disc, DISC_LENGTH)}%">${disc}</div>
      `
        })
    })
}

/** HANOI ALGORITHM **/
async function compute() {
    async function hanoi(n, a, b, c) {
        if (n === 1) {
            await sleep(SLEEP_TIME)
            state.swapBetween(a, c)
            return
        }

        await sleep(SLEEP_TIME)
        state.pushToStack(`hanoi(${n - 1}, ${a.toUpperCase()}, ${c.toUpperCase()}, ${b.toUpperCase()}) - move <span>${a.toUpperCase()}</span> to <span>${b.toUpperCase()}</span>`)
        await hanoi(n - 1, a, c, b)
        state.popFromStack()

        await sleep(SLEEP_TIME)
        state.pushToStack(`hanoi(${n - 1}, ${b.toUpperCase()}, ${a.toUpperCase()}, ${c.toUpperCase()}) - move <span>${b.toUpperCase()}</span> to <span>${c.toUpperCase()}</span>`)
        state.swapBetween(a, c)
        await hanoi(n - 1, b, a, c)
        state.popFromStack()
    }

    state.pushToStack(`hanoi(${DISC_LENGTH}, A, B, C) - move <span>A</span> to <span>C</span>`)
    await hanoi(DISC_LENGTH, "a", "b", "c")
    state.popFromStack()

    resetBtn.style.display = "block"
    startBtn.style.display = "none"
}

/** CONTROLS **/
function start() {
    SLEEP_TIME = document.querySelector("input#time").value
    if (!started) {
        compute()
        started = true
    }
}

function reset() {
    resetBtn.style.display = "none"
    startBtn.style.display = "block"

    state.a = Array.from({length: DISC_LENGTH}, (_, i) => DISC_LENGTH - i)
    state.b = []
    state.c = []

    started = false
    render()
}

/** INITIALIZATION **/
document.querySelector("#main-form").addEventListener("submit", e => {
    e.preventDefault()
    init()
})

function init() {
    const count = +document.querySelector("input").value
    document.getElementById("init-window").style.display = "none"

    DISC_LENGTH = count
    state.a = Array.from({length: count}, (_, i) => count - i)
    state.b = []
    state.c = []

    render()
}

resetBtn.onclick = reset
startBtn.onclick = start
