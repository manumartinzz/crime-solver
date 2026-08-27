// =====================================================================
// BANCO DE CASOS
// Cada caso funciona como um "registro" com todas as informações
// necessárias para gerar a introdução, a cena, os suspeitos, o
// interrogatório, os arquivos e a tela de solução daquele caso.
// =====================================================================
const CASES = [
  {
    id: "caso001",
    code: "CASO 001",
    title: "O Assassinato do Empresário",
    difficulty: "Difícil",
    stars: 5,
    victimName: "Eduardo Vilela",
    location: "Mansão Vilela",
    date: "14/03/2024",
    time: "23h12",
    story:
      "Eduardo Vilela, dono de uma grande construtora, foi encontrado morto em seu escritório. Não há sinais de arrombamento, o que sugere que a vítima conhecia seu assassino.",
    objective:
      "Reúna as provas na cena do crime, interrogue os suspeitos e descubra quem matou Eduardo Vilela, com qual arma e por qual motivo.",
    victimImage: "https://placehold.co/600x800/171d26/9aa4af?text=Eduardo+Vilela",
    sceneImage: "assets/cena001.jpg",
    sceneHint: "Toque nos pontos dourados para examinar evidências.",
    evidences: [
      { key: "knife", name: "Faca de cozinha", type: "EVIDÊNCIA 01", x: 28, y: 78,
        description: "A lâmina contém manchas escuras. Uma análise posterior pode ligar a arma diretamente ao crime." },
      { key: "letter", name: "Carta rasgada", type: "EVIDÊNCIA 02", x: 56, y: 70,
        description: "Um bilhete rasgado, com uma ameaça escrita à mão: “Se sigues adelante, estás muerto. —AV”." },
      { key: "phone", name: "Celular da vítima", type: "EVIDÊNCIA 03", x: 82, y: 61,
        description: "O celular da vítima, com a tela trincada. A última ligação foi feita para Helena Duarte às 21h42." },
    ],
    suspects: [
      { id: "helena", name: "Helena Duarte", age: 34, profession: "Sócia da empresa", relation: "Ex-parceira de negócios da vítima", image: "Helena" },
      { id: "marcos", name: "Marcos Vilela", age: 41, profession: "Irmão da vítima", relation: "Herdeiro da empresa", image: "Marcos" },
      { id: "lucas", name: "Lucas Prado", age: 28, profession: "Motorista particular", relation: "Funcionário da vítima", image: "Lucas" },
    ],
    dialogues: {
      helena: { where: "“Eu estava em casa. Não falei com Eduardo naquela noite.”",
        relation: "“Éramos sócios. Ele destruiu tudo pelo que trabalhei.”",
        confrontEvidence: "letter",
        confrontYes: "“Essa carta... eu escrevi, mas não queria matá-lo.”",
        confrontNo: "“Nunca vi essa carta antes.”" },
      marcos: { where: "“Estava no clube, jogando cartas com amigos. Podem confirmar.”",
        relation: "“Ele nunca confiou em mim para tocar os negócios.”",
        confrontEvidence: "letter",
        confrontYes: "“Isso não tem nada a ver comigo.”",
        confrontNo: "“Nunca vi essa carta antes.”" },
      lucas: { where: "“Estava levando o carro para lavar, cheguei depois das 23h.”",
        relation: "“Ele me tratava bem, não tenho do que reclamar.”",
        confrontEvidence: "letter",
        confrontYes: "“Não sei do que você está falando.”",
        confrontNo: "“Nunca vi essa carta antes.”" },
    },
    weapons: [
      { id: "knife", label: "Faca de cozinha" },
      { id: "gun", label: "Revólver" },
      { id: "poison", label: "Veneno" },
    ],
    motives: [
      { id: "inheritance", label: "Herança e fraude financeira" },
      { id: "jealousy", label: "Ciúmes" },
      { id: "robbery", label: "Roubo" },
    ],
    solution: { killer: "helena", weapon: "knife", motive: "inheritance" },
    files: [
      { title: "Relatório Policial", description: "Registro da chegada da polícia à cena, sem sinais de arrombamento nas portas ou janelas." },
      { title: "Laudo Preliminar", description: "Óbito por ferimento perfurante, ocorrido entre 22h e 23h30 do dia do crime." },
    ],
    resultText: "Helena Duarte foi responsabilizada pelo assassinato após a fraude financeira vir à tona.",
  },

  {
    id: "caso002",
    code: "CASO 002",
    title: "Segredos no Teatro",
    difficulty: "Médio",
    stars: 3,
    victimName: "Roberto Aguiar",
    location: "Teatro Municipal",
    date: "02/05/2024",
    time: "20h47",
    story:
      "Roberto Aguiar, ator principal da peça “A Última Cortina”, foi encontrado sem vida em seu camarim minutos antes da estreia. A porta estava trancada por dentro e não havia sinais de invasão.",
    objective:
      "Investigue os bastidores do teatro, colete provas e descubra quem impediu a estreia de Roberto Aguiar, com o quê e por quê.",
    victimImage: "https://placehold.co/600x800/171d26/9aa4af?text=Roberto+Aguiar",
    sceneImage: "https://placehold.co/1200x800/11151c/313a47?text=Camarim+do+Teatro",
    sceneHint: "Toque nos pontos dourados para examinar evidências.",
    evidences: [
      { key: "wineglass", name: "Taça de vinho", type: "EVIDÊNCIA 01", x: 28, y: 60,
        description: "Restos de um pó branco dissolvido no fundo da taça. O laudo aponta uma substância tóxica de ação rápida." },
      { key: "note", name: "Bilhete anônimo", type: "EVIDÊNCIA 02", x: 58, y: 32,
        description: "Um bilhete amassado dizia: “Esse papel nunca deveria ser seu.” Não há assinatura, mas a caligrafia é firme e apressada." },
      { key: "key", name: "Chave duplicada do camarim", type: "EVIDÊNCIA 03", x: 74, y: 66,
        description: "Uma cópia da chave do camarim, escondida atrás de um espelho. Apenas pessoas ligadas à produção poderiam tê-la feito." },
    ],
    suspects: [
      { id: "isabela", name: "Isabela Ramos", age: 29, profession: "Atriz coadjuvante", relation: "Disputava o papel principal com a vítima", image: "Isabela" },
      { id: "caio", name: "Caio Bezerra", age: 52, profession: "Diretor da peça", relation: "Teve brigas públicas sobre os rumos da peça", image: "Caio" },
      { id: "fernando", name: "Fernando Alves", age: 61, profession: "Produtor executivo", relation: "Segurava uma apólice de seguro milionária em nome da vítima", image: "Fernando" },
    ],
    dialogues: {
      isabela: { where: "“Eu estava me maquiando no meu próprio camarim, sozinha.”",
        relation: "“Roberto e eu disputávamos o mesmo papel há meses. Ele sempre levava vantagem.”",
        confrontEvidence: "wineglass",
        confrontYes: "“Eu só... queria que ele perdesse a voz por uma noite, não matá-lo!”",
        confrontNo: "“Não sei do que essa taça se trata.”" },
      caio: { where: "“Estava conferindo o som no palco com a equipe técnica.”",
        relation: "“Discutíamos sobre o ritmo das cenas, nada além disso.”",
        confrontEvidence: "note",
        confrontYes: "“Esse bilhete é meu, mas era só um aviso sobre os ensaios, não uma ameaça.”",
        confrontNo: "“Nunca vi esse bilhete antes.”" },
      fernando: { where: "“Estava recebendo os convidados na entrada do teatro.”",
        relation: "“Roberto era o rosto do meu investimento. Sem ele, o espetáculo perde força.”",
        confrontEvidence: "key",
        confrontYes: "“Todo produtor tem cópias das chaves, isso é rotina.”",
        confrontNo: "“Não sei nada sobre chaves duplicadas.”" },
    },
    weapons: [
      { id: "poison", label: "Veneno na taça de vinho" },
      { id: "strangle", label: "Estrangulamento" },
      { id: "fall", label: "Queda de cenário" },
    ],
    motives: [
      { id: "jealousy", label: "Inveja profissional" },
      { id: "insurance", label: "Seguro de vida milionário" },
      { id: "creative", label: "Diferenças criativas" },
    ],
    solution: { killer: "isabela", weapon: "poison", motive: "jealousy" },
    files: [
      { title: "Laudo Toxicológico", description: "Aponta a presença de uma substância tóxica de ação rápida no organismo da vítima, compatível com resíduos encontrados na taça de vinho." },
      { title: "Relatório de Segurança do Teatro", description: "As câmeras do corredor dos camarins registraram apenas Isabela Ramos entrando na sala de Roberto minutos antes da apresentação." },
    ],
    resultText: "Isabela Ramos confessou ter envenenado a taça de vinho de Roberto Aguiar para tomar seu lugar no papel principal, sem imaginar que a dose seria fatal.",
  },

  {
    id: "caso003",
    code: "CASO 003",
    title: "O Leilão Fatal",
    difficulty: "Difícil",
    stars: 4,
    victimName: "Antonieta Serpa",
    location: "Galeria Serpa",
    date: "19/07/2024",
    time: "22h15",
    story:
      "Durante um leilão privado de uma pintura rara, as luzes da galeria se apagaram por alguns segundos. Quando voltaram, a colecionadora Antonieta Serpa estava morta ao lado do cavalete vazio — o quadro em disputa havia desaparecido.",
    objective:
      "Descubra quem aproveitou o apagão para matar Antonieta Serpa, o que foi usado como arma e o que aconteceu com o quadro desaparecido.",
    victimImage: "https://placehold.co/600x800/171d26/9aa4af?text=Antonieta+Serpa",
    sceneImage: "https://placehold.co/1200x800/11151c/313a47?text=Galeria+de+Arte",
    sceneHint: "Toque nos pontos dourados para examinar evidências.",
    evidences: [
      { key: "glove", name: "Luva de couro rasgada", type: "EVIDÊNCIA 01", x: 26, y: 62,
        description: "Uma luva de couro preta, rasgada na altura dos dedos, encontrada perto do gerador de energia da galeria." },
      { key: "frame", name: "Fragmento de moldura", type: "EVIDÊNCIA 02", x: 60, y: 30,
        description: "Um pedaço de moldura dourada, quebrado, com uma mancha escura que pode ser sangue." },
      { key: "receipt", name: "Recibo de autenticidade", type: "EVIDÊNCIA 03", x: 78, y: 64,
        description: "Um recibo de autenticação da obra, com uma assinatura que parece ter sido falsificada." },
    ],
    suspects: [
      { id: "ricardo", name: "Ricardo Novaes", age: 45, profession: "Leiloeiro", relation: "Teria vendido obras com autenticidade duvidosa para a vítima", image: "Ricardo" },
      { id: "clarice", name: "Clarice Lemos", age: 38, profession: "Sobrinha e herdeira", relation: "Disputava a herança da galeria com a tia", image: "Clarice" },
      { id: "bento", name: "Bento Farias", age: 50, profession: "Segurança da galeria", relation: "Tinha acesso ao quadro de energia e dívidas de jogo", image: "Bento" },
    ],
    dialogues: {
      ricardo: { where: "“Eu estava conduzindo o leilão, no microfone, quando a luz caiu.”",
        relation: "“Antonieta era uma cliente exigente, mas sempre confiou no meu trabalho.”",
        confrontEvidence: "receipt",
        confrontYes: "“Está bem... alguns recibos passaram por mim sem a verificação completa.”",
        confrontNo: "“Não sei do que esse recibo se trata.”" },
      clarice: { where: "“Estava na plateia, sentada na primeira fila, todos podem confirmar.”",
        relation: "“Ela nunca me deixou tocar em nada da galeria, nem quando eu precisava.”",
        confrontEvidence: "frame",
        confrontYes: "“Eu só queria conversar com ela sobre a herança, a moldura quebrou sem querer!”",
        confrontNo: "“Não sei nada sobre uma moldura quebrada.”" },
      bento: { where: "“Eu estava verificando o painel de energia quando a luz apagou, é minha função.”",
        relation: "“Trabalho na segurança da galeria há anos, mal cruzava com a Sra. Serpa.”",
        confrontEvidence: "glove",
        confrontYes: "“Tá bem, a luva é minha, mas eu só queria pegar o quadro para vender e pagar minhas dívidas.”",
        confrontNo: "“Nunca vi essa luva antes.”" },
    },
    weapons: [
      { id: "statue", label: "Golpe com estatueta" },
      { id: "frame", label: "Golpe com moldura" },
      { id: "strangle", label: "Estrangulamento" },
    ],
    motives: [
      { id: "theft", label: "Roubo do quadro" },
      { id: "inheritance", label: "Disputa de herança" },
      { id: "fraud", label: "Encobrir fraude de autenticidade" },
    ],
    solution: { killer: "bento", weapon: "statue", motive: "theft" },
    files: [
      { title: "Inventário da Galeria", description: "Lista todas as obras em exposição na noite do leilão; o quadro em disputa consta como “removido para restauração”, sem registro oficial." },
      { title: "Relatório da Queda de Energia", description: "A concessionária confirma que não houve nenhuma falha externa: o apagão foi causado manualmente no quadro de força interno da galeria." },
    ],
    resultText: "Bento Farias aproveitou o apagão que ele mesmo provocou para golpear Antonieta Serpa e roubar o quadro, pretendendo vendê-lo para quitar suas dívidas de jogo.",
  },

  {
    id: "caso004",
    code: "CASO 004",
    title: "Crime no Campus",
    difficulty: "Médio",
    stars: 3,
    victimName: "Professor Henrique Dantas",
    location: "Universidade Federal — Bloco de Ciências",
    date: "11/09/2024",
    time: "19h30",
    story:
      "O professor Henrique Dantas, prestes a publicar uma denúncia sobre fraude em pesquisas do departamento, foi encontrado morto em seu escritório, trancado por dentro, poucas horas após uma palestra.",
    objective:
      "Investigue o escritório do professor, reúna provas sobre a denúncia que ele preparava e descubra quem o impediu de revelar a verdade.",
    victimImage: "https://placehold.co/600x800/171d26/9aa4af?text=Prof.+Henrique",
    sceneImage: "https://placehold.co/1200x800/11151c/313a47?text=Escritorio+da+Universidade",
    sceneHint: "Toque nos pontos dourados para examinar evidências.",
    evidences: [
      { key: "draft", name: "Rascunho de artigo", type: "EVIDÊNCIA 01", x: 24, y: 58,
        description: "Um rascunho de artigo científico, com trechos rasurados e o nome de uma colega de departamento circulado em vermelho." },
      { key: "cup", name: "Xícara de café", type: "EVIDÊNCIA 02", x: 57, y: 34,
        description: "Uma xícara de café pela metade, com um resíduo esbranquiçado no fundo que não parece ser açúcar." },
      { key: "drive", name: "Pen drive escondido", type: "EVIDÊNCIA 03", x: 76, y: 63,
        description: "Um pequeno pen drive escondido atrás de uma fileira de livros, contendo planilhas de dados de pesquisa duplicados." },
    ],
    suspects: [
      { id: "marina", name: "Dra. Marina Costa", age: 47, profession: "Colega de departamento", relation: "Citada no artigo sobre fraude em pesquisas", image: "Marina" },
      { id: "thiago", name: "Thiago Ramos", age: 24, profession: "Aluno orientando", relation: "Teve uma nota cancelada por plágio meses atrás", image: "Thiago" },
      { id: "paulo", name: "Paulo Furtado", age: 58, profession: "Reitor da universidade", relation: "A denúncia colocaria a reputação da universidade em risco", image: "Paulo" },
    ],
    dialogues: {
      marina: { where: "“Eu estava numa reunião do departamento até mais tarde, com outros dois professores.”",
        relation: "“Henrique e eu trabalhamos juntos por anos, éramos próximos.”",
        confrontEvidence: "draft",
        confrontYes: "“Está bem, meu nome está lá porque ele descobriu que eu adulterei alguns dados.”",
        confrontNo: "“Não sei por que meu nome estaria em um rascunho dele.”" },
      thiago: { where: "“Eu estava na biblioteca estudando para uma prova, tenho testemunhas.”",
        relation: "“Ele era duro comigo desde que descobriu meu plágio, mas eu respeitava o trabalho dele.”",
        confrontEvidence: "cup",
        confrontYes: "“Eu só levei o café para ele, não sei o que tinha dentro!”",
        confrontNo: "“Não fui eu quem levou aquele café.”" },
      paulo: { where: "“Estava em uma reunião administrativa no outro prédio do campus.”",
        relation: "“Henrique era um excelente pesquisador, mas insistia em levar essa denúncia adiante sem provas sólidas.”",
        confrontEvidence: "drive",
        confrontYes: "“Esse pen drive não é meu, mas reconheço que pedi para conter a repercussão do caso.”",
        confrontNo: "“Nunca vi esse pen drive antes.”" },
    },
    weapons: [
      { id: "poison", label: "Veneno no café" },
      { id: "blunt", label: "Golpe com objeto contundente" },
      { id: "suffocation", label: "Asfixia" },
    ],
    motives: [
      { id: "coverup", label: "Encobrir fraude científica" },
      { id: "revenge", label: "Vingança por plágio" },
      { id: "reputation", label: "Proteger a reputação da universidade" },
    ],
    solution: { killer: "marina", weapon: "poison", motive: "coverup" },
    files: [
      { title: "E-mail Interno da Reitoria", description: "Mensagens trocadas entre o reitor e o departamento pedindo “cautela” antes da denúncia de Henrique ser tornada pública." },
      { title: "Ficha de Ocorrência Anterior", description: "Registro do processo de plágio aberto contra Thiago Ramos meses antes do crime, arquivado por falta de provas." },
    ],
    resultText: "A Dra. Marina Costa envenenou o café do professor Henrique Dantas para impedir que ele publicasse provas de que ela havia adulterado dados de pesquisa.",
  },

  {
    id: "caso005",
    code: "CASO 005",
    title: "A Ilha das Sombras",
    difficulty: "Difícil",
    stars: 4,
    victimName: "Otávio Redman",
    location: "Ilha Vista Mar",
    date: "03/12/2024",
    time: "01h20",
    story:
      "Durante um retiro corporativo em uma ilha particular, o empresário Otávio Redman foi encontrado sem vida na praia, longe da casa principal. Sem barcos disponíveis até o amanhecer, todos os hóspedes estavam isolados na ilha no momento do crime.",
    objective:
      "Com os suspeitos isolados na ilha, investigue a praia, reúna provas e descubra quem matou Otávio Redman, com o quê e por quê.",
    victimImage: "https://placehold.co/600x800/171d26/9aa4af?text=Otavio+Redman",
    sceneImage: "https://placehold.co/1200x800/11151c/313a47?text=Praia+da+Ilha",
    sceneHint: "Toque nos pontos dourados para examinar evidências.",
    evidences: [
      { key: "rope", name: "Corda de amarração cortada", type: "EVIDÊNCIA 01", x: 27, y: 60,
        description: "Um pedaço de corda náutica cortada de forma irregular, encontrado enrolado próximo às pedras da praia." },
      { key: "contract", name: "Contrato rasgado", type: "EVIDÊNCIA 02", x: 59, y: 33,
        description: "Páginas rasgadas de um contrato societário, com uma cláusula de exclusão de sócios destacada." },
      { key: "radio", name: "Rádio comunicador", type: "EVIDÊNCIA 03", x: 75, y: 65,
        description: "Um rádio comunicador da equipe de segurança, com uma mensagem de áudio parcialmente apagada." },
    ],
    suspects: [
      { id: "beatriz", name: "Beatriz Andrade", age: 44, profession: "Sócia minoritária", relation: "Seria excluída do novo contrato da empresa", image: "Beatriz" },
      { id: "gustavo", name: "Gustavo Lima", age: 39, profession: "Diretor financeiro", relation: "Teve um desvio de fundos descoberto pela vítima", image: "Gustavo" },
      { id: "renata", name: "Renata Silva", age: 26, profession: "Assistente pessoal", relation: "Vivia sob pressão constante da vítima", image: "Renata" },
    ],
    dialogues: {
      beatriz: { where: "“Eu estava na varanda da casa principal, terminando uma taça de vinho antes de dormir.”",
        relation: "“Otávio queria me tirar da sociedade com uma cláusula que eu só descobri essa semana.”",
        confrontEvidence: "contract",
        confrontYes: "“Sim, discuti com ele sobre isso mais cedo, mas discutir não é matar.”",
        confrontNo: "“Não sei do que esse contrato rasgado se trata.”" },
      gustavo: { where: "“Estava dormindo no meu quarto, sozinho, desde as 23h.”",
        relation: "“Trabalho com Otávio há oito anos, ele confiava totalmente em mim com as finanças.”",
        confrontEvidence: "rope",
        confrontYes: "“Tá bem, eu estava na praia, mas só fui conversar com ele sobre o que ele tinha descoberto.”",
        confrontNo: "“Não sei de nada sobre uma corda cortada.”" },
      renata: { where: "“Estava organizando a agenda de amanhã na sala de reuniões improvisada.”",
        relation: "“Ele exigia demais de mim, mas era meu emprego, eu precisava do salário.”",
        confrontEvidence: "radio",
        confrontYes: "“Aquele rádio é da segurança, eu só usei para avisar que ouvi um barulho estranho.”",
        confrontNo: "“Não sei nada sobre esse rádio.”" },
    },
    weapons: [
      { id: "drowning", label: "Afogamento forçado" },
      { id: "blunt", label: "Golpe com objeto contundente" },
      { id: "strangle", label: "Estrangulamento" },
    ],
    motives: [
      { id: "embezzlement", label: "Desvio de fundos descoberto" },
      { id: "exclusion", label: "Exclusão da sociedade" },
      { id: "pressure", label: "Anos de pressão e abuso" },
    ],
    solution: { killer: "gustavo", weapon: "drowning", motive: "embezzlement" },
    files: [
      { title: "Extrato Bancário Irregular", description: "Registros de transferências suspeitas da conta da empresa para uma conta pessoal de Gustavo Lima, descobertas por Otávio dias antes da viagem." },
      { title: "Mensagens Recuperadas", description: "Uma conversa apagada do celular de Otávio mostra que ele marcou um encontro na praia à 1h da manhã para “resolver o problema do desvio”." },
    ],
    resultText: "Gustavo Lima afogou Otávio Redman na praia da ilha para impedir que o desvio de fundos que ele cometia há meses viesse à tona.",
  },

  {
    id: "caso006",
    code: "CASO 006",
    title: "Rádio Silêncio",
    difficulty: "Muito Difícil",
    stars: 5,
    victimName: "Vitor Hollanda",
    location: "Rádio Frequência Livre",
    date: "27/01/2025",
    time: "23h58",
    story:
      "Vitor Hollanda, apresentador conhecido por expor escândalos da cidade em seu programa noturno, foi encontrado morto na cabine de transmissão durante o intervalo comercial, com o microfone ainda ligado.",
    objective:
      "Investigue o estúdio de rádio, descubra qual segredo Vitor estava prestes a revelar naquela noite e quem fez questão de silenciá-lo.",
    victimImage: "https://placehold.co/600x800/171d26/9aa4af?text=Vitor+Hollanda",
    sceneImage: "https://placehold.co/1200x800/11151c/313a47?text=Estudio+de+Radio",
    sceneHint: "Toque nos pontos dourados para examinar evidências.",
    evidences: [
      { key: "script", name: "Roteiro do programa", type: "EVIDÊNCIA 01", x: 25, y: 59,
        description: "O roteiro da noite tem um nome circulado várias vezes em vermelho, ao lado da palavra “hoje”." },
      { key: "headset", name: "Fone de ouvido danificado", type: "EVIDÊNCIA 02", x: 58, y: 31,
        description: "Um fone de ouvido com os fios visivelmente derretidos, como se tivesse recebido uma descarga elétrica." },
      { key: "email", name: "E-mail de ameaça impresso", type: "EVIDÊNCIA 03", x: 77, y: 64,
        description: "Um e-mail impresso, sem remetente identificado, avisando que “algumas coisas é melhor não dizer no ar”." },
    ],
    suspects: [
      { id: "marcelo", name: "Marcelo Tavares", age: 55, profession: "Vereador", relation: "Seria exposto em um escândalo de corrupção no programa daquela noite", image: "Marcelo" },
      { id: "juliana", name: "Juliana Prado", age: 33, profession: "Ex-produtora do programa", relation: "Foi demitida recentemente e ameaçou processar a rádio", image: "Juliana" },
      { id: "daniel", name: "Daniel Souza", age: 27, profession: "Técnico de som", relation: "Tem acesso total aos equipamentos do estúdio e dívidas", image: "Daniel" },
    ],
    dialogues: {
      marcelo: { where: "“Eu estava em um jantar oficial, com direito a fotos e testemunhas.”",
        relation: "“Vitor adorava me perseguir com acusações que nunca provou nada.”",
        confrontEvidence: "script",
        confrontYes: "“Tá bem, eu sabia que meu nome estava no roteiro de hoje, mas eu não fiz nada com isso.”",
        confrontNo: "“Não sei por que meu nome estaria em um roteiro de rádio.”" },
      juliana: { where: "“Estava em casa, chateada desde a demissão, sozinha.”",
        relation: "“Fui demitida sem justa causa depois de anos ali, tinha motivos para estar com raiva, mas não para matar.”",
        confrontEvidence: "email",
        confrontYes: "“Eu mandei aquele e-mail, mas era só um desabafo, não uma ameaça de verdade.”",
        confrontNo: "“Não sei nada sobre esse e-mail.”" },
      daniel: { where: "“Estava na sala técnica ao lado, ajustando os equipamentos do intervalo.”",
        relation: "“Vitor sempre foi gente boa comigo, nunca tive problema com ele.”",
        confrontEvidence: "headset",
        confrontYes: "“Tá bem, fui eu que mexi na fiação, mas foi a mando do vereador Marcelo, que pagou minhas dívidas.”",
        confrontNo: "“Não sei de nada sobre esse fone.”" },
    },
    weapons: [
      { id: "shock", label: "Choque elétrico sabotado" },
      { id: "poison", label: "Veneno" },
      { id: "blunt", label: "Golpe com objeto contundente" },
    ],
    motives: [
      { id: "coverup", label: "Encobrir escândalo de corrupção" },
      { id: "revenge", label: "Vingança por demissão" },
      { id: "debt", label: "Quitar dívidas pessoais" },
    ],
    solution: { killer: "marcelo", weapon: "shock", motive: "coverup" },
    files: [
      { title: "Pauta do Programa", description: "A pauta confirma que Vitor planejava revelar documentos ligando o vereador Marcelo Tavares a um esquema de corrupção na Câmara Municipal." },
      { title: "Prints de Mensagens", description: "Conversas recuperadas do celular de Daniel Souza mostram uma transferência de dinheiro do vereador Marcelo horas antes do crime, com a mensagem: “resolve isso hoje”." },
    ],
    resultText: "O vereador Marcelo Tavares subornou o técnico Daniel Souza para sabotar o equipamento de Vitor Hollanda e evitar que o escândalo de corrupção fosse ao ar.",
  },
];

