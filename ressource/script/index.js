window.onload = () => {
    const input = document.getElementById("commentaire");
    const pseudo = document.getElementById("pseudo");
    const btn = document.getElementById("envoie");
    const commArea = document.getElementById("c");
  
    btn.addEventListener("click", () => {
      let userPseudo = document.createElement("h4");
      userPseudo.className = 'foo';
      let content = document.createTextNode(pseudo.value.toString());
      userPseudo.appendChild(content);
      document.body.insertBefore(userPseudo, commArea);
  
      let newComm = document.createElement("p");
      newComm.className = 'bar';
      content = document.createTextNode(input.value.toString());
      newComm.appendChild(content);
      document.body.insertBefore(newComm, commArea);
    });
}