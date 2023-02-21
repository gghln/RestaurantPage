function landingPage(){
    document.addEventListener('DOMContentLoaded', () => {
        const content = document.getElementById("content")
        const title = document.createElement('h1');
        const node = document.createTextNode('This is a restaurant')
        title.appendChild(node)
    
        content.appendChild(title);
    })
}


export {landingPage};