// =====================================================================
// ESTADO DO JOGO
// =====================================================================
const state = {
  xp: 0,
  solvedCases: {}, // { caso001: true, caso002: true, ... }
  currentCaseId: null,
  found: new Set(),
  currentEvidence: null,
  currentSuspectId: null,
  interrogated: new Set(),
  startedAt: Date.now(),
};

function getCase(id) {
  return CASES.find((c) => c.id === id);
}

function getCurrentCase() {
  return getCase(state.currentCaseId);
}

function isUnlocked() {
  // Todos os casos ficam liberados desde o início, independente
  // de o jogador já ter resolvido os casos anteriores ou não.
  return true;
}

// =====================================================================
// NAVEGAÇÃO ENTRE TELAS
// =====================================================================
function showView(id) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  if (id === "cases-view") renderCasesList();
  if (id === "profile-view") updateProfile();
  window.scrollTo(0, 0);
}

function showPanel(id) {
  document.getElementById(id).classList.add("open");
  if (id === "inventory-panel") renderInventory();
  if (id === "suspects-panel") renderSuspects();
  if (id === "files-panel") renderFiles();
}

function closePanel(id) {
  document.getElementById(id).classList.remove("open");
}

function closeModal() {
  document.getElementById("evidence-modal").classList.remove("open");
}

