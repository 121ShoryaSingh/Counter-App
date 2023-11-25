// Colleccting counter value for operation
const countValue = document.querySelector('#counter');

// Increment function
const increment = () => {
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
};
// Decrement function
const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};
