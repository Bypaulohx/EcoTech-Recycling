import React from 'react';
import '../App.css';

const Cadastro = () => (
  <header className="container form-container">
    <a href="/Index" className="back-btn" id="backBtn"><i className="bi bi-chevron-left"></i></a>
    <h2>Olá!<br />Vamos começar?</h2>
    <form id="cadastroForm" className="form">
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Telefone" required />
      <input type="password" placeholder="Senha" required />
      <input type="password" placeholder="Confirme a senha" required />
      <button type="submit" className="avancar-btn">Avançar</button>
    </form>
    <p>Já tem uma conta? <a href="Login" className="login-link">Faça seu login</a></p>
  </header>
);

const Cadastro1 = () => (
  <header className="container form-container">
    <a href="/Index" className="back-btn" id="backBtn"><i className="bi bi-chevron-left"></i></a>
    <h2>Vamos terminar seu cadastro</h2>
    <form id="cadastroForm1" className="form">
      <input type="text" placeholder="Nome" required />

      <div className="cpf-cnpj-row">
        <label className="radio-label">
          <input type="radio" name="documento" value="cpf" required />
          CPF
        </label>
        <label className="radio-label">
          <input type="radio" name="documento" value="cnpj" required />
          CNPJ
        </label>
        <input type="text" placeholder="CPF ou CNPJ" required />
      </div>

      <input type="text" placeholder="CEP" required />

      <div className="address-row">
        <input type="text" placeholder="Número" required />
        <input type="text" placeholder="Complemento (opcional)" />
      </div>

      <label className="checkbox-label">
        Aceito receber notificações do app
        <input type="checkbox" defaultChecked />
        <span className="custom-checkbox"></span>
      </label>

      <button type="submit" className="cadastrar-btn">Cadastrar</button>
    </form>
  </header>
);

const Cadastro2 = () => (
  <header className="container form-container">
    <a href="/Index" className="back-btn" id="backBtn"><i className="bi bi-chevron-left"></i></a>
    <h2>Cadastro para organizações e autônomos</h2>
    <form id="cadastroForm2" className="form">
      <input type="text" placeholder="Nome" required />

      <div className="cpf-cnpj-row">
        <label className="radio-label">
          <input type="radio" name="documento" value="cpf" required />
          CPF
        </label>
        <label className="radio-label">
          <input type="radio" name="documento" value="cnpj" required />
          CNPJ
        </label>
        <input type="text" placeholder="CPF ou CNPJ" required />
      </div>

      <input type="text" placeholder="CEP" required />

      <div className="address-row">
        <input type="text" placeholder="Número" required />
        <input type="text" placeholder="Complemento (opcional)" />
      </div>

      <div className="materials-section">
        <label>Materiais que trabalha:</label>
        <label><input type="checkbox" name="materiais" value="papel" /> Papel</label>
        <label><input type="checkbox" name="materiais" value="plastico" /> Plástico</label>
        <label><input type="checkbox" name="materiais" value="metal" /> Metal</label>
        <label><input type="checkbox" name="materiais" value="vidro" /> Vidro</label>
        <label><input type="checkbox" name="materiais" value="eletronicos" /> Eletrônicos</label>
      </div>

      <div className="kilos-section">
        <label>Quantidade de Kilos que coleta:</label>
        <label><input type="checkbox" value="5-10" /> 5kg a 10kg</label>
        <label><input type="checkbox" value="10-15" /> 10kg a 15kg</label>
        <label><input type="checkbox" value="15-20" /> 15kg a 20kg</label>
        <label><input type="checkbox" value="20+" /> Acima de 20kg</label>
      </div>

      <div className="collection-method-section">
        <label>Meio de Coleta:</label>
        <label><input type="checkbox" value="carro" /> Carro</label>
        <label><input type="checkbox" value="bicicleta" /> Bicicleta</label>
        <label><input type="checkbox" value="caminhao" /> Caminhão</label>
        <label><input type="checkbox" value="van" /> Van</label>
      </div>

      <div className="radio-group">
        <label><input type="radio" name="tipo-trabalho" value="ong" required /> Empresa (ONG)</label>
        <label><input type="radio" name="tipo-trabalho" value="catador" /> Autônomo (Catador)</label>
      </div>

      <label className="checkbox-label">
        Aceito receber notificações do app
        <input type="checkbox" defaultChecked />
        <span className="custom-checkbox"></span>
      </label>

      <button type="submit" className="cadastrar-btn">Cadastrar</button>
    </form>
  </header>
);

export { Cadastro, Cadastro1, Cadastro2 };
