    function saveSettings(){
    
    const notificationsToggle = document.getElementById("notifications");
    const themeSelect = document.getElementById("theme");

    // Load saved settings from localStorage
    if (localStorage.getItem("notifications") === "enabled") {
        notificationsToggle.checked = true;
    }

    if (localStorage.getItem("theme")) {
        themeSelect.value = localStorage.getItem("theme");
        applyTheme(themeSelect.value);
    }

    // Event listener for notifications toggle
    notificationsToggle.addEventListener("change", () => {
        if (notificationsToggle.checked) {
            localStorage.setItem("notifications", "enabled");
            alert("Notifications enabled!");
        } else {
            localStorage.setItem("notifications", "disabled");
            alert("Notifications disabled!");
        }
    });

    // Event listener for theme selection
    themeSelect.addEventListener("change", () => {
        const selectedTheme = themeSelect.value;
        localStorage.setItem("theme", selectedTheme);
        applyTheme(selectedTheme);
    });

    function applyTheme(theme) {
        if (theme === "dark") {
            document.querySelectorAll('*').forEach((item =>{
                if(item.style.background == '#1e1e1e') item.style.background = 'green';
            }))
        } else {
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
        }
    }}
