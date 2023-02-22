let node = ''
function createContact(){
    const content = document.getElementById("content")
    
    //Home
    const contactContainer = document.createElement('div')
    contactContainer.classList.add('Container')
    contactContainer.setAttribute('id','contactContainer')
    content.appendChild(contactContainer)

    const title = document.createElement('h1')
    node = document.createTextNode('Contact Us')
    title.appendChild(node)

    contactContainer.appendChild(title)
}

export {createContact};