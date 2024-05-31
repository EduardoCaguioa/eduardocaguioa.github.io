const btnLike1 = document.getElementById("btnlike1")
const btnDislike1 = document.getElementById("btndislike1")
const count1 = document.getElementById("count1")
const btnLike2 = document.getElementById("btnlike2")
const btnDislike2 = document.getElementById("btndislike2")
const count2 = document.getElementById("count2")

function countLike1() {
  let likeCounts = parseInt(count1.value) + 1
  count1.textContent = likeCounts.toString()
}
btnLike1.addEventListener("click",countLike1)

function countDislike1() {
  let dislikeCounts = parseInt(count1.value) + 1
  count1.textContent = dislikeCounts.toString()
}
btnDislike1.addEventListener("click",countDislike1)

function countLike2() {
  let likeCounts = parseInt(count2.value) + 1
  count2.textContent = likeCounts.toString()
}
btnLike2.addEventListener("click",countLike2)

function countDislike2() {
  let dislikeCounts = parseInt(count2.value) + 1
  count2.textContent = dislikeCounts.toString()
}
btnDislike2.addEventListener("click",countDislike2)


