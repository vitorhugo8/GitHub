function PesquisaBinaria(lista, item) {
    let baixo = 0
    let alto = lista.length - 1

    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2) // Use Math.floor para obter o índice inteiro
        let chute = lista[meio]

        if (chute === item) {
            return meio
        } else if (chute > item) {
            alto = meio - 1 // Ajusta o limite superior para procurar na metade inferior
        } else {
            baixo = meio + 1 // Ajusta o limite inferior para procurar na metade superior
        }
    }

    return -1; // Retorna -1 se o item não estiver na lista
}

console.log(PesquisaBinaria([1, 2, 3, 4, 5], 5))