function showCredits() {
  showPanel("credits-modal");
}

function showToast(text) {
  const t = document.getElementById("toast");
  t.textContent = text;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2600);
}

// =====================================================================
// 3. LISTA DE CASOS
// =====================================================================
const DIFFICULTY_STYLE = {
  "Fácil": "bg-[#2d4a34] text-[#8fd9a1]",
  "Médio": "bg-[#4a3f1f] text-[#e0c27a]",
  "Difícil": "bg-[#542825] text-[#e79b96]",
  "Muito Difícil": "bg-[#3a1f38] text-[#e79bdc]",
};

function renderCasesList() {
  const grid = document.getElementById("cases-grid");
  grid.innerHTML = "";

  CASES.forEach((c, index) => {
    const unlocked = isUnlocked(index);
    const solved = !!state.solvedCases[c.id];
    const stars = "★".repeat(c.stars) + "☆".repeat(5 - c.stars);
    const diffClass = DIFFICULTY_STYLE[c.difficulty] || "bg-[#542825] text-[#e79b96]";

    const card = document.createElement("article");

    if (!unlocked) {
      card.className = "rounded-xl border border-[#262d36] bg-[#0d1015] p-6 opacity-60";
      card.innerHTML = `
        <i data-lucide="lock-keyhole" class="h-7 w-7 text-[#717b87]"></i>
        <p class="mono mt-5 text-xs text-[#9aa4af]">${c.code}</p>
        <h2 class="noir-title mt-3 text-2xl font-bold text-[#aeb6c0]">${c.title}</h2>
        <p class="mt-5 text-sm text-[#7f8995]">Resolva o caso anterior para desbloquear esta investigação.</p>
      `;
    } else {
      card.className = "case-card relative overflow-hidden rounded-xl p-6";
      card.innerHTML = `
        <p class="mono text-xs tracking-[.18em] text-[#d3a750]">${c.code}</p>
        <h2 class="noir-title mt-3 text-3xl font-bold">${c.title}</h2>
        <div class="mt-5 flex items-center justify-between">
          <span class="rounded px-3 py-1 text-xs ${diffClass}">${c.difficulty}</span>
          <span class="text-[#d3a750]">${stars}</span>
        </div>
        <div class="mt-6 flex items-center justify-between border-t border-[#343d49] pt-5">
          <span class="mono text-xs text-[#aeb6c0]">${solved ? "RESOLVIDO" : "EM INVESTIGAÇÃO"}</span>
          <button type="button" class="rounded bg-[#d3a750] px-4 py-2 text-sm font-bold text-[#11151c]">
            ${solved ? "Revisitar" : "Investigar"}
          </button>
        </div>
      `;
      card.querySelector("button").addEventListener("click", () => openCase(c.id));
    }

    grid.appendChild(card);
  });

  lucide.createIcons();
}

