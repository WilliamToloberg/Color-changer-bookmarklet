javascript:(function(){
    let bg = prompt("Enter background color (or leave blank to keep current):", "");
    let text = prompt("Enter text color (or leave blank to keep current):", "");

    document.querySelectorAll("*").forEach(el => {
        if (bg) el.style.backgroundColor = bg;
        if (text) el.style.color = text;
    });
})();
