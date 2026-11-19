function verificarIdade(idade) {
    if (typeof idade !== 'number' || Number.isNaN(idade) || !Number.isFinite(idade)) {
        throw new Error('Erro: Informe um valor numérico válido');
    }

    if (idade < 0) {
        throw new Error('Erro: A idade não pode ser negativa');
    }

    return idade >= 18;
}

// Exportação para o arquivo de teste (padrão CommonJS usado pelo Jest)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = verificarIdade;
}