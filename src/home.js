let node = ''
function createHome(){
    document.addEventListener('DOMContentLoaded', () => {
        const content = document.getElementById("content")
        
        //Home
        const homeContainer = document.createElement('div')
        homeContainer.classList.add('Container')
        content.appendChild(homeContainer)

        const title = document.createElement('h1')
        node = document.createTextNode('Το ωραιοτερο ψητοπωλειο της πολης')
        title.appendChild(node)

        homeContainer.appendChild(title)
    })
}

export {createHome};