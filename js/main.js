//variáveis de controle do framework
var story;
var instrucoes = false;
var creditos = false;
var master = false;

//variáveis de controle da história
microchip = false;

// Cole este bloco no lugar da função getStory() atual, dentro de js/main.js
function getStory() {
	return {
	"musicaGeral": {
		"ativa": true,
		"src": "audio/tema.mp3"
	},
	"inicio": {
		"story": "<p>O que parecia ser mais um dia comum, na Universidade Paulista de São José do Rio Preto, transformou-se em pesadelo, quando um portal se abriu, e o campus começou a ser atacado por zumbis. Tudo ocorre muito rapidamente. Enquanto isso, Ferdinando, um professor engajado em sua disciplina de Narrativa Imersiva e Interativa, não percebe o apocalipse que acomete o seu local de trabalho. Quando se dá conta, zumbis tentam invadir sua aula e devorar o cérebro de seus alunos. Será que conseguirão escapar desta maldição?</p>",
		"choices": [
			{
				"choice": "Comece a aventura!",
				"destination": "intro"
			},
			{
				"choice": "Como jogar",
				"destination": "instrucoes"
			},
			{
				"choice": "Créditos",
				"destination": "creditos"
			}
		],
		"image": "img/inicio.jpg",
		"audiodescricao": "audiodesc/inicio.mp3"
	},
	"intro": {
		"story": "<p>Você é Ferdinando, um homem com crise da meia idade que sonhava em ser baterista de uma grande banda de Metal. No entanto, a vida te levou para outros caminhos, e hoje você não sabe mais o que fazer para entreter seus alunos da faculdade, em uma aula monótona sobre HTML, CSS e JavaScript. O conteúdo é difícil e entediante. Quando ocorre a abertura do portal, você está consternado, tentando resolver problemas na arquitetura do site de um livro-jogo. Cansado, pensa em escapar da sala e fumar um cigarro no banheiro. No entanto, este ato pode decretar sua demissão por justa causa da instituição.</p>\n\t\t\t",
		"choices": [
			{
				"choice": "Sua vida como músico",
				"destination": "suaInfancia"
			},
			{
				"choice": "Problemas com tabagismo",
				"destination": "contosWinverlen"
			}
		],
		"image": "img/intro.jpg",
		"audiodescricao": "audiodesc/intro.mp3"
	},
	"instrucoes": {
		"story": "<h3><center>Recomendação Etária: 16+</center></h3><h3>Para jogar esta aventura-solo, basta ler o texto apresentado, e ao final, clicar na decisão de sua preferência. Como exemplo, temos duas opções:</h3><h3>- A primeira delas indica 'Comece a Aventura!', onde você irá ler o trecho introdutório do texto, identificando o personagem que você irá interpretar;</h3><h3>- A segunda opção é a de retornar à 'Tela Inicial' do jogo.</h3><h3>Essa aventura-solo foi idealizada de acordo com o sistema de regras Opera RPG, no entanto, para fins de simplificação, essas regras foram atenuadas ao máximo (a fim de não ser necessário um conhecimento prévio delas).</h3><h3>Dessa forma, ao longo dessa aventura-solo não serão necessários o conhecimento da ficha do personagem principal e nem tomadas de decisões que dependam de rolagem de dados.</h3><h3>Por fim, existe mais de um final possível para este jogo, por isso, você pode jogar novamente escolhendo opções diferentes das anteriormente escolhidas.</h3>",
		"choices": [
			{
				"choice": "Comece a aventura!",
				"destination": "intro"
			},
			{
				"choice": "Tela Inicial",
				"destination": "inicio"
			}
		],
		"title": "Como jogar",
		"image": "img/inicio.jpg"
	},
	"creditos": {
		"story": "<h3>Esta aventura-solo foi o trabalho final da disciplina de Narrativas Imersivas e Interativas 2026/02. A disciplina pertence ao curso de Design Gráfico da Universidade Paulista, campus São José do Rio Preto.<p>Programação: Leonardo Andrade, Gabriel Ritter, Samantha Vico Spezamiglio</p><p>Autor: Fernando Martins Fiori</p><p>Ilustrações: Fernando Martins Fiori, a partir de prompts criados via ChatGPT, Gemini e Canva</p></h3>",
		"choices": [
			{
				"choice": "Comece a aventura!",
				"destination": "intro"
			},
			{
				"choice": "Tela Inicial",
				"destination": "inicio"
			}
		],
		"title": "Créditos",
		"image": "img/inicio.jpg"
	},
	"suaInfancia": {
		"story": "<p>Sua paixão pelo Metal começou quando tinha 12 anos, com a banda Whitesnake. Com o passar do tempo, foi conhecendo e curtindo outras bandas mais pesadas, como Sepultura, Obituary, Death, Slayer, Testament etc., o que causava terror aos seus pais por verem as capas de CDs e pôsteres dessas bandas, que traziam sempre imagens de violência, morte e de demônios. Você treinava incessantemente bateria a fim de chegar ao nível de seus ídolos. Embora se dedicasse demais a esse instrumento percussivo, a falta de perspectiva para esta profissão o levou para um caminho diferente e, por fim, tornou-se professor universitário.</p>",
		"choices": [
			{
				"choice": "Problemas com o tabagismo",
				"destination": "contosWinverlen"
			},
			{
				"choice": "Mascar um chiclete",
				"destination": "rotinaDublin"
			}
		],
		"image": "img/suaInfancia.jpg",
		"audiodescricao": "audiodesc/paixao.mp3"
	},
	"contosWinverlen": {
		"story": "<p>Você começou a fumar por volta dos 18 anos sob influência da sua turma de amigos mais velhos. Apenas fumava aos finais de semana. Porém, o que era para ser uma recreação se transformou em vício quando passou a morar sozinho. Hoje, com quase 40 anos, está consciente de que é preciso parar de fumar e preservar sua saúde. Para isso, recorre ao seu chiclete de nicotina que ajuda a controlar seu vício.</p>\n\t\t\t",
		"choices": [
			{
				"choice": "Sua vida como músico",
				"destination": "suaInfancia"
			},
			{
				"choice": "Mascar um chiclete",
				"destination": "rotinaDublin"
			}
		],
		"image": "img/contosWinverlen.jpg",
		"audiodescricao": "audiodesc/fumar.mp3"
	},
	"rotinaDublin": {
		"story": "<p>Embora deseje muito sair da sala, você respira fundo e retira um chiclete de nicotina da sua mochila para aliviar sua ansiedade. Você pede para que os alunos deem continuidade aos seus projetos enquanto tenta encontrar uma solução, na arquitetura do livro-jogo. De repente, um grito! Parece vir de uma sala do mesmo corredor onde fica a sua. Você olha para os alunos que indagam – “O que será isso?” – então, você se levanta e sai da sala, observa o corredor e tudo parece normal. Ao retornar à sala, outro grito, e mais outro, e outro! Seus alunos se levantam e vão até o corredor. </p>\n<p>Tudo fica em silêncio, mas, de repente, alunos saem de suas salas, gritando e correndo desesperadamente. Você e seus alunos, por um breve momento, ficam paralisados com aquela situação. Até que uma aluna diz – “Professor, o que é isso?” – e você responde – “Parece ser um ataque terrorista. Escondam-se já!” </p>\n<p>Neste momento você pensa em correr com a multidão, porém, na hipótese de ser um ataque, poderia haver outros terroristas no pátio da faculdade. Assim, decide recolher seus alunos para dentro da sala. </p>",
		"choices": [
			{
				"choice": "Retonar à sala",
				"destination": "ilhaInishmore"
			}
		],
		"image": "img/rotinaDublin.jpg",
		"audiodescricao": "audiodesc/sairdasala.mp3"
	},
	"ilhaInishmore": {
		"story": "<p>Ao retornarem à sala, você apaga as luzes e pede para que os alunos desliguem os computadores e o ajudem a empurrar as mesas, encostando-as na porta, pois, se alguém tentar invadir a sala, terá dificuldades para entrar. Sua estratégia é fingir que não há ninguém na sala. </p>\n<p>De repente, surge uma figura humanoide com os olhos vermelhos. Logo os alunos gritam – “Ataque zumbi!” – e o desespero toma conta da sala. As mesas são muito leves para conter a investida demoníaca e os gritos das vítimas aumentam. Uma vez descobertos na sala, não há escapatória senão fugir. </p>\n<p>Você e seus alunos podem fugir pela porta, seguindo a multidão desesperada, porém correndo o risco de encontrar outros zumbis, ou fugir pela janela, que fica no segundo andar, podendo se machucar com a queda, o que dificultaria a fuga.</p>\n",
		"choices": [
			{
				"choice": "Fugir pela porta",
				"destination": "aceitarConvite"
			},
			{
				"choice": "Fugir pela janela",
				"destination": "recusarConvite"
			}
		],
		"image": "img/ilhaInishmore.jpg",
		"audiodescricao": "audiodesc/retornar.mp3"
	},
	"aceitarConvite": {
		"story": "<p>Você precisa liderar os seus alunos e ninguém melhor do que você para conhecer todos os corredores e acessos do campus. Pelo risco que correm, caso pulem a janela, você decide conduzir a fuga pela porta. Ao saírem da sala, deparam-se com o caos instaurado. No corredor por onde surgiram gritos, terror, sangue, cadáveres mutilados e zumbis. Ao avistarem a escada central que dá acesso ao pátio, uma multidão desesperada se aglomera em desespero. Você pode percorrer outro caminho que dá acesso às escadas próximas à biblioteca ou ir de elevador, que está aberto, próximo a você.</p>\n\t\t\t",
		"choices": [
			{
				"choice": "Ir de elevador",
				"destination": "apontarDireção"
			},
			{
				"choice": "Ir de escada",
				"destination": "esperarFim"
			}
		],
		"image": "img/aceitarConvite.jpg"
	},
	"recusarConvite": {
		"story": "<p>Com a ajuda de outros alunos, vocês quebram os vidros das janelas. Você se lembra que há uma cama elástica, utilizada na feira do curso de Educação Física, próxima que amortecerá a queda de todos. Dois alunos maiores pulam na frente e, mais do que depressa, trazem a cama elástica. O tempo é curto e você ainda permanece na sala, esperando que o último aluno pule. Os zumbis quebram a porta e correm em sua direção, quase lhe agarrando, até que você pula. </p> \n<p> “Para onde vamos, professor?” – diz uma aluna, e você responde – “Só há um caminho, contornar o anfiteatro. Sigam-me!” </p>\n<p>Todos correm até que Arthur grita – “Professor, o Gustavo se machucou! Devemos ajudá-lo”. </p>\n<p>Ao virar para trás, você avista Gustavo caído, gemendo de dor, pois havia torcido o pé com a corrida. Logo atrás, há zumbis vindo em direção ao aluno. Qualquer interrupção poderá decretar a morte de todos. Eis a questão: retornar para tentar salvar Gustavo, que precisará ser carregado, ou deixar que o aluno seja sacrificado. </p>",
		"choices": [
			{
				"choice": "Deixar Gustavo",
				"destination": "sairAntes"
			},
			{
				"choice": "Ajudar Gustavo",
				"destination": "descerPorão"
			}
		],
		"image": "img/recusarConvite.jpg",
		"audiodescricao": "audiodesc/janela.mp3"
	},
	"sairAntes": {
		"story": "<p>Gustavo é dilacerado pelo pelos zumbis, e o remorso toma conta de você enquanto escuta o seu aluno gritando em agonia. Poucos sabem como contornar o anfiteatro. Ao contrário das outras pessoas, você percorreu o caminho menos provável para fugir o que lhe deu uma vantagem. O anfiteatro dá acesso à rua, único caminho por onde fugir.</p>\n<p>Quando chegam à grade que isola o anfiteatro da rua, surge um problema. O tempo é curto e a grade é alta. Os alunos maiores tentam ajudar os menores, porém os seres malignos vão se aproximando. Alguns conseguem pular a grade, mas outros são deixados para atrás. Você e poucos alunos correm pela rua, buscando por ajuda, mas por quanto tempo?</p>\n",
		"choices": [
			{
				"choice": "Créditos",
				"destination": "creditos"
			}
		],
		"image": "img/rua.jpg"
	},
	"descerPorão": {
		"story": "<p>Você prefere morrer do que viver com o remorso de deixar um aluno para trás. No entanto, os zumbis se aproximam rapidamente e você não tem certeza se conseguirá carregar o garoto sozinho. É necessário decidir se pedirá ajuda aos outros alunos ou os deixarão seguir adiante.</p>",
		"choices": [
			{
				"choice": "Deixar que sigam",
				"destination": "fugirIlha"
			},
			{
				"choice": "Pedir ajuda",
				"destination": "deixarFionn"
			}
		],
		"image": "img/descerPorão.jpg"
	},
	"deixarFionn": {
		"story": "<p>Os alunos não conseguiriam contornar o anfiteatro sozinhos. Então, a decisão mais sábia foi manter o grupo unido. No entanto, Gustavo está muito lento, e o percurso para contornar o anfiteatro já não mais parece ser uma boa opção, já que o garoto não conseguirá pular a cerca e continuar a fuga pela rua. </p>\n<p>Como líder do grupo, você precisa encontrar uma outra alternativa. Não basta correr, haja vista que ninguém sabe o que espera fora dos muros da universidade. Talvez haja zumbis na rua, dominando a cidade toda. A opção mais plausível é tentar esconder seus alunos num lugar seguro, dentro do campus, e aguardar até que a situação melhore. Há duas salas próximas: o almoxarifado e a sala dos professores.</p>\n",
		"choices": [
			{
				"choice": "Sala dos professores",
				"destination": "respostaSincera"
			},
			{
				"choice": "Almoxarifado",
				"destination": "mentirFugir"
			}
		],
		"image": "img/deixarFionn.jpg"
	},
	"mentirFugir": {
		"story": "<p>Ao chegar ao almoxarifado, você e seus alunos percebem que o local é pequeno, abafado e sem janelas. Além do mais, não conseguirão ficar por muito tempo ali. Então precisam sair para investigar a situação lá fora e encontrar um local mais apropriado para se abrigarem. Como você conhece melhor o campus, toma a frente do grupo, pedindo para que o acompanhe até a sala dos professores. </p>\n\t\t\t",
		"choices": [
			{
				"choice": "Sala dos professores",
				"destination": "respostaSincera"
			}
		],
		"image": "img/almoxarifado.jpg"
	},
	"fugirIlha": {
		"story": "<p>Você ordena que todos os seus alunos continuem. Ao tentar carregar Gustavo, você se dá conta que não terá como ajuda-lo sozinho. Podem se esconder no laboratório de engenharia e ficar lá até que a situação melhore ou gritar para que seus alunos retornem e ajudem.</p>",
		"choices": [
			{
				"choice": "Se esconder",
				"destination": "levantarCorrer"
			},
			{
				"choice": "Gritar para alunos",
				"destination": "gritarSocorro"
			}
		],
		"image": "img/fugirilha.jpg"
	},
	"gritarSocorro": {
		"story": "<p>Sua decisão foi rápida, e os alunos não haviam se distanciado e puderam lhe escutar e retornar. Além do mais, eles não conseguiriam contornar o anfiteatro sozinhos. Então, a decisão mais sábia foi manter o grupo unido. No entanto, Gustavo está muito lento, e o percurso para contornar o anfiteatro já não mais parece ser uma boa opção, já que o garoto não conseguirá pular a cerca e continuar a fuga pela rua. </p>\n<p>Como líder do grupo, você precisa encontrar uma outra alternativa. Não basta correr, pois ninguém sabe o que espera fora dos muros da universidade, pois talvez haja zumbis do lado de fora, dominando a cidade toda. A opção mais plausível é tentar esconder seus alunos num lugar seguro, dentro do campus, e aguardar até que a situação melhore. Há duas salas próximas: o almoxarifado e a sala dos professores. </p>\n",
		"choices": [
			{
				"choice": "Sala dos professores",
				"destination": "respostaSincera"
			},
			{
				"choice": "Almoxarifado",
				"destination": "mentirFugir"
			}
		],
		"image": "img/deixarFionn.jpg"
	},
	"respostaSincera": {
		"story": "<p>Você decide leva-los à sala dos professores, pois sabe que está sempre trancada e você possui a chave para abri-la. Tudo parece calmo pelos caminhos escuros atrás dos pavilhões que levam à sala dos professores. Você aproveita este momento de aparente sossego para fumar, talvez, o seu último cigarro da vida, já que ninguém no campus se preocupará com isso agora. Deixa que seus alunos prossigam na frente e, assim que dá o primeiro trago, escuta um grunhido atrás de você. É um zumbi à espreita! Você fica sem reação, fecha os olhos, solta a fumaça inalada como se fosse sua última expiração e... escuta aquele diabo tossir. Por alguma razão aquela espécie de demônio não suportava o cheiro da fumaça do cigarro de papel, bastante impopular nos dias de hoje.</p>\n<p>Você percebe que está de posse de um objeto mágico que lhe dará passe-livre: quase meio maço de Marlboro. Deste modo, você fica mais destemido, e se coloca, novamente, á frente de seu grupo, conduzindo-os à sala dos professores de onde vem um som singular. A batida rápida e o timbre infernal eram inconfundíveis a você, um ávido headbanger: era a música The Arrival of Satan's Empire, da banda sueca Dark Funeral. </p>\n<p>Você sabia que o professor de informática, Vladimir, outro fanático por Metal extremo, gostava desta banda. “Será que ele está vivo?” – pensou. Então, correu para identificar de onde estava vindo a música. Era da sala dos professores em que uma luz vermelho-sangue atravessava as portas e janelas. </p>\n<p>Com medo do que haveria ali, você prefere esconder seus alunos em uma sala vazia. Você os adverte para fiquem que trancados, e o aguarde por 2h. Caso não retorne, será cada um por si! Quando chega à sala dos professores, você encontra Vladimir, no centro de um círculo com um pentagrama, de onde sai a luz intensa. </p>\n<p>Vladimir: Fico feliz em lhe ver vivo, meu amigo. </p>\n<p>Você: Como você não foi morto ainda? O que é tudo isso? Parece tranquilo com a situação. </p>\n<p>Vladimir: Oras, Ferdinando, você nunca desconfiou que por trás destas músicas havia uma campanha clara de arregimentar seguidores na terra para ajudar com a abertura do portal que traria Mefisto ao reino dos vivos? Não, você nunca levou o Metal a sério! Sempre achou que tudo isso era pura carnavalização. Mas irei poupar sua vida, caso se renda ao reino infernal de Mefisto e se junte a nós para espalhar o caos e destruição à terra. </p>\n<p>Você: Eu nunca aceitaria isto. Jamais! </p>\n<p>Vladimir: Então prepara-se para o sofrimento eterno! </p>\n<p>Preparando-se para o fim, ainda há duas escolhas, desafiar Vladimir para um duelo musical, pois, assim como você, ele era um exímio baterista, ou tentar exterminá-lo com o restante de cigarros do maço. </p>",
		"choices": [
			{
				"choice": "Exterminar",
				"destination": "sereiaExiste"
			},
			{
				"choice": "Desafiar",
				"destination": "sereiaNaoexiste"
			}
		],
		"image": "img/respostaSincera.jpg",
		"music": "audio/satan.mp3"
	},
	"sereiaExiste": {
		"story": "<p>Você acende o seu último cigarro, e o cheiro da fumaça deixa Vladimir desorientado. Você entra no círculo e segura Vladimir pelos braços. Porém ele sabe que o cigarro irá se apagar e que seu poder é momentâneo. Quando o cigarro se apaga, Vladimir redobra sua força, jogando você longe com um só golpe. </p>\n<p>Tudo parece estar perdido, até que você se lembra que ainda tem chicletes de nicotina na bolsa, e que isto poderá ser sua cartada final. Mais do que depressa, você masca de uma só vez todos os chicletes, e rapidamente a nicotina entra em sua corrente sanguínea. Vladimir assume sua forma demoníaca e morde sua garganta. A nicotina absorvida pelo demônio entra em seu corpo como veneno, levando Vladimir e sua horda maligna à destruição. </p>\n<p>Todos o reconhecem como um herói que dedicou sua vida pela faculdade e pelos seus alunos. Você morre, mas não é esquecido (pelo menos até que outro apocalipse aconteça, depois de 5 anos). </p>",
		"choices": [
			{
				"choice": "Créditos",
				"destination": "creditos"
			}
		],
		"image": "img/dormindo.jpg",
		"music": "audio/satan.mp3"
	},
	"sereiaNaoexiste": {
		"story": "<p>Há tempos atrás, você havia conversado com Vladimir, que lhe confessou ser baterista. Tanto você quanto ele praticavam para atingir o máximo de velocidade no blast beat: um ritmo de metralhadora específico do som mais extremo do Metal.</p>\n<p>Você: Vladimir, eu lhe desafio a ser mais rápido que eu no blast beat! </p>\n<p>Vladimir: Só se for agora! </p>\n<p>De repente, pelos poderes advindos das profundezas do inferno, o pátio se torna, num piscar de olhos, um grande espetáculo musical de demônios como público. Você e Vladimir estão no palco. Ele começa o seu solo, e você se surpreende com a técnica e velocidade de seu rival. Para piorar sua situação, você não treinava há tempos! </p>\n<p>Visto que estava perdendo, não lhe restava mais nada senão tocar a música que todos sentiam dificuldade de tocar, mas que você dominava: Painkiller, da banda Judas Priest. Vladimir fica amedrontado, pois, apesar de ter mais velocidade, não tem a mesma técnica que você para conseguir executar esta batida mortal. O público repleto de demônios delira com o seu som brutal e o reconhecem como o melhor baterista. </p>\n<p>Vladimir é derrotado e atirado nas profundezas do inferno. O portal se fecha, e os demônios se vão. Seus alunos assistem a tudo, e, por fim, você se torna um herói do Metal. Todas as bandas querem você como baterista. Por fim, você deixa de dar aula e realiza o seu sonho de adolescência, saindo em turnê mundial com a primeira banda de Metal que escutou na vida: Whitesnake. Agora que realizou o seu sonho, você decide parar de fumar a fim de viver plenamente, por mais tempo possível e com boa saúde, o seu sucesso como músico. </p>",
		"choices": [
			{
				"choice": "Créditos",
				"destination": "creditos"
			}
		],
		"image": "img/sereiaNãoexiste.jpg",
		"music": "audio/painkiller.mp3"
	},
	"levantarCorrer": {
		"story": "<p>Você e Gustavo se escondem no laboratório de engenharia. Você verifica se há algum zumbi lá, mas tudo parece bem calmo. Há pouca luminosidade no local, o que poderá ser melhor para que se escondam. </p>\n<p>De repente, você escuta o som de algum objeto caindo no chão, em um canto da sala. Ora, não há o que temer, já que você havia verificado antes que a sala estava completamente vazia. Então você vai até o canto da sala verificar o que caiu. </p>\n<p>Você é atacado por Plutão, o gato preto de estimação do campus, que sempre ficou perto do laboratório de engenharia. Sempre que você chegava na universidade, encontrava Plutão. Apesar de tentar contato com o felino, ele sempre foi arisco e desconfiado, não lhe dando chance de criar amizade. </p>\n<p>Agora Plutão também havia se transformado em zumbi e ao mordê-lo, você também, em pouco tempo, se tornaria zumbi e exterminaria Gustavo. </p>",
		"choices": [
			{
				"choice": "Créditos",
				"destination": "creditos"
			}
		],
		"image": "img/gato.jpg"
	},
	"apontarDireção": {
		"story": "<p>Embora o elevador seja grande e você tente colocar o máximo de alunos dentro, o tamanho não é suficiente, e alguns ficam de fora, sendo mortos assim que a porta do elevador se fecha. Ainda é pior o destino de vocês, pois, ao chegarem no subsolo, deparam-se com uma legião de zumbis que nem mesmo lhes dão chance de fugir, devorando-os dentro do elevador.</p>\n\t\t\t",
		"choices": [
			{
				"choice": "Créditos",
				"destination": "creditos"
			}
		],
		"image": "img/apontarDireção.jpg"
	},
	"esperarFim": {
		"story": "<p>Você decidiu descer as escadas próximas à biblioteca, porém, à medida que começam a descer, você se dá conta de que ela é bem fechada e estreita. E se os zumbis já estiverem lá embaixo nos esperando? – você pensa. Num momento de desespero como este, qualquer caminho é arriscado. Não se esqueça que a vida de seus alunos está em suas mãos e qualquer decisão poderá ser fatal. É possível voltar ou continuar a descida.</p>\n\t\t\t",
		"choices": [
			{
				"choice": "Descer",
				"destination": "seguirSereia"
			},
			{
				"choice": "Subir",
				"destination": "voltarIlha"
			}
		],
		"image": "img/irdeescada.jpg"
	},
	"seguirSereia": {
		"story": "<p>Você e seus alunos descem as escadas que dão direto para o pátio. Lá, diversos zumbis lhes esperam sedentos por sangue. Por mais que tentem encontrar um outro caminho, estão rodeados pelos zumbis que se multiplicam a cada instante. Agora, não há nada mais a fazer do aceitar que também se tornarão zumbis. </p>",
		"choices": [
			{
				"choice": "Créditos",
				"destination": "creditos"
			}
		],
		"image": "img/descerescadas.jpg"
	},
	"voltarIlha": {
		"story": "<p>Em pouquíssimo tempo, as primeiras pessoas mordidas já se tornaram zumbis. O corredor onde fica sua sala está quase tomado por estes demônios vorazes. Só lhe resta voltar à sua sala e tentar fugir pela janela.</p>\n\t\t\t",
		"choices": [
			{
				"choice": "Retornar à sala",
				"destination": "sinalizarAoife"
			}
		],
		"image": "img/subir.jpg"
	},
	"sinalizarAoife": {
		"story": "<p>Agora já é tarde demais! Ao adentrarem na sala, vocês se deparam com alguns zumbis. Mesmo que tentem sair, o corredor está cada vez mais tomado por zumbis que se multiplicam a cada instante. Triste escolha a sua, pois agora você e seus alunos se tornaram zumbis também.</p>\n\t\t\t",
		"choices": [
			{
				"choice": "Créditos",
				"destination": "creditos"
			}
		],
		"image": "img/salacomputacao.jpg"
	}
};
}


