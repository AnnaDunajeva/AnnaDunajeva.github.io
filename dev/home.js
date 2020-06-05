"use strict";
import './stylesheets/home.scss'
import { scrollToPosition } from './utils/helpers'
// import Typed from 'typed.js';

//viewport (div that take all page) is scrollable insted of body for parallax to work
const viewport = document.querySelector(".viewport")
const buttonAbout = document.querySelector(".button-about")

const scrollableHight = viewport.scrollHeight 
const windowHight = viewport.clientHeight
let prevScrollY = viewport.scrollTop 
let onBotton = scrollableHight - viewport.scrollTop === windowHight ? true : false
let onTop = !onBotton

// const typedOptions = {
//     strings: ['I CREATE STUFF'],
//     typeSpeed: 0,
//     loop: true,
//     backSpeed: 0
// }
// const typed = new Typed('.header-text', typedOptions);

const updatePreviousScrollYPosition = (scrollY) => {
    prevScrollY = scrollY
}

const setUpNavListeners = () => {
    buttonAbout.addEventListener('click', () => {
        event.preventDefault();
        scrollToPosition(viewport, windowHight + 100)//idiotic solution to make sure it is scrolled to the bottom
    })
}

const setUpScrollListeners = () => {
    viewport.addEventListener('scroll', () => {
        console.log('prevScrollY ', prevScrollY,'scrollY ', viewport.scrollTop, 'onBotton ', onBotton, onTop, scrollableHight-viewport.scrollTop, windowHight)
        if (scrollableHight - viewport.scrollTop <= windowHight + 1) {
            onBotton = true
            onTop = false
            updatePreviousScrollYPosition(viewport.scrollTop)
        }
        if (viewport.scrollTop === 0) {
            onBotton = false
            onTop = true
            updatePreviousScrollYPosition(0)
        }

        if (viewport.scrollTop > prevScrollY + 10 && !onBotton) {
            onBotton = true
            onTop = false
            scrollToPosition(viewport, windowHight + 100) //idiotic solution to make sure it is scrolled to the bottom
        } else if (viewport.scrollTop < prevScrollY - 10 && !onTop) {
            onTop = true
            onBotton = false
            scrollToPosition(viewport, 0)
        }
    })
}

setUpScrollListeners()
setUpNavListeners()
