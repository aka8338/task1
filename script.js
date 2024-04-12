function appendDisplay(value) {
    var display = document.getElementById('DISPLAY');

    if (value === '=') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    } else if (value === 'AC') {
        display.value = '';
    } else if (value === 'DE') {
        display.value = display.value.slice(0, -1);
    } else {
        display.value += value;
    }
}