import React from 'react';

import Slide from 'react-reveal/Slide';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../assets/sass/components/slick/slick-theme.scss';
import '../assets/sass/components/slick/slick.scss';

import Layout from '../components/Layout';

import Beers1 from '../assets/images/AppBeers1.png';
import Beers2 from '../assets/images/AppBeers2.png';
import Beers3 from '../assets/images/AppBeers3.png';
import Beers4 from '../assets/images/AppBeers4.png';
import Beers5 from '../assets/images/AppBeers5.png';
import Beers6 from '../assets/images/AppBeers6.png';
import Beers7 from '../assets/images/AppBeers7.png';
import Beers8 from '../assets/images/AppBeers8.png';
import Beers9 from '../assets/images/AppBeers9.png';
import Beers10 from '../assets/images/AppBeers10.png';
import Beers11 from '../assets/images/AppBeers11.png';
import Beers12 from '../assets/images/AppBeers12.png';
import Beers13 from '../assets/images/AppBeers13.png';

import Unac1 from '../assets/images/UNAC1.png';
import Unac2 from '../assets/images/UNAC2.png';
import Unac3 from '../assets/images/UNAC3.png';
import Unac4 from '../assets/images/UNAC4.png';

import CV1 from '../assets/images/AppCV1.png';
import CV2 from '../assets/images/AppCV2.png';
import CV3 from '../assets/images/AppCV3.png';
import CV4 from '../assets/images/AppCV4.png';
import CV5 from '../assets/images/AppCV5.png';
import CV6 from '../assets/images/AppCV6.png';

import Interview1 from '../assets/images/AppInterview1.png';
import Interview2 from '../assets/images/AppInterview2.png';
import Interview3 from '../assets/images/AppInterview3.png';
import Interview4 from '../assets/images/AppInterview4.png';

import Location1 from '../assets/images/AppLocation1.png';
import Location2 from '../assets/images/AppLocation2.png';
import Location3 from '../assets/images/AppLocation3.png';
import Location4 from '../assets/images/AppLocation4.png';
import Location5 from '../assets/images/AppLocation5.png';
import Location6 from '../assets/images/AppLocation6.png';

import Face1 from '../assets/images/AppFace1.png';
import Face2 from '../assets/images/AppFace2.png';
import Face3 from '../assets/images/AppFace3.png';
import Face4 from '../assets/images/AppFace4.png';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
};

