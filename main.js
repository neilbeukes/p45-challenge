// Toggle animation for slide out panel with user information
const toggle = () => {
    slidePanel = document.getElementById("slide-panel")
    expandButton = document.getElementById("expand-button")
    if (slidePanel.classList.contains("hide")) {
        // Slide out panel (show it)
        slidePanel.setAttribute("class", "slide-panel show");
        expandButton.setAttribute("class", "expand-button hide");
    }
    else {
        // Slide back panel (hide it)
        slidePanel.setAttribute("class", "slide-panel hide");
        expandButton.setAttribute("class", "expand-button show");
    }
}
