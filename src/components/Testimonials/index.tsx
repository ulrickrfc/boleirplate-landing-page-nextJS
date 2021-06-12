import "../../../public/js/main.js"
import { testimonProps } from "../../types/api.js"
import { getImageUrl } from "../../utils/getImageUrl";


type Props = {
  testimon: testimonProps
}

export default function Testimonials({ testimon }: Props) {


  return (
    <>
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>{testimon.title}</h2>
            <p>{testimon.subtitle}</p>
          </div>

          <div className="owl-carousel testimonials-carousel">

            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                {testimon.testimonItem[0].comment}
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src={getImageUrl(testimon.testimonItem[0].photo.url)} className="testimonial-img" alt={testimon.testimonItem[0].photo.alternativeText} />
              <h3>{testimon.testimonItem[0].name}</h3>
              <h4>{testimon.testimonItem[0].job}</h4>
            </div>

            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                {testimon.testimonItem[1].comment}
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src={getImageUrl(testimon.testimonItem[1].photo.url)} className="testimonial-img" alt={testimon.testimonItem[1].photo.alternativeText} />
              <h3>{testimon.testimonItem[1].name}</h3>
              <h4>{testimon.testimonItem[1].job}</h4>
            </div>

            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                {testimon.testimonItem[2].comment}
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src={getImageUrl(testimon.testimonItem[2].photo.url)} className="testimonial-img" alt={testimon.testimonItem[2].photo.alternativeText} />
              <h3>{testimon.testimonItem[2].name}</h3>
              <h4>{testimon.testimonItem[2].job}</h4>
            </div>

            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                {testimon.testimonItem[3].comment}
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src={getImageUrl(testimon.testimonItem[3].photo.url)} className="testimonial-img" alt={testimon.testimonItem[3].photo.alternativeText} />
              <h3>{testimon.testimonItem[3].name}</h3>
              <h4>{testimon.testimonItem[3].job}</h4>
            </div>

            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                {testimon.testimonItem[4].comment}
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src={getImageUrl(testimon.testimonItem[4].photo.url)} className="testimonial-img" alt={testimon.testimonItem[4].photo.alternativeText} />
              <h3>{testimon.testimonItem[4].name}</h3>
              <h4>{testimon.testimonItem[4].job}</h4>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}