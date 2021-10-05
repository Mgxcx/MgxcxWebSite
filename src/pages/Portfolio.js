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
import { Link } from 'gatsby';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
};

const IndexPage = () => (
  <Layout fullMenu>
    <section id="banner">
      <header>
        <div className="inner">
          <h2>Portfolio</h2>
          <p>Les projets sur lesquels j'ai travaillé</p>
        </div>
      </header>
    </section>
    <div className="wrapper style2">
      <div className="inner">
        <h3 className="major">Application mobile e-commerce - Beer's Corner</h3>
        <Slide bottom big>
          <Slider {...settings} className="slider">
            <img src={Beers1} alt="" class="sliderimage" />
            <img src={Beers2} alt="" class="sliderimage" />
            <img src={Beers3} alt="" class="sliderimage" />
            <img src={Beers4} alt="" class="sliderimage" />
            <img src={Beers5} alt="" class="sliderimage" />
            <img src={Beers6} alt="" class="sliderimage" />
            <img src={Beers7} alt="" class="sliderimage" />
            <img src={Beers8} alt="" class="sliderimage" />
          </Slider>
        </Slide>
        <p>
          Beer’s Corner est un bar à bières situé au Plessis-Belleville. Il
          accueille une clientèle d’habitués, qui a pris l’habitude pendant le
          confinement de commander des bières et planches sur le site WordPress
          déjà existant. Le besoin d’une application mobile reliée à leur API
          externe afin d’enregistrer les commandes et les recevoir directement
          sur leur caisse est devenu une évidence pour les deux gérants !
        </p>
        <p>
          Création de l'application mobile de A à Z : maquettage, création de
          l'UI Kit et développement. Elle contient une page d'accueil avec
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
          <a
            href="https://www.youtube.com/watch?v=jpcKRsbO8po"
            className="special"
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
        <h3 className="major">Application Mobile CV - Margaux Chevreux</h3>
        <Slide bottom big>
          <Slider {...settings} className="slider2">
            <img src={CV1} alt="" class="sliderimage" />
            <img src={CV2} alt="" class="sliderimage" />
            <img src={CV3} alt="" class="sliderimage" />
            <img src={CV4} alt="" class="sliderimage" />
            <img src={CV5} alt="" class="sliderimage" />
            <img src={CV6} alt="" class="sliderimage" />
          </Slider>
        </Slide>
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
        <Slide bottom big>
          <Slider {...settings} className="slider">
            <img src={Interview1} alt="" class="sliderimage" />
            <img src={Interview2} alt="" class="sliderimage" />
            <img src={Interview3} alt="" class="sliderimage" />
            <img src={Interview4} alt="" class="sliderimage" />
          </Slider>
        </Slide>
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
        <Slide bottom big>
          <Slider {...settings} className="slider2">
            <img src={Location1} alt="" class="sliderimage" />
            <img src={Location2} alt="" class="sliderimage" />
            <img src={Location3} alt="" class="sliderimage" />
            <img src={Location4} alt="" class="sliderimage" />
            <img src={Location5} alt="" class="sliderimage" />
            <img src={Location6} alt="" class="sliderimage" />
          </Slider>
        </Slide>
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
        <Slide bottom big>
          <Slider {...settings} className="slider">
            <img src={Face1} alt="" class="sliderimage" />
            <img src={Face2} alt="" class="sliderimage" />
            <img src={Face3} alt="" class="sliderimage" />
            <img src={Face4} alt="" class="sliderimage" />
          </Slider>
        </Slide>
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

export default IndexPage;
