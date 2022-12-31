const parrafos = document.querySelectorAll("*.parrafo")
const secciones = document.querySelectorAll("*.seccion")


parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
    parrafo.classList.add("dragging")
    event.dataTransfer.setData("id", parrafo.id)
    })

parrafo.addEventListener("dragend", () => {
    parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion=>{ 
    seccion.addEventListener("dragover", event=>{
    event.preventDefault()
    event.dataTransfer.setData("sid", seccion.id)
    })

    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})
const imagen = document.querySelectorAll(".image")
imagen.forEach(image=>{ 
    image.addEventListener('dragenter',event=>{
        event.preventDefault()
        image.classList.add("dragover")
    })
    
    image.addEventListener('dragover',event=>{
        event.preventDefault()
        image.classList.add("dragover")
    })

    image.addEventListener('dragleave',event=>{
        image.classList.remove("dragover")
    })
            

    image.addEventListener("drop" , event=>{
         image.classList.remove("dragover")
         const id_imagen = event.dataTransfer.getData("id")
         const basurero=document.getElementById(id_imagen)
         image.appendChild(basurero)
         basurero.classList.remove('hide')
    })
})
