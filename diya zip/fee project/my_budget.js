document.getElementById('calculate-btn').addEventListener('click', calculateSummary);

function calculateSummary() {
    // Get total income
    const incomeInput = document.getElementById('income-1');
    const incomeValue = parseFloat(incomeInput.value) || 0;

    // Get budget percentages
    const foodBudgetInput = document.getElementById('food-budget');
    const housingBudgetInput = document.getElementById('housing-budget');
    const entertainmentBudgetInput = document.getElementById('entertainment-budget');

    const foodBudget = parseFloat(foodBudgetInput.value) || 0;
    const housingBudget = parseFloat(housingBudgetInput.value) || 0;
    const entertainmentBudget = parseFloat(entertainmentBudgetInput.value) || 0;

    // Calculate total budget percentage
    const totalBudgetPercentage = foodBudget + housingBudget + entertainmentBudget;

    // Validate total budget percentage
    if (totalBudgetPercentage > 100) {
        alert("Total budget percentage cannot exceed 100%!");
        return;
    }

    // Calculate remaining amount
    const allocatedBudget = (totalBudgetPercentage / 100) * incomeValue;
    const remainingAmount = incomeValue - allocatedBudget;

    // Update the summary section
    document.getElementById('total-income').textContent = `Total Income: $${incomeValue.toFixed(2)}`;
    document.getElementById('total-budget').textContent = `Total Budget: ${totalBudgetPercentage}%`;
    document.querySelector('#total-budget + p').textContent = `Amount Available: $${remainingAmount.toFixed(2)}`;
}
