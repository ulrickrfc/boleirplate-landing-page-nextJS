import { pricesProps } from "../../types/api"

type Props = {
  prices: pricesProps
}

export function Pricing({ prices }: Props) {
  return (
    <>
      <section id="pricing" className="pricing">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>{prices.title}</h2>
            <p>{prices.subtitle}</p>
          </div>

          <div className="row">

            <div className="col-lg-4 col-md-6" data-aos="zoom-im" data-aos-delay="100">
              <div className="box">
                <h3>{prices.pricingCards[0].plan}</h3>
                <h4><sup>{prices.pricingCards[0].moneyType}</sup>{prices.pricingCards[0].price}<span> / {prices.pricingCards[0].period}</span></h4>
                <ul>
                  <li className={prices.pricingCards[0].item1Cut ? "na" : ""}>{prices.pricingCards[0].item1}</li>
                  <li className={prices.pricingCards[0].item2Cut ? "na" : ""}>{prices.pricingCards[0].item2}</li>
                  <li className={prices.pricingCards[0].item3Cut ? "na" : ""}>{prices.pricingCards[0].item3}</li>
                  <li className={prices.pricingCards[0].item4Cut ? "na" : ""}>{prices.pricingCards[0].item4}</li>
                  <li className={prices.pricingCards[0].item5Cut ? "na" : ""}>{prices.pricingCards[0].item5}</li>
                </ul>
                <div className="btn-wrap">
                  <a href={prices.pricingCards[0].buttonURL} className="btn-buy">{prices.pricingCards[0].buttonValue}</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
              <div className="box featured">
                <h3>{prices.pricingCards[1].plan}</h3>
                <h4><sup>{prices.pricingCards[1].moneyType}</sup>{prices.pricingCards[1].price}<span> / {prices.pricingCards[1].period}</span></h4>
                <ul>
                  <li className={prices.pricingCards[1].item1Cut ? "na" : ""}>{prices.pricingCards[1].item1}</li>
                  <li className={prices.pricingCards[1].item2Cut ? "na" : ""}>{prices.pricingCards[1].item2}</li>
                  <li className={prices.pricingCards[1].item3Cut ? "na" : ""}>{prices.pricingCards[1].item3}</li>
                  <li className={prices.pricingCards[1].item4Cut ? "na" : ""}>{prices.pricingCards[1].item4}</li>
                  <li className={prices.pricingCards[1].item5Cut ? "na" : ""}>{prices.pricingCards[1].item5}</li>
                </ul>
                <div className="btn-wrap">
                  <a href={prices.pricingCards[1].buttonURL} className="btn-buy">{prices.pricingCards[1].buttonValue}</a>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="100">
              <div className="box">
                <h3>{prices.pricingCards[2].plan}</h3>
                <h4><sup>{prices.pricingCards[2].moneyType}</sup>{prices.pricingCards[1].price}<span> / {prices.pricingCards[1].period}</span></h4>
                <ul>
                  <li className={prices.pricingCards[2].item1Cut ? "na" : ""}>{prices.pricingCards[2].item1}</li>
                  <li className={prices.pricingCards[2].item2Cut ? "na" : ""}>{prices.pricingCards[2].item2}</li>
                  <li className={prices.pricingCards[2].item3Cut ? "na" : ""}>{prices.pricingCards[2].item3}</li>
                  <li className={prices.pricingCards[2].item4Cut ? "na" : ""}>{prices.pricingCards[2].item4}</li>
                  <li className={prices.pricingCards[2].item5Cut ? "na" : ""}>{prices.pricingCards[2].item5}</li>
                </ul>
                <div className="btn-wrap">
                  <a href={prices.pricingCards[2].buttonURL} className="btn-buy">{prices.pricingCards[2].buttonValue}</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}