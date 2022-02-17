function calculateTotalCost(cost){
    // DeclareId-------------
    const foodInput = document.getElementById('food-cost');
    const foodText = foodInput.value;
    const foodCost = parseFloat(foodText);
    const rentInput = document.getElementById('rent-cost');
    const rentText = rentInput.value;
    const rentCost = parseFloat(rentText);
    const clothesInput = document.getElementById('clothes-cost');
    const clothesText = clothesInput.value;
    const clothescost = parseFloat(clothesText);
    const incomeInput = document.getElementById(cost);
    const incomeText = incomeInput.value;
    const income = parseFloat(incomeText);
    // CalculateTotalExpensesAndBalance----------
    const totalExpenses = foodCost + rentCost + clothescost ;
    const totalBalance = income - totalExpenses;
    document.getElementById('total-expenses').innerText = totalExpenses;
    document.getElementById('balance').innerText = totalBalance;
    return totalBalance;
}
document.getElementById('calculate-button').addEventListener('click',function(){
    calculateTotalCost('total-income');
});

// savingsAmount--------
function savingTotalAmount(save){
    const saveInput = document.getElementById(save).value;
    const saveAmount = parseFloat(saveInput);
    const balance = calculateTotalCost('total-income');
    const savingsAmount = saveAmount * balance / 100;
    // set savings amount--------
    document.getElementById('saving-amount').innerText = savingsAmount;
    // set remainingBalance-------
    document.getElementById('remaining-balance').innerText = balance - savingsAmount;
}
document.getElementById('save-button').addEventListener('click',function(){
    savingTotalAmount('save-input')
});