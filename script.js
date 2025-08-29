// Função que troca o conteúdo de acordo com o link clicado
function trocarConteudo(pagina) {
  let conteudoDiv = document.getElementById("conteudo");

  switch(pagina) {
    case "sobre":
      conteudoDiv.innerHTML = "Olá! Meu nome é Guilherme de Góss, tenho 31 anos e sou natural de Curitiba-PR. Nos momentos de lazer, gosto de me reunir com a família e amigos, sou apaixonado por futebol e com um grande interesse por tecnologia.";
      break;

    case "formacao":
      conteudoDiv.innerHTML = "Ensino médio completo - cursando Bacharelado em Engenharia de Software - Inglês (básico)";
      break;

    case "portfolio":
      conteudoDiv.innerHTML = `
        <h3>Meu Portfólio</h3>
        <div style="display:flex; gap:20px; justify-content:center; flex-wrap:wrap;">
          <a href="imagem1.png" target="_blank">
            <img src="imagem1.png" alt="Modelo 1" width="500">
          </a>
          <a href="imagem2.png" target="_blank">
            <img src="imagem2.png" alt="modelo 2" width="500">
          </a>
        </div>
      `;
      break;

    case "contato":
      conteudoDiv.innerHTML = `
        <h3>Entre em contato</h3>
        <form onsubmit="event.preventDefault(); alert('Mensagem enviada com sucesso!');">
          <input type="text" placeholder="Seu nome" required>
          <input type="email" placeholder="Seu e-mail" required>
          <textarea placeholder="Sua mensagem" rows="4" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      `;
      break;

    default:
      conteudoDiv.innerHTML = "Clique em um link acima para trocar o conteúdo.";
  }
}
