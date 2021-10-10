var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://sheet.best/api/sheets/fbea18e0-ceb9-4b77-8fd2-76fe4afbdbb3",{
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "Nombres":form.nombres.value,
           "Apellidos":form.apellidos.value
        })
    });
});