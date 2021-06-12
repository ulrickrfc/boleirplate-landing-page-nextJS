import { clientsProps } from "../../types/api"
import { getImageUrl } from "../../utils/getImageUrl";

type Props = {
  clients: clientsProps
}

export function Clients({ clients }: Props) {
  return (
    <>
      <section id="clients" className="clients section-bg">
        <div className="container">

          <div className="row">

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
              <img src={getImageUrl(clients.clientLogo1.url)} className="img-fluid" alt={clients.clientLogo1.alternativeText} />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
              <img src={getImageUrl(clients.clientLogo2.url)} className="img-fluid" alt={clients.clientLogo2.alternativeText} />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
              <img src={getImageUrl(clients.clientLogo3.url)} className="img-fluid" alt={clients.clientLogo3.alternativeText} />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
              <img src={getImageUrl(clients.clientLogo4.url)} className="img-fluid" alt={clients.clientLogo4.alternativeText} />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
              <img src={getImageUrl(clients.clientLogo5.url)} className="img-fluid" alt={clients.clientLogo5.alternativeText} />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
              <img src={getImageUrl(clients.clientLogo6.url)} className="img-fluid" alt={clients.clientLogo6.alternativeText} />
            </div>

          </div>

        </div>
      </section>
    </>
  )
}