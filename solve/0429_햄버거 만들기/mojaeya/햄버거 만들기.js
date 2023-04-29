let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

console.log(solution(ingredient));

function solution(ingredient) {
  let burgerCount = 0;
  const ingredientStack = [];
  const set = [1, 2, 3, 1];

  for (let i = 0; i < ingredient.length; i++) {
    ingredientStack.push(ingredient[i]);
    if (ingredientStack.length >= 4) {
      const lastFourIngredients = ingredientStack.slice(-4);
      if (arraysEqual(lastFourIngredients, set)) {
        ingredientStack.splice(-4);
        burgerCount++;
      }
    }
  }

  return burgerCount;
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