//PROGRAMAÇÃO DOS BOTÕES
//Regras (nesta ordem):
//1) Página com música própria (campo "Música especial" no editor) -> toca só essa nela
//   (é assim que se faz a música de um final, por exemplo).
//2) Página marcada como "sem música" -> silêncio nela (nem a geral toca).
//3) Demais páginas -> música geral (story.musicaGeral), contínua, sem reiniciar
//   ao trocar de página, se estiver ativada.
function getSceneMusic(scene) {
	if (scene.music) return scene.music;
	if (scene.semMusica) return "";
	var g = story.musicaGeral;
	if (g && g.ativa && g.src) return g.src;
	return "";
}

//Chave usada para guardar as páginas criadas/editadas no navegador
var STORAGE_KEY = "inishmore_story_custom";

//Imagem do topo da tela usada quando a página não define uma imagem própria
var DEFAULT_HEADER_IMAGE = "img/image-eric.gif";



//Identifica se um caminho/arquivo é de vídeo (pela extensão ou pelo tipo do data: URL)
function isVideoSrc(src) {
	if (!src) return false;
	if (src.indexOf("data:video") === 0) return true;
	return /\.(mp4|webm|ogv|mov)(\?.*)?$/i.test(src);
}

//Carrega a história: usa a versão salva no navegador (se existir) ou a versão padrão do código
function loadStory() {
	var saved = localStorage.getItem(STORAGE_KEY);
	if (saved) {
		try {
			story = JSON.parse(saved);
		} catch (e) {
			story = getStory();
		}
	} else {
		story = getStory();
	}
	story.currentScene = "inicio";
}

