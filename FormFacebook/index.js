const input = document.querySelectorAll(".input")
const wrap = document.querySelectorAll(".wrap-icon-input")
const select = document.querySelectorAll("#select")
const sex = document.querySelectorAll(".sex")
const btn = document.querySelector(".submit-btn")
const form = document.querySelector(".container")
const wrapSex = document.querySelectorAll(".select-sex")

const checkForm = [
  {
    name: "first-name",
    checkFuncionPass: function (data, wrapValidate) {
      data == "" && wrapValidate.classList.add("active")
      return data == ""
    },
  }, 
  {
    name: "last-name",
    checkFuncionPass: function (data, wrapValidate) {
      data == "" && wrapValidate.classList.add("active")
      return data == ""
    },
  },
  {
    name: "phone",
    checkFuncionPass: function (data, wrapValidate) {
      (data == "" || data.length < 10 || data.length > 11 || !isFinite(data)) && wrapValidate.classList.add("active")
      return data == "" || data.length < 10 || data.length > 11 || !isFinite(data)
    },
  },
  {
    name: "password",
    checkFuncionPass: function (data, wrapValidate) {
      (data == "" || data.length < 6) && wrapValidate.classList.add("active")
      return data == "" || data.length < 6
    },
  }
]

input.forEach((item, index) => {
  
  item.onblur = () => {
    checkForm.forEach(itemCheck => {
      itemCheck.name == item.name && itemCheck.checkFuncionPass(item, item.value, wrap[index])
    })
  }
  item.oninput = () => {
    wrap[index].classList.remove("active")
  }
})

select.forEach((item, index) => {
  item.onblur = () => {
    item.value == "" ? item.classList.add("active") : item.classList.remove("active")
  }
})

const checkBox = [
  {
    name: "male",
    removeCheck: function() {
      document.getElementById("female").checked = false
      document.getElementById("none").checked = false
    }
  },
  {
    name: "female",
    removeCheck: function() {
      document.getElementById("male").checked = false
      document.getElementById("none").checked = false
    }
  },
  {
    name: "none",
    removeCheck: function() {
      document.getElementById("female").checked = false
      document.getElementById("male").checked = false
    }
  },
]

sex.forEach((item, index) => {
  item.onchange = () => {
    wrapSex.forEach(item => {
      item.classList.remove("active")
    })
    checkBox.forEach(itemCheck => {
      item.name == itemCheck.name && itemCheck.removeCheck()
    })
  }
})
const checkAll = () => {
  check = true
  input.forEach((item, index) => {
    checkForm[index].checkFuncionPass(item.value, wrap[index])
    
    item.oninput = () => {
      wrap[index].classList.remove("active")
    }
  })
  select.forEach(item => {
    if(item.value == "") {
      item.classList.add("active")
      return false
    } 
  })
  if(sex[0].checked == false && sex[1].checked == false && sex[2].checked == false) {
    wrapSex.forEach(item => item.classList.add("active"))
    check = false
  }
  return check
}

form.onsubmit = (e) => {
  if(!checkAll()) {
    e.preventDefault()
  } else {
    
    
    let title = ""
    title = input[0].value + " " + input[1].value + " "
    select.forEach(item => {
      title += item.value + "/" 
    })
    window.alert("Xin chào " + title + " đã đăng ký thành công !!")
  }
}