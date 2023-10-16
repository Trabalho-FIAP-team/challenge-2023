import {Event, Game, TeamMember, Testimonial} from "@/types"

export const games:Game[] = [
  {
    gameTitle: "Topeira Sustentável",
    description: "Acerte as topeiras que contém alimentos saudáveis",
    gameId: "bb660205fb904ff0b6c6bddd924d986c?themeId=22&templateId=45&fontStackId=0",
    emote: "🦫"
  },
  {
    gameTitle: "Jogo da Memória",
    description: "sei la sei la sei la sei la sei la sei la sei la sei la sei la sei la!",
    gameId: "96f8ff22a88d415a9ecf2796bd0212a2?themeId=49&templateId=3&fontStackId=0",
    emote: '🧩'
  },
  {
    gameTitle: "PacMan",
    description: "Teste seus conhecimentos de sustentabilidade",
    gameId: "3cf4624e7efc477db2b209377e35c181?themeId=23&templateId=49&fontStackId=0",
    emote: '🕹️'
  },
  {
    gameTitle: "Quiz dos 5R's",
    description: "Teste seus conhecimentos de sustentabilidade",
    gameId: "96f8ff22a88d415a9ecf2796bd0212a2?themeId=49&templateId=3&fontStackId=0",
    emote: '❓'
  },
  {
    gameTitle: "PacMan",
    description: "Teste seus conhecimentos de sustentabilidade",
    gameId: "3cf4624e7efc477db2b209377e35c181?themeId=23&templateId=49&fontStackId=0",
    emote: '❓'
  },
  {
    gameTitle: "Quiz dos 5R's",
    description: "Teste seus conhecimentos de sustentabilidade",
    gameId: "96f8ff22a88d415a9ecf2796bd0212a2?themeId=49&templateId=3&fontStackId=0",
    emote: '❓'
  },
]

export const team: TeamMember[] = [
  {
    name: "Rafael Jesus",
    memberRm: "98296",
    description: "Engenheiro Frontend e Líder de Projeto",
    image: 'https://github.com/RafaelRMJesus.png',
    github: 'RafaelRMJesus',
    instagram: 'rafael.rocha.mj'
  },
  {
    name: "Henrique Melo",
    memberRm: "99397",
    description: "Engenheiro Frontend e Gestor de Projeto",
    image: 'https://github.com/hemelo.png',
    github: 'hemelo',
    instagram: 'hmelo2509'
  },
  {
    name: "Eduardo Guimarães",
    memberRm: "98778",
    description: "Engenheiro Frontend e Dev. Advocate",
    image: 'https://github.com/duardolv.png',
    github: 'duardolv',
    instagram: 'duardolv'
  },
  {
    name: "Vinícius Britto",
    memberRm: "99655",
    description: "Engenheiro Frontend e Gestor de Comunidades",
    image: 'https://github.com/SmileySZ.png',
    github: 'SmileySZ',
  },
  {
    name: "Rafael Cordeiro",
    memberRm: "97668",
    description: "Engenheiro Frontend e Gestor de Mídia Social",
    image: 'https://github.com/fodase.png',
    github: 'rafaeldossantos04',
    instagram: 'rafaeldossantos04'
  }
]

export const testimonials: Testimonial[] = [
  {
    name: "Jane Doe",
    role: "Diretora Executiva",
    company: "GreenSolutions",
    text: "Nossa parceria com a Schneider Electric trouxe inovação e sustentabilidade para nosso negócio, transformando nossa visão em realidade.",
    authorImage: "/images/testimonials/jane-joe.jpg"
  },
  {
    name: "André Souza",
    role: "Especialista em Energia Renovável",
    company: "Schneider Electric",
    text: "Minha carreira na Schneider Electric me permitiu ser parte ativa na transformação do setor energético. Estamos moldando um futuro sustentável e sou grato por fazer parte desse movimento.",
    authorImage: "/images/testimonials/andre-souza.jpg"
  },
  {
    name: "Mark Smith",
    role: "Fundador",
    company: "EcoTech Innovations",
    text: "A Schneider Electric provou ser uma parceira fundamental em nossa jornada rumo à sustentabilidade, fornecendo soluções inteligentes e comprometimento com o meio ambiente.",
    authorImage: "/images/testimonials/mark-smith.jpg"
  },
  {
    name: "Sarah Jones",
    role: "Gerente de Operações",
    company: "EarthCare",
    text: "A Schneider Electric está à frente quando se trata de criar soluções inovadoras para um futuro sustentável. É uma parceria que valorizamos muito.",
    authorImage: "/images/testimonials/sarah-jones.jpg"
  },
  {
    name: "Maria Silva",
    role: "Engenheira de Sustentabilidade",
    company: "Schneider Electric",
    text: "Na Schneider Electric, encontrei um ambiente que valoriza a inovação e o compromisso com um planeta mais verde. Estou orgulhosa de fazer parte dessa jornada rumo à sustentabilidade.",
    authorImage: "/images/testimonials/maria-silva.jpg"
  },
  {
    name: "Mark Smith",
    role: "Fundador",
    company: "EcoTech Innovations",
    text: "A Schneider Electric provou ser uma parceira fundamental em nossa jornada rumo à sustentabilidade, fornecendo soluções inteligentes e comprometimento com o meio ambiente.",
    authorImage: "/images/testimonials/mark-smith.jpg"
  },
  {
    name: "Sarah Jones",
    role: "Gerente de Operações",
    company: "EarthCare",
    text: "A Schneider Electric está à frente quando se trata de criar soluções inovadoras para um futuro sustentável. É uma parceria que valorizamos muito.",
    authorImage: "/images/testimonials/sarah-jones.jpg"
  },
  {
    name: "Maria Silva",
    role: "Engenheira de Sustentabilidade",
    company: "Schneider Electric",
    text: "Na Schneider Electric, encontrei um ambiente que valoriza a inovação e o compromisso com um planeta mais verde. Estou orgulhosa de fazer parte dessa jornada rumo à sustentabilidade.",
    authorImage: "/images/testimonials/maria-silva.jpg"
  }
]

