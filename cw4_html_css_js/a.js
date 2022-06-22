function setText() {
    const statArray = ["słonecznie", "przejaśnienia", "pochmurno"];
    const r = Math.round(Math.random() * 2);
    console.log(r)

    document.getElementById("temperature").innerHTML = ", temperatura " + (Math.round(Math.random() * (40 + 40) - 40)).toString()
    document.getElementById("status").innerHTML = statArray[r]

    document.getElementById("temperature").style.visibility = "visible";
    document.getElementById("status").style.visibility = "visible";

}

setTimeout(setText, 5000);


function show() {
    const cels = document.getElementById("celsius");
    const faren = document.getElementById("farenheit");

    const celsius = document.getElementById("showCelsius");
    const farenheit = document.getElementById("showFaren");

    if (cels.checked) {
        console.log("celsius");
        celsius.style.display = "block";
        farenheit.style.display = "none";
    } else if (faren.checked) {
        console.log("faren")
        celsius.style.display = "none";
        farenheit.style.display = "block";
    } else {
        console.log("error")
    }
}

function convertFromCelsiusToFaren() {
    const c = document.getElementById('c'), f = document.getElementById('f');

    f.innerHTML = Math.round(c.value * 9 / 5 + 32).toString();
    console.log("convert to farenheit")

}

function convertFromFarenToCelsius() {
    const ce = document.getElementById('ce'), fa = document.getElementById('fa');
    ce.innerHTML = Math.round((fa.value - 32) * 5 / 9).toString();
    console.log("convert to celsius")
}

function myFunction() {

    let celsius = document.getElementById("c").value;
    let celsius2 = document.getElementById("ce").innerHTML;
    let date = document.getElementById("d").value;

    let faren = document.getElementById("f").innerHTML;
    let faren1 = document.getElementById("fa").value;
    let date1 = document.getElementById("da").value;

    let i = 1;

    let table = document.getElementById("myTable");
    if (celsius !== '') {

        if (validateDate(date) && validateTemperature(celsius)) {

            let row = table.insertRow(i);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            cell1.innerHTML = celsius;
            cell2.innerHTML = faren;
            cell3.innerHTML = date;

            document.getElementById("cel").innerHTML = "Celsius: " + celsius;

            document.getElementById("far").innerHTML = " is " + faren + " farenheit degree";

            document.getElementById("c").value = '';
            document.getElementById("f").innerHTML = '';
            document.getElementById("d").value = '';
            document.getElementById("invalides").innerHTML = '';
        } else {
            document.getElementById("cel").innerHTML = '';
            document.getElementById("far").innerHTML = '';
            document.getElementById("invalides").innerHTML = '';
            validate(date, celsius, "invalides")
        }


    } else if (celsius2 !== '') {

        if (validateDate(date1) && validateTemperature(faren1)) {

            let row = table.insertRow(i);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            cell1.innerHTML = celsius2;
            cell2.innerHTML = faren1;
            cell3.innerHTML = date1;


            document.getElementById("cel1").innerHTML = " is " + celsius2 + " celsius degree";

            document.getElementById("far1").innerHTML = "Farenheit: " + faren1;

            document.getElementById("fa").value = '';
            document.getElementById("ce").innerHTML = '';
            document.getElementById("da").value = '';
            document.getElementById("invalides1").innerHTML = '';

        } else {
            document.getElementById("cel1").innerHTML = '';
            document.getElementById("far1").innerHTML = '';
            document.getElementById("invalides1").innerHTML = '';
            validate(date1, faren1, "invalides1")
        }
    }

}

let alertInfo;

function validateDate(date) {
    let regex = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g;
    let res = regex.test(date);
    console.log(date + " is valid? " + res);
    return res;
}

function validateTemperature(temperature) {
    console.log("is " + temperature + " a number? " + Number.isInteger(parseInt(temperature)));

    return Number.isInteger(parseInt(temperature));
}

function validate(date, temperatiure, id) {


    if (!validateTemperature(temperatiure) && !validateDate(date)) {
        alertInfo = "invalid temperature and date";
    } else if (!validateTemperature(temperatiure) && validateDate(date)) {
        alertInfo = "invalid temperature";
    } else if (!validateDate(date)) {
        alertInfo = "invalid date";
    } else {
        alertInfo = '';
    }

    document.getElementById(id).innerHTML = alertInfo;

}
