document.getElementById('verificar-btn').addEventListener('click', () => {
    const idadeInput = document.getElementById('idade').value;
    const resultBox = document.getElementById('result-box');
    const resultMessage = document.getElementById('result-message');

    resultBox.classList.remove('maior-idade', 'menor-idade', 'erro');

    if (idadeInput.trim() === '') {
        resultMessage.textContent = 'Por favor, digite uma idade.';
        resultBox.classList.add('erro');
        return;
    }

    const idade = Number(idadeInput);

    try {
        const ehMaior = verificarIdade(idade);

        if (ehMaior) {
            resultMessage.textContent = 'Maior de idade';
            resultBox.classList.add('maior-idade');
        } else {
            resultMessage.textContent = 'Menor de idade';
            resultBox.classList.add('menor-idade');
        }
    } catch (error) {
        resultMessage.textContent = error.message;
        resultBox.classList.add('erro');
    }
});