export const events: Event[] =[
  {
    eventImage: "https://picsum.photos/id/200/348/185",
    thumb: "https://picsum.photos/id/200/800/400",
    eventTitle: "Workshop de Eficiência Elétrica",
    eventAuthor: "Schneider Electric",
    eventData: "2023-09-15",
    eventText: "Junte-se a nós no Workshop de Eficiência Energética da Schneider Electric, onde exploraremos as melhores práticas e soluções para otimizar o consumo de energia em diversos setores. Especialistas da empresa irão compartilhar suas visões e experiências, e você terá a oportunidade de interagir e aprender com colegas de diversas áreas.",
    eventId: '1'
  },
  {
    eventImage: "https://picsum.photos/id/201/348/185",
    thumb: "https://picsum.photos/id/201/800/400",
    eventTitle: "Seminário de Inovação Tecnológica",
    eventAuthor: "Tech Innovation Institute",
    eventData: "2023-10-20",
    eventText: "Participe do nosso Seminário de Inovação Tecnológica e descubra as últimas tendências e avanços em tecnologia. Este evento é uma oportunidade única para aprender com os líderes da indústria e explorar as inovações que estão moldando o futuro.",
    eventId: '2'
  },
  {
    eventImage: "https://picsum.photos/id/202/348/185",
    thumb: "https://picsum.photos/id/202/800/400",
    eventTitle: "Conferência de Sustentabilidade",
    eventAuthor: "Green Earth Foundation",
    eventData: "2023-11-15",
    eventText: "Junte-se a nós na Conferência de Sustentabilidade Ambiental, onde discutiremos as questões ambientais mais urgentes e as soluções para um futuro sustentável. Especialistas em meio ambiente e sustentabilidade compartilharão suas ideias e insights valiosos.",
    eventId: '3'
  },
  {
    eventImage: "https://picsum.photos/id/203/348/185",
    thumb: "https://picsum.photos/id/203/800/400",
    eventTitle: "Workshop de Desenvolvimento de Aplicativos",
    eventAuthor: "Code Masters",
    eventData: "2023-12-10",
    eventText: "Participe do nosso Workshop de Desenvolvimento de Aplicativos e aprimore suas habilidades em programação e desenvolvimento de software. Nossos instrutores experientes o guiarão através de projetos práticos e desafios emocionantes.",
    eventId: '4'
  },
  {
    eventImage: "https://picsum.photos/id/204/348/185",
    thumb: "https://picsum.photos/id/204/800/400",
    eventTitle: "Conferência de Marketing Digital",
    eventAuthor: "Digital Marketing Institute",
    eventData: "2024-01-20",
    eventText: "Não perca a Conferência de Marketing Digital, onde os especialistas em marketing digital compartilharão estratégias avançadas para o sucesso online. Descubra as táticas mais recentes e eficazes para promover sua marca na era digital.",
    eventId: '5'
  },
  {
    eventImage: "https://picsum.photos/id/205/348/185",
    thumb: "https://picsum.photos/id/205/800/400",
    eventTitle: "Simpósio de Inteligência Artificial",
    eventAuthor: "AI Innovations",
    eventData: "2024-02-15",
    eventText: "Participe do Simpósio de Inteligência Artificial e mergulhe no mundo da IA. Palestrantes renomados compartilharão os desenvolvimentos mais recentes em aprendizado de máquina, visão computacional e muito mais.",
    eventId: '6'
  }
]