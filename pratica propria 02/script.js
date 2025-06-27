let tarefas = [];

function adicionarTarefa() {
  
  const inputtarefa = document.getElementById("inputtarefa");
  let tarefa = inputtarefa.value.trim();
  
  const mensagem = document.getElementById("mensagem");
  
  if (tarefa == "") {
    
    let mensagemerro = "Digite uma tarefa para adicioná-la a sua lista!";
    mensagem.textContent = mensagemerro;
    mensagem.style.color = "#A34743";
  } else {
    
    let mensagemsucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemsucesso;
    mensagem.style.color = "#28A745";
    tarefas.push(tarefa);
    renderizartarefas();
  }
  
  inputtarefa.value = "";
}

function renderizartarefas() {
  
  const listatarefas = document.getElementById("listatarefas");
  listatarefas.innerHTML = "";
  

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
