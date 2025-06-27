function adicionarTarefa() {
  //Recebe valor do input do usuário
  const inputtarefa = document.getElementById("inputtarefa");
  let tarefa = inputtarefa.value.trim();
  
  const mensagem = document.getElementById("mensagem")

  //se o valor do input for vazio então mostra uma mensagem de erro para o usuário
  if (tarefa == "") {
    //Mostre uma mensagem de erro
    let mensagemerro = "Digite uma tarefa para adicioná-la a sua lista!";
    mensagem.textContent = mensagemerro;
    mensagem.style.color = "#A34743"
  } else {
    //Mensagem de tarefa adicionada com sucesso
    let mensagemsucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemsucesso;
    mensagem.style.color = "#28A745"

    //Cria novo item (li) e insere na (lista ul)
    const listatarefas = document.getElementById("listatarefas");
    let novatarefa = document.createElement("li");
    novatarefa.textContent = tarefa;
    listatarefas.appendChild(novatarefa);
  }

  //Limpa o campo de texto depois de adicionar a tarefa
  inputtarefa.value = "";
}


//#28A745 green
//#A34743 red 