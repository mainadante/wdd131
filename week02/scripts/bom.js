const inputElement = document.querySelector('#favchap');

const buttonElement = document.querySelector('button');

const listElement = document.querySelector('#list');


//Add chapter button:
buttonElement.addEventListener('click', function () {
    //code to execute when the button is clicked
    if (inputElement.value != "") {

        const li = document.createElement('li');
        li.textContent = inputElement.value;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
       
        deleteBtn.addEventListener('click', function () {

            listElement.removeChild(li);
            inputElement.focus();
        });

        li.appendChild(deleteBtn);

        listElement.appendChild(li);

        inputElement.value = "";
        }

        inputElement.focus();       
});

