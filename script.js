let isclicked = false
function toggle() {
  const list = document.getElementById('menu-items')
  let icon = document.getElementById('menu-icon')
  isclicked = !isclicked
  if (isclicked == true) {
    list.style.display = 'flex'
  } else {
    list.style.display = 'none'
  }
}