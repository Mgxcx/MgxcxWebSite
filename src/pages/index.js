import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
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
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
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
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
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
              Je vous donne un avant-goût de mes clichés avec cette superbe
              Valley of Fire qui embellit mon portfolio.
              <br />
              J'attends avec impatience d'acquérir mon nouveau compagnon pour
              capturer ce genre d'instants précieux.
              <br />
            </p>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Vitae phasellus</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
