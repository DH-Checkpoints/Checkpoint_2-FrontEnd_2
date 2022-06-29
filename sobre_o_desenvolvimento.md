# Padrões que iremos utilizar


## Diretórios e arquivos

Inicialmente, o projeto solicita que a construção seguisse esse padrão:
[*veja aqui*](https://github.com/PedagogiaDHBrasil/DH-FrontEnd2-ToDoApp-ProjetoBase)
:open_file_folder: Checkpoint_2-Frontend_2
- :page_facing_up: index.html
- :page_facing_up: signup.html
- :page_facing_up: tarefas.html
- :open_file_folder: assets  - *imagens*
- :open_file_folder: styles - *css*
- :open_file_folder: scripts - *javascript*


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

## Branchs

Adotamos a ideia de trabalhar com *branchs* separadas. 
Na realidade, teremos apenas 3 branchs, que são:

- **main**
	- Aqui se encontra todo o projeto finalizado, o que será de fato entregue;
	- Na main será feito o *merge* das alterações feitas nas branchs de desenvolvimento;
- **logica**
	- Aqui iremos desenvolver toda a parte de lógica do projeto, ou seja, tudo que se tratar de interação com o *javascript* será feito nesta branch.
- **estilo**
	- Toda a estilização será feita nessa branch.

*Se por acaso, durante o desenvolvimento da parte lógica tivermos que modificar o HTML ou CSS, não será necessário trocar de branch, pois para esse momento, o desenvolvimento da lógica está atrelado. 
A mesma regra serve para o desenvolvimento das páginas e estilos em caso de alteração ou acréscimo a parte lógica.* 


## Desenvolvimento


Ao iniciar o desenvolvimento, a primeira coisa a se fazer é atualizar o repositório local (seu computador) de acordo com o repositório remoto (github).
No **terminal**, podendo ser o terminal linux, terminal git, gitbash, powerShell, iremos acessar a pasta onde está o repositório.
Estando no local correto no terminal, iremos acessar a branch **main** 
~~~javascript
git checkout main
~~~
E atualizar com o seguinte comando:
~~~javascript
git pull
~~~
Feito isso, o código do seu repositório local estará atualizado de acordo com o repositório remoto.

E a partir daqui, iremos acessar a branch que iremos realizar alterações:
~~~javascript
git checkout logica
//ou
git checkout estilo
~~~
Mas antes de iniciar as alterações, temos que atualizar a branch em questão de acordo com a main, então utilizaremos o seguinte comando:
~~~git
 git pull origin main
~~~

Feito os passos acima, o desenvolvimento irá iniciar.

Digamos que entramos na **branch estilo**  e fizemos alterações no CSS, e após finalizarmos, teremos que subir para o Github para que toda a equipe tenha acesso as alterações e todos tenham o código atualizado.
Para tal, devemos fazer os seguintes comandos:
~~~javascript
// iremos adcionar os arquivos para fazer o commit - comentário sobre a alteração
git add arquivo_alterado
 
 //feita a alteração, hora do commit
git commit -m "CSS: informar o que foi alterado"
~~~

Percebe que no commit há um texto em caixa alta?
- git commit -m "**CSS:** *informar o que foi alterado*"

Aqui estamos utilizando e montando um padrão de commit. 
*Para saber mais, [clique aqui e leia sobre o padrão de commit](https://github.com/iuricode/padroes-de-commits)*

Para cada alteração, iremos realizar esse procedimento de commit, assim teremos um código ainda mais documentado.

E se fosse uma alteração no html? : git commit -m "HTML: informar a alteração"
Por hora estamos utilizando: 
- HTML
- CSS 
- LÓGICA 
- MARKDOWN

Esses são o tipo ou o que estamos alterando, mas fica a critério do desenvolvedor informar o que estará modificando, desde que no início do commit tenha sua descrição em CAIXA ALTA. 

### Enviando para o Github

Ok! Depois de ter feito todas as alterações, hora de subir o código:

~~~javascript
git push origin estilo
//ou
git push origin logica
//atente se ao push, precisa ser de acordo com a branch que está em desenvolvimento
~~~
Após ter feito o **push** , o próximo passo é gerar o *Pull Request (PR)* lá no github.

## Github

Estando no repositório que o push foi feito, irá aparecer logo de cara a informação de gerar um pull request:
![](https://i.ibb.co/RBVXNY7/Captura-de-tela-de-2022-06-29-16-56-49.png)

---

Ao clicar no botão de **Compare & pull request**  a tela apresentada será essa aqui:
![enter image description here](https://i.ibb.co/mBWW3y4/Captura-de-tela-de-2022-06-29-17-09-45.png)

---

E **antes** de clicar em **Create pull request** precisaremos colocar um colega para revisar o código. Essa opção fica na coluna a direita:
![](https://i.ibb.co/g4fN9Yd/Captura-de-tela-de-2022-06-29-17-13-11.png)

<br><br>

Feito isso, iremos clicar em **create pull request** 

---

E para quem esta aguardando a aprovação, a tela apresentada é a seguinte:
![](https://i.ibb.co/y89TCpB/Captura-de-tela-de-2022-06-29-17-15-57.png)
Ou seja, o **merge para a branch main** só será feito por quem requisitou após a aprovação de um **reviewer**.

---

Para quem recebeu a missao de revisar o código, ao entrar no repositório a seguinte tela será apresentada:
![](https://i.ibb.co/stBrDQr/Captura-de-tela-de-2022-06-29-17-26-54.png)

---

Clicando em **Add your review** será apresentado as alterações e o que esta sendo solicitado aprovação e o botão para adicionar um review:
![](https://i.ibb.co/j3xp6wH/Captura-de-tela-de-2022-06-29-17-30-25.png)
Podendo aqui ser adicionado um comentário.

---

- Selecionando o approve(aprovação) e enviando, a tela seguinte é para fazer o **merge para a main**, e o solicitante ou o revisor poderá realizar o *merge para a main*.
![](https://i.ibb.co/Mh8hkZh/Captura-de-tela-de-2022-06-29-17-33-00.png)

---

- Após o merge, a seguitne tela irá aparecer:
![](https://i.ibb.co/cwX7sjk/Captura-de-tela-de-2022-06-29-18-05-05.png)
E a main estará atualizada.
<br><br><br><br>
## Pronto!
Após desenvolver, commitar, fazer o push, abrir o PR e o mesmo for aprovado o processo estará concluído.
E tudo se inicia novamente sempre que formos atualizar nosso projeto até a finalização do mesmo.



Valeu galera.
#Tmj
