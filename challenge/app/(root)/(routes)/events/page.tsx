import { Event } from '@/types'

const events:Event[] =[
  {
    imagem: "https://picsum.photos/id/200/348/185",
    imagem_post: "https://picsum.photos/id/200/800/400",
    eventTitle: "Workshop de Eficiência Elétrica",
    eventAuthor: "Schneider Electric",
    eventData: "2023-09-15",
    eventText: "Junte-se a nós no Workshop de Eficiência Energética da Schneider Electric, onde exploraremos as melhores práticas e soluções para otimizar o consumo de energia em diversos setores. Especialistas da empresa irão compartilhar suas visões e experiências, e você terá a oportunidade de interagir e aprender com colegas de diversas áreas.",
    eventId: '1'
  },
  {
    imagem: "https://picsum.photos/id/201/348/185",
    imagem_post: "https://picsum.photos/id/201/800/400",
    eventTitle: "Seminário de Inovação Tecnológica",
    eventAuthor: "Tech Innovation Institute",
    eventData: "2023-10-20",
    eventText: "Participe do nosso Seminário de Inovação Tecnológica e descubra as últimas tendências e avanços em tecnologia. Este evento é uma oportunidade única para aprender com os líderes da indústria e explorar as inovações que estão moldando o futuro.",
    eventId: '2'
  },
  {
    imagem: "https://picsum.photos/id/202/348/185",
    imagem_post: "https://picsum.photos/id/202/800/400",
    eventTitle: "Conferência de Sustentabilidade",
    eventAuthor: "Green Earth Foundation",
    eventData: "2023-11-15",
    eventText: "Junte-se a nós na Conferência de Sustentabilidade Ambiental, onde discutiremos as questões ambientais mais urgentes e as soluções para um futuro sustentável. Especialistas em meio ambiente e sustentabilidade compartilharão suas ideias e insights valiosos.",
    eventId: '3'
  },
  {
    imagem: "https://picsum.photos/id/203/348/185",
    imagem_post: "https://picsum.photos/id/203/800/400",
    eventTitle: "Workshop de Desenvolvimento de Aplicativos",
    eventAuthor: "Code Masters",
    eventData: "2023-12-10",
    eventText: "Participe do nosso Workshop de Desenvolvimento de Aplicativos e aprimore suas habilidades em programação e desenvolvimento de software. Nossos instrutores experientes o guiarão através de projetos práticos e desafios emocionantes.",
    eventId: '4'
  },
  {
    imagem: "https://picsum.photos/id/204/348/185",
    imagem_post: "https://picsum.photos/id/204/800/400",
    eventTitle: "Conferência de Marketing Digital",
    eventAuthor: "Digital Marketing Institute",
    eventData: "2024-01-20",
    eventText: "Não perca a Conferência de Marketing Digital, onde os especialistas em marketing digital compartilharão estratégias avançadas para o sucesso online. Descubra as táticas mais recentes e eficazes para promover sua marca na era digital.",
    eventId: '5'
  },
  {
    imagem: "https://picsum.photos/id/205/348/185",
    imagem_post: "https://picsum.photos/id/205/800/400",
    eventTitle: "Simpósio de Inteligência Artificial",
    eventAuthor: "AI Innovations",
    eventData: "2024-02-15",
    eventText: "Participe do Simpósio de Inteligência Artificial e mergulhe no mundo da IA. Palestrantes renomados compartilharão os desenvolvimentos mais recentes em aprendizado de máquina, visão computacional e muito mais.",
    eventId: '6'
  }
]

const EventsPage = () => {
    return (
      <main>
        <h1 className="mt-20 mb-6 text-3xl font-extrabold text-gray-900 flex justify-center dark:text-white md:text-5xl lg:text-5xl">Todos os eventos</h1>
        TODO: MAPEAR ALL EVENTS
      </main>
    );
}

export default EventsPage;