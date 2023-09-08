const searchBox = document.getElementById("search-box");
const suggestionBox = document.getElementById("suggestion-box");
searchBox.addEventListener("focus", () => {
  suggestionBox.style.display = "block";
  suggestionBox.innerHTML = `
    <div><a href="Dosa.html">Dosa</a></div>
    <div><a href="idly.html">Idly</a></div>
    <div><a href="Upma.html">Upma</a></div>
    <div><a href="biryani.html">Biryani</a></div>`;
});
const suggestions = [
  { text: "Dosa", link: "Dosa.html" },
  { text: "Idly", link: "idly.html" },
  { text: "Biryani", link: "Biryani.html" },
  { text: "Upma", link: "Upma.html" },
];
searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const searchTerm = searchBox.value.trim();

    const matchedSuggestion = suggestions.find(
      (suggestion) => suggestion.text.toLowerCase() === searchTerm.toLowerCase()
    );

    if (matchedSuggestion) {
      window.location.href = matchedSuggestion.link;
    } else {
      alert("No matching found.");
    }
  }
});
