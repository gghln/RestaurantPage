import {createWebsite} from './website'
import {createHome} from './home'
import {createMenu} from './menu'
import {createContact} from './contact'
import './style.css'


createWebsite()
document.addEventListener('DOMContentLoaded', () => {
    
    createHome()

    let homeButton = document.querySelector('#homeButton')
    homeButton.addEventListener('click', () => {
        let currentContainer = document.querySelectorAll('.Container')
        currentContainer.forEach(e => {
            e.remove()
        })
        createHome()
    })

    let menuButton = document.querySelector('#menuButton')
    menuButton.addEventListener('click', () => {
        let currentContainer = document.querySelectorAll('.Container')
        currentContainer.forEach(e => {
            e.remove()
        })
        createMenu()
    })

    let contactButton = document.querySelector('#contactButton')
    contactButton.addEventListener('click', () => {
        let currentContainer = document.querySelectorAll('.Container')
        currentContainer.forEach(e => {
            e.remove()
        })
        createContact()
    })
})