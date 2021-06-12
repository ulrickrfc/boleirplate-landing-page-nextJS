import { callToActionProps } from "../../types/api"

type Props = {
  callToAction: callToActionProps
}

export function Cta({ callToAction }: Props) {
  return (
    <>
      <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
          <div className="text-center">
            <h3>{callToAction.title}</h3>
            <p>{callToAction.subtitle}</p>
            <a className="cta-btn" href={`${callToAction.ctaButton.buttonURL}`}>{callToAction.ctaButton.title}</a>
          </div>
        </div>
      </section>
    </>
  )
}