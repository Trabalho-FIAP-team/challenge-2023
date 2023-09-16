
import { Event, Game, teamMember } from "@/types"


export const events:Event[] = [
  {
    imagem: "https://picsum.photos/id/247/348/185",
    imagemEvent: "https://picsum.photos/id/247/1520/318",
    eventTitle: "Workshop de Eficiência Elétrica 2023",
    eventAuthor: "Schneider Electric",
    eventData: "2023-09-15",
    eventText: "Junte-se a nós no Workshop de Eficiência Energética da Schneider Electric, onde exploraremos as melhores práticas e soluções para otimizar o consumo de energia em diversos setores. Especialistas da empresa irão compartilhar suas visões e experiências, e você terá a oportunidade de interagir e aprender com colegas de diversas áreas.",
    eventId: '1'
  },
  {
    imagem: "https://picsum.photos/id/201/348/185",
    imagemEvent: "https://picsum.photos/id/201/1520/318",
    eventTitle: "Seminário de Inovação Tecnológica",
    eventAuthor: "Tech Inc Institute",
    eventData: "2023-10-20",
    eventText: "Participe do nosso Seminário de Inovação Tecnológica e descubra as últimas tendências e avanços em tecnologia. Este evento é uma oportunidade única para aprender com os líderes da indústria e explorar as inovações que estão moldando o futuro.",
    eventId: '2'
  },
  {
    imagem: "https://picsum.photos/id/202/348/185",
    imagemEvent: "https://picsum.photos/id/202/1520/318",
    eventTitle: "Conferência de Sustentabilidade",
    eventAuthor: "Green Earth Foundation",
    eventData: "2023-11-15",
    eventText: "Junte-se a nós na Conferência de Sustentabilidade Ambiental, onde discutiremos as questões ambientais mais urgentes e as soluções para um futuro sustentável. Especialistas em meio ambiente e sustentabilidade compartilharão suas ideias e insights valiosos.",
    eventId: '3'
  },
  {
    imagem: "https://picsum.photos/id/218/348/185",
    imagemEvent: "https://picsum.photos/id/218/1520/318",
    eventTitle: "Workshop de desenvolvimento de fodase",
    eventAuthor: "Code Masters",
    eventData: "2023-12-10",
    eventText: "Participe do nosso Workshop de desenvolvimento de fodase e aprimore suas habilidades em programação e desenvolvimento de software. Nossos instrutores experientes o guiarão através de projetos práticos e desafios emocionantes.",
    eventId: '4'
  },
  {
    imagem: "https://picsum.photos/id/301/348/185",
    imagemEvent: "https://picsum.photos/id/301/1520/318",
    eventTitle: "Conferência de Marketing Digital",
    eventAuthor: "Digital Marketing Institute",
    eventData: "2024-01-20",
    eventText: "Não perca a Conferência de Marketing Digital, onde os especialistas em marketing digital compartilharão estratégias avançadas para o sucesso online. Descubra as táticas mais recentes e eficazes para promover sua marca na era digital.",
    eventId: '5'
  },
  {
    imagem: "https://picsum.photos/id/211/348/185",
    imagemEvent: "https://picsum.photos/id/211/1520/318",
    eventTitle: "Simpósio de Inteligência Artificial",
    eventAuthor: "AI Incs",
    eventData: "2024-02-15",
    eventText: "Participe do Simpósio de Inteligência Artificial e mergulhe no mundo da IA. Palestrantes renomados compartilharão os desenvolvimentos mais recentes em aprendizado de máquina, visão computacional e muito mais.",
    eventId: '6'
  },
  {
    imagem: "https://picsum.photos/id/247/348/185",
    imagemEvent: "https://picsum.photos/id/247/1520/318",
    eventTitle: "Workshop de Eficiência Elétrica 2023",
    eventAuthor: "Schneider Electric",
    eventData: "2023-09-15",
    eventText: "Junte-se a nós no Workshop de Eficiência Energética da Schneider Electric, onde exploraremos as melhores práticas e soluções para otimizar o consumo de energia em diversos setores. Especialistas da empresa irão compartilhar suas visões e experiências, e você terá a oportunidade de interagir e aprender com colegas de diversas áreas.",
    eventId: '7'
  },
  {
    imagem: "https://picsum.photos/id/201/348/185",
    imagemEvent: "https://picsum.photos/id/201/1520/318",
    eventTitle: "Seminário de Inovação Tecnológica",
    eventAuthor: "Tech Inc Institute",
    eventData: "2023-10-20",
    eventText: "Participe do nosso Seminário de Inovação Tecnológica e descubra as últimas tendências e avanços em tecnologia. Este evento é uma oportunidade única para aprender com os líderes da indústria e explorar as inovações que estão moldando o futuro.",
    eventId: '8'
  },
  {
    imagem: "https://picsum.photos/id/202/348/185",
    imagemEvent: "https://picsum.photos/id/202/1520/318",
    eventTitle: "Conferência de Sustentabilidade",
    eventAuthor: "Green Earth Foundation",
    eventData: "2023-11-15",
    eventText: "Junte-se a nós na Conferência de Sustentabilidade Ambiental, onde discutiremos as questões ambientais mais urgentes e as soluções para um futuro sustentável. Especialistas em meio ambiente e sustentabilidade compartilharão suas ideias e insights valiosos.",
    eventId: '9'
  },
  {
    imagem: "https://picsum.photos/id/218/348/185",
    imagemEvent: "https://picsum.photos/id/218/1520/318",
    eventTitle: "Workshop de desenvolvimento de fodase",
    eventAuthor: "Code Masters",
    eventData: "2023-12-10",
    eventText: "Participe do nosso Workshop de desenvolvimento de fodase e aprimore suas habilidades em programação e desenvolvimento de software. Nossos instrutores experientes o guiarão através de projetos práticos e desafios emocionantes.",
    eventId: '10'
  },
  {
    imagem: "https://picsum.photos/id/301/348/185",
    imagemEvent: "https://picsum.photos/id/301/1520/318",
    eventTitle: "Conferência de Marketing Digital",
    eventAuthor: "Digital Makt Institute",
    eventData: "2024-01-20",
    eventText: "Não perca a Conferência de Marketing Digital, onde os especialistas em marketing digital compartilharão estratégias avançadas para o sucesso online. Descubra as táticas mais recentes e eficazes para promover sua marca na era digital.",
    eventId: '11'
  },
  {
    imagem: "https://picsum.photos/id/211/348/185",
    imagemEvent: "https://picsum.photos/id/211/1520/318",
    eventTitle: "Simpósio de Inteligência Artificial",
    eventAuthor: "AI Incs",
    eventData: "2024-02-15",
    eventText: "Participe do Simpósio de Inteligência Artificial e mergulhe no mundo da IA. Palestrantes renomados compartilharão os desenvolvimentos mais recentes em aprendizado de máquina, visão computacional e muito mais.",
    eventId: '12'
  },
  {
    imagem: "https://picsum.photos/id/247/348/185",
    imagemEvent: "https://picsum.photos/id/247/1520/318",
    eventTitle: "Workshop de Eficiência Elétrica 2023",
    eventAuthor: "Schneider Electric",
    eventData: "2023-09-15",
    eventText: "Junte-se a nós no Workshop de Eficiência Energética da Schneider Electric, onde exploraremos as melhores práticas e soluções para otimizar o consumo de energia em diversos setores. Especialistas da empresa irão compartilhar suas visões e experiências, e você terá a oportunidade de interagir e aprender com colegas de diversas áreas.",
    eventId: '13'
  },
  {
    imagem: "https://picsum.photos/id/201/348/185",
    imagemEvent: "https://picsum.photos/id/201/1520/318",
    eventTitle: "Seminário de Inovação Tecnológica",
    eventAuthor: "Tech Inc Institute",
    eventData: "2023-10-20",
    eventText: "Participe do nosso Seminário de Inovação Tecnológica e descubra as últimas tendências e avanços em tecnologia. Este evento é uma oportunidade única para aprender com os líderes da indústria e explorar as inovações que estão moldando o futuro.",
    eventId: '14'
  },
  {
    imagem: "https://picsum.photos/id/202/348/185",
    imagemEvent: "https://picsum.photos/id/202/1520/318",
    eventTitle: "Conferência de Sustentabilidade",
    eventAuthor: "Green Earth Foundation",
    eventData: "2023-11-15",
    eventText: "Junte-se a nós na Conferência de Sustentabilidade Ambiental, onde discutiremos as questões ambientais mais urgentes e as soluções para um futuro sustentável. Especialistas em meio ambiente e sustentabilidade compartilharão suas ideias e insights valiosos.",
    eventId: '15'
  },
  {
    imagem: "https://picsum.photos/id/218/348/185",
    imagemEvent: "https://picsum.photos/id/218/1520/318",
    eventTitle: "Workshop de desenvolvimento de fodase",
    eventAuthor: "Code Masters",
    eventData: "2023-12-10",
    eventText: "Participe do nosso Workshop de desenvolvimento de fodase e aprimore suas habilidades em programação e desenvolvimento de software. Nossos instrutores experientes o guiarão através de projetos práticos e desafios emocionantes.",
    eventId: '16'
  },
  {
    imagem: "https://picsum.photos/id/301/348/185",
    imagemEvent: "https://picsum.photos/id/301/1520/318",
    eventTitle: "Conferência de Marketing Digital",
    eventAuthor: "Digital Marketing Institute",
    eventData: "2024-01-20",
    eventText: "Não perca a Conferência de Marketing Digital, onde os especialistas em marketing digital compartilharão estratégias avançadas para o sucesso online. Descubra as táticas mais recentes e eficazes para promover sua marca na era digital.",
    eventId: '17'
  },
  {
    imagem: "https://picsum.photos/id/211/348/185",
    imagemEvent: "https://picsum.photos/id/211/1520/318",
    eventTitle: "Simpósio de Inteligência Artificial",
    eventAuthor: "AI Incs",
    eventData: "2024-02-15",
    eventText: "Participe do Simpósio de Inteligência Artificial e mergulhe no mundo da IA. Palestrantes renomados compartilharão os desenvolvimentos mais recentes em aprendizado de máquina, visão computacional e muito mais.",
    eventId: '18'
  },
  {
    imagem: "https://picsum.photos/id/247/348/185",
    imagemEvent: "https://picsum.photos/id/247/1520/318",
    eventTitle: "Workshop de Eficiência Elétrica 2023",
    eventAuthor: "Schneider Electric",
    eventData: "2023-09-15",
    eventText: "Junte-se a nós no Workshop de Eficiência Energética da Schneider Electric, onde exploraremos as melhores práticas e soluções para otimizar o consumo de energia em diversos setores. Especialistas da empresa irão compartilhar suas visões e experiências, e você terá a oportunidade de interagir e aprender com colegas de diversas áreas.",
    eventId: '19'
  },
  {
    imagem: "https://picsum.photos/id/201/348/185",
    imagemEvent: "https://picsum.photos/id/201/1520/318",
    eventTitle: "Seminário de Inovação Tecnológica",
    eventAuthor: "Tech Inc Institute",
    eventData: "2023-10-20",
    eventText: "Participe do nosso Seminário de Inovação Tecnológica e descubra as últimas tendências e avanços em tecnologia. Este evento é uma oportunidade única para aprender com os líderes da indústria e explorar as inovações que estão moldando o futuro.",
    eventId: '20'
  },
  {
    imagem: "https://picsum.photos/id/202/348/185",
    imagemEvent: "https://picsum.photos/id/202/1520/318",
    eventTitle: "Conferência de Sustentabilidade",
    eventAuthor: "Green Earth Foundation",
    eventData: "2023-11-15",
    eventText: "Junte-se a nós na Conferência de Sustentabilidade Ambiental, onde discutiremos as questões ambientais mais urgentes e as soluções para um futuro sustentável. Especialistas em meio ambiente e sustentabilidade compartilharão suas ideias e insights valiosos.",
    eventId: '21'
  },
  {
    imagem: "https://picsum.photos/id/218/348/185",
    imagemEvent: "https://picsum.photos/id/218/1520/318",
    eventTitle: "Workshop de desenvolvimento de fodase",
    eventAuthor: "Code Masters",
    eventData: "2023-12-10",
    eventText: "Participe do nosso Workshop de desenvolvimento de fodase e aprimore suas habilidades em programação e desenvolvimento de software. Nossos instrutores experientes o guiarão através de projetos práticos e desafios emocionantes.",
    eventId: '22'
  },
  {
    imagem: "https://picsum.photos/id/301/348/185",
    imagemEvent: "https://picsum.photos/id/301/1520/318",
    eventTitle: "Conferência de Marketing Digital",
    eventAuthor: "Digital Marketing Institute",
    eventData: "2024-01-20",
    eventText: "Não perca a Conferência de Marketing Digital, onde os especialistas em marketing digital compartilharão estratégias avançadas para o sucesso online. Descubra as táticas mais recentes e eficazes para promover sua marca na era digital.",
    eventId: '23'
  },
  {
    imagem: "https://picsum.photos/id/211/348/185",
    imagemEvent: "https://picsum.photos/id/211/1520/318",
    eventTitle: "Simpósio de Inteligência Artificial",
    eventAuthor: "AI Incs",
    eventData: "2024-02-15",
    eventText: "Participe do Simpósio de Inteligência Artificial e mergulhe no mundo da IA. Palestrantes renomados compartilharão os desenvolvimentos mais recentes em aprendizado de máquina, visão computacional e muito mais.",
    eventId: '24'
  },
  
]

