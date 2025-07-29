function selectCoffee(coffeeName) {
  document.getElementById('selectedCoffee').textContent = 'Last selected: ' + coffeeName;
  // For demo: Save to localStorage (simulate server send)
  localStorage.setItem('lastSelectedCoffee', coffeeName);
}

// On page load, show the last selected coffee (simulate admin persistence)
window.onload = function() {
  const coffee = localStorage.getItem('lastSelectedCoffee');
  if (coffee) {
    document.getElementById('selectedCoffee').textContent = 'Last selected: ' + coffee;
  }
}