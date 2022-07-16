<div align="center">
    <h1> 👩‍💻 To-Do List 👨‍💻</h1>
    <h6>Checkpoint Front End II</h6>
</div>

---
<div  align="center">
<nav> <a href="#desafio">Desafio</a> | <a href="#estrutura">Estrutura</a> | <a href="#integrantes">Integrantes</a></nav>
</div>

---

<br>
<h2 id="desafio"> ✨ Objetivo</h2>
<p>


Este projeto consiste em um pequeno aplicativo de gerenciamento de tarefas, dentro do qual podemos realizar as seguintes atividades:
- Ver tarefas pendentes.
- Ver tarefas terminadas.
- Marcar uma tarefa como terminada.
- Criar tarefas novas.
- Visualizar a data de criação de uma tarefa.
- Remover tarefas.

Além do citado acima, implementaremos um sistema de autenticação de usuários, que inclui o processo de registro e login.


<h2 id="estrutura"> 🗂 Estrutura </h2>

Iremos seguir parte do que está proposto, mas incrementar ideias e padrões de desenvolvimento adquiridos no 1º bimestre em *Programação Imperativa I* .

 Iremos utilizar ***Módulos*** no Javascript.

**A utilização de módulos é essencial para a organização e qualidade do código.**

Com eles é possível criar blocos de código,que podem ser reutilizados em diversos lugares e contextos.

Assim, podemos criá-los com responsabilidades determinadas e utilizar em conjunto com outros módulos para realizar tarefas mais complexas.

Ao fazer o [*clone do projeto*](https://github.com/DH-Checkpoints/Checkpoint_2-FrontEnd_2) a disposição das pastas e aquivos segue o padrão:
:open_file_folder: Checkpoint_2-Frontend_2
- :page_facing_up: index.html
- :page_facing_up: signup.html
- :page_facing_up: tarefas.html
- :file_folder: assets  - *imagens*
- :file_folder: styles - *css*
- :open_file_folder: constants - arquivos *javascript* que sao de dados constantes e não irão alterar.
	- :page_facing_up: URL_BASE.js - nesse arquivo se encontra o link para acessar a [API](https://ctd-todo-api.herokuapp.com/#/users/getMe).
- :open_file_folder: scripts - *javascript*
	- :page_facing_up: main.js
	- :page_facing_up: index.js
	- :page_facing_up: login.js
	- :page_facing_up: tarefas.js
	- :open_file_folder: requisicoes - *arquivos javascript de requisições para API*.
	 	- :page_facing_up: createUser.js
	 	-  :page_facing_up: loginUser.js
	 	-  :page_facing_up: alterUser.js
	 	- :page_facing_up: tasksUser.js	 	
	 	- :page_facing_up: deleteTasks.js

Como dito acima, módulos são recursos muito úteis, uma vez que proporcionam qualidade e eficiência maior do código produzido, além de proporcionar agilidade no desenvolvimento de novas funcionalidades. Tudo isto devido a não ser necessário duplicar ou triplicar o mesmo bloco para utilizar em diferentes lugares. O módulo é apenas importado e todas as suas funcionalidades são adicionadas ao código que o importou.


---


<h2>📝 Normalizações e validações esperadas </h2>


**Pagina de Login:**

- [x] Ambos os campos devem ser normalizados (ex: retirar espaços desnecessários);

- [x] Nenhum dos campos pode ser vazio/nulo;

- [x] O email deve ser de um tipo válido (ex: aplicar expressões regulares);

- [x] O botão de acesso deve ser habilitado apenas quando todos os campos do formulário estiverem validados corretamente.


**Página de Cadastro:** 

- [x] Ambos os campos devem ser normalizados (ex: retirar espaços desnecessários);

- [x] Nenhum dos campos pode ser vazio/nulo;

- [x] O email deve ser de um tipo válido (ex: aplicar expressões regulares);

- [x] Os campos “senha” e “repetir senha” devem possuir a mesma informação para serem considerados válidos;

- [x] O botão de cadastro deve ser habilitado apenas quando todos os campos do formulário estiverem validados corretamente.


**Página de Tarefas**

- [x] Criar tarefas;

- [x] Vizualizar tarefas pendentes;

- [x] Deve-se marcar uma tarefa como concluída

- [x] Vizualizar tarefas concluídas;

- [x] As tarefas precisam estar com a data de criação no formato DD/MM/AAAA

- [x] Os valores/textos tarefas podem ser alteradas

- [x] Uma tarefa pode ser deletada


**Responsividade**

- [x] A aplicação deve ser responsiva.

- [x] Deve-se atender as telas mais comuns

**Extras**

- [x] Mostrar mensagem de erro caso seja acessada a página de tarefas sem uma autorização.

- [x] Redirecioanr o usuário para a página de login caso tente acessar diretamente as tarefas.

- [x] Criar uma animação de loading

- [x] Animar as entradas e saída de dados



---

<h2> Experiência </h2>

<a href="https://checkpoint2-frontend2.netlify.app/" target="_blank">Clique aqui</a> seu cadastro e comece hoje mesmo a organizar suas tarefas do cotidiano.




<video controls autoplay src="https://user-images.githubusercontent.com/16105546/179325886-913d283e-7661-43c7-abd7-9284eaddfb18.mp4" autoplay></video>




<h2 id="integrantes"> 👏 Integrantes do grupo </h2>

<div style="display:flex; flex-direction: column">

<a href="https://github.com/gabazevdo">
<img src="https://github.com/gabazevdo.png" height="50px" style="border-radius: 50px;">
Gabriel Azevedo
</a>

<a href="https://github.com/LuizVagner">
<img src="https://github.com/LuizVagner.png" height="50px" 
style="border-radius: 50px"> 
Luiz Vagner
</a>


<a href="https://github.com/FabioCTD">
<img src="https://github.com/FabioCTD.png" height="50px" style="border-radius: 50px"> 
Fabio Augusto
</a>

</div>
