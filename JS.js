function checkform(form) {
    var numbers = /\b[0-9]+\b/;
    var fields = form.querySelectorAll("input[should-contain-number]");
    for (var field of fields) {
        if (!numbers.test(field.value)) {
            alert("Please input alphanumeric characters only");
            field.focus();
            return false;
        }
    }
    return true;
}

