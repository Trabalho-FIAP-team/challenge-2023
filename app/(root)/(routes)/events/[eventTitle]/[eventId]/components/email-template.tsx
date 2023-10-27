import { Thumb } from "@radix-ui/react-switch"
import {
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

import { Tailwind } from '@react-email/tailwind'
import { Body } from '@react-email/body'

interface ReminderEmailProps {
  userName?: string
  eventTitle: string
  thumb: string
  eventAuthor: string
  eventData: string
  eventText?: string
  eventId?: string
  fromEmail: string
}

export default function EmailTemplate({
  userName = "Prezado(a)",
  eventTitle,
  thumb,
  eventAuthor,
  eventData,
  eventText,
  eventId,
  fromEmail
}: ReminderEmailProps) {
  const previewText = `Olá ${userName}, Confirmação da Sua inscrição no evento ${eventTitle}`
  return (
    <Html>
      <Head>
        <title>Você acaba de fazer a sua inscrição em um evento EcoConnect!</title>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto bg-zinc-50 font-sans">
          <Container className="mx-auto my-[40px] max-w-2xl rounded p-4">
            <Img
              src="https://scribbly.s3.ap-south-1.amazonaws.com/logo_bqjpan.webp"
              width="70"
              height="50"
              alt=""
              className="mx-auto my-0"
            />
            <Text className="-mt-3 text-center text-2xl font-bold text-lime-800">
              EcoConnect
            </Text>

            <Section className="mt-4">
              <Heading className="text-center text-2xl font-semibold text-green-600">
                Você acabou de se inscrever no evento {eventTitle}!
              </Heading>
              <Hr className="my-4" />
              <Text className="m-0 text-base">Olá {userName},</Text>
              <Text className="mt-6 text-base">
                Estamos empolgados em contar com a sua participação no evento EcoConnect - {eventTitle}! 🌟 Este é um evento imperdível para todos os entusiastas do meio ambiente e da sustentabilidade.
              </Text>
              <Text className="mt-6 text-base">
                O evento será liderado por nosso especialista, {eventAuthor}, que compartilhará insights valiosos no dia {eventData}. Se você está interessado em aprender mais sobre como podemos fazer a diferença para o meio ambiente, este evento é perfeito para você. 🚀
              </Text>
              <Text className="mt-6 text-base">
                Não se esqueça de marcar a data e a hora no seu calendário. Este é um momento importante para refletir e aprender mais sobre como podemos proteger o nosso planeta. 🌍
              </Text>
              <Img
                src={thumb}
                alt="Ilustração do evento EcoConnect"
                height={424}
                className="mt-10 aspect-video w-full object-cover"
              />
            </Section>

            <Section className="mt-4">
              <Text className="mt-6 text-base">
                Este evento é uma oportunidade única para se conectar com outros apaixonados pela sustentabilidade. Você pode compartilhar suas ideias, fazer perguntas e aprender com uma comunidade dedicada a fazer a diferença. Não perca essa chance! ⏳
              </Text>
              <Text className="mt-6 text-base">
                Estamos ansiosos para receber você e juntos explorarmos maneiras de tornar o mundo um lugar mais sustentável. 🌱
              </Text>

              <Text className="mt-6 text-base">
                Atenciosamente,
              </Text>
              <Text className="-mt-2 text-base">Equipe EcoConnect</Text>
            </Section>

            <Section className="mt-4 text-center text-zinc-400">
              <Text className="my-4">
                "A melhor maneira de começar é começar." Marque sua participação no evento EcoConnect e esteja pronto para uma experiência enriquecedora. Você ficará surpreso com o que aprenderá! 🌟
                <Link
                  href={`mailto:${fromEmail}`}
                  className="text-green-500 underline"
                >
                  {fromEmail}
                </Link>
              </Text>
              <Text className="mb-0 mt-4">
                @ EcoConnect {new Date().getFullYear()}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
