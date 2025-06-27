let tarefas = [];

function adicionarTarefa() {
  //Salvar tarefas

  //Recebe valor do input do usuário
  const inputtarefa = document.getElementById("inputtarefa");
  let tarefa = inputtarefa.value.trim();

  const mensagem = document.getElementById("mensagem");
  //se o valor do input for vazio então mostra uma mensagem de erro para o usuário
  if (tarefa == "") {
    //Mostre uma mensagem de erro
    let mensagemerro = "Digite uma tarefa para adicioná-la a sua lista!";
    mensagem.textContent = mensagemerro;
    mensagem.style.color = "#A34743";
  } else {
    //Mensagem de tarefa adicionada com sucesso
    let mensagemsucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemsucesso;
    mensagem.style.color = "#28A745";
    tarefas.push(tarefa);
    renderizartarefas();
  }

  //Limpa o campo de texto depois de adicionar a tarefa
  inputtarefa.value = "";
}

function renderizartarefas() {
  //Cria novo item (li) e insere na (lista ul)
  const listatarefas = document.getElementById("listatarefas");
  //listatarefas.innerHTML; (ERRADO)
  //for itens na lista
  //1. item inicial (iterador)
  //2. item final (condição)
  //3. se vai de 1 em 1 elemento ou se pula
  //for(iterador, condição, frequencia)

  for (let i = 0; i < tarefas.length; i++) {
    let novatarefa = document.createElement("li");
    novatarefa.textContent = tarefas[i];

    let botaoremover = document.createElement("button");
    botaoremover.className = "remover";
    botaoremover.textContent = "Remover";
    botaoremover.onclick = () => removertarefa(i);

    let botaoeditar = document.createElement("button");
    botaoeditar.className = "editar";
    botaoeditar.textContent = "Editar";
    botaoeditar.onclick = () => editartarefa(i);

    novatarefa.appendChild(botaoremover);
    novatarefa.appendChild(botaoeditar);
    listatarefas.appendChild(novatarefa);
  }
}
function removertarefa(i) {
  console.log("removertarefa indice:", 1);
  tarefas.splice(i, 1);
  renderizartarefas();
  mensagem.textContent = "Item da lista removido com sucesso!";
  mensagem.style.color = "#28A745";
}

function editartarefa(i) {
  let tarefaeditada = prompt("Edite a tarefa:");
  if (tarefaeditada.trim() !== "") {
    tarefas[i] = tarefaeditada;
    renderizartarefas();
    mensagem.textContent = "Item editado com sucesso!";
    mensagem.style.color = "#28A745";
  }
}

function limparlista() {
  tarefas.length = 0;
  renderizartarefas();
  mensagem.textContent = "Lista de tarefas limpa com sucesso!";
  mensagem.style.color = "#28A745";
}
