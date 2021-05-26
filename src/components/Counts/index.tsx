import { countsProps } from "../../types/api"

type Props = {
  counts: countsProps
}

export function Counts({ counts }: Props) {
  return (
    <>
      <section id="counts" className="counts section-bg">
        <div className="container">

          <div className="row justify-content-end">

            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <span data-toggle="counter-up">{counts.countItem[0].countNumber}</span>
                <p>{counts.countItem[0].countTitle}</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <span data-toggle="counter-up">{counts.countItem[1].countNumber}</span>
                <p>{counts.countItem[1].countTitle}</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <span data-toggle="counter-up">{counts.countItem[2].countNumber}</span>
                <p>{counts.countItem[2].countTitle}</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <span data-toggle="counter-up">{counts.countItem[3].countNumber}</span>
                <p>{counts.countItem[3].countTitle}</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}