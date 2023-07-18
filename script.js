function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#Profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sem barba, sorrindo, usando óculos escuros, camisa e jaqueta preta, fundo colorido."
    )
    img.setAttribute("src", "./assets.avatar-light.png")
  } else {
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito de barba, sorrindo, usando óculos e camisa preta, fundo amarelo."
    )
    img.setAttribute("src", "./assets avatar.png")
  }  
}
