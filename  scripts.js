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

    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Registration successful!");
            // 在這裡添加註冊處理邏輯
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Login successful!");
            // 在這裡添加登錄處理邏輯
        });
    }

    const paymentForm = document.getElementById("payment-form");

    if (paymentForm) {
        paymentForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Payment successful!");
            // 在這裡添加支付處理邏輯
        });
    }

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Message sent!");
            // 在這裡添加聯繫表單處理邏輯
        });
    }
});
