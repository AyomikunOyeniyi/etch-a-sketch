const container = document.querySelector('#container');

for (i = 0; i < 16; i++) {
    
    for (j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        square.style.width = '6.25%';
        square.style.height = '6.25%'; 
        square.addEventListener('mouseover',() => {
            square.style.backgroundColor = 'black';

            setTimeout(() => {
                square.style.backgroundColor = '';
            }, 500);
        });
    };
    
};

function generateNewGrid (userInput) {
   
        
        for (i = 0; i < userInput; i++) {
    
            for (j = 0; j < userInput; j++) {
                                        
                const square = document.createElement('div');
                square.classList.add('square');
                
                square.style.width = (100/userInput) + '%';
                square.style.height = (100/userInput) + '%';
                
                square.addEventListener('mouseover',() => {
                    square.style.backgroundColor = 'black';
        
                    setTimeout(() => {
                        square.style.backgroundColor = '';
                    }, 500);
                });

                container.appendChild(square);
            };
        };
    
};

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const userInput = prompt('Number of squares per side');
    if (userInput > 100) {
        alert('ERROR!Number must not be greater than 100');
    } else if(userInput <= 100) {
        container.innerHTML = '';
        generateNewGrid(userInput);
    }
});