const btnLike1 = document.getElementById("btnlike1")
const count1 = document.getElementById("count1")

function countLike1() {
  let likeCounts = parseInt(count1.value) + 1
  count1.textContent = likeCounts.toString()
}
btnLike.addEventListener("click",countLike1)
