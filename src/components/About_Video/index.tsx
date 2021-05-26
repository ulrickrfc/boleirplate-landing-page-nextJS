import { AboutVideoProps } from "../../types/api"
import { getImageUrl } from "../../utils/getImageUrl";

type Props = {
  aboutVideo: AboutVideoProps
}

export function About_Video({ aboutVideo }: Props) {
  return (
    <>
      <section id="about-video" className="about-video">
        <div className="container" data-aos="fade-up">

          <div className="row">

            <div className="col-lg-6 video-box align-self-baseline" data-aos="fade-right" data-aos-delay="100">
              <img src={getImageUrl(aboutVideo.imgVideo.url)} className="img-fluid" alt="" />
              <a href={aboutVideo.videoURL} className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
            </div>

            <div className="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
              <h3>{aboutVideo.title}</h3>
              <p className="font-italic">
                {aboutVideo.subtitle}
              </p>
              <ul>
                <li><i className="bx bx-check-double"></i> {aboutVideo.list.ItemDescription1}</li>
                <li><i className="bx bx-check-double"></i> {aboutVideo.list.ItemDescription2}</li>
                <li><i className="bx bx-check-double"></i> {aboutVideo.list.ItemDescription3}</li>
                <li><i className="bx bx-check-double"></i> {aboutVideo.list.ItemDescription4}</li>
              </ul>
              <p>
                {aboutVideo.finalText}
              </p>
            </div>

          </div>

        </div>
      </section>

    </>
  )
}