import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../assets/sass/components/slick/slick-theme.scss';
import '../assets/sass/components/slick/slick.scss';

import Layout from '../components/Layout';

import MoneyWalkie1 from '../assets/images/AppMoneyWalkie1.png';
import MoneyWalkie2 from '../assets/images/AppMoneyWalkie2.png';
import MoneyWalkie3 from '../assets/images/AppMoneyWalkie3.png';
import MoneyWalkie4 from '../assets/images/AppMoneyWalkie4.png';
import MoneyWalkie5 from '../assets/images/AppMoneyWalkie5.png';
import MoneyWalkie6 from '../assets/images/AppMoneyWalkie6.png';
import MoneyWalkie7 from '../assets/images/AppMoneyWalkie7.png';
import MoneyWalkie8 from '../assets/images/AppMoneyWalkie8.png';

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
        <h3 className="major">Application mobile fintech pour enfants - Money Walkie</h3>
          <Slider {...settings} className="bigslider2">
            <img
              src={MoneyWalkie1}
              alt="mobile fintech app"
              class="sliderimage"
            />
            <img
              src={MoneyWalkie2}
              alt="mobile fintech app"
              class="sliderimage"
            />
            <img
              src={MoneyWalkie3}
              alt="mobile fintech app"
              class="sliderimage"
            />
            <img
              src={MoneyWalkie4}
              alt="mobile fintech app"
              class="sliderimage"
            />
            <img
              src={MoneyWalkie5}
              alt="mobile fintech app"
              class="sliderimage"
            />
            <img
              src={MoneyWalkie6}
              alt="mobile fintech app"
              class="sliderimage"
            />
            <img
              src={MoneyWalkie7}
              alt="mobile fintech app"
              class="sliderimage"
            />
            <img
              src={MoneyWalkie8}
              alt="mobile fintech app"
              class="sliderimage"
            />
          </Slider>
        <p>
        Money Walkie est une application mobile qui permet de confier de petites sommes à un enfant. 
        Avec son Walkie (outil sans contact et sécurisé), il peut effectuer des dépenses 
        chez les commerçants seul ou avec un adulte. 
        <br />
        L'application permet de voir chaque dépense en temps réel,
        et de créer des occasions d’ouvrir le dialogue entre le parent
        et l’enfant par rapport à la gestion de l'argent à l'aide de stories notamment.
        </p>

        <p>
        J'ai été missionnée pour la mise en place de nouvelles
        fonctionnalités telles que les jauges de limites de paiement
        afin que les enfants/parents puissent mieux contrôler leurs budgets/dépenses,
        et l'historique de transactions affiché mensuellement contenant le détail des plus grosses
        et plus petites dépenses afin d'avoir une meilleure visibilité. 
        </p>

        <p>
        J'ai également travaillé sur la refonte design complète de
        l'application mobile en binôme avec le lead dev.
        Nous avons travaillé sur l'ensemble des screens et en
        avons également ajouté tout en améliorant l'architecture existante
        afin d'utiliser des global components, et découper sous forme de features. 

        </p>

        {/* <p>
          <a
            href="https://www.youtube.com/watch?v=jpcKRsbO8po"
            className="special"
            target="_blank"
          >
            Découvrez-la en vidéo !
          </a>
        </p> */}
        <p>
          Technos utilisées : React Native, Node.js, Express.js, MongoDB <br />
          Outils : Github, GitKraken <br />
          Tests : Jest, Insomnia
        </p>
      </div>
      <div className="inner">
        <h3 className="major">Application mobile e-commerce - Beer's Corner</h3>
          <Slider {...settings} className="bigslider">
            <img
              src={Beers3}
              alt="mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers1}
              alt="mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers4}
              alt="mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers2}
              alt="mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers5}
              alt="mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers6}
              alt="mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers7}
              alt="mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers8}
              alt="mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers9}
              alt="mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers10}
              alt="mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers11}
              alt="mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers12}
              alt="mobile e-commerce app"
              class="sliderimage"
            />
            <img
              src={Beers13}
              alt="mobile e-commerce app"
              class="sliderimage"
            />
          </Slider>
        <p>
          Beer’s Corner est un bar à bières situé au Plessis-Belleville. Il
          accueille une clientèle d’habitués, qui a pris l’habitude pendant le
          confinement de commander des bières et planches sur le site WordPress
          déjà existant. Le besoin d’une application mobile reliée à leur API
          externe afin d’enregistrer les commandes et les recevoir directement
          sur leur caisse est devenu une évidence pour les deux gérants !
        </p>
        <p>
          Création de l'application mobile de A à Z seule : maquettage, création
          de l'UI Kit et développement. Elle contient une page d'accueil avec
          toutes les actualités, une page pour stocker des produits favoris, une
          page de catalogue de produits avec un menu horizontal dynamique, une
          page dédiée au processus de commande (incluant le panier,
          l’identification, le paiement et la validation de la commande), et une
          page de compte client (accès au profil du client avec ses principales
          informations et commandes, et paramètres pour modifier certaines
          informations). <br />
          Spécificités : requêtes à leur API externe, gestion du paiement avec
          Stripe, et gestion de l'authentification avec Firebase.
        </p>
        <p>
          Review de mon code par deux seniors pour assurer à mon client une
          application très qualitative.
        </p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=jpcKRsbO8po"
            className="special"
            target="_blank"
          >
            Découvrez-la en vidéo !
          </a>
        </p>
        <p>
          Technos utilisées : React Native, Redux, Node.js, Express.js <br />
          Design : Figma, Whimsical <br />
          Outils : Gitlab, GitKraken <br />
          Tests : Jest, Postman
        </p>
      </div>

      <div className="inner portfolio2">
        <h3 className="major">Site Web pour un syndicat aérien - UNAC</h3>
          <Slider {...settings} className="sliderweb">
            <img src={Unac1} alt="airfrance syndicate website" class="sliderimageweb" />
            <img src={Unac2} alt="airfrance syndicate website" class="sliderimageweb" />
            <img src={Unac3} alt="airfrance syndicate website" class="sliderimageweb" />
            <img src={Unac4} alt="airfrance syndicate website" class="sliderimageweb" />
          </Slider>
        <p>
          L’UNAC est un des syndicats d’Air France, existant depuis 1967, et
          situé à Tremblay en France. Les membres du syndicat ont exprimé le
          besoin de renouveler le design de leur site !
        </p>
        <p>
          J'ai donc proposé mes services pour leur créer ce site avec des
          animations.
        </p>
        <p>
          Technos utilisées : HTML5, CSS3, SASS, Bootstrap <br />
          Outils : Github, Git
        </p>
      </div>

      <div className="inner portfolio">
        <h3 className="major">Application Mobile CV - Margaux Chevreux</h3>
          <Slider {...settings} className="slider">
            <img
              src={CV1}
              alt="mobile CV app"
              class="sliderimage"
            />
            <img
              src={CV2}
              alt="mobile CV app"
              class="sliderimage"
            />
            <img
              src={CV3}
              alt="mobile CV app"
              class="sliderimage"
            />
            <img
              src={CV4}
              alt="mobile CV app"
              class="sliderimage"
            />
            <img
              src={CV5}
              alt="mobile CV app"
              class="sliderimage"
            />
            <img
              src={CV6}
              alt="mobile CV app"
              class="sliderimage"
            />
          </Slider>
        <p>Création d’un projet de CV sous forme d’application React Native.</p>
        <p>
          L’application contient une page d’accueil mettant en avant mes softs
          skills et réseaux sociaux dans une side bar. <br />
          Elle redirige à l’aide de boutons vers les principales pages. Elle
          simule une notification destinée à un faux recruteur pour qu’il me
          contacte, et au clic sur le bouton « Recrutez-moi » : un dialogue avec
          ce fameux recruteur pour mettre en avant le chat.
          <br />
          Elle contient également une page d’expériences sous forme de flatlist,
          une page de formations sous forme de cards, qui, au clic, révèlent des
          steps indicators dynamiques avec les thèmes détaillés de la formation
          en question. <br />
          Elle contient aussi une page détaillant ma stack à l’aide de logos. Et
          pour finir, une page dédiée à mes hobbies qui met en avant une carte
          interactive avec les points de mes différents voyages, mes plus beaux
          clichés photographiques, les plats que j’aime cuisiner, et une photo
          de mes chats.
        </p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=TdHJgz8KJgU"
            className="special"
            target="_blank"
          >
            Découvrez-la en vidéo !
          </a>
        </p>
        <p>
          Technos utilisées : React Native, Redux, Node.js, Express.js <br />
          Design : Figma, Whimsical <br />
          Outils : Gitlab, GitKraken <br />
          Tests : Jest, Postman
        </p>
      </div>

      <div className="inner portfolio">
        <h3 className="major">
          Application Mobile d'entraînement aux entretiens - Margaux Chevreux et
          Pierre-Laurent Vincent
        </h3>
          <Slider {...settings} className="slider2">
            <img
              src={Interview1}
              alt="mobile interview training app"
              class="sliderimage"
            />
            <img
              src={Interview2}
              alt="mobile interview training app"
              class="sliderimage"
            />
            <img
              src={Interview3}
              alt="mobile interview training app"
              class="sliderimage"
            />
            <img
              src={Interview4}
              alt="mobile interview training app"
              class="sliderimage"
            />
          </Slider>
        <p>
          Création d'une application React Native d’entraînement aux entretiens
          d’embauche.
        </p>
        <p>
          L'application propose des entraînements aux entretiens. À chaque
          entraînement, des questions aléatoires sont générées en fonction de la
          difficulté choisie avant chaque entretien. Nous avons créé les
          questions selon 5 thématiques.
          <br /> Elle donne accès à la suite de l'entretien à des statistiques à
          l’aide de « charts », un salaire approximatif selon le métier et la
          région (webscrapping de KelJob), un score et un trophée. <br />
          Elle possède aussi une page dédiée aux conseils, et une page de compte
          avec les scores, les trophées gagnés, et la formule actuelle.
          <br /> Elle propose plusieurs formules d'entraînements avec
          différentes fonctionnalités à débloquer (statistiques, chat avec un
          recruteur, etc.).
          <br />
          L'idée est venue de mon binôme qui avait remarqué que les candidats
          n'étaient pas assez préparés.
        </p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=wdc-lx7tumA&t=16s"
            className="special"
            target="_blank"
          >
            Découvrez-la en vidéo !
          </a>
        </p>
        <p>
          Technos utilisées : React Native, Redux, MongoDB, Node.js, Express.js
          <br />
          Design : Figma, Whimsical <br />
          Outils : Github, Git <br />
          Tests : Jest, Postman
        </p>
      </div>

      <div className="inner portfolio">
        <h3 className="major">
          Application Mobile de partage de points d'intérêts - Margaux Chevreux
        </h3>
          <Slider {...settings} className="slider">
            <img
              src={Location1}
              alt="mobile mapping app"
              class="sliderimage"
            />
            <img
              src={Location2}
              alt="mobile mapping app"
              class="sliderimage"
            />
            <img
              src={Location3}
              alt="mobile mapping app"
              class="sliderimage"
            />
            <img
              src={Location4}
              alt="mobile mapping app"
              class="sliderimage"
            />
            <img
              src={Location5}
              alt="mobile mapping app"
              class="sliderimage"
            />
            <img
              src={Location6}
              alt="mobile mapping app"
              class="sliderimage"
            />
          </Slider>
        <p>
          Création d'une application React Native de partage de points
          d'intérêts à l'aide d'une map, et d'un chat.
        </p>

        <p>
          L'application intègre une carte sur laquelle les utilisateurs peuvent
          ajouter des points d’intérêts avec des titres et descriptions. Les
          points d'intérêts sont enregistrés dans le compte de l'utilisateur.
        </p>
        <p>
          Il est possible d'ajouter des points d'intérêts partout dans le monde
          à l'aide de cette application ! Le but est d'en ajouter le plus
          possible, et d'en discuter avec la communauté, et donc d'en découvrir
          des nouveaux !
        </p>
        <p>
          Pour permettre les discussions, elle propose également un chat avec
          les différents utilisateurs de l'application afin de discuter des
          points d'intérêts de chacun, et de partager de bons spots ! <br />
          Les messages du chat sont enregistrés dans le compte de l'utilisateur,
          pour qu'il puisse retrouver facilement ce qu'on a pu lui conseiller.
        </p>
        <p>
          Technos utilisées : React Native, Redux, Node.js, Express.js <br />
          Design : Figma, Whimsical <br />
          Outils : Github, Git <br />
          Tests : Jest, Postman
        </p>
      </div>

      <div className="inner portfolio">
        <h3 className="major">
          Application Mobile de capture et galerie de photos - Margaux Chevreux
        </h3>
          <Slider {...settings} className="slider2">
            <img
              src={Face1}
              alt="mobile images app"
              class="sliderimage"
            />
            <img
              src={Face2}
              alt="mobile images app"
              class="sliderimage"
            />
            <img
              src={Face3}
              alt="mobile images app"
              class="sliderimage"
            />
            <img
              src={Face4}
              alt="mobile images app"
              class="sliderimage"
            />
          </Slider>
        <p>
          Création d'une application React Native de capture et galerie de
          photos, reliée à l'API Microsoft Azure de reconnaissance faciale: Face
          Detect.
        </p>
        <p>
          L'application intègre l'appareil photo natif du téléphone afin de
          capturer des photos sur les deux objectifs (avant/arrière), avec le
          flash ou non.
        </p>
        <p>
          Elle enregistre les photos sur Cloudinary afin de les stocker dans la
          galerie de photos de l'utilisateur.
        </p>
        <p>
          Et pour finir elle intègre l'API Microsoft Azure de reconnaissance
          faciale qui analyse chaque cliché, et détecte les principaux attributs
          de la personne afin de les afficher en dessous de chaque photo dans la
          galerie.
        </p>
        <p>
          Le but de cette application est de capturer de beaux instants, et de
          découvrir ce que l'API sonde de notre visage ! De bonnes ou mauvaises
          surprises nous attendent par rapport à l'âge ou à l'humeur !
        </p>
        <p>
          Technos utilisées : React Native, Redux, Node.js, Express.js <br />
          Design : Figma, Whimsical <br />
          Outils : Github, Git <br />
          Tests : Jest, Postman
        </p>
      </div>
    </div>
  </Layout>
);

export default Portfolio;
