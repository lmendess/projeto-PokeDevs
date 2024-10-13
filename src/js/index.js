const listaSelecaoPokedev = document.querySelectorAll(".pokedev");

listaSelecaoPokedev.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        esconderCartaoPokedev();

        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);

        desativarPokedevSelecionadoNaListagem();

        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
    })
})

function ativarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function esconderCartaoPokedev() {
    const constcartaoPokedevAberto = document.querySelector(".aberto");
    constcartaoPokedevAberto.classList.remove("aberto");
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

