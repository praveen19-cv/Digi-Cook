const searchBox = document.getElementById("search-box");
const suggestionBox = document.getElementById("suggestion-box");
const filterCategory = document.getElementById("filter-category"); // Add the filter element
const suggestions = [
  { text: "Dosa", link: "Dosa.html", category: "breakfast" },
  { text: "Idly", link: "idly.html", category: "breakfast" },
  { text: "Biryani", link: "Biryani.html", category: "lunch" },
  { text: "Upma", link: "Upma.html", category: "breakfast" },
  { text: "Chicken Fried Rice", link: "chicken.html", category: "dinner" },
];

function filterSuggestions(category) {
  if (category === "all") {
    return suggestions;
  }
  return suggestions.filter((suggestion) => suggestion.category === category);
}

function displaySuggestions(filteredSuggestions) {
  suggestionBox.innerHTML = "";
  filteredSuggestions.forEach((suggestion) => {
    const suggestionLink = document.createElement("a");
    suggestionLink.textContent = suggestion.text;
    suggestionLink.href = suggestion.link;
    const suggestionElement = document.createElement("div");
    suggestionElement.appendChild(suggestionLink);
    suggestionBox.appendChild(suggestionElement);
  });
}

searchBox.addEventListener("input", () => {
  const searchTerm = searchBox.value.trim();
  const selectedCategory = filterCategory.value;

  const filteredSuggestions = filterSuggestions(selectedCategory).filter(
    (suggestion) =>
      suggestion.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  displaySuggestions(filteredSuggestions);
});

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const searchTerm = searchBox.value.trim();
    const selectedCategory = filterCategory.value;

    const matchedSuggestion = filterSuggestions(selectedCategory).find(
      (suggestion) => suggestion.text.toLowerCase() === searchTerm.toLowerCase()
    );

    if (matchedSuggestion) {
      window.location.href = matchedSuggestion.link;
    } else {
      alert("No matching found.");
    }
  }
});

filterCategory.addEventListener("change", () => {
  const selectedCategory = filterCategory.value;

  const filteredSuggestions = filterSuggestions(selectedCategory);
  displaySuggestions(filteredSuggestions);
});

const indianCuisineButton = document.getElementById("indian-cuisine-link");
const chineseCuisineButton = document.getElementById("chinese-cuisine-link");

indianCuisineButton.addEventListener("click", () => {
  window.location.href = "indian_cus.html";
});

chineseCuisineButton.addEventListener("click", () => {
  window.location.href = "chinese_cus.html";
});
