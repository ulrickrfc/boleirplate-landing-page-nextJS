import { HeroProps } from "../../types/api"

type Props = {
  hero: HeroProps
}

export function Hero({ hero }: Props) {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>{hero.title}</h1>
            <h2>{hero.subtitle}</h2>
          </div>
        </div>
        <div className="text-center">
          <a href="#about" className="btn-get-started scrollto">{hero.HeroButton.title}</a>
        </div>

        <div className="row icon-boxes">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className={`${hero.HeroCards[0].IconClassName}`}></i></div>
              <h4 className="title"><a href="">{hero.HeroCards[0].title}</a></h4>
              <p className="description">{hero.HeroCards[0].description}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className={`${hero.HeroCards[1].IconClassName}`}></i></div>
              <h4 className="title"><a href="">{hero.HeroCards[1].title}</a></h4>
              <p className="description">{hero.HeroCards[1].description}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className={`${hero.HeroCards[2].IconClassName}`}></i></div>
              <h4 className="title"><a href="">{hero.HeroCards[2].title}</a></h4>
              <p className="description">{hero.HeroCards[2].description}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
            <div className="icon-box">
              <div className="icon"><i className={`${hero.HeroCards[3].IconClassName}`}></i></div>
              <h4 className="title"><a href="">{hero.HeroCards[3].title}</a></h4>
              <p className="description">{hero.HeroCards[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}