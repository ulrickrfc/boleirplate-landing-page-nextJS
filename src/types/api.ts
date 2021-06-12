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

export type testimonItem =
  {
    comment: string
    photo: {
      url: string
      alternativeText: string
    }
    name: string
    job: string
  }
export type testimonProps = {
  title: string
  subtitle: string
  testimonItem: testimonItem[]
}

export type servicesCards = {
  iconClassName: string
  title: string
  subtitle: string
}

export type servicesProps = {
  title: string
  description: string
  servicesCards: servicesCards[]
}

export type callToActionProps = {
  title: string
  subtitle: string
  ctaButton: {
    title: string
    buttonURL: string
  }
}

export type portfolioProps = {
  title: string
  subtitle: string
  imgOrders: {
    ordem1: string
    ordem2: string
    ordem3: string
    ordem4: string
  }
  portfolioImgs: {
    img1: {
      url: string
      alternativeText: string
    }
    img2: {
      url: string
      alternativeText: string
    }
    img3: {
      url: string
      alternativeText: string
    }
    img4: {
      url: string
      alternativeText: string
    }
    img5: {
      url: string
      alternativeText: string
    }
    img6: {
      url: string
      alternativeText: string
    }
    img7: {
      url: string
      alternativeText: string
    }
    img8: {
      url: string
      alternativeText: string
    }
    img9: {
      url: string
      alternativeText: string
    }
  }
}

export type teamCard = {
  photo: {
    url: string
    alternativeText: string
  }
  name: string
  job: string
  twitter: string
  facebook: string
  instagram: string
  linkedin: string
}

export type teamProps = {
  title: string
  description: string
  teamCards: teamCard[]
}
export type pricingCard = {
  plan: string
  moneyType: string
  price: number
  period: string
  item1: string
  item2: string
  item3: string
  item4: string
  item5: string
  item1Cut: boolean
  item2Cut: boolean
  item3Cut: boolean
  item4Cut: boolean
  item5Cut: boolean
  buttonValue: string
  buttonURL: string
}
export type pricesProps = {
  title: string
  subtitle: string
  pricingCards: pricingCard[]
}
export type question = {
  question: string
  answer: string
}
export type faqProps = {
  title: string
  subtitle: string
  questions: question[]
}
export type LandingPageProps = {
  logo: LogoProps
  hero: HeroProps
  AboutUs: AboutUsProps
  counts: countsProps
  AboutVideo: AboutVideoProps
  clients: clientsProps
  testimon: testimonProps
  services: servicesProps
  callToAction: callToActionProps
  portfolio: portfolioProps
  team: teamProps
  prices: pricesProps
  faq: faqProps
}