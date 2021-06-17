import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import { contactProps } from '../../types/api'

export type Props = {
  contact: contactProps
}

export function Contact({ contact }: Props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")




  const ADD_CONTACT = gql`
    mutation CREATE_CONTACT($input:createContactInput!){
      createContact(input:$input){
        contact{
          name
          email
          subject
          message
        }
      }
      }
  `
  const [createContact] = useMutation(ADD_CONTACT)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault

    createContact({
      variables: {
        input: {
          data: {
            name: name,
            email: email,
            subject: subject,
            message: message
          }
        }
      }
    })
  }


  //   console.log(useMutation(ADD_CONTACT))

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>{contact.title}</h2>
          <p>{contact.subtitle}</p>
        </div>

        <div>
          <iframe style={{ border: 0, width: "100%", height: "270px" }} src={contact.locationIframe} frameBorder="0" allowFullScreen></iframe>
        </div>

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Localização:</h4>
                <p>{contact.location}</p>
              </div>

              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>{contact.email}</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Telefone:</h4>
                <p>{contact.phone}</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form onSubmit={handleSubmit} method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input onChange={e => setName(e.target.value)} type="text" name="name" className="form-control" id="name" placeholder="Seu Nome" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" name="email" id="email" placeholder="Seu Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" onChange={e => setSubject(e.target.value)} className="form-control" name="subject" id="subject" placeholder="Assunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" onChange={e => setMessage(e.target.value)} name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Messagem"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Enviar Mensagem</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
  )
}