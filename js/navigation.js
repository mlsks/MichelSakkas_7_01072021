let coll = document.getElementsByClassName("collapsible")

let collapsible

for (collapsible = 0; collapsible < coll.length; collapsible++) {
    coll[collapsible].addEventListener("click", function () {
        this.classList.toggle("active")
        let content = this.nextElementSibling

        if (content.style.display === "block") {
            content.style.display = "none"
        } else {
            content.style.display = "block"
            content.classList.add("databox")
            content.style.opacity = 1
            content.style.transition = "all 1s ease"
        }
    })
}

let ingredients = document.getElementById("ul-ingredients")
ingredients.addEventListener("click", function (e) {
    let x = e.target
    let databox = document.getElementById("databox")
    let inner = x.innerText
    x.classList.add("databox")
    x.setAttribute("id", inner)
    console.log(x)
    databox.innerHTML += `
    <li class="${x.parentNode.id}" id="el ${inner}">${inner} <span class="closeDatabox" onclick="remove(this)"></span></li>
    `
})

let appareils = document.getElementById("ul-appareils")
appareils.addEventListener("click", function (e) {
    let x = e.target
    let databox = document.getElementById("databox")
    let inner = x.innerText
    x.classList.add("databox")
    x.setAttribute("id", inner)
    databox.innerHTML += `
    <li class="${x.parentNode.id}" id="el ${inner}">${inner} <span class="closeDatabox" onclick="remove(this)"></span></li>
    `
})

let ustensiles = document.getElementById("ul-ustensiles")
ustensiles.addEventListener("click", function (e) {
    let x = e.target
    let databox = document.getElementById("databox")
    let inner = x.innerText
    x.classList.add("databox")
    x.setAttribute("id", inner)
    console.log(x)
    databox.innerHTML += `
    <li class="${x.parentNode.id}" id="el ${inner}">${inner} <span class="closeDatabox" onclick="remove(this)"></span></li>
    `
})

function remove(elem) {
    // elem.parentNode.removeChild(elem)
    elem.parentElement.remove()
}

// window.onclick = (e) => {
//     let x = e.target
//     let databox = document.getElementById("databox")
//     // Check if the element is a LI
//     // x.tagName === "LI"
//     // x == document.getElementById("appareils")
//     if (x.tagName === "LI") {
//         let inner = x.innerText
//         x.classList.add("databox")
//         x.setAttribute("id", inner)
//         console.log(x)
//         databox.innerHTML += `<li class="${x.parentNode.id}" id="el ${inner}">${inner}</li>`
//     }
// }
