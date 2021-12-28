const arrows = document.querySelectorAll(".faq-icon")
console.log(arrows)
const faqsections = document.querySelectorAll(".faq-section")
console.log(section)

arrows.forEach((arrow, idx) => 
    arrow.addEventListener("click", () => {
        updateFaq(idx)
    })
)

function updateFaq (idx) {
    faqsections.forEach((faqsection, i) => {
        if (idx === i && !faqsection.classList.contains("active")) {
            faqsection.classList.add("active")  
        } else {
            faqsection.classList.remove("active")
        }
    })
}