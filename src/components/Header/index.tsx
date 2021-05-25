import { LogoProps } from "../../types/api";
import { getImageUrl } from "../../utils/getImageUrl";

type Props = {
  logo: LogoProps
}

export function Header({ logo }: Props) {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">

        <a href="/" className="logo mr-auto">
          <img src={getImageUrl(logo.url)} alt={logo.alternativeText} className="img-fluid" />
        </a>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active"><a href="/">Início</a></li>
            <li><a href="#about">Sobre nós</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#team">Equipe</a></li>
            <li><a href="#pricing">Preços</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>

        <a href="#about" className="get-started-btn scrollto">Comece!</a>

      </div>
    </header >

  );
}