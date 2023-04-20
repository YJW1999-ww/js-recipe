const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

document.onkeydown = function (e) {
  console.log(e.key)
}

inputText.oninput = logValue
inputDate.oninput = logValue
