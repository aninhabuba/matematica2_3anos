const nomes = ["Ana Luiza", "Glauber","Claudio","Maraci", "Francielle","Mariana", "Paulo", "Gabriel"];

export function aleatorio(lista){
    const posicao =  Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
