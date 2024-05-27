// Leer mensaje personalizado de los parámetros de la URL
const urlSearchParams = new URLSearchParams(window.location.search)
const messageCustom = urlSearchParams.get('message')

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// Obtener los botones de abrir y cerrar
const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

// Deshabilitar el botón de cerrar inicialmente
btnCloseElement.disabled = true

// Evento para abrir la carta
btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false

  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(() => {
    coverElement.style.zIndex = -1 // Mantener z-index bajo para interactividad

    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // Animación del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'

  }, 500)
})

// Evento para cerrar la carta
btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')

  setTimeout(() => {
    coverElement.style.zIndex = 2 // Volver a z-index alto cuando se cierra
    coverElement.classList.remove('open-cover')

    // Ocultar el corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  }, 500)
})


