import { AboutUsProps } from "../../types/api";

type Props = {
  about: AboutUsProps
}

export function About({ about }: Props) {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>{about.title}</h2>
          <p>{about.subtitle}</p>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              {about.firstText}
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> {about.list.ItemDescription1}</li>
              <li><i className="ri-check-double-line"></i> {about.list.ItemDescription2}</li>
              <li><i className="ri-check-double-line"></i> {about.list.ItemDescription3}</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              {about.secondText}
            </p>
            <a href={`${about.AboutButton.buttonURL}`} className="btn-learn-more">{about.AboutButton.title}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
