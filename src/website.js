let node = ''
function createWebsite(){
    document.addEventListener('DOMContentLoaded', () => {
        const content = document.getElementById("content")
        
        //Navigation menu
        const navContainer = document.createElement('div')
        navContainer.classList.add('navContainer')
        const navTitle = document.createElement('p')
        node = document.createTextNode('Ψητοπωλείο')
        navTitle.appendChild(node)
        navContainer.appendChild(navTitle)
        content.appendChild(navContainer)

        //Create Buttons
        const tabsContainer = document.createElement('div')
        tabsContainer.classList.add('tabsContainer')
        navContainer.appendChild(tabsContainer)
        
        //Home button
        const homeButton = document.createElement('button')
        homeButton.classList.add('button')
        node = document.createTextNode('Home')
        homeButton.appendChild(node)

        //Menu button
        const menuButton = document.createElement('button')
        menuButton.classList.add('button')
        node = document.createTextNode('Menu')
        menuButton.appendChild(node)

        //Contact button
        const contactButton = document.createElement('button')
        contactButton.classList.add('button')
        node = document.createTextNode('Contact Us')
        contactButton.appendChild(node)

        tabsContainer.appendChild(homeButton)
        tabsContainer.appendChild(menuButton)
        tabsContainer.appendChild(contactButton)
    })
}

export {createWebsite};