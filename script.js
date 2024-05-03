function saveData() {
    let name = document.getElementById("nome").value;
    let phone = document.getElementById("telefone").value;

    if (typeof(Storage) !== "undefined") {
        let userData = {
            name: name,
            phone: phone
        }

        let jsonData = JSON.stringify(userData);

        localStorage.setItem("userData", jsonData);

        alert("Dados de contato salvos com sucesso! :)");
    } else {
        alert("Desculpe, seu navegador não suporta armazenamento local :(.");
    }
}

document.getElementById("deixeContato").addEventListener("submit", function(event) {
    event.preventDefault();

    saveData();
});

window.onload = function() {
    let savedData = localStorage.getItem("userData");

    if (savedData !== null) {
        let userData = JSON.parse(savedData);

        document.getElementById("nome").value = userData.name;
        document.getElementById("telefone").value = userData.phone;
    }
};