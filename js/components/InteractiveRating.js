export default function InteractiveRating({title, content}) {
    // *** *** *** Variables *** *** ***
    let result = null;

    const $template = document.getElementById("interactive-rating").content,
        $clone = document.importNode($template, true),
        $container = $clone.querySelector("[data-container]"),
        $title = $clone.querySelector("[data-title]"),
        $content = $clone.querySelector("[data-content]"),
        allBtns = $clone.querySelectorAll("[data-btn-value]"),
        $btnSubmit = $clone.querySelector("[data-btn-submit]"),
        $result = $clone.querySelector("[data-result]");
        
    // *** *** *** Functions *** *** ***
    const listener = evt => {
        let btnValue = evt.target.dataset.btnValue,
            btnIndex = btnValue - 1;
        allBtns.forEach((elm, index) => index !== btnIndex ? elm.classList.remove("is-active") : elm.classList.add("is-active"));
        result = evt.target.dataset.btnValue;
    };

    // *** *** *** Execution *** *** ***
    $title.textContent = title;
    $content.textContent = content;
    allBtns.forEach(elm => elm.addEventListener("click", listener));
    $btnSubmit.addEventListener("click", () => {
        if(result !== null) {
            $result.textContent = result;
            $container.classList.add("thank-you-state");
        };
    });
    return $clone;
};
