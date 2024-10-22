const item = document.querySelectorAll(".btn")
const val = document.querySelector(".value")

item[0].onclick = () => {
  if(val.textContent > 0) {
    val.textContent--
  }
}
item[1].onclick = () => {
  val.textContent++
}