// Point
const canvas = document.querySelector("canvas"),
  toolBtns = document.querySelectorAll(".tool"),
  fillColor = document.querySelector("#fill-color")

let ctx = canvas.getContext("2d"),
  isDrawing = false,
  brushWith = 5,
  selectedTool = "brush",
  prevMouseY,
  prevMouseX,
  snapshot

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight
})

const startDraw = (e) => {
  isDrawing = true
  ctx.beginPath()
  prevMouseY = e.offsetY
  prevMouseX = e.offsetX
  console.log(prevMouseX, prevMouseY)
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height)
}

const drawRectangle = (e) => {
  fillColor.checked
    ? ctx.fillRect(
        e.offsetX,
        e.offsetY,
        prevMouseX - e.offsetX,
        prevMouseY - e.offsetY,
      )
    : ctx.strokeRect(
        e.offsetX,
        e.offsetY,
        prevMouseX - e.offsetX,
        prevMouseY - e.offsetY,
      )
}

const drawing = (e) => {
  if (!isDrawing) return
  ctx.putImageData(snapshot, 0, 0)
  switch (selectedTool) {
    case "brush":
      ctx.lineTo(e.offsetX, e.offsetY)
      ctx.stroke()
      break

    case "rectangle":
      drawRectangle(e)
      break

    case "circle":
      break

    case "triangle":
      break

    case "earser":
      break

    default:
      break
  }
  ctx.lineWidth = brushWith
}

toolBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".options .active").classList.remove("active")
    btn.classList.add("active")
    selectedTool = btn.id
    console.log(btn.id)
  })
})

const stopDraw = () => {
  isDrawing = false
}
canvas.addEventListener("mousedown", startDraw)
canvas.addEventListener("mousemove", drawing)
canvas.addEventListener("mouseup", stopDraw)
