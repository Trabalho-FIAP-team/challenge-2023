import {Event, Game, TeamMember, Testimonial} from "@/types"

export const games:Game[] = [
  {
    gameTitle: "Topeira Sustentável",
    description: "Acerte as topeiras que contém alimentos saudáveis",
    gameId: "bb660205fb904ff0b6c6bddd924d986c?themeId=22&templateId=45&fontStackId=0",
    emote: "🦫"
  },
  {
    gameTitle: "Quiz dos 5'rs",
    description: "Complete os campos corretamente e some pontos!",
    gameId: "96f8ff22a88d415a9ecf2796bd0212a2?themeId=49&templateId=3&fontStackId=0",
    emote: '🧩'
  },
  {
    gameTitle: "PacMan",
    description: "Fuja dos fantasmas enquanto aprende sobre sustentabilidade",
    gameId: "3cf4624e7efc477db2b209377e35c181?themeId=23&templateId=49&fontStackId=0",
    emote: '🕹️'
  },
  {
    gameTitle: "Jogo do Milhão sustentável",
    description: "Acerte o máximo de perguntas na sequência",
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
    image: 'https://github.com/katiauzin.png',
    github: 'katiauzin',
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