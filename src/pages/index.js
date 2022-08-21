import React from 'react';

import Typical from 'react-typical';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import laptopcode from '../assets/images/laptop-code-solid.svg';

import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon">
            <img src={laptopcode} alt="LaptopCode" class="laptopcodeicon" />
          </span>
        </div>
        <h2>{config.heading}</h2>
        <p className="noPaddingBottom">{config.subHeading}</p>
        <Typical
          steps={[
            ' Passionnée de photographie.',
            2000,
            " Fan d'UX/UI.",
            2000,
            " Toujours à l'écoute.",
            2000,
          ]}
          wrapper="p"
          loop={Infinity}
        />
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
            <img
              src={pic1}
              alt="Picture of Margaux Chevreux"
              className="image"
            />
          <div className="content">
            <h2 className="major">À propos de moi...</h2>
            <p>
              Après plusieurs années d'expérience dans le commerce et le
              marketing en hôtellerie, j'ai décidé de tourner une page. 📖
              <br />
              <br />
              Ayant déjà appris les bases du développement web durant ma Licence
              professionnelle Tourisme Nouvelles Technologies, et ayant pratiqué
              pendant un de mes stages de Master, ma reconversion dans ce
              domaine est devenue une évidence. 👩🏼‍💻
              <br />
              <br />
              Je m'épanouis énormément dans ce nouveau métier car je suis
              passionnée par la création, l'analyse, et la résolution de
              problèmes complexes.
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
            <img
              src={pic2}
              alt="Picture of a woman working on a mobile app"
              className="image"
            />
          <div className="content">
            <h2 className="major">
              De la conception au développement de votre app
            </h2>
            <p>
              Je me suis tout de suite spécialisée dans les applications
              mobiles, étant fan de cette technologie, et du minimalisme. 📱👩🏼‍💻
              <br />
              Entourée de freelances seniors React Native, je vous propose des
              applications mobiles originales, sur-mesure, et de qualité.
              <br />
              <br />
              Mes expériences dans le commerce et le marketing me permettent
              d'avoir un œil avisé sur l'expérience utilisateur : je peux créer
              vos maquettes et votre UI, ou simplement vous donner mon avis ! 🎨
              <br />
              <br />
              J'ai conscience des besoins de chaque domaine, ayant été
              anciennement responsable des ventes B to B. Cela me permet de
              développer votre application mobile selon votre cœur de métier.
              <br />
              <br />
              Je crée aussi vos sites web statiques avec des animations sobres
              et dynamiques, ou vos applications web React. 🌐
              <br />
            </p>

            <a href="/Portfolio" className="special">
              Voir mes projets
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
            <img src={pic3} alt="Picture of a camera" className="image" />
          <div className="content">
            <h2 className="major">Ma passion pour la photographie</h2>
            <p>
              Depuis toute petite, j'ai toujours aimé photographier. J'adore
              tout particulièrement capturer des portraits, et des paysages.
              <br />
              Ayant pratiqué longtemps à l'aide d'appareils photos numériques,
              j'ai ensuite eu mon reflex Nikon, et depuis je ne m'en sépare
              plus... 📸
              <br />
              <br />
              Je vous donne un avant-goût de mes clichés avec ces superbes
              calanques de Piana qui embellissent mon portfolio.
              <br />
              J'attends avec impatience d'acquérir mon nouveau compagnon pour
              capturer ce genre d'instants précieux.
              <br />
            </p>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
