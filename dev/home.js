"use strict";
import { scrollToPosition } from './utils/helpers'

const viewport = document.querySelector(".viewport")

const buttonAbout = document.querySelector(".button-about")

const windowHight = viewport.clientHeight

const updatePreviousScrollYPosition = (scrollY) => {
    prevScrollY = scrollY
}

const setUpNavListeners = () => {
    buttonAbout.addEventListener('click', () => {
        event.preventDefault();
        scrollToPosition(viewport, windowHight)//idiotic solution to make sure it is scrolled to the bottom
    })
}

setUpNavListeners()
