document.addEventListener('DOMContentLoaded', () => {

    if (window.location.pathname.includes('index.html')) {
        const backBtn = document.getElementById('backBtn');
        if (backBtn) {
            backBtn.style.pointerEvents = 'none';
            backBtn.style.color = '#ccc';
        }
    }

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

function togglePoints() {
    const points = document.querySelectorAll('.point.hidden');
    const toggleBtn = document.querySelector('.toggle-points-btn');
    const isCollapsed = toggleBtn.classList.contains('collapsed');

    points.forEach(point => {
        point.style.display = isCollapsed ? 'flex' : 'none';
    });

    toggleBtn.classList.toggle('collapsed');
}

document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login realizado com sucesso! (Simulação)');
    window.location.href = 'home.html';
});

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

document.getElementById('cadastroForm2')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cadastro finalizado com sucesso! (Simulação)');
    window.location.href = 'login.html';
});

document.getElementById('recuperacaoForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Código enviado! (Simulação)');
    window.location.href = 'verificacao.html';
});

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

document.querySelectorAll('.calendar-grid div').forEach(day => {
    day.addEventListener('click', () => {
        document.querySelectorAll('.calendar-grid div').forEach(d => d.style.backgroundColor = '#fff');
        day.style.backgroundColor = '#00C853';
        day.style.color = '#fff';
    });
});
