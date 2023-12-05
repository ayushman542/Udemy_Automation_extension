// Event listener for keydown events, checking for Alt+C or Alt+G
document.addEventListener('keydown', async function(event) {
    const isAltCPressed = event.altKey && event.key === 'c';
    const isAltGPressed = event.altKey && event.key === 'g';

    // Check if Alt+C or Alt+G is pressed
    if (isAltCPressed || isAltGPressed) {
        const checkboxes = document.querySelectorAll('.ud-sr-only.ud-real-toggle-input');
        const buttonElements = document.querySelectorAll('.js-panel-toggler');

        if (checkboxes.length > 0 && buttonElements.length > 0) {
            // Perform actions based on the key pressed
            if (isAltCPressed) {
                await clickCheckboxesWithDelay(checkboxes);
            } else if (isAltGPressed) {
                await clickButtonElementsWithDelay(buttonElements);
            }

            // Add an alert after successfully running the code
            alert('Code executed successfully!');
        } else {
            // Log a message if no checkboxes or button elements are found
            console.log('No Item Found!!');
        }
    }
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function clickCheckboxesWithDelay(checkboxes) {
    for (const checkbox of checkboxes) {
        await delay(200);
        checkbox.click();
    }
}

async function clickButtonElementsWithDelay(buttonElements) {
    const delayBetweenClicks = 80;
    for (let i = 0; i < buttonElements.length; i++) {
        await delay(delayBetweenClicks);
        buttonElements[i].click();
    }
}

// Developer name
console.log("Develop By - Ayushman medcalia, follow on Insta- @coder_320, follow on Github- https://github.com/ayushman542");