//Salva a história (com as páginas criadas/editadas/excluídas) no navegador
function saveStory() {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(story));
}

//Volume padrão de cada áudio (0 a 1). Ajuste como quiser.
var DEFAULT_BGM_VOLUME = 0.6;
var DEFAULT_AUDIODESC_VOLUME = 1;

//Chave para guardar a preferência de volume do usuário no navegador
var VOLUME_STORAGE_KEY = "inishmore_volumes";

//Lê a preferência salva (ou usa o padrão)
function loadVolumePrefs() {
	var saved = localStorage.getItem(VOLUME_STORAGE_KEY);
	if (saved) {
		try {
			var parsed = JSON.parse(saved);
			return {
				bgm: (typeof parsed.bgm === "number") ? parsed.bgm : DEFAULT_BGM_VOLUME,
				audiodesc: (typeof parsed.audiodesc === "number") ? parsed.audiodesc : DEFAULT_AUDIODESC_VOLUME
			};
		} catch (e) { /* ignora e usa padrão */ }
	}
	return { bgm: DEFAULT_BGM_VOLUME, audiodesc: DEFAULT_AUDIODESC_VOLUME };
}

//Salva a preferência atual
function saveVolumePrefs(bgmVol, audiodescVol) {
	localStorage.setItem(VOLUME_STORAGE_KEY, JSON.stringify({ bgm: bgmVol, audiodesc: audiodescVol }));
}

