type size = 'Pequeno' | 'Médio' | 'Grande';

type dogData = {
  id: number;
  breed: string;
  image: string;
  size: size;
  countryOrigin: string;
  colors: string[];
  lifeExpectancy: string;
  adultWeightKg: string;
  classification: string[];
  description: string;
};

const data: dogData[] = [
  {
    id: 1,
    breed: "Labrador Retriever",
    image: "labrador_retriever.jpg",
    size: "Médio",
    countryOrigin: "Canadá",
    colors: ["Preto", "Marrom", "Caramelo"],
    lifeExpectancy: "10 a 12 anos",
    adultWeightKg: "25 a 36 kg",
    classification: ["Companhia", "Assistência"],
    description: "O Labrador é dócil, brincalhão e inteligente, ideal para famílias ativas. Vive bem em casas com quintal e adora água e brincadeiras ao ar livre."
  },
  {
    id: 2,
    breed: "Golden Retriever",
    image: "golden_retriever.jpg",
    size: "Médio",
    countryOrigin: "Escócia",
    colors: ["Dourado"],
    lifeExpectancy: "10 a 12 anos",
    adultWeightKg: "25 a 34 kg",
    classification: ["Companhia", "Assistência"],
    description: "O Golden é afetuoso, calmo e excelente com crianças. Se adapta a espaços maiores e precisa de exercícios diários para manter a saúde física e mental."
  },
  {
    id: 3,
    breed: "Poodle",
    image: "poodle.jpg",
    size: "Pequeno",
    countryOrigin: "Alemanha/França",
    colors: ["Branco", "Preto", "Marrom", "Cinza", "Dourado", "Laranja"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "6 a 12 kg",
    classification: ["Companhia", "Competições de agilidade"],
    description: "O Poodle é inteligente, hipoalergênico e aprende comandos com facilidade. Ideal para apartamentos, desde que tenha estímulos mentais e caminhadas regulares."
  },
  {
    id: 4,
    breed: "Bulldog Francês",
    image: "bulldog_frances.jpg",
    size: "Pequeno",
    countryOrigin: "França",
    colors: ["Tigrado", "Preto", "Branco", "Cinza"],
    lifeExpectancy: "10 a 12 anos",
    adultWeightKg: "8 a 14 kg",
    classification: ["Companhia"],
    description: "Afetuoso e tranquilo, o Bulldog Francês adora companhia humana. Vive muito bem em apartamentos, mas exige atenção por causa de problemas respiratórios."
  },
  {
    id: 5,
    breed: "Bulldog Inglês",
    image: "bulldog_ingles.jpg",
    size: "Médio",
    countryOrigin: "Reino Unido",
    colors: ["Branco", "Caramelo", "Tigrado", "Vermelho"],
    lifeExpectancy: "8 a 10 anos",
    adultWeightKg: "18 a 25 kg",
    classification: ["Companhia"],
    description: "O Bulldog Inglês é calmo e companheiro, ideal para lares tranquilos. Adapta-se bem a apartamentos, mas requer cuidados com calor e exercícios leves."
  },
  {
    id: 6,
    breed: "Pastor Alemão",
    image: "pastor_alemao.jpg",
    size: "Grande",
    countryOrigin: "Alemanha",
    colors: ["Preto e marrom", "Cinza", "Preto"],
    lifeExpectancy: "9 a 13 anos",
    adultWeightKg: "22 a 40 kg",
    classification: ["Guarda", "Resgate", "Companhia"],
    description: "Leal, protetor e inteligente, o Pastor Alemão é excelente para guarda e resgate. Precisa de espaço e atividades, sendo mais adequado a casas com quintal ou áreas abertas."
  },
  {
    id: 7,
    breed: "Beagle",
    image: "beagle.jpg",
    size: "Médio",
    countryOrigin: "Reino Unido",
    colors: ["Marrom", "Branco", "Preto", "Tricolor"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "9 a 14 kg",
    classification: ["Caça", "Companhia"],
    description: "O Beagle é curioso, sociável e enérgico. Se adapta a casas e apartamentos com rotina ativa, mas requer atenção por seu faro aguçado e tendência a fugir."
  },
  {
    id: 8,
    breed: "Rottweiler",
    image: "rottweiler.jpg",
    size: "Grande",
    countryOrigin: "Alemanha",
    colors: ["Preto e marrom"],
    lifeExpectancy: "8 a 10 anos",
    adultWeightKg: "35 a 60 kg",
    classification: ["Guarda", "Companhia"],
    description: "O Rottweiler é forte, leal e protetor. Ideal para casas com espaço e donos experientes; precisa de socialização e adestramento desde cedo."
  },
  {
    id: 9,
    breed: "Yorkshire Terrier",
    image: "yorkshire_terrier.jpg",
    size: "Pequeno",
    countryOrigin: "Reino Unido",
    colors: ["Cinza", "Dourado", "Preto"],
    lifeExpectancy: "13 a 16 anos",
    adultWeightKg: "2 a 3 kg",
    classification: ["Companhia"],
    description: "Pequeno, valente e elegante, o Yorkshire é ótimo para apartamentos. Precisa de escovação frequente e adora estar no colo do tutor."
  },
  {
    id: 10,
    breed: "Shih Tzu",
    image: "shih_tzu.jpg",
    size: "Pequeno",
    countryOrigin: "China",
    colors: ["Branco", "Marrom", "Preto", "Dourado", "Cinza"],
    lifeExpectancy: "10 a 16 anos",
    adultWeightKg: "4 a 7 kg",
    classification: ["Companhia"],
    description: "O Shih Tzu é dócil, sociável e muito apegado à família. Ideal para apartamentos, exige cuidados com os pelos e olhos sensíveis."
  },
  {
    id: 11,
    breed: "Border Collie",
    image: "border_collie.jpg",
    size: "Médio",
    countryOrigin: "Reino Unido",
    colors: ["Preto e branco", "Merle", "Tricolor", "Marrom e branco"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "14 a 20 kg",
    classification: ["Assistência", "Companhia"],
    description: "Extremamente inteligente e ágil, o Border Collie é ideal para quem mora no campo ou tem espaço para atividades intensas. Não se adapta bem à vida sedentária."
  },
  {
    id: 12,
    breed: "Dachshund",
    image: "dachshund.jpg",
    size: "Pequeno",
    countryOrigin: "Alemanha",
    colors: ["Marrom", "Preto e marrom", "Vermelho", "Tigrado"],
    lifeExpectancy: "12 a 16 anos",
    adultWeightKg: "7 a 14 kg",
    classification: ["Caça", "Companhia"],
    description: "Destemido e divertido, o Dachshund adora cavar e seguir trilhas. Vive bem em apartamentos, mas precisa de cuidados com a coluna e caminhadas leves."
  },
  {
    id: 13,
    breed: "Boxer",
    image: "boxer.jpg",
    size: "Grande",
    countryOrigin: "Alemanha",
    colors: ["Caramelo", "Tigrado", "Branco"],
    lifeExpectancy: "10 a 12 anos",
    adultWeightKg: "25 a 32 kg",
    classification: ["Guarda", "Companhia"],
    description: "O Boxer é brincalhão, fiel e cheio de energia. Ideal para casas com quintal e tutores que gostam de atividades ao ar livre."
  },
  {
    id: 14,
    breed: "Doberman",
    image: "doberman.jpg",
    size: "Grande",
    countryOrigin: "Alemanha",
    colors: ["Preto e marrom", "Marrom", "Azul", "Isabela"],
    lifeExpectancy: "10 a 13 anos",
    adultWeightKg: "30 a 45 kg",
    classification: ["Guarda", "Companhia"],
    description: "Elegante, protetor e obediente, o Doberman é ótimo para guarda. Requer espaço, liderança firme e atenção constante."
  },
  {
    id: 15,
    breed: "Husky Siberiano",
    image: "husky_siberiano.jpg",
    size: "Grande",
    countryOrigin: "Rússia",
    colors: ["Cinza", "Preto e branco", "Vermelho", "Branco"],
    lifeExpectancy: "12 a 14 anos",
    adultWeightKg: "20 a 27 kg",
    classification: ["Companhia", "Competições de agilidade"],
    description: "Independente e energético, o Husky adora correr e é sensível ao calor. Prefere ambientes frios e espaços amplos, como casas com quintal."
  },
  {
    id: 16,
    breed: "Chihuahua",
    image: "chihuahua.jpg",
    size: "Pequeno",
    countryOrigin: "México",
    colors: ["Marrom", "Preto", "Branco", "Dourado", "Mesclado"],
    lifeExpectancy: "14 a 17 anos",
    adultWeightKg: "1,5 a 3 kg",
    classification: ["Companhia"],
    description: "Pequeno e alerta, o Chihuahua é ideal para apartamentos e tutores tranquilos. Gosta de colo, mas pode ser desconfiado com estranhos."
  },
  {
    id: 17,
    breed: "Pug",
    image: "pug.jpg",
    size: "Pequeno",
    countryOrigin: "China",
    colors: ["Caramelo", "Preto", "Cinza", "Abricot"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "6 a 9 kg",
    classification: ["Companhia"],
    description: "Afetuoso e divertido, o Pug é perfeito para apartamentos. Requer atenção com a respiração e não tolera muito calor ou exercícios intensos."
  },
  {
    id: 18,
    breed: "Vira-lata",
    image: "vira_lata.jpg",
    size: "Médio",
    countryOrigin: "Brasil",
    colors: ["Preto", "Caramelo", "Branco", "Mesclado"],
    lifeExpectancy: "12 a 16 anos",
    adultWeightKg: "10 a 25 kg",
    classification: ["Companhia", "Guarda"],
    description: "Versátil, resistente e amoroso, o Vira-lata se adapta bem a diferentes ambientes. Cada um tem uma personalidade única, ideal para quem busca um companheiro fiel."
  },
  {
    id: 19,
    breed: "Cocker Spaniel",
    image: "cocker_spaniel.jpg",
    size: "Médio",
    countryOrigin: "Reino Unido",
    colors: ["Dourado", "Preto", "Marrom", "Tricolor", "Azul ruão"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "12 a 15 kg",
    classification: ["Caça", "Companhia"],
    description: "Meigo e sociável, o Cocker é ótimo para crianças e vive bem em apartamentos ou casas. Precisa de escovação frequente e passeios diários."
  },
  {
    id: 20,
    breed: "Maltês",
    image: "maltes.jpg",
    size: "Pequeno",
    countryOrigin: "Itália",
    colors: ["Branco"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "3 a 4 kg",
    classification: ["Companhia"],
    description: "Delicado e muito apegado, o Maltês se adapta bem a apartamentos. Seus pelos exigem escovação constante, e ele adora colo e atenção."
  },
  {
    id: 21,
    breed: "Fila Brasileiro",
    image: "fila_brasileiro.jpg",
    size: "Grande",
    countryOrigin: "Brasil",
    colors: ["Caramelo", "Tigrado", "Preto"],
    lifeExpectancy: "9 a 11 anos",
    adultWeightKg: "40 a 60 kg",
    classification: ["Guarda", "Caça"],
    description: "Imponente e territorialista, o Fila exige espaço, adestramento e socialização. Ideal para grandes propriedades e tutores experientes."
  },
  {
    id: 22,
    breed: "Fox Paulistinha",
    image: "fox_paulistinha.jpg",
    size: "Médio",
    countryOrigin: "Brasil",
    colors: ["Tricolor"],
    lifeExpectancy: "13 a 16 anos",
    adultWeightKg: "6 a 10 kg",
    classification: ["Companhia", "Competições de agilidade"],
    description: "Ágil, leal e muito esperto, o Fox Paulistinha é ótimo para quem vive em casas ou apartamentos com rotina ativa. Ama brincar e aprender truques."
  },
  {
    id: 23,
    breed: "Spitz Alemão (Lulu da Pomerânia)",
    image: "spitz_alemao.jpg",
    size: "Pequeno",
    countryOrigin: "Alemanha",
    colors: ["Laranja", "Branco", "Preto", "Marrom", "Creme"],
    lifeExpectancy: "12 a 16 anos",
    adultWeightKg: "1,5 a 3,5 kg",
    classification: ["Companhia"],
    description: "Pequeno, animado e muito apegado ao tutor, o Spitz Alemão é ideal para apartamentos. Gosta de atenção e cuidados com os pelos são essenciais para manter sua beleza."
  },
  {
    id: 24,
    breed: "Pitbull Terrier Americano",
    image: "pitbull.jpg",
    size: "Médio",
    countryOrigin: "Estados Unidos",
    colors: ["Preto", "Branco", "Caramelo", "Tigrado", "Cinza"],
    lifeExpectancy: "12 a 14 anos",
    adultWeightKg: "14 a 30 kg",
    classification: ["Companhia", "Guarda"],
    description: "Forte, leal e inteligente, o Pitbull é um excelente companheiro para tutores firmes e ativos. Requer socialização desde cedo e vive melhor em casas com espaço para se exercitar."
  },
  {
    id: 25,
    breed: "Dálmata",
    image: "dalmata.jpg",
    size: "Médio",
    countryOrigin: "Croácia",
    colors: ["Branco e preto", "Branco e marrom"],
    lifeExpectancy: "10 a 13 anos",
    adultWeightKg: "22 a 32 kg",
    classification: ["Companhia", "Guarda", "Caça"],
    description: "O Dálmata é um cão enérgico e extrovertido, famoso por sua pelagem manchada. Ele é excelente para famílias ativas e precisa de bastante exercício para se manter saudável e feliz. Seu instinto protetor e lealdade fazem dele um ótimo companheiro."
  },
  {
    id: 26,
    breed: "Lhasa Apso",
    image: "lhasa_apso.jpg",
    size: "Pequeno",
    countryOrigin: "China",
    colors: ["Dourado", "Preto", "Branco", "Mesclado", "Cinza"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "5 a 8 kg",
    classification: ["Companhia"],
    description: "Independente, calmo e protetor, o Lhasa Apso vive muito bem em apartamentos. Exige escovação frequente e costuma ser reservado com estranhos."
  },
  {
    id: 27,
    breed: "Akita Inu",
    image: "akita_inu.jpg",
    size: "Grande",
    countryOrigin: "Japão",
    colors: ["Vermelho", "Branco", "Tigrado", "Gergelim"],
    lifeExpectancy: "10 a 13 anos",
    adultWeightKg: "30 a 50 kg",
    classification: ["Guarda", "Companhia"],
    description: "Silencioso, fiel e imponente, o Akita Inu é indicado para tutores experientes. Vive melhor em locais espaçosos e com socialização adequada desde filhote."
  },
  {
    id: 28,
    breed: "Cão de Crista Chinês",
    image: "cao_crista_chines.jpg",
    size: "Pequeno",
    countryOrigin: "China",
    colors: ["Rosa", "Cinza", "Preto", "Branco", "Manchado"],
    lifeExpectancy: "13 a 15 anos",
    adultWeightKg: "3 a 6 kg",
    classification: ["Companhia"],
    description: "Exótico, brincalhão e afetuoso, o Cão de Crista Chinês é ideal para apartamentos e lares tranquilos. Exige cuidados com a pele, principalmente se for da variedade sem pelos."
  },
  {
    id: 29,
    breed: "Weimaraner",
    image: "weimaraner.jpg",
    size: "Grande",
    countryOrigin: "Alemanha",
    colors: ["Cinza-prateado"],
    lifeExpectancy: "10 a 13 anos",
    adultWeightKg: "25 a 40 kg",
    classification: ["Caça", "Companhia"],
    description: "Elegante, atlético e inteligente, o Weimaraner precisa de muito exercício e estímulo mental. Vive melhor em casas com quintal e com tutores ativos."
  },
  {
    id: 30,
    breed: "São Bernardo",
    image: 'sao_bernardo.jpg',
    size: 'Grande',
    countryOrigin: 'Suíça',
    colors: ['Branco e marrom', 'Branco e vermelho', 'Tigrado'],
    lifeExpectancy: '8 a 10 anos',
    adultWeightKg: '55 a 80 kg',
    classification: ['Guarda', 'Companhia', 'Resgate'],
    description: "Gentil, paciente e protetor, o São Bernardo é ideal para casas espaçosas ou zonas rurais. Apesar do tamanho imponente, é excelente com crianças, mas precisa de espaço, escovação regular e atenção ao calor."
  },
  {
    id: 31,
    breed: "Pastor Belga",
    image: "pastor_belga.jpg",
    size: "Grande",
    countryOrigin: "Bélgica",
    colors: ["Preto", "Marrom", "Tigrado"],
    lifeExpectancy: "12 a 14 anos",
    adultWeightKg: "25 a 30 kg",
    classification: ["Guarda", "Trabalho"],
    description: "O Pastor Belga é ágil, inteligente e muito leal. Usado em forças policiais, exige atividades físicas e mentais diárias."
  },
  {
    id: 32,
    breed: "Pinscher Miniatura",
    image: "pinscher.jpg",
    size: "Pequeno",
    countryOrigin: "Alemanha",
    colors: ["Preto e castanho", "Marrom", "Caramelo"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "3 a 5 kg",
    classification: ["Companhia"],
    description: "Valente e energético, o Pinscher é um ótimo cão de alerta. Requer socialização desde filhote para evitar comportamento agressivo."
  },
  {
    id: 33,
    breed: "Dogo Argentino",
    image: "dogo_argentino.jpg",
    size: "Grande",
    countryOrigin: "Argentina",
    colors: ["Branco"],
    lifeExpectancy: "10 a 12 anos",
    adultWeightKg: "40 a 45 kg",
    classification: ["Caça", "Guarda"],
    description: "O Dogo Argentino é uma raça forte e atlética, criada originalmente na Argentina para caça de animais grandes como javalis. É corajoso, leal e protetor, exigindo um tutor experiente, com socialização e adestramento desde cedo. Apesar de sua aparência intimidadora, pode ser afetuoso com a família."
  },
  {
    id: 34,
    breed: "Boston Terrier",
    image: "boston_terrier.jpg",
    size: "Pequeno",
    countryOrigin: "Estados Unidos",
    colors: ["Preto e branco", "Tigrado", "Marrom e branco"],
    lifeExpectancy: "11 a 13 anos",
    adultWeightKg: "6 a 11 kg",
    classification: ["Companhia"],
    description: "Afetuoso, brincalhão e sociável, o Boston Terrier se adapta bem a apartamentos e é ideal para famílias."
  },
  {
    id: 35,
    breed: "Boiadeiro Australiano",
    image: "boiadeiro_australiano.jpg",
    size: "Médio",
    countryOrigin: "Austrália",
    colors: ["Azul", "Vermelho"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "14 a 22 kg",
    classification: ["Pastoreio", "Caça"],
    description: "Ágil, inteligente e muito resistente, o Boiadeiro Australiano é excelente para atividades no campo e esportes caninos."
  },
  {
    id: 36,
    breed: "Cane Corso",
    image: "cane_corso.jpg",
    size: "Grande",
    countryOrigin: "Itália",
    colors: ["Preto", "Cinza", "Tigrado", "Marrom"],
    lifeExpectancy: "9 a 12 anos",
    adultWeightKg: "40 a 50 kg",
    classification: ["Guarda"],
    description: "Robusto e protetor, o Cane Corso é fiel à sua família. Precisa de adestramento firme e bastante espaço."
  },
  {
    id: 37,
    breed: "Shar Pei",
    image: "shar_pei.jpg",
    size: "Médio",
    countryOrigin: "China",
    colors: ["Bege", "Preto", "Marrom", "Azul"],
    lifeExpectancy: "8 a 12 anos",
    adultWeightKg: "18 a 25 kg",
    classification: ["Companhia"],
    description: "Com rugas marcantes e personalidade reservada, o Shar Pei é calmo e fiel, mas precisa de socialização desde cedo."
  },
  {
    id: 38,
    breed: "Kangal",
    image: "kangal.jpg",
    size: "Grande",
    countryOrigin: "Turquia",
    colors: ["Cinza", "Bege", "Amarelo", "Preto"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "50kg a 66kg",
    classification: ["Guarda", "Caça", "Pastoreio"],
    description: "O Kangal é uma raça originária da Turquia, conhecida por sua força, coragem e instinto protetor. Tradicionalmente usado para proteger rebanhos, e é extremamente leal à sua família. Apesar de seu tamanho imponente, é calmo, equilibrado e gentil.",
  },
  {
    id: 39,
    breed: "Whippet",
    image: "whippet.jpg",
    size: "Médio",
    countryOrigin: "Reino Unido",
    colors: ["Preto", "Branco", "Tigrado", "Cinza", "Branco e preto"],
    lifeExpectancy: "12 a 15 anos",
    adultWeightKg: "10 a 15 kg",
    classification: ["Corrida", "Companhia"],
    description: "Rápido, sensível e elegante, o Whippet é ótimo para quem quer um cão calmo em casa, mas com energia para correr ao ar livre."
  },
  {
    id: 40,
    breed: "Ovelheiro Gaúcho",
    image: "ovelheiro_gaucho.jpg",
    size: "Grande",
    countryOrigin: "Brasil",
    colors: ["Preto", "Branco", "Cinza", "Azul", "Tricolor"],
    lifeExpectancy: "13 a 15 anos",
    adultWeightKg: "25 a 40 kg",
    classification: ["Pastoreio", "Guarda", "Companhia"],
    description: "O Ovelheiro Gaúcho é uma raça brasileira, conhecida por sua inteligência, energia e forte instinto de pastoreio. Adaptado ao clima do sul do Brasil, é resistente, leal e excelente para trabalhar com rebanhos. Sociável com a família, mas pode ser reservado com estranhos."
  }
];

export const getDogs = {
  getAll: (offset: number, limit: number): dogData[] => {
    return data.slice(offset, offset + limit);
  },
  getFromBreed: (breed: string): dogData[] => {
    return data.filter(i => i.breed.toLowerCase().indexOf(breed.toLowerCase()) > -1)
  },
  getFromSize: (size: size): dogData[] => {
    return data.filter(i => i.size === size);
  },
  getFromColors: (colors: string): dogData[] => {
    return data.filter(i => i.colors.includes(colors));
  },
  getFromCountry: (country: string): dogData[] => {
    return data.filter(i => i.countryOrigin === country)
  },
  getFromId: (id: number): dogData => {
    return data.find(i => i.id === id)!;
  }
}