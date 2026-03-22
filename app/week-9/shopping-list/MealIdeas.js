"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient).then((meals) => setMeals(meals));
    }
  }, [ingredient]);

  return (
    <div className="max-w-lg p-4">
      <h2 className="text-xl font-bold mb-4">
        Meal Ideas for: {ingredient}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="border-2 p-2 mb-2 mr-2 border-orange-400">
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}