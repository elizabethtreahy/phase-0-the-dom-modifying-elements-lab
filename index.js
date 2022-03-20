// Write your code here!
const body = document.getElementById(main)
main.remove(main)

const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "<h1>Elizabeth is the champion</h1>"
document.body.append(newHeader)

// const newHeader2 = document.createElement("h2")
// newHeader2.id = "Elizabeth is the champion"
// // getElementById("newHeader")
// newHeader.innerHTML = "<h2></h2>"