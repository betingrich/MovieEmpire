function searchMovie() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = `https://moviepire.net/search?query=${encodeURIComponent(query)}`;
    }
}
