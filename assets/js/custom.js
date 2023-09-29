document.getElementById("energyForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    var inputValue  = parseFloat(document.getElementById("value").value);
    var inputType   = document.getElementById("type").value;
    var resultType  = document.getElementById("resulttype").value;
    var conversionFactors = {
        "KCAL": { "CAL": 1000, "KJ": 4.184, "J": 4184 },
        "CAL": { "KCAL": 0.001, "KJ": 0.004184, "J": 4.184 },
        "KJ": { "KCAL": 0.239, "CAL": 239, "J": 1000 },
        "J": { "KCAL": 0.000239, "CAL": 0.239, "KJ": 0.001 }
    };
    // Check if the input and result types are the same
    if (inputType === resultType) {
        // If they are the same, display the input value as the result
        document.getElementById("result").textContent = inputValue.toFixed(4);
    } else {
        // Calculate the result based on the selected input and result types
        var result = inputValue * conversionFactors[inputType][resultType];
        // Display the result
        document.getElementById("result").textContent = result.toFixed(4);
    }
});