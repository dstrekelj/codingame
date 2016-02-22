var B = new Array(),                // Array of available budgets
    C = new Number(),               // Cost of gift
    N = new Number(),               // Number of participants
    budgetSum = new Number(0),      // Sum of available budgets
    contributions = new Array()     // Array of contributions
;

N = parseInt(readline());           // Get number of participants
C = parseInt(readline());           // Get cost of gift

for (var i = 0; i < N; i++)
{
    B.push(parseInt(readline()));   // Get budget of participant
    budgetSum += B[i];              // Sum up to total budget
}

if (budgetSum >= C)
{
    // Sort budgets in ascending order
    B.sort(function (a, b) {return a - b ;});

    for (var i = 0; i < N; i++)
    {
        var budget = B[i];
        // Calculate average contribution based on remaining participants
        var averageContribution = Math.floor(C / (N - i));
        // If average contribution is outside of budget, contribute budget
        var contribution = (budget < averageContribution) ? budget : averageContribution;
        // Push contribution to array for printing
        contributions.push(contribution);
        // Deduct contribution from cost of gift
        C -= contribution;
    }

    // Sort contributions in ascending order
    contributions.sort(function (a, b) {return a - b;});
    // Print every contribution
    contributions.forEach(function (element, index, array) { print(element); });
}
else
{
    print('IMPOSSIBLE');
}
