import { teamProps } from "../../types/api"
import { getImageUrl } from "../../utils/getImageUrl";

type Props = {
  team: teamProps
}

export function Team({ team }: Props) {
  return (
    <>
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>{team.title}</h2>
            <p>{team.description}</p>
          </div>

          <div className="row">

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className="member">
                <div className="member-img">
                  <img src={getImageUrl(team.teamCards[0].photo.url)} className="img-fluid" alt="" />
                  <div className="social">
                    <a href={team.teamCards[0].twitter}><i className="icofont-twitter"></i></a>
                    <a href={team.teamCards[0].facebook}><i className="icofont-facebook"></i></a>
                    <a href={team.teamCards[0].instagram}><i className="icofont-instagram"></i></a>
                    <a href={team.teamCards[0].linkedin}><i className="icofont-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{team.teamCards[0].name}</h4>
                  <span>{team.teamCards[0].job}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="member">
                <div className="member-img">
                  <img src={getImageUrl(team.teamCards[1].photo.url)} className="img-fluid" alt="" />
                  <div className="social">
                    <a href={team.teamCards[1].twitter}><i className="icofont-twitter"></i></a>
                    <a href={team.teamCards[1].facebook}><i className="icofont-facebook"></i></a>
                    <a href={team.teamCards[1].instagram}><i className="icofont-instagram"></i></a>
                    <a href={team.teamCards[1].linkedin}><i className="icofont-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{team.teamCards[1].name}</h4>
                  <span>{team.teamCards[1].job}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
              <div className="member">
                <div className="member-img">
                  <img src={getImageUrl(team.teamCards[2].photo.url)} className="img-fluid" alt="" />
                  <div className="social">
                    <a href={team.teamCards[2].twitter}><i className="icofont-twitter"></i></a>
                    <a href={team.teamCards[2].facebook}><i className="icofont-facebook"></i></a>
                    <a href={team.teamCards[2].instagram}><i className="icofont-instagram"></i></a>
                    <a href={team.teamCards[2].linkedin}><i className="icofont-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{team.teamCards[2].name}</h4>
                  <span>{team.teamCards[2].job}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              <div className="member">
                <div className="member-img">
                  <img src="https://bootstrapmade.com/demo/templates/OnePage/assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href={team.teamCards[3].twitter}><i className="icofont-twitter"></i></a>
                    <a href={team.teamCards[3].facebook}><i className="icofont-facebook"></i></a>
                    <a href={team.teamCards[3].instagram}><i className="icofont-instagram"></i></a>
                    <a href={team.teamCards[3].linkedin}><i className="icofont-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{team.teamCards[3].name}</h4>
                  <span>{team.teamCards[3].job}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}