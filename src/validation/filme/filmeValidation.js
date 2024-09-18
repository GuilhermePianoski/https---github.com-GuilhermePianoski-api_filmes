


export function validarNovoFilme(filmeObj) {
    if (!filmeObj.nome)
        throw new Error('Nome do filme é obrigatório.')

    if (!filmeObj.sinopse)
        throw new Error('Sinopse do filme é obrigatório.')

    if (isNaN(!filmeObj.avaliacao))
        throw new Error('Avaliacao do filme é obrigatório.')

    if (!filmeObj.lancamento)
        throw new Error('Lançamento do filme é obrigatório.')

    if (!filmeObj.disponivel == undefined)
        throw new Error('Disponivel do filme é obrigatório.')

}