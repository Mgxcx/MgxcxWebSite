import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
import Face4 from '../assets/images/AppFace4.jpg';

// import MyMoviz1 from '../assets/images/MyMoviz1.png';
// import MyMoviz2 from '../assets/images/MyMoviz2.png';
// import MyMoviz3 from '../assets/images/MyMoviz3.png';
// import MyMoviz4 from '../assets/images/MyMoviz4.png';

// import MorningNews1 from '../assets/images/MorningNews1.png';
// import MorningNews2 from '../assets/images/MorningNews2.png';
// import MorningNews3 from '../assets/images/MorningNews3.png';
// import MorningNews4 from '../assets/images/MorningNews4.png';
// import MorningNews5 from '../assets/images/MorningNews5.png';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
};

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Portfolio</h2>
          <p>Les projets sur lesquels j'ai travaillé</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">
            Application mobile e-commerce - Beer's Corner
          </h3>

          <Slider {...settings} className="slider">
            <img src={Beers1} alt="" style="sliderimage" />
            <img src={Beers2} alt="" style="sliderimage" />
            <img src={Beers3} alt="" style="sliderimage" />
            <img src={Beers4} alt="" style="sliderimage" />
            <img src={Beers5} alt="" style="sliderimage" />
            <img src={Beers6} alt="" style="sliderimage" />
            <img src={Beers7} alt="" style="sliderimage" />
            <img src={Beers8} alt="" style="sliderimage" />
          </Slider>
          <p>
            Beer’s Corner est un bar à bières situé au Plessis-Belleville. C’est
            un bar accueillant une clientèle d’habitués, qui a pris l’habitude
            pendant le confinement de commander des bières et planches sur le
            site WordPress déjà existant (soit à emporter, soit en livraison).
            Le besoin d’une application mobile reliée à leur API externe afin
            d’enregistrer les commandes et les recevoir directement sur leur
            caisse est devenu une évidence pour les deux gérants !
          </p>

          <p>
            Création de l'application mobile de A à Z contenant une page
            d'accueil avec toutes les actualités, une page pour stocker des
            produits favoris, une page de catalogue de produits avec un menu
            horizontal dynamique, une page dédiée au processus de commande
            (incluant le panier, l’identification, le paiement et la validation
            de la commande), et une page de compte client (accès au profil du
            client avec ses principales informations et commandes, et paramètres
            pour modifier certaines informations). <br />
            Prototypage et Conception : création de la maquette, et de l'UI Kit
            de l'application mobile. Requêtes à leur API externe, gestion du
            paiement avec Stripe, et gestion de l'authentification avec
            Firebase.
          </p>
          <p>
            Technos utilisées : React Native, Redux, Node.js, Express.js <br />
            Design : Figma, Whimsical <br />
            Outils : Gitlab, GitKraken <br />
            Tests : Jest, Postman
          </p>
          <br />
          <h3 className="major">Application Mobile CV - Margaux Chevreux</h3>
          <Slider {...settings} className="slider2">
            <img src={CV1} alt="" style="sliderimage" />
            <img src={CV2} alt="" style="sliderimage" />
            <img src={CV3} alt="" style="sliderimage" />
            <img src={CV4} alt="" style="sliderimage" />
            <img src={CV5} alt="" style="sliderimage" />
            <img src={CV6} alt="" style="sliderimage" />
          </Slider>
          <p>
            Création d’un projet de CV sous forme d’application React Native.
          </p>
          <p>
            L’application contient une page d’accueil mettant en avant mes softs
            skills et réseaux sociaux dans une side bar. <br />
            Elle redirige à l’aide de boutons vers les principales pages. Elle
            simule une notification destinée à un faux recruteur pour qu’il me
            contacte, et au clic sur le bouton « Recrutez-moi » : un faux
            dialogue avec ce fameux recruteur pour mettre en avant le chat.
            <br />
            Elle contient également une page d’expériences sous forme de
            flatlist, une page de formations sous forme de cards, qui, au clic,
            révèlent des steps indicators dynamiques avec les grands thèmes
            détaillés de la formation en question. <br />
            Elle contient aussi une page détaillant ma stack à l’aide de logos.
            Et pour finir, une page dédiée à mes hobbies qui met donc en avant
            une carte interactive avec les points de mes différents voyages, mes
            plus beaux clichés photographiques, les plats que j’adore cuisiner,
            et une photo de mes chats.
          </p>
          <p>
            Technos utilisées : React Native, Redux, Node.js, Express.js <br />
            Design : Figma, Whimsical <br />
            Outils : Gitlab, GitKraken <br />
            Tests : Jest, Postman
          </p>
          <br />
          <br />
          <br />
          <br />
          <h3 className="major">
            Application Mobile d'entraînement aux entretiens - Margaux Chevreux
            et Pierre-Laurent Vincent
          </h3>
          <Slider {...settings} className="slider">
            <img src={Interview1} alt="" style="sliderimage" />
            <img src={Interview2} alt="" style="sliderimage" />
            <img src={Interview3} alt="" style="sliderimage" />
            <img src={Interview4} alt="" style="sliderimage" />
          </Slider>
          <p>
            Création d'une application React Native d’entraînement aux
            entretiens d’embauche.
          </p>

          <p>
            L'application propose un questionnaire d'entretien toujours
            différent dans la page entraînement. Nous avons décidé de générer à
            chaque entraînement des questions aléatoires parmi une cinquantaine
            de choix en fonction de la difficulté choisie par l'utilisateur
            avant chaque entretien. Nous avons créé les questions selon
            différentes thématiques : parler de soi, négociation, projection,
            préparatifs et storytelling. <br /> Elle donne accès à la suite de
            l'entretien à des statistiques à l’aide de « charts », un salaire
            approximatif selon le métier et la région (webscrapping des données
            de KelJob), un score et un trophée en fonction du score. <br />
            Elle possède aussi une page dédiée aux conseils pour réussir au
            mieux son entretien, et une page de compte récapitulant les derniers
            scores aux entretiens, les trophées gagnés, et la formule actuelle
            de l'utilisateur.
            <br /> Elle propose plusieurs formules d'entraînements avec
            différentes fonctionnalités à débloquer (statistiques plus
            détaillées, chat avec un recruteur, etc.) entraînant le paiement
            pour les formules + et pro.
            <br />
            Nous avons tous deux réalisé le design et le maquettage au
            préalable. <br />
            L'idée est venue de mon binôme qui a travaillé dans le domaine du
            recrutement et avait remarqué que les candidats n'étaient pas assez
            préparés. J'ai été heureuse de contribuer à rendre son idée
            d'application mobile concrète.
          </p>
          <p>
            Technos utilisées : React Native, Redux, MongoDB, Node.js,
            Express.js <br />
            Design : Figma, Whimsical <br />
            Outils : Github, Git <br />
            Tests : Jest, Postman
          </p>
          <br />
          <br />

          <h3 className="major">
            Application Mobile de partage de points d'intérêts - Margaux
            Chevreux
          </h3>
          <Slider {...settings} className="slider2">
            <img src={Location1} alt="" style="sliderimage" />
            <img src={Location2} alt="" style="sliderimage" />
            <img src={Location3} alt="" style="sliderimage" />
            <img src={Location4} alt="" style="sliderimage" />
            <img src={Location5} alt="" style="sliderimage" />
            <img src={Location6} alt="" style="sliderimage" />
          </Slider>
          <p>
            Création d'une application React Native de partage de points
            d'intérêts à l'aide d'une map, et d'un chat.
          </p>

          <p>
            L'application intègre une carte sur laquelle les utilisateurs
            peuvent ajouter des points d’intérêts avec des titres et
            descriptions.
          </p>
          <p>
            Elle propose également un chat avec les différents utilisateurs de
            l'application afin de discuter des points d'intérêts de chacun, et
            de partager de bons spots !
          </p>
          <p>
            Technos utilisées : React Native, Redux, Node.js, Express.js <br />
            Design : Figma, Whimsical <br />
            Outils : Github, Git <br />
            Tests : Jest, Postman
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3 className="major">
            Application Mobile de capture et galerie de photos - Margaux
            Chevreux
          </h3>
          <Slider {...settings} className="slider">
            <img src={Face1} alt="" style="sliderimage" />
            <img src={Face2} alt="" style="sliderimage" />
            <img src={Face3} alt="" style="sliderimage" />
            <img src={Face4} alt="" style="sliderimage" />
          </Slider>
          <p>
            Création d'une application React Native de capture et galerie de
            photos, reliée à l'API Microsoft Azure de reconnaissance faciale:
            Face Detect.
          </p>

          <p>
            L'application intègre l'appareil photo natif du téléphone afin de
            capturer des photos sur les deux objectifs (avant/arrière), avec le
            flash ou non.
          </p>
          <p>
            Elle enregistre les photos sur Cloudinary afin de les stocker dans
            la galerie de photos de l'utilisateur.
          </p>
          <p>
            Et pour finir elle intègre l'API Microsoft Azure de reconnaissance
            faciale qui analyse chaque cliché, et détecte les principaux
            attributs de la personne afin de les afficher en dessous de chaque
            photo dans la galerie.
          </p>
          <p>
            Technos utilisées : React Native, Redux, Node.js, Express.js <br />
            Design : Figma, Whimsical <br />
            Outils : Github, Git <br />
            Tests : Jest, Postman
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* <h3 className="major">
            Application Web de films et wishlist - Margaux Chevreux
          </h3>
          <Slider {...settings} className="sliderweb">
            <img src={MyMoviz1} alt="" width="20" height="480" />
            <img src={MyMoviz2} alt="" width="20" height="480" />
            <img src={MyMoviz3} alt="" width="20" height="480" />
            <img src={MyMoviz4} alt="" width="20" height="480" />
          </Slider>
          <p>
            Création d'une application React de films récupérés via une API.
          </p>

          <p>
            L'application va récupérer des films et leurs notes via une API.
            Elle permet aux utilisateurs de les noter à leurs tours (ce qui va
            changer la moyenne de notes).
          </p>
          <p>
            Et pour finir, elle permet aux utilistauers de les ajouter ou non à
            leurs wishlists.
          </p>
          <p>
            Technos utilisées : React, MongoDB, Node.js, Express.js <br />
            Design : Figma, Whimsical <br />
            Outils : Github, Git <br />
            Tests : Jest, Postman
          </p>
          <br />
          <br />
          <br />
          <br />
          <h3 className="major">
            Application Web de presse et wishlist - Margaux Chevreux
          </h3>
          <Slider {...settings} className="sliderweb2">
            <img src={MorningNews1} alt="" width="20" height="480" />
            <img src={MorningNews2} alt="" width="20" height="480" />
            <img src={MorningNews3} alt="" width="20" height="480" />
            <img src={MorningNews4} alt="" width="20" height="480" />
            <img src={MorningNews5} alt="" width="20" height="480" />
          </Slider>
          <p>
            Création d'une application React d'articles de presse récupérés via
            une API.
          </p>

          <p>
            L'application va récupérer des articles français, et anglais via une
            API. Elle permet aux utilisateurs de le choisir la presse française
            ou anglaise, et de lire les artciles.
          </p>
          <p>
            Et pour finir, elle permet aux utilistauers de les ajouter ou non à
            leurs wishlists.
          </p>
          <p>
            Technos utilisées : React, MongoDB, Node.js, Express.js <br />
            Design : Figma, Whimsical <br />
            Outils : Github, Git <br />
            Tests : Jest, Postman
          </p> */}
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
