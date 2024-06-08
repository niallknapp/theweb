document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");

    searchButton.addEventListener("click", function() {
        const query = searchInput.value;
        if (query) {
            alert(`Searching for: ${query}`);
            // 在這裡添加搜索處理邏輯，例如調用API或過濾本地數據
        } else {
            alert("Please enter a search term.");
        }
    });
});

