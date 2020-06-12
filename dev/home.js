"use strict";
import { scrollToPosition } from './utils/helpers'

const viewport = document.querySelector(".viewport")

const buttonAbout = document.querySelector(".button-about")

const scrollableHight = viewport.scrollHeight 
const windowHight = viewport.clientHeight
let prevScrollY = viewport.scrollTop 
let onBotton = scrollableHight - viewport.scrollTop === windowHight ? true : false
let onTop = !onBotton

const updatePreviousScrollYPosition = (scrollY) => {
    prevScrollY = scrollY
}

const setUpNavListeners = () => {
    buttonAbout.addEventListener('click', () => {
        event.preventDefault();
        scrollToPosition(viewport, windowHight + 200)//idiotic solution to make sure it is scrolled to the bottom
    })
}

const setUpScrollListeners = () => {
    viewport.addEventListener('scroll', () => {
        console.log('prevScrollY ', prevScrollY,'scrollY ', viewport.scrollTop, 'onBotton ', onBotton, onTop, scrollableHight, windowHight)
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
            scrollToPosition(viewport, windowHight + 200) //idiotic solution to make sure it is scrolled to the bottom
        } else if (viewport.scrollTop < prevScrollY - 10 && !onTop) {
            onTop = true
            onBotton = false
            scrollToPosition(viewport, 0)
        }
    })
}

setUpNavListeners()

//trying not to do this on mobile devices, cause does not work very smoothly (but tablets are a problem because of their width)
if (viewport.offsetWidth > 900) {
    setUpScrollListeners()
}