export const games:Game[] = [
  {
    gameTitle: "Topeira Sustentável",
    description: "Acerte as topeiras que contém alimentos saudáveis",
    gameId: "bb660205fb904ff0b6c6bddd924d986c?themeId=22&templateId=45&fontStackId=0"
  },
  {
    gameTitle: "Jogo da Memória",
    description: "sei la sei la sei la sei la sei la sei la sei la sei la sei la sei la!",
    gameId: "96f8ff22a88d415a9ecf2796bd0212a2?themeId=49&templateId=3&fontStackId=0"
  },
  {
    gameTitle: "PacMan",
    description: "Teste seus conhecimentos de sustentabilidade",
    gameId: "3cf4624e7efc477db2b209377e35c181?themeId=23&templateId=49&fontStackId=0"
  },
  {
    gameTitle: "Quiz dos 5R's",
    description: "Teste seus conhecimentos de sustentabilidade",
    gameId: "96f8ff22a88d415a9ecf2796bd0212a2?themeId=49&templateId=3&fontStackId=0"
  },
  {
    gameTitle: "PacMan",
    description: "Teste seus conhecimentos de sustentabilidade",
    gameId: "3cf4624e7efc477db2b209377e35c181?themeId=23&templateId=49&fontStackId=0"
  },
  {
    gameTitle: "Quiz dos 5R's",
    description: "Teste seus conhecimentos de sustentabilidade",
    gameId: "96f8ff22a88d415a9ecf2796bd0212a2?themeId=49&templateId=3&fontStackId=0"
  },
]

export const team: teamMember[] = [
  {
    name: "Rafael Jesus",
    memberRm: "98296",
    description: "Responsável pelo desenvolvimento do site",
    image: 'https://github.com/RafaelRMJesus.png',
    github: 'RafaelRMJesus',
    instagram: '#'
  },
  {
    name: "Henrique Melo",
    memberRm: "99397",
    description: "Responsável pelo desenvolvimento do site",
    image: 'https://github.com/hemelo.png',
    github: 'hemelo',
  },
  {
    name: "Eduardo Oliveira",
    memberRm: "98778",
    description: "Responsável pelo desenvolvimento do Video Pitch",
    image: 'https://github.com/duardolv.png',
    github: 'duardolv',
    instagram: 'duardolv'
  },
  {
    name: "Vinícius Britto",
    memberRm: "99655",
    description: "Responsável pelo desenvolvimento do Video Pitch",
    image: 'https://github.com/SmileySZ.png',
    github: 'SmileySZ',
  },
  {
    name: "Rafael Cordeiro",
    memberRm: "97668",
    description: "Responsável pelo desenvolvimento do Video Pitch",
    image: 'https://github.com/fodase.png',
    github: 'rafaeldossantos04',
    instagram: 'rafaeldossantos04'
  }
]
