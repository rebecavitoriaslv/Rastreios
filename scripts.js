curl -X GET "https://api.exemplo.com/rastreio/CODIGO_DE_TESTE"

document.addEventListener("DOMContentLoaded", () => {
    const deliveryForm = document.getElementById("delivery-search");
    const deliveryInput = document.getElementById("delivery-1");
    const finishBox = document.getElementById("finish");

    deliveryForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const trackingCode = deliveryInput.value.trim(); // Obtém o código de rastreamento

        if (trackingCode) {
            try {
                // Substitua pela URL real da API
                const response = await fetch(`https://api.exemplo.com/rastreio/${trackingCode}`);

                if (!response.ok) {
                    throw new Error(`Erro ao buscar informações de rastreamento: ${response.statusText}`);
                }

                const data = await response.json(); // Supondo que a resposta seja em JSON

                // Exibir informações de rastreamento
                finishBox.innerHTML = `
                    <h2>Pronto! Aqui estão as informações do seu pedido:</h2>
                    <p>Código de rastreamento: <strong>${trackingCode}</strong></p>
                    <p>Status: ${data.status}</p>
                    <p>Localização: ${data.localizacao}</p>
                    <img class="image-lo" src="assets/undraw_location_search_re_ttoj.svg" alt="">
                `;
                finishBox.style.display = "flex"; // Mostra a caixa de finalização
            } catch (error) {
                alert(`Erro: ${error.message}`); // Exibe mensagem de erro
            }
        } else {
            alert("Por favor, digite um código de rastreamento válido.");
        }
    });
});