console.log("we good")


const container = document.querySelector("#container")

document.querySelector("#print-sentence").addEventListener("click", event => {
    const thing = document.querySelector("#thing").value
    const location = document.querySelector("#location").value

    container.innerHTML = `
    <h1>I can purchase ${thing} at ${location}.</h1>
    `
})