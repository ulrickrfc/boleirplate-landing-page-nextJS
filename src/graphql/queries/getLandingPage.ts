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

fragment counts on LandingPage{
counts{
countItem{
  countTitle
  countNumber
}
}
}

fragment about_video on LandingPage{
AboutVideo{
imgVideo{
  alternativeText
  url
}
videoURL
title
subtitle
list{
  ItemDescription1
  ItemDescription2
  ItemDescription3
  ItemDescription4
}
finalText
}
}

fragment clients on LandingPage{
clients{
clientLogo1{
  url
  alternativeText
}
clientLogo2{
  url
  alternativeText
}
clientLogo3{
  url
  alternativeText
}
clientLogo4{
  url
  alternativeText
}
clientLogo5{
  url
  alternativeText
}
clientLogo6{
  url
  alternativeText
}
}
}

query GET_LANDING_PAGE{
landingPage{
...logo
...hero
...aboutUs
...counts
...about_video
...clients

}
}

`
export default GET_LANDING_PAGE