//Programação dos Botões e Seleção das Opções Inciais (Iniciar a aventura, Nova janela com site, Instruções e Créditos)
document.addEventListener('DOMContentLoaded', function () {
	loadStory();
	renderScene();
	setupEditor();

	var bgm = document.getElementById("bgm");
	var audiodesc = document.getElementById("audiodesc");
	var bgmSlider = document.querySelector('.vol-slider[data-target="bgm"]');
	var audiodescSlider = document.querySelector('.vol-slider[data-target="audiodesc"]');

	var prefs = loadVolumePrefs();

	bgm.volume = prefs.bgm;
	audiodesc.volume = prefs.audiodesc;
	if (bgmSlider) bgmSlider.value = prefs.bgm;
	if (audiodescSlider) audiodescSlider.value = prefs.audiodesc;

	// Volume "do usuário" da música.
	// Não é sobrescrito por mudanças causadas pelo ducking.
	var bgmUserVolume = prefs.bgm;

	// Flag persistente: true enquanto o ducking está alterando bgm.volume.
	// Enquanto true, o listener de volumechange do bgm ignora a mudança
	// e não atualiza bgmUserVolume.
	var isDucking = false;

	function applyDucking() {
		isDucking = true;
		bgm.volume = bgmUserVolume * BGM_VOLUME_DUCKED;
		// Libera a flag só depois que o evento volumechange já foi processado
		setTimeout(function () { isDucking = false; }, 0);
	}

	function removeDucking() {
		isDucking = true;
		bgm.volume = bgmUserVolume;
		setTimeout(function () { isDucking = false; }, 0);
	}

	// Sliders: quando o usuário arrasta, ajusta o áudio e salva a preferência
	if (bgmSlider) {
		bgmSlider.addEventListener('input', function () {
			var v = parseFloat(bgmSlider.value);
			bgmUserVolume = v;
			bgm.volume = v;
			saveVolumePrefs(v, parseFloat(audiodescSlider ? audiodescSlider.value : DEFAULT_AUDIODESC_VOLUME));
		});
	}
	if (audiodescSlider) {
		audiodescSlider.addEventListener('input', function () {
			var v = parseFloat(audiodescSlider.value);
			audiodesc.volume = v;
			saveVolumePrefs(parseFloat(bgmSlider ? bgmSlider.value : DEFAULT_BGM_VOLUME), v);
		});
	}

	bgm.addEventListener('volumechange', function () {
		if (isDucking) return;
		if (bgmSlider) bgmSlider.value = bgm.volume;
		bgmUserVolume = bgm.volume;
		saveVolumePrefs(bgm.volume, parseFloat(audiodescSlider ? audiodescSlider.value : DEFAULT_AUDIODESC_VOLUME));
	});
	audiodesc.addEventListener('volumechange', function () {
		if (audiodescSlider) audiodescSlider.value = audiodesc.volume;
		saveVolumePrefs(parseFloat(bgmSlider ? bgmSlider.value : DEFAULT_BGM_VOLUME), audiodesc.volume);
	});

	//Navegadores bloqueiam música automática antes de qualquer interação:
	//no primeiro clique/toque, começa a tocar a música da página atual.
	function startMusicOnFirstInteraction() {
		if (bgm.getAttribute("src") && bgm.paused) {
			var p = bgm.play();
			if (p && p.catch) { p.catch(function () {}); }
		}
		document.removeEventListener('click', startMusicOnFirstInteraction);
		document.removeEventListener('touchstart', startMusicOnFirstInteraction);
		document.removeEventListener('keydown', startMusicOnFirstInteraction);
	}
	document.addEventListener('click', startMusicOnFirstInteraction);
	document.addEventListener('touchstart', startMusicOnFirstInteraction);
	document.addEventListener('keydown', startMusicOnFirstInteraction);

	audiodesc.addEventListener('play', applyDucking);
	audiodesc.addEventListener('pause', removeDucking);
	audiodesc.addEventListener('ended', removeDucking);
});

