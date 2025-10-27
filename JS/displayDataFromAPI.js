async function fetchData() {
  try {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();

    const tableBody = document.querySelector('#first tbody');
    tableBody.innerHTML = '';

    data.recipes.forEach(recipe => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${recipe.id}</td>
        <td>${recipe.name}</td>
        <td>${recipe.image}</td>
        <td>${recipe.caloriesPerServing}</td>
      `;

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
