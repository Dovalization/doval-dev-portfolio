
export default {
  title: undefined,
  titleTemplate: '%s | doval.dev', // Template for the title tag 
  defaultTitle: 'doval.dev - Desensenvolvedor Web',
  canonical: process.env.NEXT_PUBLIsC_SITE_URL, 
  description: "Guilherme trabalha com Programação Web,especializado em Front-End, e com as tecnologias mais recentes do mercado. Aliado a habilidades de UX/UI Design",
  openGraph: {
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL, 
    title: 'doval.dev - Desensenvolvedor Web',
    description: "Guilherme trabalha com Programação Web,especializado em Front-End, e com as tecnologias mais recentes do mercado. Aliado a habilidades de UX/UI Design",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-image.png`, 
        width: 1200,
        height: 630,
        alt: 'Thumbnail for Facebook and Twitter',

      },
    ],
    site_name: 'doval.dev',
  },
}