//Programação para Atualização do códigu HTML, Controle de Aletoriedade e de Itens
function renderScene() {
	var scene = story[story.currentScene];
	if (!scene) {
		story.currentScene = "inicio";
		scene = story[story.currentScene];
	}

	//Mídia do topo da tela: troca conforme a página atual,
	//e volta pra imagem padrão quando a página não define uma própria.
	//Aceita imagem estática, GIF animado (tudo isso via <img>) ou vídeo (.mp4/.webm/.ogv/.mov via <video>).
	var headerImg = document.getElementById("headerImg");
	var headerVideo = document.getElementById("headerVideo");
	var headerSrc = scene.image || DEFAULT_HEADER_IMAGE;

	if (isVideoSrc(headerSrc)) {
		if (headerVideo.getAttribute("src") !== headerSrc) {
			headerVideo.setAttribute("src", headerSrc);
		}
		headerVideo.style.display = "block";
		headerImg.style.display = "none";
		var videoPlayPromise = headerVideo.play();
		if (videoPlayPromise && videoPlayPromise.catch) { videoPlayPromise.catch(function () {}); }
	} else {
		headerImg.src = headerSrc;
		headerImg.style.display = "block";
		headerVideo.style.display = "none";
		headerVideo.pause();
		headerVideo.removeAttribute("src");
	}

	var titleHtml = scene.title ? `<h2>${scene.title}</h2>` : "";

	//Renderização do texto
	document.getElementById("content").innerHTML = `
		${titleHtml}
		<p>${scene.story}</p>
		${getInputs()}
	`;

	//Música: mantém uma trilha geral contínua (não reinicia ao trocar de página)
	//e só troca quando a página/final pede uma trilha diferente da que já está tocando.
	//O volume é o que o usuário escolheu (ou o padrão inicial), e não é resetado a cada cena.
	var bgm = document.getElementById("bgm");
	var bgmBox = document.getElementById("bgmBox");
	var bgmSlider = document.querySelector('.vol-slider[data-target="bgm"]');
	var musicSrc = getSceneMusic(scene);

	if (musicSrc) {
		if (bgm.getAttribute("src") !== musicSrc) {
			bgm.setAttribute("src", musicSrc);
			//Mantém o volume atual do usuário (slider ou padrão já aplicado)
			if (bgmSlider) bgm.volume = parseFloat(bgmSlider.value);
			var playPromise = bgm.play();
			if (playPromise && playPromise.catch) { playPromise.catch(function () {}); }
		}
		if (bgmBox) bgmBox.style.display = "flex";
	} else {
		bgm.pause();
		bgm.removeAttribute("src");
		if (bgmBox) bgmBox.style.display = "none";
	}

	//Audiodescrição da página (opcional, paralela à música): só toca quando a pessoa
	//clica em play — não é automática.
	//(ver listeners de 'play'/'pause'/'ended' registrados no DOMContentLoaded).
	var audiodesc = document.getElementById("audiodesc");
	var audiodescBox = document.getElementById("audiodescBox");
	var audiodescSlider = document.querySelector('.vol-slider[data-target="audiodesc"]');

	if (scene.audiodescricao) {
		if (audiodesc.getAttribute("src") !== scene.audiodescricao) {
			audiodesc.pause();
			audiodesc.setAttribute("src", scene.audiodescricao);
			//Mantém o volume atual do usuário (slider ou padrão já aplicado)
			if (audiodescSlider) audiodesc.volume = parseFloat(audiodescSlider.value);
		}
		if (audiodescBox) audiodescBox.style.display = "flex";
	} else {
		audiodesc.pause();
		audiodesc.removeAttribute("src");
		if (audiodescBox) audiodescBox.style.display = "none";
	}

	//Programação dos botões 
	var choiceButtons = document.querySelectorAll('input[type="button"][name="choices"]');
	choiceButtons.forEach(function (btn, index) {
		btn.addEventListener('click', function () {
			getInputValue(index);
		});
	});
}

//Função de Seleção de Destino
function getInputValue (x) {
	const inputs = document.querySelectorAll('input[type="button"]');
	const destination = inputs[x].getAttribute('data-destination');

	if (destination.indexOf('http://') === 0 || destination.indexOf('https://') === 0) {
		window.open(destination, '_blank');
	} else {
		story.currentScene = destination;
		renderScene();
	}
}

