const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        }
    });
};

function carregaPagina(element) {
    const href = element.getAttribute('href');
    request({
        method: 'GET',
        url: href,
        success(response) {
            carregaResultado(response);
        },
        error(errorText) {
            console.log(errorText);
        }
    });
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

// Events
document.addEventListener('click', event => {
    const element = event.target;
    const tagHTML = element.tagName.toLowerCase();
    
    if(tagHTML === 'a') {
        event.preventDefault();
        carregaPagina(element);
    }
})