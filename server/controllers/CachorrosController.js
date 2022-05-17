const controller = {
    mostrarOsDogTudo: (req, res) => res.render("cachorros", {
        title: "Cachorros",
        dogs: ["Milu", "Bidu", "Snoopy", "ScoobyDoo", "Marshal", "Chase", "Rock", "Zuma", "Skye"]
    })
}

module.exports = controller