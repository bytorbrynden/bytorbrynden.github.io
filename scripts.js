document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar-links a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            links.forEach(link => link.classList.remove("active"));
            e.target.classList.add("active");
        });
    });

    const setActiveNavLink = () => {
        const hash = window.location.hash;

        if (hash) {
            const targetLink = document.querySelector(`.navbar-links a[href="${hash}"]`);

            links.forEach(link => link.classList.remove("active"));

            if (targetLink) {
                targetLink.classList.add("active");
            }
        }
    };

    setActiveNavLink();

    window.addEventListener("hashchange", setActiveNavLink);
});