let amigos = [];
let sorteados = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (!nome || !isNaN(nome)) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Este nome já foi adicionado.");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = ""; 
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 3) {
    alert("Para realizar o sorteio, é necessário pelo menos três amigos.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceSorteado];

  sorteados.push(amigoSorteado);

  document.getElementById(
    "resultado"
  ).textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;

  sorteados = []; 
}