//Função de Captura da Seleção
function getInputs() {
	var input = ""
	if (!story[story.currentScene].choices){
		return ""
	}
	for(var i = 0; i < story[story.currentScene].choices.length; i++)
	{
		input += `
		<div>
			<center><input type="button" id="button${i}" data-destination="${story[story.currentScene].choices[i].destination}" name="choices" class="button button${i}" value="${story[story.currentScene].choices[i].choice}"></center>
		</div>`
	}
	return input;
}


// EDITOR DE PÁGINAS
function setupEditor() {
	var btn = document.getElementById("btnEditor");
	btn.addEventListener("click", function () {
		var editorDiv = document.getElementById("editor");
		var contentDiv = document.getElementById("content");
		if (editorDiv.style.display === "none") {
			contentDiv.style.display = "none";
			editorDiv.style.display = "block";
			btn.textContent = "▶ Voltar ao jogo";
			renderEditorList();
		} else {
			editorDiv.style.display = "none";
			contentDiv.style.display = "block";
			btn.textContent = "⚙ Editor de páginas";
			renderScene();
		}
	});
}

function renderEditorList(selectedId) {
	var editorDiv = document.getElementById("editor");
	editorDiv.innerHTML = "";

	var title = document.createElement("h2");
	title.textContent = "Editor de páginas";
	editorDiv.appendChild(title);

	var help = document.createElement("p");
	help.style.fontSize = "13px";
	help.textContent = "Escolha uma página existente para editar/excluir, ou crie uma nova. As alterações ficam salvas neste navegador.";
	editorDiv.appendChild(help);

	editorDiv.appendChild(buildGeneralMusicPanel());

	var select = document.createElement("select");
	select.id = "editorSelect";

	var newOption = document.createElement("option");
	newOption.value = "__new__";
	newOption.textContent = "+ Criar nova página";
	select.appendChild(newOption);

	Object.keys(story)
		.filter(function (k) { return k !== "currentScene" && k !== "musicaGeral"; })
		.sort()
		.forEach(function (key) {
			var opt = document.createElement("option");
			opt.value = key;
			opt.textContent = key;
			select.appendChild(opt);
		});

	select.value = selectedId || "__new__";
	select.addEventListener("change", function () {
		renderEditorForm(select.value === "__new__" ? null : select.value);
	});
	editorDiv.appendChild(select);

	var formContainer = document.createElement("div");
	formContainer.id = "editorFormContainer";
	editorDiv.appendChild(formContainer);

	var resetBtn = document.createElement("button");
	resetBtn.type = "button";
	resetBtn.className = "button";
	resetBtn.textContent = "Restaurar versão original";
	resetBtn.style.marginTop = "15px";
	resetBtn.style.backgroundColor = "#e57373";
	resetBtn.addEventListener("click", function () {
		if (confirm("Isso apaga todas as páginas criadas/editadas neste navegador e volta para a versão original do código. Confirma?")) {
			localStorage.removeItem(STORAGE_KEY);
			loadStory();
			renderEditorList();
		}
	});
	editorDiv.appendChild(resetBtn);

	var exportBtn = document.createElement("button");
	exportBtn.type = "button";
	exportBtn.className = "button";
	exportBtn.textContent = "💾 Baixar código atualizado";
	exportBtn.style.marginTop = "15px";
	exportBtn.style.marginLeft = "10px";
	exportBtn.addEventListener("click", function () {
		exportUpdatedCode();
	});
	editorDiv.appendChild(exportBtn);

	renderEditorForm(selectedId || null);
}

// Painel "Música geral": uma música que toca em todas as páginas (a menos que a página tenha música própria ou esteja marcada como sem música)
function buildGeneralMusicPanel() {
	var g = story.musicaGeral || { ativa: false, src: "" };
	var isData = g.src && g.src.indexOf("data:") === 0;

	var box = document.createElement("div");
	box.style.border = "1px solid #999";
	box.style.padding = "10px";
	box.style.margin = "10px 0 20px 0";

	var h = document.createElement("h3");
	h.textContent = "Música geral (todas as páginas)";
	box.appendChild(h);

	var small = document.createElement("small");
	small.textContent = "Toca de forma contínua em todas as páginas. Uma página com música especial (ou marcada como \"sem música\") substitui a geral só nela — use isso para finais, por exemplo.";
	box.appendChild(small);

	var lab = document.createElement("label");
	lab.style.display = "block";
	lab.style.marginTop = "8px";
	var chk = document.createElement("input");
	chk.type = "checkbox";
	chk.checked = !!g.ativa;
	lab.appendChild(chk);
	lab.appendChild(document.createTextNode(" Tocar música geral em todas as páginas"));
	box.appendChild(lab);

	var pathLabel = document.createElement("label");
	pathLabel.style.display = "block";
	pathLabel.textContent = "Caminho (ex: audio/malemar.mp3) OU envie um arquivo:";
	box.appendChild(pathLabel);
	var pathInput = document.createElement("input");
	pathInput.type = "text";
	pathInput.value = isData ? "" : (g.src || "");
	box.appendChild(pathInput);
	var fileInput = document.createElement("input");
	fileInput.type = "file";
	fileInput.accept = "audio/*";
	fileInput.style.marginTop = "6px";
	box.appendChild(fileInput);
	if (isData) {
		var note = document.createElement("small");
		note.style.display = "block";
		note.textContent = "Já existe um áudio enviado por upload como música geral (será mantido se você não enviar outro nem digitar um caminho).";
		box.appendChild(note);
	}

	var saveBtn = document.createElement("button");
	saveBtn.type = "button";
	saveBtn.className = "button";
	saveBtn.textContent = "Salvar música geral";
	saveBtn.style.marginTop = "10px";
	saveBtn.addEventListener("click", function () {
		var file = fileInput.files[0];
		if (file && file.size > 2 * 1024 * 1024) {
			alert('O áudio "' + file.name + '" é grande demais pra guardar no navegador. Coloque o arquivo na pasta "audio" do projeto e digite o caminho no campo de texto, ex: audio/malemar.mp3.');
			return;
		}
		readFileAsDataURL(file).then(function (dataUrl) {
			var typed = pathInput.value.trim();
			var src = dataUrl || typed || (isData ? g.src : "");
			story.musicaGeral = { ativa: chk.checked, src: src };
			saveStory();
			renderScene();
			alert("Música geral salva!");
			renderEditorList();
		}).catch(function () {
			alert("Não consegui ler o arquivo enviado. Use o campo de caminho em vez do upload.");
		});
	});
	box.appendChild(saveBtn);

	return box;
}

