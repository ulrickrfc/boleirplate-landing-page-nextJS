import { faqProps } from "../../types/api"

type Props = {
  faq: faqProps
}

export function FQA({ faq }: Props) {
  return (
    <>
      <section id="faq" className="faq section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>{faq.title}</h2>
            <p> {faq.subtitle}</p>
          </div>

          <div className="faq-list">
            <ul>
              <li data-aos="fade-up">
                <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" className="collapse" href="#faq-list-1">{faq.questions[0].question} <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
                  <p>
                    {faq.questions[0].answer}
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="100">
                <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-2" className="collapsed">{faq.questions[1].question} <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                  <p>
                    {faq.questions[1].answer}
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="200">
                <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-3" className="collapsed">{faq.questions[2].question} <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                  <p>
                    {faq.questions[2].answer}
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="300">
                <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-4" className="collapsed">{faq.questions[3].question} <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-4" className="collapse" data-parent=".faq-list">
                  <p>
                    {faq.questions[3].answer}
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-5" className="collapsed">{faq.questions[4].question} <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                  <p>
                    {faq.questions[4].answer}
                  </p>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </section>
    </>
  )
}