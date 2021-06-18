import { footerProps } from "../../types/api"
import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import { contactProps } from '../../types/api'

export type Props = {
  footer: footerProps
}

export function Footer({ footer }: Props) {
  const [email, setEmail] = useState("")

  const ADD_SUBSCRIBER = gql`
  mutation CREATE_SUBSCRIBER($input:createSubscriberInput!){
    createSubscriber(input:$input){
      subscriber{
        email
      }
    }
    }
  `
  const [createSubscriber] = useMutation(ADD_SUBSCRIBER)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault

    createSubscriber({
      variables: {
        input: {
          data: {
            email: email,
          }
        }
      }
    })
  }
  return (
    <footer id="footer">

      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>{footer.company_name}</h3>
              <p>
                {footer.street} <br />
                {footer.city_state}<br />
                {footer.country} <br /><br />
                <strong>Telefone:</strong> {footer.phone}<br />
                <strong>Email:</strong>{footer.email}<br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Links Uteis</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href={footer.linkList1[0].LinkURL}>{footer.linkList1[0].Link}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href={footer.linkList1[1].LinkURL}>{footer.linkList1[1].Link}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href={footer.linkList1[2].LinkURL}>{footer.linkList1[2].Link}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href={footer.linkList1[3].LinkURL}>{footer.linkList1[3].Link}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href={footer.linkList1[4].LinkURL}>{footer.linkList1[4].Link}</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Nossos Serviços</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href={footer.linkList2[0].LinkURL}>{footer.linkList2[0].Link}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href={footer.linkList2[1].LinkURL}>{footer.linkList2[1].Link}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href={footer.linkList2[2].LinkURL}>{footer.linkList2[2].Link}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href={footer.linkList2[3].LinkURL}>{footer.linkList2[3].Link}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href={footer.linkList2[4].LinkURL}>{footer.linkList2[4].Link}</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>{footer.newsLetter_title}</h4>
              <p>{footer.newsLetter_subtitle}</p>
              <form action="" method="post">
                <input type="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input onClick={handleSubmit} type="submit" value="Inscreva-se" />
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">

        <div className="mr-md-auto text-center text-md-left">
          <div className="copyright">
            &copy; Copyright <strong><span>TITAN</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href={footer.socialLinks[0].socialMedia_url} className="twitter"><i className={`bx bxl-${footer.socialLinks[0].socialMedia_classIcon}`} ></i></a>
          <a href={footer.socialLinks[1].socialMedia_url} className="facebook"><i className={`bx bxl-${footer.socialLinks[1].socialMedia_classIcon}`}></i></a>
          <a href={footer.socialLinks[2].socialMedia_url} className="instagram"><i className={`bx bxl-${footer.socialLinks[2].socialMedia_classIcon}`}></i></a>
          <a href={footer.socialLinks[3].socialMedia_url} className="google-plus"><i className={`bx bxl-${footer.socialLinks[3].socialMedia_classIcon}`}></i></a>
          <a href={footer.socialLinks[4].socialMedia_url} className="linkedin"><i className={`bx bxl-${footer.socialLinks[4].socialMedia_classIcon}`}></i></a>
        </div>
      </div>

    </footer>
  )
}