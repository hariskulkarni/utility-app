function convertUnits() {
    const quantity = parseFloat(document.getElementById("quantity").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    let convertedQuantity;

    switch (fromUnit) {
        case "meter":
            switch (toUnit) {
                case "kilometer":
                    convertedQuantity = quantity / 1000;
                    break;
                case "centimeter":
                    convertedQuantity = quantity * 100;
                    break;
                case "inch":
                    convertedQuantity = quantity * 39.37;
                    break;
                case "foot":
                    convertedQuantity = quantity * 3.281;
                    break;
                case "yard":
                    convertedQuantity = quantity * 1.094;
                    break;
                case "mile":
                    convertedQuantity = quantity / 1609.344;
                    break;
                default:
                    convertedQuantity = quantity;
            }
            break;
        case "kilometer":
            switch (toUnit) {
                case "meter":
                    convertedQuantity = quantity * 1000;
                    break;
                case "centimeter":
                    convertedQuantity = quantity * 100000;
                    break;
                case "inch":
                    convertedQuantity = quantity * 39370.079;
                    break;
                case "foot":
                    convertedQuantity = quantity * 3280.84;
                    break;
                case "yard":
                    convertedQuantity = quantity * 1093.613;
                    break;
                case "mile":
                    convertedQuantity = quantity / 1.609;
                    break;
                default:
                    convertedQuantity = quantity;
            }
            break;

        case "centimeter":
            switch (toUnit) {
                case "meter":
                    convertedQuantity = quantity / 100;
                    break;
                case "kilometer":
                    convertedQuantity = quantity / 100000;
                    break;
                case "inch":
                    convertedQuantity = quantity / 2.54;
                    break;
                case "foot":
                    convertedQuantity = quantity / 30.48;
                    break;
                case "yard":
                    convertedQuantity = quantity / 91.44;
                    break;
                case "mile":
                    convertedQuantity = quantity / 160934.4;
                    break;
                default:
                    convertedQuantity = quantity;
            }
            break;
        case "inch":
            switch (toUnit) {
                case "meter":
                    convertedQuantity = quantity / 39.37;
                    break;
                case "kilometer":
                    convertedQuantity = quantity / 39370.079;
                    break;
                case "centimeter":
                    convertedQuantity = quantity * 2.54;
                    break;
                case "foot":
                    convertedQuantity = quantity / 12;
                    break;
                case "yard":
                    convertedQuantity = quantity / 36;
                    break;
                case "mile":
                    convertedQuantity = quantity / 63360;
                    break;
                default:
                    convertedQuantity = quantity;
            }
            break;
        case "foot":
            switch (toUnit) {
                case "meter":
                    convertedQuantity = quantity / 3.281;
                    break;
                case "kilometer":
                    convertedQuantity = quantity / 3280.84;
                    break;
                case "centimeter":
                    convertedQuantity = quantity * 30.48;
                    break;
                case "inch":
                    convertedQuantity = quantity * 12;
                    break;
                case "yard":
                    convertedQuantity = quantity / 3;
                    break;
                case "mile":
                    convertedQuantity = quantity / 5280;
                    break;
                default:
                    convertedQuantity = quantity;
            }
            break;
        case "yard":
            switch (toUnit) {
                case "meter":
                    convertedQuantity = quantity / 1.094;
                    break;
                case "kilometer":
                    convertedQuantity = quantity / 1093.613;
                    break;
                case "centimeter":
                    convertedQuantity = quantity * 91.44;
                    break;
                case "inch":
                    convertedQuantity = quantity * 36;
                    break;
                case "foot":
                    convertedQuantity = quantity * 3;
                    break;
                case "mile":
                    convertedQuantity = quantity / 1760;
                    break;
                default:
                    convertedQuantity = quantity;
            }
            break;
        case "mile":
            switch (toUnit) {
                case "meter":
                    convertedQuantity = quantity * 1609.344;
                    break;
                case "kilometer":
                    convertedQuantity = quantity * 1.609;
                    break;
                case "centimeter":
                    convertedQuantity = quantity * 160934.4;
                    break;
                case "inch":
                    convertedQuantity = quantity * 63360;
                    break;
                case "foot":
                    convertedQuantity = quantity * 5280;
                    break;
                case "yard":
                    convertedQuantity = quantity * 1760;
                    break;
                default:
                    convertedQuantity = quantity;
            }
            break;
        default:
            convertedQuantity = quantity;
    }

    const resultDiv = document.getElementById("result");
    const resultIcon = document.createElement('i');
    resultIcon.classList.add('fa');
    resultIcon.classList.add('fa-arrow-right');
    resultDiv.innerHTML = `${quantity} ${fromUnit} ${resultIcon.outerHTML} ${convertedQuantity} ${toUnit}.`;
    resultDiv.style.display = "block";
}

