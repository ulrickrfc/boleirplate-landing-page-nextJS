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



query GET_LANDING_PAGE{
landingPage{
...logo
...hero


}
}


`
export default GET_LANDING_PAGE