function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("result").textContent = "Please enter valid height and weight.";
        return;
    }

    const bmi = weight / ((height / 100) * (height / 100));
    const bmiCategory = getBMICategory(bmi);
    document.getElementById("result").textContent = `Your BMI: ${bmi.toFixed(2)} ${bmiCategory}`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal Weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
