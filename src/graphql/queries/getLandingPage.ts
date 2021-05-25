const GET_LANDING_PAGE = /* GraphQL */`
fragment logo on LandingPage{
  logo{
  url
  alternativeText
}
}

fragment hero on LandingPage{
hero{
  title
  subtitle
  HeroButton{
    title
    buttonURL
  }
HeroCards{
  IconClassName
  title
  description
}
}
}

fragment aboutUs on LandingPage{
AboutUs{
title
subtitle
firstText
list{
  ItemDescription1
  ItemDescription2
  ItemDescription3
}
secondText
AboutButton{
  title
  buttonURL
}
}
}


query GET_LANDING_PAGE{
landingPage{
...logo
...hero
...aboutUs


}
}

`
export default GET_LANDING_PAGE