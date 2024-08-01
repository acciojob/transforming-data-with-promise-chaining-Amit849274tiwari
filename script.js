//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
    const input = document.getElementById('ip').value;
    const outputDiv = document.getElementById('output');
    const number = Number(input);
    const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

    delay(2000, number)
        .then(result => {
            outputDiv.textContent = `Result: ${result}`;
            return delay(1000, result * 2);
        })
        .then(result => {
            outputDiv.textContent = `Result: ${result}`;
            return delay(1000, result - 3);
        })
        .then(result => {
            outputDiv.textContent = `Result: ${result}`;
            return delay(1000, result / 2);
        })
        .then(result => {
            outputDiv.textContent = `Result: ${result}`;
            return delay(1000, result + 10);
        })
        .then(result => {
            outputDiv.textContent = `Final Result: ${result}`;
        })
        .catch(error => {
            outputDiv.textContent = `Error: ${error}`;
        });
});