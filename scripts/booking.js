/********* create variables here *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 40;
let numberOfDays = 0;
let totalCost = 0;

const dayButtons = document.querySelectorAll('.day-selector li');
const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const clearDaysButton = document.getElementById('clear-button');
const calcatedCost = document.getElementById('calculated-cost');

updateCost();

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.forEach(function(button) 
    {
    button.addEventListener('click', function() {
        if (!button.classList.contains('clicked')) 
        {
            button.classList.add('clicked');
            numberOfDays++;
        }
        else
        {
            button.classList.remove('clicked');
            numberOfDays--;
        }
        updateCost();
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearDaysButton.addEventListener('click', function()
{
    dayButtons.forEach(function(button)
    {
        button.classList.remove('clicked');
    });
    halfDayButton.classList.remove('clicked');
    fullDayButton.classList.Add('clicked');
    numberOfDays = 0;
    updateCost();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $25, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener('click', function()
{
    costPerDay = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    updateCost();
});


// when the full-day button is clicked, the daily rate is set back to $40, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener('click', function()
{
    costPerDay = 40;
    halfDayButton.classList.remove('clicked');
    fullDayButton.classList.add('clicked');
    updateCost();
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateCost() 
{
    totalCost = costPerDay * numberOfDays;
    calcatedCost.textContent = totalCost;
}