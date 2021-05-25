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
export type LandingPageProps = {
  logo: LogoProps
  hero: HeroProps
}