(function () {
    // Create a container for the widget
    const widgetContainer = document.getElementById("widget-container");

    // Load configuration from the global variable set by the customer
    const config = window.widgetConfig || {};

    // Create and style the widget
    const widget = document.createElement("div");
    widget.classList.add("widget");
    widget.style.color = config.textColor || "black";
    widget.innerHTML = `<h2>${config.greeting || "Hello, World!"}</h2>`;

    // Append the widget to the container
    widgetContainer.appendChild(widget);
})();
