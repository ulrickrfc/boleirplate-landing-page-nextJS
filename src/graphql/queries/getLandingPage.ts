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

fragment testimon on LandingPage{
testimon{
title
subtitle
testimonItem{
  comment
  photo{
    url
    alternativeText
  }
  name
  job
}
}
}

fragment services on LandingPage{
services{
title
description
servicesCards{
  iconClassName
  title
  subtitle
}
}
}

fragment callToAction on LandingPage {
callToAction{
title
subtitle
ctaButton{
  title
  buttonURL
}
}
}

fragment portfolio on LandingPage {
portfolio{
title
subtitle
imgOrders{
  ordem1
  ordem2
  ordem3
  ordem4
}
portfolioImgs{
  img1{
    url
    alternativeText
  }
  img2{
    url
    alternativeText
  }
  img3{
    url
    alternativeText
  }
  img4{
    url
    alternativeText
  }
  img5{
    url
    alternativeText
  }
  img6{
    url
    alternativeText
  }
  img7{
    url
    alternativeText
  }
  img8{
    url
    alternativeText
  }
  img9{
    url
    alternativeText
  }
}
}
}

fragment faq on LandingPage{
faq{
title
subtitle
questions{
  question
  answer
}
}
}

fragment team on LandingPage{
team{
title
description
teamCards{
  photo{
    url
    alternativeText
  }
  name
  job
  twitter
  facebook
  instagram
  linkedin
}
}
}

fragment prices on LandingPage{
prices {
title
subtitle
pricingCards{
  plan
  moneyType
  price
  period
  item1
  item2
  item3
  item4
  item5
  item1Cut
  item2Cut
  item3Cut
  item4Cut
  item5Cut
  buttonValue
  buttonURL
}
}
}

fragment contact on LandingPage {
contact{
title
subtitle
location
email
phone
}
}

fragment footer on LandingPage {
footer{
street
company_name
phone
country
email
city_state
newsLetter_title
newsLetter_subtitle
    linkList1{
  Link
  LinkURL
  }
linkList2{
  Link
  LinkURL
  }
socialLinks{
socialMedia_classIcon
socialMedia_url
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
...testimon
...services
...callToAction
...portfolio
...team
...prices
...faq
...contact
...footer
}
}

`
export default GET_LANDING_PAGE