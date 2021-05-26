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

export type countItem = {
  countTitle: string,
  countNumber: number
}

export type countsProps = {
  countItem: countItem[]
}

export type AboutVideoProps = {
  imgVideo: {
    alternativeText: string
    url: string
  }
  videoURL: string
  title: string
  subtitle: string
  list: {
    ItemDescription1: string
    ItemDescription2: string
    ItemDescription3: string
    ItemDescription4: string
  }
  finalText: string
}

export type clientsProps = {
  clientLogo1: {
    url: string
    alternativeText: string
  }
  clientLogo2: {
    url: string
    alternativeText: string
  }
  clientLogo3: {
    url: string
    alternativeText: string
  }
  clientLogo4: {
    url: string
    alternativeText: string
  }
  clientLogo5: {
    url: string
    alternativeText: string
  }
  clientLogo6: {
    url: string
    alternativeText: string
  }
}

export type LandingPageProps = {
  logo: LogoProps
  hero: HeroProps
  AboutUs: AboutUsProps
  counts: countsProps
  AboutVideo: AboutVideoProps
  clients: clientsProps
}