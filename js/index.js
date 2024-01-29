import InteractiveRating from "./components/InteractiveRating.js";

// *** *** *** Variables *** *** ***
const $main = document.getElementById("main");

// *** *** *** Execution *** *** ***
document.addEventListener("DOMContentLoaded", () => {
    $main.append(
        InteractiveRating({
            title: "How did we do?",
            content: "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
        })
    );
});
