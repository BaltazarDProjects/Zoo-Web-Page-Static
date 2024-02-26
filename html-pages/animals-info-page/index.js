const data = [
    {
        nome: "sagui",
        tipo: "Mamifero",
        texto: "Os saguis são animais de hábitos diurnos, pequeno porte e peso variando entre 350 a 450 gramas.O descanso, alimentação e o deslocamento são através das árvores.Estes animais dificilmente descem ao solo para evitar serem presas fáceis, preferindo viver nos galhos intermediários e copa das árvores.Alimentam-se basicamente de insetos, moluscos, filhotes de aves e mamíferos, pequenos lagartos, pequenos anfíbios, ovos, sementes, frutas, flores, goma etc"
    },
    {
        nome: "girafa",
        tipo: "Mamifero",
        texto: 'Girafas são fascinantes mamíferos herbívoros que habitam as savanas africanas. Conhecidas por seus pescoços longos e elegantes, esses animais são especializados em alcançar folhas nas copas das árvores. Suas manchas únicas e padrões distintos tornam cada girafa única. Vivendo em grupos sociais chamados "torres", elas se comunicam por meio de vocalizações e interações físicas.\n\nEsses animais incríveis enfrentam desafios naturais, mas sua adaptação notável e comportamento social são aspectos admiráveis. As girafas são um destaque na fauna africana, representando a beleza e a diversidade da vida selvagem'
    },
    {
        nome: "axolote",
        tipo: "aquatico",
        texto: "Axolotes são anfíbios aquáticos conhecidos por nunca crescerem completamente. Eles têm brânquias externas durante toda a vida, mantendo uma aparência de larva. Um destaque é sua incrível habilidade de regeneração, podendo regenerar membros, órgãos e até partes do cérebro. Apesar de serem importantes na pesquisa científica, os axolotes enfrentam ameaças devido à degradação do habitat e predadores introduzidos, tornando a conservação crucial para sua sobrevivência"
    },
    {
        nome: "lobo-guara",
        tipo: "mamifero",
        texto: "O lobo-guará é um animal vermelho com pernas longas e que geralmente vive sozinho sendo encontrado na América do Sul. Ele come de tudo, incluindo carne, frutas e vegetais e Caça à noite. Destaca sua adaptabilidade única, Além disso, sua vocalização distinta, como uivos e latidos, faz dele um membro especial da fauna sul-americana. Porém, está em perigo devido à perda de habitat e conflitos com humanos. Esforços de conservação são importantes para proteger essa espécie única"
    },
    {
        nome: "tucano",
        tipo: "ave",
        texto: "Tucanos são pássaros coloridos encontrados nas florestas tropicais. Com bicos longos e chamativos, eles comem frutas e insetos. Vivem em grupos, fazem sons distintos e ajudam na dispersão de sementes. Sua beleza única"
    },
    {
        nome: "suricate",
        tipo: "mamifero",
        texto: "Suricatas são pequenos mamíferos do sul da África conhecidos por viverem em grupos e terem comportamento social. Com corpos esbeltos e pelagem listrada, eles cavam tocas para se abrigar. Em sua gangue, alguns vigiam enquanto outros buscam alimentos como insetos e pequenos vertebrados. Esses animais colaborativos são fascinantes para estudiosos da vida selvagem"
    }
];


const url = new URLSearchParams(window.location.search);
const nomeAnimal = url.get("nome");
const indexAnimal = data.findIndex(({nome}) => nome === nomeAnimal);

const informacoes = data[indexAnimal].texto.split(".");

document.querySelector("main").innerHTML=`<ul class="animals-info">
            <li><img src="../../animals-pictures/${nomeAnimal}.jpg"></li>
            <li><p class="nome-animal">${nomeAnimal}</p></li>
            <div class="caracteristica">
                <p>${informacoes[0]}</p>
                <p>${informacoes[1]}</p>
                <p>${informacoes[2]}</p>
                <p>${informacoes[3]}</p>
            </div>
        </ul>`
