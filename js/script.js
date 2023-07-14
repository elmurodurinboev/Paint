// Point
const canvas = document.querySelector("canvas")

let ctx = canvas.getContext("2d"),
  isDrawing = false,
  brushWith = 5

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight
})

const srartDraw = () => {
  isDrawing = true
  ctx.beginPath()
}

const drawing = (e) => {
  if (!isDrawing) return
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
  ctx.lineWidth = brushWith
}

const stopDraw = () => {
  isDrawing = false
}
canvas.addEventListener("mousedown", srartDraw)
canvas.addEventListener("mousemove", drawing)
canvas.addEventListener("mouseup", stopDraw)
