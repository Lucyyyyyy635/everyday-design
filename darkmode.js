document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // 检查本地存储中是否有暗模式设置
    if (localStorage.getItem("dark-mode") === "enabled") {
        enableDarkMode();
    }

    darkModeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
    }
});
document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