function renderEditorForm(id) {
	var container = document.getElementById("editorFormContainer");
	container.innerHTML = "";

	var scene = id ? story[id] : { story: "", choices: [] };

	var form = document.createElement("div");
	form.style.border = "1px solid #ccc";
	form.style.padding = "15px";
	form.style.borderRadius = "8px";
	form.style.marginTop = "10px";

	// Identificador
	var idLabel = document.createElement("label");
	idLabel.textContent = "Identificador da página (sem espaços/acentos, ex: casaDoPescador):";
	form.appendChild(idLabel);
	var idInput = document.createElement("input");
	idInput.type = "text";
	idInput.id = "fieldId";
	idInput.value = id || "";
	idInput.disabled = !!id;
	form.appendChild(idInput);

	// Título
	var titleLabel = document.createElement("label");
	titleLabel.textContent = "Título (opcional):";
	form.appendChild(titleLabel);
	var titleInput = document.createElement("input");
	titleInput.type = "text";
	titleInput.id = "fieldTitle";
	titleInput.value = scene.title || "";
	form.appendChild(titleInput);

	// Texto
	var storyLabel = document.createElement("label");
	storyLabel.textContent = "Texto da página (pode usar HTML, ex: <p>...</p>):";
	form.appendChild(storyLabel);
	var storyInput = document.createElement("textarea");
	storyInput.id = "fieldStory";
	storyInput.rows = 6;
	storyInput.value = scene.story || "";
	form.appendChild(storyInput);

	// Imagem / GIF / Vídeo
	var imgLabel = document.createElement("label");
	imgLabel.textContent = "Imagem, GIF ou vídeo do topo da tela nesta página — caminho (ex: img/foto2.jpg, img/anim.gif ou img/cena.mp4) OU envie um arquivo:";
	form.appendChild(imgLabel);
	var imgPathInput = document.createElement("input");
	imgPathInput.type = "text";
	imgPathInput.id = "fieldImagePath";
	imgPathInput.value = (scene.image && scene.image.indexOf("data:") !== 0) ? scene.image : "";
	form.appendChild(imgPathInput);
	var imgFileInput = document.createElement("input");
	imgFileInput.type = "file";
	imgFileInput.accept = "image/*,video/*";
	imgFileInput.id = "fieldImageFile";
	imgFileInput.style.marginTop = "6px";
	form.appendChild(imgFileInput);
	var imgKeepInput = document.createElement("input");
	imgKeepInput.type = "hidden";
	imgKeepInput.id = "fieldImageKeep";
	imgKeepInput.value = (scene.image && scene.image.indexOf("data:") === 0) ? scene.image : "";
	form.appendChild(imgKeepInput);
	if (imgKeepInput.value) {
		var imgNote = document.createElement("small");
		imgNote.textContent = "Já existe uma imagem enviada por upload nesta página (será mantida se você não enviar outra).";
		form.appendChild(imgNote);
	}

	// Música
	var musicLabel = document.createElement("label");
	musicLabel.textContent = "Música especial só desta página (deixe vazio para usar a música geral) — caminho (ex: audio/final.mp3) OU envie um arquivo:";
	form.appendChild(musicLabel);
	var musicPathInput = document.createElement("input");
	musicPathInput.type = "text";
	musicPathInput.id = "fieldMusicPath";
	musicPathInput.value = (scene.music && scene.music.indexOf("data:") !== 0) ? scene.music : "";
	form.appendChild(musicPathInput);
	var musicFileInput = document.createElement("input");
	musicFileInput.type = "file";
	musicFileInput.accept = "audio/*";
	musicFileInput.id = "fieldMusicFile";
	musicFileInput.style.marginTop = "6px";
	form.appendChild(musicFileInput);
	var musicKeepInput = document.createElement("input");
	musicKeepInput.type = "hidden";
	musicKeepInput.id = "fieldMusicKeep";
	musicKeepInput.value = (scene.music && scene.music.indexOf("data:") === 0) ? scene.music : "";
	form.appendChild(musicKeepInput);
	if (musicKeepInput.value) {
		var musicNote = document.createElement("small");
		musicNote.textContent = "Já existe um áudio enviado por upload nesta página (será mantido se você não enviar outro).";
		form.appendChild(musicNote);
	}
	var noMusicLabel = document.createElement("label");
	noMusicLabel.style.display = "block";
	var noMusicChk = document.createElement("input");
	noMusicChk.type = "checkbox";
	noMusicChk.id = "fieldSemMusica";
	noMusicChk.checked = !!scene.semMusica;
	noMusicLabel.appendChild(noMusicChk);
	noMusicLabel.appendChild(document.createTextNode(" Sem música nesta página (nem a geral)"));
	form.appendChild(noMusicLabel);

	// Audiodescrição (campo de áudio paralelo, independente da música)
	var audiodescLabel = document.createElement("label");
	audiodescLabel.textContent = "Audiodescrição desta página (opcional) — caminho (ex: audio/audiodesc1.mp3) OU envie um arquivo. Só toca quando a pessoa clica em play:";
	form.appendChild(audiodescLabel);
	var audiodescPathInput = document.createElement("input");
	audiodescPathInput.type = "text";
	audiodescPathInput.id = "fieldAudiodescPath";
	audiodescPathInput.value = (scene.audiodescricao && scene.audiodescricao.indexOf("data:") !== 0) ? scene.audiodescricao : "";
	form.appendChild(audiodescPathInput);
	var audiodescFileInput = document.createElement("input");
	audiodescFileInput.type = "file";
	audiodescFileInput.accept = "audio/*";
	audiodescFileInput.id = "fieldAudiodescFile";
	audiodescFileInput.style.marginTop = "6px";
	form.appendChild(audiodescFileInput);
	var audiodescKeepInput = document.createElement("input");
	audiodescKeepInput.type = "hidden";
	audiodescKeepInput.id = "fieldAudiodescKeep";
	audiodescKeepInput.value = (scene.audiodescricao && scene.audiodescricao.indexOf("data:") === 0) ? scene.audiodescricao : "";
	form.appendChild(audiodescKeepInput);
	if (audiodescKeepInput.value) {
		var audiodescNote = document.createElement("small");
		audiodescNote.textContent = "Já existe uma audiodescrição enviada por upload nesta página (será mantida se você não enviar outra).";
		form.appendChild(audiodescNote);
	}

	// Escolhas
	var choicesLabel = document.createElement("label");
	choicesLabel.textContent = "Escolhas (botões) desta página — destino pode ser o identificador de outra página, ou um link http(s)://:";
	form.appendChild(choicesLabel);
	var choicesContainer = document.createElement("div");
	choicesContainer.id = "choicesContainer";
	form.appendChild(choicesContainer);
	(scene.choices || []).forEach(function (choice) {
		addChoiceRow(choicesContainer, choice.choice, choice.destination);
	});

	var addChoiceBtn = document.createElement("button");
	addChoiceBtn.type = "button";
	addChoiceBtn.className = "button";
	addChoiceBtn.style.fontSize = "13px";
	addChoiceBtn.style.padding = "8px 14px";
	addChoiceBtn.textContent = "+ Adicionar escolha";
	addChoiceBtn.addEventListener("click", function () {
		addChoiceRow(choicesContainer, "", "");
	});
	form.appendChild(addChoiceBtn);

	// Ações
	var actionsRow = document.createElement("div");
	actionsRow.style.marginTop = "15px";

	var saveBtn = document.createElement("button");
	saveBtn.type = "button";
	saveBtn.className = "button";
	saveBtn.textContent = "Salvar página";
	saveBtn.addEventListener("click", function () {
		saveSceneFromForm(id);
	});
	actionsRow.appendChild(saveBtn);

	if (id) {
		var deleteBtn = document.createElement("button");
		deleteBtn.type = "button";
		deleteBtn.className = "button";
		deleteBtn.style.backgroundColor = "#e57373";
		deleteBtn.style.marginLeft = "10px";
		deleteBtn.textContent = "Excluir página";
		deleteBtn.addEventListener("click", function () {
			if (id === "inicio") {
				alert("A página \"inicio\" não pode ser excluída: é a página inicial do jogo.");
				return;
			}
			if (confirm('Tem certeza que deseja excluir a página "' + id + '"? Essa ação não pode ser desfeita.')) {
				delete story[id];
				saveStory();
				renderEditorList();
			}
		});
		actionsRow.appendChild(deleteBtn);
	}

	form.appendChild(actionsRow);
	container.appendChild(form);
}