function openCase(caseId) {
  state.currentCaseId = caseId;
  state.found = new Set();
  state.interrogated = new Set();

  const c = getCase(caseId);

  document.getElementById("intro-code").textContent = c.code + " — INTRODUÇÃO";
  document.getElementById("victim-image").src = c.victimImage;
  document.getElementById("victim-image").alt = "Foto de " + c.victimName;
  document.getElementById("intro-title").textContent = c.title;
  document.getElementById("intro-story").textContent = c.story;
  document.getElementById("intro-location").textContent = c.location;
  document.getElementById("intro-date").textContent = c.date;
  document.getElementById("intro-time").textContent = c.time;
  document.getElementById("intro-objective").textContent = c.objective;

  showView("intro-view");
}

// =====================================================================
// 5. CENA DO CRIME
// =====================================================================
function startInvestigation() {
  const c = getCurrentCase();

  document.getElementById("scene-code").textContent = c.code;
  document.getElementById("scene-title").textContent = "Cena do Crime";
  document.getElementById("scene-image").src = c.sceneImage;
  document.getElementById("scene-hint").textContent = c.sceneHint;

  const hotspots = document.getElementById("evidence-hotspots");
  hotspots.innerHTML = "";
  c.evidences.forEach((ev) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "evidence-dot";
    btn.style.left = ev.x + "%";
    btn.style.top = ev.y + "%";
    btn.setAttribute("aria-label", "Examinar " + ev.name);
    btn.addEventListener("click", () => openEvidence(ev.key));
    hotspots.appendChild(btn);
  });

  renderFoundList();
  updateProfile();
  showView("scene-view");
  showToast("Investigação iniciada. Procure os pontos dourados.");
}

