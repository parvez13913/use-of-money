function calculateTotalCost(incomeValue){
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
    const incomeInput = document.getElementById(incomeValue);
        const incomeText = incomeInput.value;
        const income = parseFloat(incomeText);
    // errorAlert---------
    if(isNaN(foodCost) || isNaN(rentCost) || isNaN(clothescost) || isNaN(income)){
        document.getElementById('notify-4').style.display = 'block';
    }
    else if (foodCost < 0 || clothescost < 0 || rentCost < 0 || income < 0){
        document.getElementById('notify-3').style.display = 'block';
    }
    else{
        // CalculateTotalExpensesAndBalance----------
        const totalExpenses = foodCost + rentCost + clothescost ;
        const totalBalance = income - totalExpenses;
        document.getElementById('total-expenses').innerText = totalExpenses;
        document.getElementById('balance').innerText = totalBalance;
        // FoodInputerrorAlert---------
        document.getElementById('notify-4').style.display = 'none';
        document.getElementById('notify-3').style.display = 'none';
        // RentInputerrorAlert---------
        document.getElementById('notify-4').style.display = 'none';
    }
}
document.getElementById('calculate-button').addEventListener('click',function(){
    calculateTotalCost('total-income');
});

// savingsAmount--------
function savingTotalAmount(save,incomeValue){
    const saveInput = document.getElementById(save).value;
    const saveAmount = parseFloat(saveInput);
    const foodInput = document.getElementById('food-cost');
    const foodText = foodInput.value;
    const foodCost = parseFloat(foodText);
    const rentInput = document.getElementById('rent-cost');
    const rentText = rentInput.value;
    const rentCost = parseFloat(rentText);
    const clothesInput = document.getElementById('clothes-cost');
    const clothesText = clothesInput.value;
    const clothescost = parseFloat(clothesText);
    const incomeInput = document.getElementById(incomeValue);
    const incomeText = incomeInput.value;
    const income = parseFloat(incomeText);
    const totalExpenses = foodCost + rentCost + clothescost ;
    const balance = income - totalExpenses;
    const savingsAmount = (saveAmount * balance) / 100;
    // errorAlert---------
    if(balance < savingsAmount){
        document.getElementById('notify-1').style.display = 'block';
    }
    else if(saveAmount < 0){
        document.getElementById('notify-3').style.display = 'block';
    }
    else if(isNaN(saveAmount)){
        document.getElementById('notify-4').style.display = 'block';
    }
    else{
        // set savings amount--------
        document.getElementById('saving-amount').innerText = savingsAmount;
        // set remainingBalance-------
        document.getElementById('remaining-balance').innerText = balance - savingsAmount;
        // errorAlert---------
        document.getElementById('notify-1').style.display = 'none';
        document.getElementById('notify-3').style.display = 'none';
        document.getElementById('notify-4').style.display = 'none';
    }
}
document.getElementById('save-button').addEventListener('click',function(){
    savingTotalAmount('save-input','total-income')
});