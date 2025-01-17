document.querySelectorAll('.mesa').forEach(mesa => {
    // Adiciona um evento de clique em cada mesa
    mesa.addEventListener('click', () => {
        const status = mesa.querySelector('.mesa-status');

        // Verifica se a mesa está disponível antes de permitir a alteração
        if (status.textContent === "Disponível") {
            status.textContent = "Reservada";
            mesa.className = 'mesa reservada';
            alert("Mesa reservada com sucesso!");
        } else {
            alert("Esta mesa já está reservada ou em uso. Escolha outra mesa.");
        }
    });
});