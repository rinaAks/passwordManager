document.getElementById('randpassw-button').addEventListener('click', function() {
    document.getElementById('password-input').value = Math.random().toString(36).slice(2, 12);
});

function show_password(name, descr, login, password) {
    const passList = document.getElementById('passwords-list');
    const passItem = document.createElement('div');
    passItem.classList.add('password-item');
    passItem.setAttribute('style', 'white-space: pre;');

    passItem.textContent = "Ссылка: " + name;
    if(descr){ passItem.textContent += "\r\nОписание: " + descr; }
    passItem.textContent += "\r\nЛогин: "+ login;
    passItem.textContent += "\r\nПароль: " + password;

    passItem.style.padding = '10px';
    passItem.style.border = '3px solid #9874bd';
    passItem.style.borderRadius = '10px';
    passList.appendChild(passItem);   
}

for(let i=0; i<localStorage.length; i++){
    objStr = localStorage.getItem(localStorage.key(i))
    obj = JSON.parse(objStr)
    show_password(obj.name, obj.descr, obj.login, obj.password)
}


document.getElementById('add-button').addEventListener('click', function() {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value;

    const descriptionInput = document.getElementById('description-input');
    const descr = descriptionInput.value;

    const loginInput = document.getElementById('login-input');
    const login = loginInput.value;

    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value;

    if (name && login && password) {
        show_password(name, descr, login, password)

        // Очистить поля ввода
        nameInput.value = ''; 
        descriptionInput.value = ''; 
        loginInput.value = ''; 
        passwordInput.value = ''; 

        const userPassw = {
            name: name,
            description: descr,
            login: login,
            password: password
        };
        passName = 'password'+(localStorage.length+1).toString();

        localStorage.setItem(passName, JSON.stringify(userPassw));
        console.log('Saved name:', localStorage.getItem('password'));
        

    } else {
        alert('Одно из полей не заполнено');
    }
});

