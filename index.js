// Pager App 

document.addEventListener('DOMContentLoaded', function() {
    const pagerButtons = document.getElementById('pager-buttons')
    const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#']
    const topDisplay = document.getElementById('top-display')
    const bottomDisplay = document.getElementById('bottom-display')
    const resetBtn = document.getElementById('resetButton')
    const sendBtn = document.getElementById('sendButton')
    let displayValue = ''

    // Notification sound

    const notification = new Audio('/assets/pager.wav')

    // Render buttons

    buttons.forEach(button => {
        const btn = document.createElement('button')
        btn.innerText = button
        btn.addEventListener('click', () => {
            setTimeout(() => {
                if (displayValue.length < 10) {
                    displayValue += button
                    topDisplay.innerText = displayValue
                    bottomDisplay.innerText = displayValue 
                }
            }, 300);
        })
        pagerButtons.appendChild(btn)
    })

    // Reset button

    resetBtn.addEventListener('click', () => {
        displayValue = ''
        topDisplay.innerText = displayValue
        bottomDisplay.innerText = displayValue
    })

    // Send button

    sendBtn.addEventListener('click', () => {
        notification.play();
        alert('Message Sent: ' + displayValue);
        displayValue = '';
        topDisplay.textContent = displayValue;
        bottomDisplay.textContent = displayValue;
    })

})