function renderFoundList() {
  const c = getCurrentCase();
  const container = document.getElementById("found-list");
  container.innerHTML = "";

  c.evidences.forEach((ev) => {
    if (state.found.has(ev.key)) {
      const div = document.createElement("div");
      div.className = "border-l border-[#d3a750] pl-3 text-sm text-[#c9d0d7]";
      div.textContent = ev.name;
      container.appendChild(div);
    }
  });

  document.getElementById("evidence-count").textContent = state.found.size + "/" + c.evidences.length;
}

// =====================================================================
// 6/7. EXAMINAR E COLETAR EVIDÊNCIAS / INVENTÁRIO
// =====================================================================
function openEvidence(key) {
  const c = getCurrentCase();
  const item = c.evidences.find((ev) => ev.key === key);
  if (!item) return;

  state.currentEvidence = key;

  document.getElementById("evidence-type").textContent = item.type;
  document.getElementById("evidence-name").textContent = item.name;
  document.getElementById("evidence-description").textContent = item.description;
  document.getElementById("evidence-image").src = c.sceneImage;

  const btn = document.getElementById("collect-button");
  const already = state.found.has(key);
  btn.textContent = already ? "Prova já coletada" : "Adicionar ao inventário";
  btn.disabled = already;
  btn.classList.toggle("opacity-50", already);

  document.getElementById("evidence-modal").classList.add("open");
}