function addChoiceRow(container, textValue, destValue) {
	var row = document.createElement("div");
	row.className = "choice-row";

	var textInput = document.createElement("input");
	textInput.type = "text";
	textInput.placeholder = "Texto do botão";
	textInput.className = "choiceText";
	textInput.value = textValue || "";
	row.appendChild(textInput);

	var destInput = document.createElement("input");
	destInput.type = "text";
	destInput.placeholder = "Página de destino (id) ou link";
	destInput.className = "choiceDest";
	destInput.value = destValue || "";
	row.appendChild(destInput);

	var removeBtn = document.createElement("button");
	removeBtn.type = "button";
	removeBtn.textContent = "x";
	removeBtn.addEventListener("click", function () {
		row.remove();
	});
	row.appendChild(removeBtn);

	container.appendChild(row);
}

function readFileAsDataURL(file) {
	if (!file) return Promise.resolve(null);
	return new Promise(function (resolve, reject) {
		var reader = new FileReader();
		reader.onload = function () { resolve(reader.result); };
		reader.onerror = reject;
		reader.readAsDataURL(file);
	});
}

function saveSceneFromForm(existingId) {
	var id = existingId || document.getElementById("fieldId").value.trim();

	if (!id) {
		alert("Preencha o identificador da página.");
		return;
	}
	if (!existingId && story[id]) {
		alert("Já existe uma página com esse identificador. Escolha outro.");
		return;
	}

	var titleVal = document.getElementById("fieldTitle").value.trim();
	var storyText = document.getElementById("fieldStory").value;
	var imagePath = document.getElementById("fieldImagePath").value.trim();
	var imageFile = document.getElementById("fieldImageFile").files[0];
	var imageKeep = document.getElementById("fieldImageKeep").value;
	var musicPath = document.getElementById("fieldMusicPath").value.trim();
	var musicFile = document.getElementById("fieldMusicFile").files[0];
	var musicKeep = document.getElementById("fieldMusicKeep").value;
	var semMusica = document.getElementById("fieldSemMusica").checked;
	var audiodescPath = document.getElementById("fieldAudiodescPath").value.trim();
	var audiodescFile = document.getElementById("fieldAudiodescFile").files[0];
	var audiodescKeep = document.getElementById("fieldAudiodescKeep").value;

	var choices = [];
	document.querySelectorAll("#choicesContainer .choice-row").forEach(function (row) {
		var text = row.querySelector(".choiceText").value.trim();
		var dest = row.querySelector(".choiceDest").value.trim();
		if (text && dest) {
			choices.push({ choice: text, destination: dest });
		}
	});

	// Uploads muito grandes não cabem no espaço de armazenamento do navegador.
	// Em vez de deixar dar um erro confuso, avisamos antes e sugerimos usar
	// um caminho de arquivo (colocando o arquivo na pasta do projeto).
	var MAX_UPLOAD_BYTES = 2 * 1024 * 1024; // 2 MB
	if (imageFile && imageFile.size > MAX_UPLOAD_BYTES) {
		alert('A imagem "' + imageFile.name + '" tem ' + (imageFile.size / 1024 / 1024).toFixed(1) +
			' MB — grande demais pra guardar no navegador. Use uma imagem menor (até 2 MB) ' +
			'ou coloque o arquivo na pasta img/ do projeto e digite o caminho no campo de texto, ex: img/foto.jpg.');
		return;
	}
	if (musicFile && musicFile.size > MAX_UPLOAD_BYTES) {
		alert('O áudio "' + musicFile.name + '" tem ' + (musicFile.size / 1024 / 1024).toFixed(1) +
			' MB — músicas costumam ser grandes demais pra guardar no navegador. ' +
			'Crie uma pasta "audio" dentro do projeto (ao lado de img, css e js), coloque o arquivo lá ' +
			'e digite o caminho no campo de texto, ex: audio/tema.mp3.');
		return;
	}
	if (audiodescFile && audiodescFile.size > MAX_UPLOAD_BYTES) {
		alert('O áudio "' + audiodescFile.name + '" tem ' + (audiodescFile.size / 1024 / 1024).toFixed(1) +
			' MB — grande demais pra guardar no navegador. ' +
			'Crie uma pasta "audio" dentro do projeto (ao lado de img, css e js), coloque o arquivo lá ' +
			'e digite o caminho no campo de texto, ex: audio/audiodesc1.mp3.');
		return;
	}

	Promise.all([readFileAsDataURL(imageFile), readFileAsDataURL(musicFile), readFileAsDataURL(audiodescFile)]).then(function (results) {
		var imageDataUrl = results[0];
		var musicDataUrl = results[1];
		var audiodescDataUrl = results[2];

		var finalImage = imageDataUrl || imagePath || imageKeep || "";
		var finalMusic = musicDataUrl || musicPath || musicKeep || "";
		var finalAudiodesc = audiodescDataUrl || audiodescPath || audiodescKeep || "";

		var newScene = { story: storyText, choices: choices };
		if (titleVal) newScene.title = titleVal;
		if (finalImage) newScene.image = finalImage;
		if (finalMusic) newScene.music = finalMusic;
		if (semMusica && !finalMusic) newScene.semMusica = true;
		if (finalAudiodesc) newScene.audiodescricao = finalAudiodesc;

		story[id] = newScene;
		saveStory();
		alert('Página "' + id + '" salva! Clique em "Voltar ao jogo" e navegue até ela para conferir.');
		renderEditorList(id);
	}).catch(function (err) {
		console.error(err);
		if (err && err.name === "QuotaExceededError") {
			alert("O navegador não tem mais espaço pra guardar os arquivos enviados. Tente usar arquivos menores, " +
				"ou coloque as imagens/músicas na pasta do projeto e use o campo de caminho em vez de enviar o arquivo.");
		} else {
			alert("Não consegui ler o arquivo enviado (" + (err && err.message ? err.message : "erro desconhecido") +
				"). Tente novamente com outro arquivo, ou use o campo de caminho em vez do upload.");
		}
	});
}

// Gera o texto da função getStory() já com as páginas atuais (criadas/editadas/excluídas)
function buildUpdatedCode() {
	var storyCopy = {};
	Object.keys(story).forEach(function (k) {
		if (k !== "currentScene") storyCopy[k] = story[k];
	});
	return "// Cole este bloco no lugar da função getStory() atual, dentro de js/main.js\n" +
		"function getStory() {\n\treturn " + JSON.stringify(storyCopy, null, "\t") + ";\n}\n";
}

// Baixa um arquivo .js com a função getStory() atualizada, pra colar no código do projeto
function exportUpdatedCode() {
	var code = buildUpdatedCode();
	var blob = new Blob([code], { type: "text/javascript" });
	var url = URL.createObjectURL(blob);
	var a = document.createElement("a");
	a.href = url;
	a.download = "getStory-atualizado.js";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);

	alert(
		'Baixei o arquivo "getStory-atualizado.js" com as páginas atuais.\n\n' +
		"Pra deixar isso definitivo no projeto:\n" +
		"1. Abra js/main.js no VS Code.\n" +
		'2. Apague a função "function getStory() { ... }" antiga (do início dela até o "}" que a fecha, ' +
		'logo antes do comentário "Programação dos Botões...").\n' +
		"3. Cole no lugar o conteúdo do arquivo que acabou de baixar.\n" +
		"4. Salve o arquivo.\n\n" +
		"Pronto — as páginas passam a fazer parte do código de verdade, e funcionam em qualquer navegador/computador."
	);
}
