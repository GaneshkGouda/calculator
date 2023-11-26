let string = '';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector("input").value = string;

        }
        else if (e.target.innerHTML == 'DE') {
            string = string.slice(0, -1);
            document.querySelector("input").value = string;

        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector("input").value = string;

        }

        else {
            string = string + e.target.innerHTML
            if (string.charAt(0) == "=") {
                // string = string + e.target.innerHTML
            }
            else {
                document.querySelector("input").value = string;
            }
        }


    });

})
