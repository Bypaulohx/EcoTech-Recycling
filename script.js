document.addEventListener('DOMContentLoaded', () => {
    // Desativar o botão de voltar na página index.html
    if (window.location.pathname.includes('index.html')) {
        const backBtn = document.getElementById('backBtn');
        if (backBtn) {
            backBtn.style.pointerEvents = 'none';
            backBtn.style.color = '#ccc';
        }
    }

    // Botão "voltar" na página cadastro.html
    if (window.location.pathname.includes('cadastro.html')) {
        const backBtn = document.getElementById('backBtn');
        if (backBtn) {
            const urlParams = new URLSearchParams(window.location.search);
            const from = urlParams.get('from');
            if (from === 'index') {
                backBtn.href = 'index.html';
            }
        }
    }

    // Lógica em verificacao.html
    const codeInputs = document.querySelectorAll('.code-input');
    codeInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1 && index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            }
        });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
                codeInputs[index - 1].focus();
            }
        });
    });
});

// Função para expandir/recolher a lista de pontos de coleta em mapa.html
function togglePoints() {
    const points = document.querySelectorAll('.point');
            const icon = document.querySelector('.collection-header i');
            const container = document.querySelector('.collection-points-container');

            points.forEach(point => {
                if (point.classList.contains('collapsed')) {
                    point.classList.remove('collapsed');
                    point.classList.add('expanded');
                    const h3 = point.querySelector('h3');
                    if (h3.textContent === 'Associação de Catadores (ASCAS)') {
                        h3.textContent = 'Associação dos Catadores de Material Reciclável - ASCAS';
                    }
                    const firstP = point.querySelector('p');
                    if (firstP.textContent === 'Prefeitura Municipal') {
                        firstP.textContent = 'Prefeitura Municipal, Palmas - TO';
                    }
                    if (h3.textContent === 'Reciminhas Comércio de Metais') {
                        firstP.textContent = 'Av. JK, 689 - Centro, Palmas - TO';
                    }
                } else {
                    point.classList.remove('expanded');
                    point.classList.add('collapsed');
                    const h3 = point.querySelector('h3');
                    if (h3.textContent === 'Associação dos Catadores de Material Reciclável - ASCAS') {
                        h3.textContent = 'Associação de Catadores (ASCAS)';
                    }
                    const firstP = point.querySelector('p');
                    if (firstP.textContent === 'Prefeitura Municipal, Palmas - TO') {
                        firstP.textContent = 'Prefeitura Municipal';
                    }
                    if (firstP.textContent === 'Av. JK, 689 - Centro, Palmas - TO') {
                        firstP.textContent = 'Av. JK, 689';
                    }
                }
            });

            icon.classList.toggle('collapsed');

            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

// (Tela de Login)
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login realizado com sucesso! (Simulação)');
    window.location.href = 'home.html'; // Redireciona para a home após login
});

// visibilidade da senha
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId === 'newPassword' ? 'newPasswordInput' : 'confirmPasswordInput');
    const toggleIcon = passwordInput.nextElementSibling;
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '🙈'; 
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁️';
    }
}

// (Tela de Cadastro - Primeira Etapa)
document.getElementById('cadastroForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const passwordInput = document.getElementById('passwordInput');
    const confirmPasswordInput = document.getElementById('confirmPasswordInput');
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('As senhas não coincidem!');
        return;
    }
    alert('Cadastro avançado com sucesso! (Simulação)');
    window.location.href = 'cadastro2.html';
});

// (Tela de Cadastro - Segunda Etapa)
document.getElementById('cadastroForm2')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cadastro finalizado com sucesso! (Simulação)');
    window.location.href = 'login.html';
});

// (Tela de Recuperação)
document.getElementById('recuperacaoForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Código enviado! (Simulação)');
    window.location.href = 'verificacao.html';
});

// (Tela de Verificação)
document.getElementById('verificacaoForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const codeInputs = document.querySelectorAll('.code-input');
    const code = Array.from(codeInputs).map(input => input.value).join('');
    if (code.length === 4) {
        alert('Código verificado com sucesso! (Simulação)');
        window.location.href = 'nova-senha.html';
    } else {
        alert('Por favor, insira um código de 4 dígitos!');
    }
});

// (Tela de Nova Senha)
document.getElementById('novaSenhaForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const newPasswordInput = document.getElementById('newPasswordInput');
    const confirmPasswordInput = document.getElementById('confirmPasswordInput');
    if (newPasswordInput.value !== confirmPasswordInput.value) {
        alert('As senhas não coincidem!');
        return;
    }
    if (newPasswordInput.value.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres!');
        return;
    }
    alert('Senha alterada com sucesso! (Simulação)');
    window.location.href = 'sucesso.html';
});

// (Tela de Agendamento)
let currentMonth = 2;
        let currentYear = 2025;
        const today = new Date();
        const currentDay = today.getDate();
        const currentMonthActual = today.getMonth();
        const currentYearActual = today.getFullYear();

        function generateCalendar(month, year) {
            const calendarGrid = document.getElementById('calendarGrid');
            calendarGrid.innerHTML = '';

            const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            document.getElementById('monthYear').textContent = `${monthNames[month]} ${year}`;

            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            for (let i = 0; i < firstDay; i++) {
                const emptyDay = document.createElement('div');
                emptyDay.className = 'disabled';
                calendarGrid.appendChild(emptyDay);
            }

            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                const isPastDay = (year < currentYearActual) || (year === currentYearActual && month < currentMonthActual) || (year === currentYearActual && month === currentMonthActual && day < currentDay);

                if (isPastDay) {
                    dayElement.className = 'disabled';
                } else {
                    dayElement.className = 'selectable';
                    dayElement.addEventListener('click', () => {
                        document.querySelectorAll('.calendar-grid div').forEach(d => {
                            d.classList.remove('selected');
                            if (d.classList.contains('selectable')) {
                                d.style.backgroundColor = 'transparent';
                                d.style.color = '#333';
                            }
                        });
                        dayElement.classList.add('selected');
                        dayElement.style.backgroundColor = '#e0e0e0';
                        dayElement.style.color = '#fff';
                    });
                }

                dayElement.textContent = day;
                calendarGrid.appendChild(dayElement);
            }
        }

        function previousMonth() {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            generateCalendar(currentMonth, currentYear);
        }

        function nextMonth() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            generateCalendar(currentMonth, currentYear);
        }

        generateCalendar(currentMonth, currentYear);