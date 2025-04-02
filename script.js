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
    if (codeInputs.length > 0) {
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
    }

    // (Tela de Login)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login realizado com sucesso! (Simulação)');
            window.location.href = 'home.html';
        });
    }

    // Função para alternar a visibilidade da senha (login.html)
    const passwordInput = document.getElementById("passwordInput");
    const togglePasswordIcon = document.getElementById("togglePassword")?.querySelector("i");
    if (passwordInput && togglePasswordIcon) {
        window.togglePassword = function () {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePasswordIcon.classList.remove("bi-eye-fill");
                togglePasswordIcon.classList.add("bi-eye-slash-fill");
            } else {
                passwordInput.type = "password";
                togglePasswordIcon.classList.remove("bi-eye-slash-fill");
                togglePasswordIcon.classList.add("bi-eye-fill");
            }
        };
    }

    // Função para controlar a visibilidade do botão de voltar (login.html)
    const backBtn = document.getElementById("backBtn");
    const emailInput = document.getElementById("emailInput");
    const loginPasswordInput = document.getElementById("passwordInput");
    if (backBtn && emailInput && loginPasswordInput) {
        function toggleBackButton() {
            const emailFocused = document.activeElement === emailInput;
            const passwordFocused = document.activeElement === loginPasswordInput;
            if (emailFocused || passwordFocused) {
                backBtn.style.display = "none";
            } else {
                backBtn.style.display = "block";
            }
        }

        emailInput.addEventListener("focus", toggleBackButton);
        emailInput.addEventListener("blur", toggleBackButton);
        loginPasswordInput.addEventListener("focus", toggleBackButton);
        loginPasswordInput.addEventListener("blur", toggleBackButton);
    }

    // (Tela de Cadastro - Primeira Etapa)
    const cadastroForm = document.getElementById('cadastroForm');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (e) => {
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
    }

    // (Tela de Cadastro - Segunda Etapa)
    const cadastroForm2 = document.getElementById('cadastroForm2');
    if (cadastroForm2) {
        cadastroForm2.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Cadastro finalizado com sucesso! (Simulação)');
            window.location.href = 'login.html';
        });

        // Função para formatar o telefone no padrão (00) 00000-0000
        const telefoneInput = document.getElementById('telefone');
        if (telefoneInput) {
            telefoneInput.addEventListener('input', function (e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 11) value = value.slice(0, 11);

                if (value.length > 6) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
                } else if (value.length > 2) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                } else if (value.length > 0) {
                    value = `(${value}`;
                }

                e.target.value = value;
            });
        }

        // Função para formatar o CEP no padrão 00000-000
        const cepInput = document.getElementById('cep');
        if (cepInput) {
            cepInput.addEventListener('input', function (e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 8) value = value.slice(0, 8);

                if (value.length > 5) {
                    value = `${value.slice(0, 5)}-${value.slice(5, 8)}`;
                }

                e.target.value = value;
            });
        }
    }

    // (Tela de Recuperação)
    const recuperacaoForm = document.getElementById('recuperacaoForm');
    if (recuperacaoForm) {
        recuperacaoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Código enviado! (Simulação)');
            window.location.href = 'verificacao.html';
        });
    }

    // (Tela de Verificação)
    const verificacaoForm = document.getElementById('verificacaoForm');
    if (verificacaoForm) {
        verificacaoForm.addEventListener('submit', (e) => {
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
    }

    // (Tela de Nova Senha)
    const novaSenhaForm = document.getElementById('novaSenhaForm');
    if (novaSenhaForm) {
        novaSenhaForm.addEventListener('submit', (e) => {
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
    }

    // (Tela de Agendamento)
    if (window.location.pathname.includes('agendamento.html')) {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonthActual = today.getMonth(); // O mês atual
    const currentYearActual = today.getFullYear(); // O ano atual

    // Definir o mês e ano atuais para exibição
    let currentMonth = currentMonthActual;
    let currentYear = currentYearActual;

    window.generateCalendar = function (month, year) {
        const calendarGrid = document.getElementById('calendarGrid');
        if (!calendarGrid) return;

        calendarGrid.innerHTML = '';

        const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        // Exibir o mês e ano no formato "Mês Ano"
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
            const isPastDay = (year < currentYearActual) || 
                              (year === currentYearActual && month < currentMonthActual) || 
                              (year === currentYearActual && month === currentMonthActual && day < currentDay);

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
    };

    window.previousMonth = function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        window.generateCalendar(currentMonth, currentYear);
    };

    window.nextMonth = function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        window.generateCalendar(currentMonth, currentYear);
    };

    // Gerar o calendário para o mês e ano atuais
    window.generateCalendar(currentMonth, currentYear);
}

    // Função para expandir/recolher a lista de pontos de coleta em mapa.html
    if (window.location.pathname.includes('mapa.html')) {
        window.togglePoints = function () {
            const points = document.querySelectorAll('.point');
            const icon = document.querySelector('.collection-header i');
            const container = document.querySelector('.collection-points-container');

            if (!points || !icon || !container) return;

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
        };
    }
});
