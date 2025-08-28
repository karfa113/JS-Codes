const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

const gradients = {
    grey: "linear-gradient(135deg, #bdbdbd 0%, #757575 100%)",
    white: "linear-gradient(135deg, #fff 0%, #f7f7f7 100%)",
    blue: "linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)",
    yellow: "linear-gradient(135deg, #fceabb 0%, #f8b500 100%)"
};

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const color = e.target.id;
        body.style.background = gradients[color] || color;
    });
});