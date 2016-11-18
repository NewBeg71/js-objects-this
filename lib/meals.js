'use strict';

const mealObj = {
    name: 'David',
    age: 45,
    calorieTarget: 2800,
    meals: [
      {time: 'Breakfast', date: '2016-07-21', type: 'yogurt and berries', calories: 275,
  },
      {time: 'Lunch', date: '2016-07-21', type: 'sandwich', calories: 600,
},
      {time: 'Dinner', date: '2016-07-21', type: 'sausage and peppers over spaghetti', calories: 1200,
},],
totalCaloriesDay: function(date){
  let calories = 0;
  for (let i = 0; i < this.meals.length; i++)  {
    if (this.meals[i].date == date)
    {calories +=this.meals[i].calories;
  }
}
  return calories;
},

avgCalories: function(){}

//Number of Days


// On Track

module.exports = mealObj;
