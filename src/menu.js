let node = ''
function createMenu(){
    document.addEventListener('DOMContentLoaded', () => {
        const content = document.getElementById("content")
        
        //Home
        const menuContainer = document.createElement('div')
        menuContainer.classList.add('Container')
        content.appendChild(menuContainer)

        const title = document.createElement('h1')
        node = document.createTextNode('Menu')
        title.appendChild(node)

        menuContainer.appendChild(title)
    })
}

export {createMenu};