function collectEvidence() {
  const key = state.currentEvidence;
  if (!key || state.found.has(key)) return;

  state.found.add(key);
  renderFoundList();
  gainXP(25);
  closeModal();
  showToast("Prova coletada: +25 XP");
  saveProgress();
}

function renderInventory() {
  const c = getCurrentCase();
  const list = document.getElementById("inventory-list");
  const empty = document.getElementById("inventory-empty");

  list.innerHTML = "";
  empty.classList.toggle("hidden", state.found.size > 0);

  c.evidences
    .filter((ev) => state.found.has(ev.key))
    .forEach((ev) => {
      const row = document.createElement("article");
      row.className = "flex items-center justify-between rounded border border-[#333d48] bg-[#10141a] p-3";
      row.innerHTML = `
        <div>
          <p class="font-semibold">${ev.name}</p>
          <p class="mt-1 text-xs text-[#9aa4af]">${ev.description}</p>
        </div>
        <button class="rounded border border-[#d3a750] px-3 py-2 text-xs text-[#e9e2d4]">Analisar</button>
      `;
      row.querySelector("button").addEventListener("click", () => openEvidence(ev.key));
      list.appendChild(row);
    });
}

// =====================================================================
// 8/9. SUSPEITOS E INTERROGATÓRIO
// =====================================================================
function renderSuspects() {
  const c = getCurrentCase();
  const grid = document.getElementById("suspects-grid");
  grid.innerHTML = "";

  c.suspects.forEach((s) => {
    const article = document.createElement("article");
    article.className = "overflow-hidden rounded-lg border border-[#333d48]";
    article.innerHTML = `
      <img loading="lazy" class="h-36 w-full object-cover grayscale"
           src="https://placehold.co/300x200/171d26/9aa4af?text=${encodeURIComponent(s.image)}" alt="${s.name}">
      <div class="p-4">
        <h3 class="font-bold">${s.name}</h3>
        <p class="mt-1 text-xs text-[#9aa4af]">${s.age} anos · ${s.profession} · ${s.relation}</p>
        <button class="mt-4 rounded border border-[#d3a750] px-3 py-2 text-xs text-[#e9e2d4]">Interrogar</button>
      </div>
    `;
    article.querySelector("button").addEventListener("click", () => openInterrogation(s.id));
    grid.appendChild(article);
  });
}

