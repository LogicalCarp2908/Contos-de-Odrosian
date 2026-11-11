// Cole este bloco no lugar da função getStory() atual, dentro de js/main.js
function getStory() {
	return {
	"musicaGeral": {
		"ativa": true,
		"src": "audio/main.mpeg"
	},
	"inicio": {
		"story": "<p>Odrosian é um mundo muito antigo, e quem vive nele o trata com respeito para que sempre prospere. Criaturas mágicas caminham por suas terras e, só por existirem, alimentam a magia que Odrosian devolve a todos. Nas grandes cidades, espécies diferentes dividem as mesmas ruas, os elfos ocupam os cargos mais altos e as fadas, povo antigo e respeitado, cuidam do elo entre os seres e a terra. Desde a ascensão de Krygor, porém, pessoas de más intenções querem sempre mais do que Odrosian oferece. Você é Ayla, jovem fada do Bosque Antigo, e sente na pele que a terra respira cada vez mais devagar.</p>",
		"choices": [
			{
				"choice": "Começar a aventura!",
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
		"title": "Prólogo",
		"image": "img/1-prologo.png"
	},
	"intro": {
		"story": "<p> Você acorda antes do sol com um silêncio estranho. Os pássaros do Bosque Antigo se calaram, as flores da clareira sagrada murcharam e as criaturas que costumavam passear por ali não aparecem há dias.\n Sentada na beira da cama, você sabe que precisa descobrir o que está acontecendo, mas, antes de partir, a mente insiste em voltar ao que a trouxe até aqui. Você pode relembrar as histórias que as fadas anciãs contam sobre a origem de Odrosian ou as memórias de quando era pequena e a clareira ainda cantava.</p>\n\t\t\t",
		"choices": [
			{
				"choice": "Relembrar a sua infância",
				"destination": "suaInfancia"
			},
			{
				"choice": "Relembrar os contos das fadas anciãs",
				"destination": "contosOdrosian"
			}
		],
		"title": "Começo da aventura",
		"image": "img/2.png"
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
		"image": "img/1-prologo.png"
	},
	"creditos": {
		"story": "<h3>Esta aventura-solo foi o trabalho final da disciplina de Narrativas Imersivas e Interativas 2026/02. A disciplina pertence ao curso de Design Gráfico da Universidade Paulista, campus São José do Rio Preto.<p>Programação: Leonardo Andrade, Gabriel Ritter, Samantha Vico Spezamiglio</p><p>Autores: Arthur Carvalho dos Santos (R869717), Cauã Jorge Villanova (R348JF5), Gabriele Miyuki Paes de Camargo (R381DB6), Gustavo Henrique Sardinha da Silva (H7599J8), Maria Luiza de Mello Freitas (R251DJ0).</p><p>Ilustrações: Maria Luiza de Mello Freitas (R251DJ0) , a partir de prompts criados via Claude e ChatGPT </p></h3>",
		"choices": [
			{
				"choice": "Tela Inicial",
				"destination": "inicio"
			}
		],
		"title": "Créditos",
		"image": "img/1-prologo.png"
	},
	"suaInfancia": {
		"story": "<p>Você era pequena quando uma criatura de luz apareceu na clareira do Bosque Antigo, com asas translúcidas e um brilho que mudava de cor. Ela cantava uma melodia baixinha, e você aprendeu a repeti-la sem saber por quê. As outras crianças correram atrás dela, mas uma fada anciã puxou você de lado e disse que nem todo brilho que canta quer o seu bem. Naquela tarde, ela também lhe ensinou, rindo, como as fadas se falam à distância com pulsos de luz. A melodia nunca mais saiu da sua cabeça.</p>",
		"choices": [
			{
				"choice": "Seguir lembrando, agora dos contos das fadas anciãs",
				"destination": "contosOdrosian"
			},
			{
				"choice": "Deixar as lembranças e seguir com a rotina",
				"destination": "rotinaDublin"
			}
		],
		"title": "Infância",
		"image": "img/4.png"
	},
	"rotinaDublin": {
		"story": "<p>Os dias na vila de fronteira seguem como sempre: você troca ervas por pão no mercado, ouve sotaques de todo tipo e prepara remédios para quem precisa.</p> <p>Mas nada é como antes. As barracas de plumas luminosas estão vazias, e os comerciantes sussurram sobre carroças cobertas que cruzam a estrada à noite, com homens de capa escura e o emblema de Krygor. Um marinheiro conta que elas terminam no porto, onde um barco parte a cada lua nova para a Ilha das Brumas. Ninguém acredita nele. Você, sim. Arruma a bolsa de ervas, a panela e um pouco de pão, e parte.</p>",
		"choices": [
			{
				"choice": "Embarcar rumo à ilha",
				"destination": "ilhaInishmore"
			}
		],
		"title": "Rotina na vila",
		"image": "img/5.png"
	},
	"ilhaInishmore": {
		"story": "<p>A balsa balança sobre um mar cinzento, e a Ilha das Brumas surge ao fim da tarde, coberta por uma névoa baixa. No cais, lampiões acesos e casas de pedra; no alto da colina, um farol velho de chama apagada. Um elfo de roupas finas e sorriso fácil vem recebê-la, como se já esperasse. Diz ser o anfitrião da ilha e que raramente chegam visitantes. Esta noite, explica, fará um passeio de barco para ver as luzes que cantam sobre a água, um espetáculo que poucos têm a sorte de ver. Ele convida você a ir junto.</p>\n",
		"choices": [
			{
				"choice": "Aceitar o convite e embarcar no passeio",
				"destination": "aceitarConvite"
			},
			{
				"choice": "Recusar o convite e ir descansar na estalagem",
				"destination": "recusarConvite"
			}
		],
		"title": "Travessia",
		"image": "img/6.png"
	},
	"aceitarConvite": {
		"story": "<p>O barco desliza sem fazer barulho sobre a água escura. O anfitrião rema devagar e fala pouco, enquanto a névoa abraça a embarcação. De repente, uma luz surge perto das rochas: uma criatura de asas translúcidas, igual à da sua infância, passa rente à superfície e some entre as pedras. Seu coração dispara. O anfitrião para o remo e se vira para você, com um sorriso imóvel. Pergunta se você viu aquilo e para que lado ela foi. Ele parece mais interessado na resposta do que deveria.</p>\t",
		"choices": [
			{
				"choice": "Apontar a direção para onde a criatura foi",
				"destination": "apontarDireção"
			},
			{
				"choice": "Fingir que não viu nada",
				"destination": "fingir"
			}
		],
		"title": "Aceitar o convite",
		"image": "img/7.png"
	},
	"recusarConvite": {
		"story": "<p>Você agradece e diz que está cansada da viagem. O anfitrião inclina a cabeça com cortesia, mas, por um instante, o sorriso falha. Ele se despede e desaparece cais abaixo, e o barco some na névoa. A estalagem tem poucos hóspedes, um corredor estreito e um quarto que cheira a sal e madeira velha. Deitada, você escuta o mar e, em algum ponto do silêncio, uma melodia muito fraca que parece vir tanto de fora quanto do chão abaixo da cama. Pouco depois, uma porta range no porão. Você não vai conseguir dormir. </p>",
		"choices": [
			{
				"choice": "Sair da estalagem e ir até o cais",
				"destination": "sair"
			},
			{
				"choice": "Descer pela porta do porão",
				"destination": "descerPorão"
			}
		],
		"title": "Recusar o convite",
		"image": "img/8.png"
	},
	"descerPorão": {
		"story": "<p>Atrás da porta do porão, uma escada de pedra desce em curvas e se perde no escuro. O ar é frio e cheira a sal e ferrugem. Você desce com a mão na parede, guiada pela melodia distante, até o degrau molhado onde seu pé escorrega. Você rola os últimos degraus, raspa o braço na pedra e sente a asa esquerda arder. Embaixo, uma galeria se abre para um corredor cavado na rocha, e o tilintar de chaves se aproxima. Alguém vem vindo, devagar, com uma lanterna.</p>",
		"choices": [
			{
				"choice": "Ficar escondida e cuidar dos ferimentos",
				"destination": "cuidarFerimentos"
			},
			{
				"choice": "Fugir pelo corredor",
				"destination": "fugir"
			}
		],
		"title": "Descer",
		"image": "img/12.png"
	},
	"gritarSocorro": {
		"story": "<p>Seu grito sobe pelas paredes e volta em pedaços. Por um instante, os passos param, e o tilintar das chaves também. Há um silêncio cheio de respiração. Então uma lanterna se aproxima devagar, balançando, e uma voz de mulher diz que está tudo bem, que ela ouviu, que já está chegando. Você não sabe se é um aviso ou um consolo. A luz pousa sobre o seu rosto, e as mãos dela, frias e firmes, tocam o seu braço machucado.</p>\n",
		"choices": [
			{
				"choice": "Continuar",
				"destination": "cuidarFerimentos"
			}
		],
		"title": "Gritar por socorro",
		"image": "img/20.png"
	},
	"apontarDireção": {
		"story": "<p>Você ergue o braço e aponta para as rochas. O anfitrião assente devagar, sem agradecer, e assobia baixinho. De trás de um recife surgem dois barcos escuros, e redes pesadas caem sobre o brilho. A criatura se debate, a luz dela pisca como um coração assustado e, então, se apaga dentro do tecido. O anfitrião tira o casaco, e você vê, bordado no forro, o emblema de Krygor. Ele sorri outra vez, agora de verdade. Diz que você prestou um grande serviço e coloca uma bolsa de moedas em suas mãos.</p>\n\t\t\t",
		"choices": [
			{
				"choice": "Continuar",
				"destination": "finalUm"
			}
		],
		"title": "Apontar a direção",
		"image": "img/9.png"
	},
	"voltarIlha": {
		"story": "<p>Você tapa os ouvidos, dá as costas ao mar e caminha de volta pelas ruas silenciosas, subindo a colina até o velho farol. A porta de ferro cede com um gemido. Lá dentro, a escada em espiral sobe até o alto, e a lanterna de bronze está fria, coberta de poeira. Lá fora, o mar parece mais escuro do que o céu. Você lembra o que as fadas anciãs diziam: quem acendesse a chama com o sinal certo seria ouvido por todas as fadas, onde estivessem. Você sobe, degrau após degrau, com o coração apertado.</p>\n\t\t\t",
		"choices": [
			{
				"choice": "Subir até a lanterna",
				"destination": "sinalizarAlerta"
			}
		],
		"title": "Voltar à Ilha",
		"image": "img/16.png"
	},
	"finalUm": {
		"story": "<p>Você volta ao cais com a bolsa de moedas e o peso de ter feito o que não\npode desfazer. Pela manhã, a balsa parte, e você vê, do convés, um\nbarco escuro rebocando uma rede que ainda brilha, cada vez menos. Em\nOdrosian, a clareira continua murcha, e as criaturas continuam\nsumindo. </p> <p>Você não conta a ninguém o que fez. Às vezes, à noite, ouve a\nmelodia da sua infância, mas agora ela termina sempre no mesmo\nponto, como um chamado que ninguém mais responde.</p>\n\n<center><p><b>FIM.</b></p>",
		"choices": [
			{
				"choice": "Tentar Novamente",
				"destination": "intro"
			},
			{
				"choice": "Créditos",
				"destination": "creditos"
			}
		],
		"title": "Final 1: Indicada",
		"image": "img/f1.png",
		"music": "audio/f1.mpeg"
	},
	"contosOdrosian": {
		"story": "<p>Quando era pequena, as fadas anciãs reuniam as crianças sob as árvores do santuário para contar a origem do mundo. Diziam que as primeiras criaturas despertaram Odrosian com seus passos e que, desde então, a terra devolve magia a quem a respeita. Contavam também sobre as luzes cantantes, criaturas que atraem viajantes distraídos para longe do caminho, e sobre o farol dos Primeiros, erguido numa ilha distante para o dia em que Odrosian precisasse de ajuda: quem acendesse sua chama com o sinal certo seria ouvido por todas as fadas, onde estivessem. Você ainda lembra o desenho desse sinal.</p>",
		"choices": [
			{
				"choice": "Seguir lembrando, agora da sua infância",
				"destination": "suaInfancia"
			},
			{
				"choice": "Deixar as lembranças e seguir com a rotina",
				"destination": "rotinaDublin"
			}
		],
		"title": "Contos do santuário",
		"image": "img/3.png"
	},
	"fingir": {
		"story": "<p> Você dá de ombros e diz que não viu nada além de névoa. O anfitrião a observa por tempo demais, depois ri baixo, como quem aceita uma resposta em que não acredita. Ele recolhe o remo e conduz o barco de volta sem dizer mais nada. No cais, despede-se com um gesto educado e some entre as casas de pedra. Você fica sozinha, com o mar quase sem som. Então ouve a melodia da sua infância: a criatura de luz paira sobre a água, a poucos passos, e chama você com seu canto. Atrás, a colina e o farol apagado.</p>",
		"choices": [
			{
				"choice": "Seguir a luz",
				"destination": "seguirLuz"
			},
			{
				"choice": "Voltar para a ilha, em direção ao farol",
				"destination": "voltarIlha"
			}
		],
		"title": "Fingir que não viu nada",
		"image": "img/10.png"
	},
	"seguirLuz": {
		"story": "<p>Você estende a mão, e a criatura recua, brilhando como um convite. Você a segue pelo cais, depois por uma passagem de pedras que a maré baixa deixa à mostra. A melodia fica mais bonita a cada passo. A névoa fecha atrás de você, os lampiões somem e a luz à frente muda de cor, ora azul, ora dourada. Só então você nota que o canto não é mais o da sua infância: é uma repetição perfeita demais, vinda de algum lugar abaixo da água. Quando tenta voltar, as pedras já estão cobertas, e o mar sobe ao redor dos seus pés. </p>",
		"choices": [
			{
				"choice": "Continuar",
				"destination": "finalDois"
			}
		],
		"title": "Seguir a luz",
		"image": "img/13.png"
	},
	"finalDois": {
		"story": "<p> O mar chega aos seus joelhos, depois à cintura. Você tenta voar, mas a névoa molhou suas asas, e a luz que a chamava agora se afasta, indiferente. Ao fundo, o canto muda de tom: não é uma criatura, é um engenho, uma isca feita para atrair quem anda distraído. A água sobe. No cais, ninguém vê. Na manhã seguinte, a balsa parte sem você, e os pescadores comentam sobre uma fada que se perdeu na maré. A névoa se fecha sobre o lugar, e a ilha guarda silêncio. </p>\n\n<center><p><b> FIM. </b></p>",
		"choices": [
			{
				"choice": "Tentar Novamente",
				"destination": "intro"
			},
			{
				"choice": "Créditos",
				"destination": "creditos"
			}
		],
		"title": "Final 2: Perdida na névoa",
		"image": "img/f2.png",
		"music": "audio/f2.mpeg"
	},
	"sair": {
		"story": "<p>Você se veste no escuro e desce a escada da estalagem na ponta dos pés. A rua está deserta, e a névoa engole os lampiões. Seguindo a melodia, você chega ao cais e para na beirada. A poucos passos, sobre a\nágua, uma criatura de luz paira e canta a canção da sua infância, tão suave que dói. Ela se afasta um pouco, como se esperasse. Atrás de você, a colina se ergue na névoa, com o farol apagado no topo. Você sente dois chamados puxando em direções opostas.</p>",
		"choices": [
			{
				"choice": "Seguir a luz",
				"destination": "seguirLuz"
			},
			{
				"choice": "Voltar à ilha",
				"destination": "voltarIlha"
			}
		],
		"title": "Sair",
		"image": "img/11.png"
	},
	"sinalizarAlerta": {
		"story": "<p>No topo, o vento assobia entre as vigas. Você apoia as mãos na lanterna fria e deixa a magia correr, lembrando o desenho do sinal: três pulsos longos, dois curtos, um longo. A chama nasce azul, depois dourada, e o farol inteiro acende como um olho que acorda. O feixe varre a névoa e o mar. Lá embaixo, os guardas gritam e correm colina acima, mas é tarde. Ao longe, no horizonte, uma pequena luz responde, depois outra, depois dezenas. Do porão da ilha, abafadas, as criaturas respondem também, num canto que sobe como maré. </p>",
		"choices": [
			{
				"choice": "Continuar",
				"destination": "finalTres"
			}
		],
		"title": "Sinalizar alerta",
		"image": "img/17.png"
	},
	"finalTres": {
		"story": "<p>Ao amanhecer, uma frota de barcos de velas claras cerca a Ilha das Brumas: fadas diplomatas, elfos que se recusaram a servir Krygor, moradores de várias espécies e de todos os sotaques. Os guardas largam as armas, e os mandantes de Krygor não têm mais como negar o que todos veem. As portas do porão se abrem, e as criaturas saem em fila, cegas de sol, com o brilho voltando às asas. A magia corre de volta para Odrosian como uma maré. No farol ainda aceso, você respira fundo, cansada e inteira, e ouve o canto de todas elas juntas.</p>\n\n<center><p><b>FIM.</b></p>",
		"choices": [
			{
				"choice": "Tentar Novamente",
				"destination": "intro"
			},
			{
				"choice": "Créditos",
				"destination": "creditos"
			}
		],
		"title": "Final Três: A luz dos Primeiros",
		"image": "img/f3.png",
		"music": "audio/f3.mpeg"
	},
	"cuidarFerimentos": {
		"story": "<p>Com o braço sangrando e a asa ardendo, você tenta, com as mãos trêmulas, aplicar as ervas da bolsa na ferida. A luz de uma lanterna se aproxima e para diante de você. Não é um guarda, e sim uma mulher de cabelos presos e mãos calmas, que se ajoelha e desfaz o curativo malfeito sem pedir licença. Ela cuida da sua asa em silêncio, com habilidade.</p> <p> Só depois, enquanto aperta o último nó, pergunta em voz baixa: “Diga-me, você realmente acredita que existem criaturas mágicas escondidas aqui embaixo?”</p>\n",
		"choices": [
			{
				"choice": "Dar uma resposta sincera",
				"destination": "sincera"
			},
			{
				"choice": "Mentir",
				"destination": "mentir"
			}
		],
		"title": "Curar as feridas",
		"image": "img/15.png"
	},
	"fugir": {
		"story": "<p> Você se levanta e corre pelo corredor de pedra, com a luz balançando atrás e as chaves tilintando cada vez mais perto. As paredes estão úmidas, os túneis se cruzam em curvas fechadas e, de vez em quando, você ouve um canto distante, como o de muitas vozes presas atrás da rocha. Sem fôlego, pisa num trecho liso, escorrega e cai com força no chão. A cabeça gira, a asa arde e a dor sobe pelo braço. Os passos se aproximam. Você pode pedir ajuda ou tentar se levantar de novo.</p>",
		"choices": [
			{
				"choice": "Gritar por socorro",
				"destination": "gritarSocorro"
			},
			{
				"choice": "Levantar e seguir sozinha",
				"destination": "seguirSozinha"
			}
		],
		"title": "Fugir",
		"image": "img/16.png"
	},
	"seguirSozinha": {
		"story": "<p>Você aperta os dentes, apoia a mão na parede e se levanta. A cabeça gira, mas você não quer pedir nada a ninguém. Corre outra vez, agora mais fundo, por túneis que descem e se dividem, enquanto a luz atrás de você diminui. As paredes se estreitam, as tochas acabam e o único som é o seu próprio fôlego. Quando chega a uma grade de ferro, ela está trancada, e os passos atrás de você agora são muitos e pesados. Você tenta voar, mas a asa ferida não responde.</p>",
		"choices": [
			{
				"choice": "Continuar",
				"destination": "finalQuatro"
			}
		],
		"title": "Levantar",
		"image": "img/21.png"
	},
	"finalQuatro": {
		"story": "<p>Os guardas a alcançam diante da grade, e você não tem forças para resistir. Acorda numa cela úmida, ao lado de uma jaula onde uma criatura de luz a observa, murcha e silenciosa. Fios finos de energia descem do teto até pulseiras de ferro em seus pulsos, e você sente a própria magia sendo puxada devagar, como água por um ralo. Os dias passam sem sol. Em Odrosian, quem procura por você acaba desistindo. Na ilha, você e as criaturas cantam juntas, baixinho, uma melodia que ninguém lá fora vai escutar.</p>\n\n<center><p><b>FIM.</b></p>\n",
		"choices": [
			{
				"choice": "Tentar Novamente",
				"destination": "intro"
			},
			{
				"choice": "Créditos",
				"destination": "creditos"
			}
		],
		"title": "Final Quatro: Cativa",
		"image": "img/f4.png",
		"music": "audio/f4.mpeg"
	},
	"sincera": {
		"story": "<p>Você decide dizer a verdade, ou o que acredita ser. Conta que ouviu um canto vindo do fundo da rocha e viu uma luz fraca atrás de uma parede, mas também viu jaulas vazias com arranhões antigos, e que nem você tem certeza do que viu. A mulher ouve sem interromper, com os dedos parados sobre o seu braço. Quando você termina, ela espera. Pede uma resposta final, uma só, sem rodeios: o que você afirma ser verdade?</p>",
		"choices": [
			{
				"choice": "Afirmar que há criaturas presas na ilha",
				"destination": "criaturas"
			},
			{
				"choice": "Afirmar que não há criaturas ali",
				"destination": "semCriaturas"
			}
		],
		"title": "Resposta sincera",
		"image": "img/18.png"
	},
	"mentir": {
		"story": "<p>Você engole em seco e diz que só procurava ervas, que tropeçou na escada e que nunca ouviu canto nenhum. A mulher acena com a cabeça devagar, sem acusar, e termina o curativo. O silêncio dela é pior que uma pergunta. Quando você olha para o corredor escuro, a melodia ressurge fraquinha, a mesma da sua infância, agora com um tremor, como se chorasse. A mentira pesa na garganta, e você sente vergonha de ter negado o que sabe que ouviu.</p>",
		"choices": [
			{
				"choice": "Continuar",
				"destination": "confessar"
			}
		],
		"title": "Mentira",
		"image": "img/19.png"
	},
	"confessar": {
		"story": "<p>Você não aguenta o peso do silêncio e se vira para ela. Diz que mentiu, que ouviu, sim, o canto, e que não foi por acaso que desceu até ali. A mulher pousa as mãos no colo e a olha por longos segundos. Não parece zangada, apenas atenta. “Então me diga agora o que é verdade”, pede, num tom quase terno. “Sem rodeios: o que você afirma que existe aqui embaixo?”</p>\n",
		"choices": [
			{
				"choice": "Afirmar que há criaturas presas na ilha",
				"destination": "criaturas"
			},
			{
				"choice": "Afirmar que não há criaturas ali",
				"destination": "semCriaturas"
			}
		],
		"title": "Confessar",
		"image": "img/22.png"
	},
	"criaturas": {
		"story": "<p>“Há criaturas aqui”, você diz. “Eu ouvi, eu sei.” A expressão da mulher muda devagar, como uma cortina que se fecha. Ela se levanta, limpa as mãos no avental e leva dois dedos aos lábios, soltando um assobio curto. Passos pesados ecoam no corredor, e três guardas de capa escura surgem, com o emblema de Krygor no peito. Ela fala sem raiva, como quem encerra um assunto: a ilha tem regras, e quem sabe demais não pode ir embora do jeito que chegou.</p>",
		"choices": [
			{
				"choice": "Continuar",
				"destination": "finalCinco"
			}
		],
		"title": "Há criaturas",
		"image": "img/23.png"
	},
	"semCriaturas": {
		"story": "<p>“Não há nada aqui”, você diz. “Só jaulas vazias.” A mulher solta o ar devagar, e algo no rosto dela se acalma. Termina o curativo, deixa uma xícara de chá de ervas ao seu lado e diz que providenciará pessoalmente a primeira balsa da manhã. Antes de ir, lança um olhar de relance para o fundo escuro do corredor, depois sorri como quem guarda um segredo. Você bebe o chá quente e sente o corpo pesar, e o canto fraco que vinha da rocha parece diminuir, ou talvez apenas esteja mais distante.</p>\n",
		"choices": [
			{
				"choice": "Continuar",
				"destination": "finalSeis"
			}
		],
		"title": "Não há criaturas",
		"image": "img/24.png"
	},
	"finalCinco": {
		"story": "<p>Os guardas a escoltam até a balsa da manhã, sem violência e sem pressa. Ninguém precisa machucá-la: basta que você volte à vila e conte a sua história. Quando conta, riem. A fada que viu criaturas presas numa ilha vazia, dizem, deve ter bebido da fonte errada. Na mesma noite, o porão da ilha é esvaziado, e as criaturas somem sem deixar rastro. Na lua nova seguinte, a carroça coberta sobe de novo para o porto. A clareira do Bosque Antigo continua murcha, e você aprende que a verdade, sozinha, também pode ser silenciada.</p>\n\n<center><p><b>FIM.</b></p>\n",
		"choices": [
			{
				"choice": "Tentar Novamente",
				"destination": "intro"
			},
			{
				"choice": "Créditos",
				"destination": "creditos"
			}
		],
		"title": "Final Cinco: A fada que viu fantasmas",
		"image": "img/f5.png",
		"music": "audio/f5.mpeg"
	},
	"finalSeis": {
		"story": "<p>A balsa da manhã leva você embora da Ilha das Brumas. A névoa se abre aos poucos, e a ilha encolhe no horizonte, com o farol apagado no alto. Você volta ao Bosque Antigo com o braço enfaixado e a sensação de ter feito a escolha mais segura, ou talvez a mais covarde. Em Odrosian, a magia segue fraca, mas ainda não morreu. Numa noite, já em casa, você ouve uma melodia muito baixa trazida pelo vento, a mesma da infância. Não sabe se é um adeus ou um pedido de ajuda.</p>\n\n<center><p><b>FIM.</b></p>",
		"choices": [
			{
				"choice": "Tentar Novamente",
				"destination": "intro"
			},
			{
				"choice": "Créditos",
				"destination": "creditos"
			}
		],
		"title": "Final Seis: O canto no mar",
		"image": "img/f6.png",
		"music": "audio/f6.mpeg"
	}
};
}
