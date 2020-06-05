export const scrollToPosition = (element, position) => {
    element.scrollTo({top: position, behavior: 'smooth'})
}