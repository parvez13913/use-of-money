function calculateTotalCost(cost){
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
    const totalExpenses = foodCost + rentCost + clothescost ;
    document.getElementById('total-expenses').innerText = totalExpenses;
    document.getElementById('balance').innerText = income - totalExpenses;

}
document.getElementById('calculate-button').addEventListener('click',function(){
    calculateTotalCost('total-income',true);
    calculateTotalCost('total-income',false);
});
function savings(){
    
}