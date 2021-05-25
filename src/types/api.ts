export type LogoProps = {
  alternativeText: string
  url: string
}

export type button = {
  title: string
  url: string
}
export type heroCard = {
  IconClassName: string
  title: string
  description: string
}

export type HeroProps = {
  title: string
  subtitle: string
  HeroButton: button
  HeroCards: heroCard[]
}

export type AboutUsProps = {
  title: string
  subtitle: string
  firstText
  list: {
    ItemDescription1: string
    ItemDescription2: string
    ItemDescription3: string
  }
  secondText: string
  AboutButton: {
    title: string
    buttonURL: string
  }
}

export type LandingPageProps = {
  logo: LogoProps
  hero: HeroProps
  AboutUs: AboutUsProps
}