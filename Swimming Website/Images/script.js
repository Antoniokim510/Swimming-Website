
document.addEventListener("DOMContentLoaded", function () {
    const requestQuoteButton = document.getElementById("request-quote-button");

    const quoteForm = document.getElementById("quote-form");
        const closeButton = document.getElementById("close-button");
    const overlay = document.getElementById("overlay");
    requestQuoteButton.addEventListener("click", function () {
        quoteForm.style.display = "block";
        overlay.style.display = "block";
    });
    closeButton.addEventListener("click", function () {
        quoteForm.style.display = "none";
        overlay.style.display = "none";
    });
    overlay.addEventListener("click", function () {
        quoteForm.style.display = "none";
        overlay.style.display = "none";
    });
});

    const button = document.getElementById("example-button");
    if (button) {
        button.addEventListener("click", function () {
            alert("Button clicked!");
           
        });
    }
    
});


