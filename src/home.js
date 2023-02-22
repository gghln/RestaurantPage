let node = ''
function createHome(){
    const content = document.getElementById("content")
    
    //Home
    const homeContainer = document.createElement('div')
    homeContainer.classList.add('Container')
    homeContainer.setAttribute('id','homeContainer')
    content.appendChild(homeContainer)

    const title = document.createElement('h1')
    node = document.createTextNode('Το ωραιοτερο ψητοπωλειο της πολης')
    title.appendChild(node)

    homeContainer.appendChild(title)
}

export {createHome};