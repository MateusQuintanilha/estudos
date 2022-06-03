function actionButton(idButton, idContent, action) {
    const buttonContent = document.getElementById(idButton);
    const content = document.getElementById(idContent)

    buttonContent.addEventListener('click', () =>{
        content.classList.toggle(action)
    })
}

actionButton('new-client', 'modal', 'active');
actionButton('modalClose', 'modal', 'active');