function openInterrogation(suspectId) {
  closePanel("suspects-panel");

  const c = getCurrentCase();
  const suspect = c.suspects.find((s) => s.id === suspectId);
  state.currentSuspectId = suspectId;
  state.interrogated.add(suspectId);

  document.getElementById("interrogation-name").textContent = suspect.name;
  document.getElementById("chat-log").innerHTML =
    '<p class="text-sm text-[#9aa4af]">Escolha uma pergunta para iniciar o interrogatório.</p>';

  const dialogue = c.dialogues[suspectId];
  const confrontEv = c.evidences.find((ev) => ev.key === dialogue.confrontEvidence);

  const questions = document.getElementById("question-list");
  questions.innerHTML = "";

  const qList = [
    { type: "where", label: "Onde você estava na noite do crime?" },
    { type: "relation", label: "Você conhecia a vítima?" },
    { type: "confront", label: "Confrontar com: " + confrontEv.name },
  ];

  qList.forEach((q) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "answer rounded p-3 text-left text-sm";
    btn.textContent = q.label;
    btn.addEventListener("click", () => askQuestion(q.type));
    questions.appendChild(btn);
  });

  showPanel("interrogation-panel");
  saveProgress();
}

function askQuestion(type) {
  const c = getCurrentCase();
  const suspect = c.suspects.find((s) => s.id === state.currentSuspectId);
  const dialogue = c.dialogues[state.currentSuspectId];

  let questionLabel = "";
  let reply = "";

  if (type === "where") {
    questionLabel = "Onde você estava na noite do crime?";
    reply = dialogue.where;
  } else if (type === "relation") {
    questionLabel = "Você conhecia a vítima?";
    reply = dialogue.relation;
  } else if (type === "confront") {
    const confrontEv = c.evidences.find((ev) => ev.key === dialogue.confrontEvidence);
    questionLabel = "Confrontar com: " + confrontEv.name;
    const hasEvidence = state.found.has(dialogue.confrontEvidence);
    reply = hasEvidence ? dialogue.confrontYes : dialogue.confrontNo;

    if (hasEvidence) {
      gainXP(20);
      showToast("Contradição registrada: +20 XP");
    }
  }

  const chat = document.getElementById("chat-log");
  chat.innerHTML = `
    <div class="text-right text-sm text-[#d3a750]">Detetive: ${questionLabel}</div>
    <div class="chat-bubble rounded-r p-3 text-sm text-[#d5dbe1]">${suspect.name}: ${reply}</div>
  `;

  saveProgress();
}

// =====================================================================
// 10. ARQUIVOS
// =====================================================================
function renderFiles() {
  const c = getCurrentCase();
  const list = document.getElementById("files-list");
  list.innerHTML = "";

  c.files.forEach((f) => {
    const article = document.createElement("article");
    article.className = "rounded border border-[#333d48] bg-[#10141a] p-4";
    article.innerHTML = `
      <p class="font-semibold">${f.title}</p>
      <p class="mt-1 text-sm text-[#9aa4af]">${f.description}</p>
    `;
    list.appendChild(article);
  });
}