const Portfolio = () => (
  <Layout fullMenu>
    <section id="banner">
      <header>
        <div className="inner">
          <h2>Portfolio</h2>
          <p>Mes applications mobiles et web</p>
        </div>
      </header>
    </section>
    <div className="wrapper style2">
      <div className="inner">
        <h3 className="major">Application mobile e-commerce - Beer's Corner</h3>
        <Slide bottom big>
          <Slider {...settings} className="bigslider">
            <img
              src={Beers3}
              alt="Picture 3 of a mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers1}
              alt="Picture 1 of a mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers4}
              alt="Picture 4 of a mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers2}
              alt="Picture 2 of a mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers5}
              alt="Picture 5 of a mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers6}
              alt="Picture 6 of a mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers7}
              alt="Picture 7 of a mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers8}
              alt="Picture 8 of a mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers9}
              alt="Picture 9 of a mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers10}
              alt="Picture 10 of a mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers11}
              alt="Picture 11 of a mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers12}
              alt="Picture 12 of a mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers13}
              alt="Picture 13 of a mobile e-commerce app"
              class="sliderimage"
            />
          </Slider>
        </Slide>
        <p>
          Beer???s Corner est un bar ?? bi??res situ?? au Plessis-Belleville. Il
          accueille une client??le d???habitu??s, qui a pris l???habitude pendant le
          confinement de commander des bi??res et planches sur le site WordPress
          d??j?? existant. Le besoin d???une application mobile reli??e ?? leur API
          externe afin d???enregistrer les commandes et les recevoir directement
          sur leur caisse est devenu une ??vidence pour les deux g??rants !
        </p>
        <p>
          Cr??ation de l'application mobile de A ?? Z seule : maquettage, cr??ation
          de l'UI Kit et d??veloppement. Elle contient une page d'accueil avec
          toutes les actualit??s, une page pour stocker des produits favoris, une
          page de catalogue de produits avec un menu horizontal dynamique, une
          page d??di??e au processus de commande (incluant le panier,
          l???identification, le paiement et la validation de la commande), et une
          page de compte client (acc??s au profil du client avec ses principales
          informations et commandes, et param??tres pour modifier certaines
          informations). <br />
          Sp??cificit??s : requ??tes ?? leur API externe, gestion du paiement avec
          Stripe, et gestion de l'authentification avec Firebase.
        </p>
        <p>
          Review de mon code par deux seniors pour assurer ?? mon client une
          application tr??s qualitative.
        </p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=jpcKRsbO8po"
            className="special"
            target="_blank"
          >
            D??couvrez-la en vid??o !
          </a>
        </p>
        <p>
          Technos utilis??es : React Native, Redux, Node.js, Express.js <br />
          Design : Figma, Whimsical <br />
          Outils : Gitlab, GitKraken <br />
          Tests : Jest, Postman
        </p>
      </div>

      <div className="inner portfolio2">
        <h3 className="major">Site Web pour un syndicat a??rien - UNAC</h3>
        <Slide bottom big>
          <Slider {...settings} className="sliderweb">
            <img src={Unac1} alt="" class="sliderimageweb" />
            <img src={Unac2} alt="" class="sliderimageweb" />
            <img src={Unac3} alt="" class="sliderimageweb" />
            <img src={Unac4} alt="" class="sliderimageweb" />
          </Slider>
        </Slide>
        <p>
          L???UNAC est un des syndicats d???Air France, existant depuis 1967, et
          situ?? ?? Tremblay en France. Les membres du syndicat ont exprim?? le
          besoin de renouveler le design de leur site !
        </p>
        <p>
          J'ai donc propos?? mes services pour leur cr??er ce site avec des
          animations.
        </p>
        <p>
          Technos utilis??es : HTML5, CSS3, SASS, Bootstrap <br />
          Outils : Github, Git
        </p>
      </div>

      <div className="inner portfolio">
        <h3 className="major">Application Mobile CV - Margaux Chevreux</h3>
        <Slide bottom big>
          <Slider {...settings} className="slider">
            <img
              src={CV1}
              alt="Picture 1 of a mobile CV app"
              class="sliderimage"
            />
            <img
              src={CV2}
              alt="Picture 2 of a mobile CV app"
              class="sliderimage"
            />
            <img
              src={CV3}
              alt="Picture 3 of a mobile CV app"
              class="sliderimage"
            />
            <img
              src={CV4}
              alt="Picture 4 of a mobile CV app"
              class="sliderimage"
            />
            <img
              src={CV5}
              alt="Picture 5 of a mobile CV app"
              class="sliderimage"
            />
            <img
              src={CV6}
              alt="Picture 6 of a mobile CV app"
              class="sliderimage"
            />
          </Slider>
        </Slide>
        <p>Cr??ation d???un projet de CV sous forme d???application React Native.</p>
        <p>
          L???application contient une page d???accueil mettant en avant mes softs
          skills et r??seaux sociaux dans une side bar. <br />
          Elle redirige ?? l???aide de boutons vers les principales pages. Elle
          simule une notification destin??e ?? un faux recruteur pour qu???il me
          contacte, et au clic sur le bouton ?? Recrutez-moi ?? : un dialogue avec
          ce fameux recruteur pour mettre en avant le chat.
          <br />
          Elle contient ??galement une page d???exp??riences sous forme de flatlist,
          une page de formations sous forme de cards, qui, au clic, r??v??lent des
          steps indicators dynamiques avec les th??mes d??taill??s de la formation
          en question. <br />
          Elle contient aussi une page d??taillant ma stack ?? l???aide de logos. Et
          pour finir, une page d??di??e ?? mes hobbies qui met en avant une carte
          interactive avec les points de mes diff??rents voyages, mes plus beaux
          clich??s photographiques, les plats que j???aime cuisiner, et une photo
          de mes chats.
        </p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=TdHJgz8KJgU"
            className="special"
            target="_blank"
          >
            D??couvrez-la en vid??o !
          </a>
        </p>
        <p>
          Technos utilis??es : React Native, Redux, Node.js, Express.js <br />
          Design : Figma, Whimsical <br />
          Outils : Gitlab, GitKraken <br />
          Tests : Jest, Postman
        </p>
      </div>

      <div className="inner portfolio">
        <h3 className="major">
          Application Mobile d'entra??nement aux entretiens - Margaux Chevreux et
          Pierre-Laurent Vincent
        </h3>
        <Slide bottom big>
          <Slider {...settings} className="slider2">
            <img
              src={Interview1}
              alt="Picture 1 of a mobile interview training app"
              class="sliderimage"
            />
            <img
              src={Interview2}
              alt="Picture 2 of a mobile interview training app"
              class="sliderimage"
            />
            <img
              src={Interview3}
              alt="Picture 3 of a mobile interview training app"
              class="sliderimage"
            />
            <img
              src={Interview4}
              alt="Picture 4 of a mobile interview training app"
              class="sliderimage"
            />
          </Slider>
        </Slide>
        <p>
          Cr??ation d'une application React Native d???entra??nement aux entretiens
          d???embauche.
        </p>
        <p>
          L'application propose des entra??nements aux entretiens. ?? chaque
          entra??nement, des questions al??atoires sont g??n??r??es en fonction de la
          difficult?? choisie avant chaque entretien. Nous avons cr???? les
          questions selon 5 th??matiques.
          <br /> Elle donne acc??s ?? la suite de l'entretien ?? des statistiques ??
          l???aide de ?? charts ??, un salaire approximatif selon le m??tier et la
          r??gion (webscrapping de KelJob), un score et un troph??e. <br />
          Elle poss??de aussi une page d??di??e aux conseils, et une page de compte
          avec les scores, les troph??es gagn??s, et la formule actuelle.
          <br /> Elle propose plusieurs formules d'entra??nements avec
          diff??rentes fonctionnalit??s ?? d??bloquer (statistiques, chat avec un
          recruteur, etc.).
          <br />
          L'id??e est venue de mon bin??me qui avait remarqu?? que les candidats
          n'??taient pas assez pr??par??s.
        </p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=wdc-lx7tumA&t=16s"
            className="special"
            target="_blank"
          >
            D??couvrez-la en vid??o !
          </a>
        </p>
        <p>
          Technos utilis??es : React Native, Redux, MongoDB, Node.js, Express.js
          <br />
          Design : Figma, Whimsical <br />
          Outils : Github, Git <br />
          Tests : Jest, Postman
        </p>
      </div>

      <div className="inner portfolio">
        <h3 className="major">
          Application Mobile de partage de points d'int??r??ts - Margaux Chevreux
        </h3>
        <Slide bottom big>
          <Slider {...settings} className="slider">
            <img
              src={Location1}
              alt="Picture 1 of a mobile mapping app"
              class="sliderimage"
            />
            <img
              src={Location2}
              alt="Picture 2 of a mobile mapping app"
              class="sliderimage"
            />
            <img
              src={Location3}
              alt="Picture 3 of a mobile mapping app"
              class="sliderimage"
            />
            <img
              src={Location4}
              alt="Picture 4 of a mobile mapping app"
              class="sliderimage"
            />
            <img
              src={Location5}
              alt="Picture 5 of a mobile mapping app"
              class="sliderimage"
            />
            <img
              src={Location6}
              alt="Picture 6 of a mobile mapping app"
              class="sliderimage"
            />
          </Slider>
        </Slide>
        <p>
          Cr??ation d'une application React Native de partage de points
          d'int??r??ts ?? l'aide d'une map, et d'un chat.
        </p>

        <p>
          L'application int??gre une carte sur laquelle les utilisateurs peuvent
          ajouter des points d???int??r??ts avec des titres et descriptions. Les
          points d'int??r??ts sont enregistr??s dans le compte de l'utilisateur.
        </p>
        <p>
          Il est possible d'ajouter des points d'int??r??ts partout dans le monde
          ?? l'aide de cette application ! Le but est d'en ajouter le plus
          possible, et d'en discuter avec la communaut??, et donc d'en d??couvrir
          des nouveaux !
        </p>
        <p>
          Pour permettre les discussions, elle propose ??galement un chat avec
          les diff??rents utilisateurs de l'application afin de discuter des
          points d'int??r??ts de chacun, et de partager de bons spots ! <br />
          Les messages du chat sont enregistr??s dans le compte de l'utilisateur,
          pour qu'il puisse retrouver facilement ce qu'on a pu lui conseiller.
        </p>
        <p>
          Technos utilis??es : React Native, Redux, Node.js, Express.js <br />
          Design : Figma, Whimsical <br />
          Outils : Github, Git <br />
          Tests : Jest, Postman
        </p>
      </div>

      <div className="inner portfolio">
        <h3 className="major">
          Application Mobile de capture et galerie de photos - Margaux Chevreux
        </h3>
        <Slide bottom big>
          <Slider {...settings} className="slider2">
            <img
              src={Face1}
              alt="Picture 1 of a mobile images app"
              class="sliderimage"
            />
            <img
              src={Face2}
              alt="Picture 2 of a mobile images app"
              class="sliderimage"
            />
            <img
              src={Face3}
              alt="Picture 3 of a mobile images app"
              class="sliderimage"
            />
            <img
              src={Face4}
              alt="Picture 4 of a mobile images app"
              class="sliderimage"
            />
          </Slider>
        </Slide>
        <p>
          Cr??ation d'une application React Native de capture et galerie de
          photos, reli??e ?? l'API Microsoft Azure de reconnaissance faciale: Face
          Detect.
        </p>
        <p>
          L'application int??gre l'appareil photo natif du t??l??phone afin de
          capturer des photos sur les deux objectifs (avant/arri??re), avec le
          flash ou non.
        </p>
        <p>
          Elle enregistre les photos sur Cloudinary afin de les stocker dans la
          galerie de photos de l'utilisateur.
        </p>
        <p>
          Et pour finir elle int??gre l'API Microsoft Azure de reconnaissance
          faciale qui analyse chaque clich??, et d??tecte les principaux attributs
          de la personne afin de les afficher en dessous de chaque photo dans la
          galerie.
        </p>
        <p>
          Le but de cette application est de capturer de beaux instants, et de
          d??couvrir ce que l'API sonde de notre visage ! De bonnes ou mauvaises
          surprises nous attendent par rapport ?? l'??ge ou ?? l'humeur !
        </p>
        <p>
          Technos utilis??es : React Native, Redux, Node.js, Express.js <br />
          Design : Figma, Whimsical <br />
          Outils : Github, Git <br />
          Tests : Jest, Postman
        </p>
      </div>
    </div>
  </Layout>
);

export default Portfolio;
