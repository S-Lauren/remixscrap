import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

type Posts = {
  title: string;
  content: string;
}

const getPosts = (): Posts[] => {

  return (
    [
      { title: "Dirty - JPEGMAFIA", content: 'Dirty, Money Ima Make you Look Dirty Poke it Out' },
      { title: "Dirty - JPEGMAFIA", content: 'Who You gonna call when your trends are all die ?' },
      { title: "Karol Conkà - Bata Poiera", content: 'Negro, Blanco, Rico Pueblo, O Sangé Da Mesma Coooore ! Somos Todos Iguas, Sentiamos Alegria Y Dor' },
      { title: "Blessing It - Nujabes", content: 'Disrespect Hip Hop, And Ill Spit in Your Face(..) Blessing It.' },
    ]
  )
}

const seeds = async () => {
  await Promise.all(
    getPosts().map((post) => {
      return client.post.create({ data: post })
    })
  )

}
seeds()