// =====================================================================
// 12. RESOLVER CASO
// =====================================================================
function populateSolveForm() {
  const c = getCurrentCase();

  const killerSelect = document.getElementById("killer");
  const weaponSelect = document.getElementById("weapon");
  const motiveSelect = document.getElementById("motive");

  killerSelect.innerHTML = '<option value="">Selecione uma pessoa</option>';
  c.suspects.forEach((s) => {
    const opt = document.createElement("option");
    opt.value = s.id;
    opt.textContent = s.name;
    killerSelect.appendChild(opt);
  });

  weaponSelect.innerHTML = '<option value="">Selecione uma arma</option>';
  c.weapons.forEach((w) => {
    const opt = document.createElement("option");
    opt.value = w.id;
    opt.textContent = w.label;
    weaponSelect.appendChild(opt);
  });

  motiveSelect.innerHTML = '<option value="">Selecione um motivo</option>';
  c.motives.forEach((m) => {
    const opt = document.createElement("option");
    opt.value = m.id;
    opt.textContent = m.label;
    motiveSelect.appendChild(opt);
  });

  document.getElementById("solve-feedback").classList.add("hidden");
}

// Repopula o formulário sempre que o jogador abre a tela de resolução,
// já que cada caso tem suspeitos, armas e motivos diferentes.
document.addEventListener("DOMContentLoaded", () => {
  const solveNavButtons = document.querySelectorAll('[onclick*="solve-view"]');
  solveNavButtons.forEach((btn) => {
    btn.addEventListener("click", populateSolveForm);
  });
});

document.getElementById("solve-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const c = getCurrentCase();
  const killer = document.getElementById("killer").value;
  const weapon = document.getElementById("weapon").value;
  const motive = document.getElementById("motive").value;

  const correct =
    killer === c.solution.killer &&
    weapon === c.solution.weapon &&
    motive === c.solution.motive;

  const feedback = document.getElementById("solve-feedback");

  if (!correct) {
    feedback.textContent = "Algumas respostas não correspondem às evidências. Revise a investigação antes de acusar alguém.";
    feedback.classList.remove("hidden");
    return;
  }

  state.solvedCases[c.id] = true;
  gainXP(150);

  document.getElementById("result-copy").textContent = c.resultText;
  document.getElementById("result-clues").textContent = state.found.size + "/" + c.evidences.length;
  document.getElementById("result-xp").textContent = "+150";
  document.getElementById("result-accuracy").textContent =
    Math.round((state.found.size / c.evidences.length) * 100) + "%";

  saveProgress();
  showView("result-view");
});

// =====================================================================
// XP / NÍVEL / PERFIL
// =====================================================================
function gainXP(amount) {
  state.xp += amount;
  updateProfile();
}

function updateProfile() {
  const level = Math.floor(state.xp / 100) + 1;
  const progress = state.xp % 100;
  const solvedCount = Object.keys(state.solvedCases).length;

  document.getElementById("xp-label").textContent = progress + " / 100 XP";
  document.getElementById("xp-bar").style.width = progress + "%";
  document.getElementById("scene-xp").textContent = state.xp;
  document.getElementById("top-level").textContent = "NÍVEL " + level;
  document.getElementById("profile-level").textContent = "NÍVEL " + level;
  document.getElementById("profile-xp").textContent = state.xp;
  document.getElementById("profile-cases").textContent = solvedCount;
  document.getElementById("profile-medals").textContent = solvedCount * 2;
}

// =====================================================================
// CONFIGURAÇÕES
// =====================================================================
function toggleSetting(id) {
  const el = document.getElementById(id);
  el.classList.toggle("toggle-on");
  el.querySelector("span").classList.toggle("translate-x-5");
  saveProgress();
}

function resetProgress() {
  if (!confirm("Tem certeza que deseja apagar todo o seu progresso?")) return;
  localStorage.removeItem("crimeSolverProgress");
  state.xp = 0;
  state.solvedCases = {};
  state.found = new Set();
  state.interrogated = new Set();
  updateProfile();
  showToast("Progresso reiniciado.");
  showView("menu-view");
}

// =====================================================================
// PERSISTÊNCIA (localStorage)
// =====================================================================
// Obs.: para um projeto de Banco de Dados "de verdade", esta função é o
// ponto onde entraria uma chamada a uma API/backend conectada ao seu
// banco de dados (ex.: fetch('/api/progresso', { method:'POST', ... })).
// Por enquanto, o progresso é salvo localmente no navegador do jogador.
function saveProgress() {
  const elapsed = Math.round((Date.now() - state.startedAt) / 1000);
  const record = {
    player_name: "Detetive",
    xp: state.xp,
    solved_cases: state.solvedCases,
    total_play_time: elapsed,
    current_case_id: state.currentCaseId,
    case_progress: {
      found: [...state.found],
      interrogated: [...state.interrogated],
    },
  };

  try {
    localStorage.setItem("crimeSolverProgress", JSON.stringify(record));
  } catch (e) {
    console.warn("Não foi possível salvar o progresso localmente.", e);
  }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem("crimeSolverProgress");
    if (!raw) return;

    const record = JSON.parse(raw);
    state.xp = Number(record.xp) || 0;
    state.solvedCases = record.solved_cases || {};
  } catch (e) {
    console.warn("Não foi possível carregar o progresso salvo.", e);
  }
}

// =====================================================================
// INICIALIZAÇÃO
// =====================================================================
function init() {
  lucide.createIcons();
  loadProgress();
  updateProfile();
  setTimeout(() => showView("menu-view"), 2000);
}

init();
