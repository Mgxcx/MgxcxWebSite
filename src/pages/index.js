import React from 'react';

import Slide from 'react-reveal/Slide';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-mobile"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <Slide right>
            <a href="/#" className="image">
              <img src={pic1} alt="" />
            </a>
          </Slide>
          <div className="content">
            <h2 className="major">À propos de moi...</h2>
            <p>
              Au cours de ma carrière dans la relation client, j'ai découvert
              plusieurs métiers en débutant en tant que réceptionniste, et en
              finissant responsable des ventes.
              <br />
              Après plusieurs années d'expérience dans le commerce et le
              marketing, j'ai décidé de tourner une page en février 2020.
              <br />
              <br />
              Ayant déjà appris les bases du développement web durant ma licence
              en 2013, et ayant pratiqué pendant un stage de master en 2015, ma
              reconversion dans ce domaine est devenue une évidence.
              <br />
              Je m'épanouis énormément dans ce nouveau métier car je suis
              passionnée par la création, l'analyse, et la résolution de
              problèmes complexes.
              <br />
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <Slide left>
            <a href="/#" className="image">
              <img src={pic2} alt="" />
            </a>
          </Slide>
          <div className="content">
            <h2 className="major">
              De la conception au développement de votre app mobile
            </h2>
            <p>
              Je me suis tout de suite spécialisée dans les applications
              mobiles, étant fan de cette technologie, et du minimalisme.
              Entourée de freelances seniors React Native, je vous propose des
              applications mobiles originales, sur-mesure, et de qualité. <br />
              <br />
              Mes expériences passées dans le commerce et le marketing me
              permettent d'avoir un œil avisé sur l'expérience utilisateur : je
              crée vos maquettes et votre UI. <br />
              <br />
              J'ai conscience des besoins de chaque domaine, ayant été
              anciennement responsable des ventes B to B. Cela me permet de
              développer et réaliser le design de votre application mobile selon
              votre cœur de métier. <br />
              <br />
              Je crée aussi vos sites web statiques avec des animations sobres
              et dynamiques, ou vos applications web. <br />
            </p>
            <a href="/Portfolio" className="special">
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <Slide right>
            <a href="/#" className="image">
              <img src={pic3} alt="" />
            </a>
          </Slide>
          <div className="content">
            <h2 className="major">Ma passion pour la photographie</h2>
            <p>
              Depuis toute petite, j'ai toujours aimé photographier. J'adore
              tout particulièrement capturer des portraits, et des paysages.{' '}
              <br />
              Ayant pratiqué longtemps à l'aide d'appareils photos numériques,
              j'ai eu mon reflex Nikon D80 en 2013, et depuis je ne m'en sépare
              plus...
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
