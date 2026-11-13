document.addEventListener("DOMContentLoaded", () => {
    let basketCount = 0;
    const countBadge = document.getElementById("cart-count");
    const toastEl = document.getElementById("petal-toast");
    let hideTimer;

    function notify(text) {
        toastEl.textContent = text;
        toastEl.classList.add("show");
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => {
            toastEl.classList.remove("show");
        }, 2600);
    }

    // 1. Add to Basket
    document.querySelectorAll(".btn-add-stem").forEach((btn) => {
        btn.addEventListener("click", () => {
            const bouquet = btn.getAttribute("data-name");
            basketCount += 1;
            countBadge.textContent = basketCount;
            notify(`Added "${bouquet}" to your basket`);
        });
    });

    // 2. Favorite Heart Toggle
    document.querySelectorAll(".fav-toggle").forEach((heartBtn) => {
        heartBtn.addEventListener("click", () => {
            heartBtn.classList.toggle("saved");
            const icon = heartBtn.querySelector("span");
            const isSaved = heartBtn.classList.contains("saved");
            icon.textContent = isSaved ? "favorite" : "favorite_border";
            if (isSaved) {
                notify("Saved to your favorites");
            }
        });
    });

    // 3. Newsletter Form
    const studioForm = document.getElementById("studio-newsletter-form");
    if (studioForm) {
        studioForm.addEventListener("submit", (e) => {
            e.preventDefault();
            studioForm.reset();
            notify("Thank you for joining Atelier Petal!");
        });
    }

    // 4. Smooth Anchor Navigation
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target && this.getAttribute("href") !== "#") {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});