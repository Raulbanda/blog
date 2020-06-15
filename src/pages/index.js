import React, { useEffect } from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'

import SEO from '../components/seo'
import Nav from '../components/nav'

const AboutPage = () => {
  useEffect(() => {
    if (typeof window === `undefined`) return null

    const title = document.querySelector('.title')

    setTimeout(() => {
      title.classList.add('show')
    }, 175)

    return () => {
      title.classList.remove('show')
    }
  }, [])

  return (
    <>
      {}
      <SEO
        title="Inicio"
        description="Poemas, lecturas, poemas, cultura boliviana, Raul-Banda"
      />

      <div className="about-page">
        <Nav />

        <h1 className="title" data-splitting="">
        Raul 
          <br /> Banda
          <br /> 
        </h1>

        <h2 className="subtitle">La Vida en Poemas RB</h2>

        <div className="intro">
          <p>
            La unica Mision de este proyecto {' '}
            <a
              href="https://twitter.com/naval/status/1002103360646823936"
              target="_blank"
              rel="noopener noreferrer"
            >
              Raul-Banda-Poemas
            </a>{' '}
            
            es promover la Poesia, buscando una vigorosa presencia en la cultura Boliviana         </p>
          <p>
            El Poema en cada columna sera lo mas breve posible y regozijable a nuestros lectores
             publicaciones online
          </p>
          <p>
            Sin ti el poema no seria posible, porfavor donar si te gusta un poema mencionada          </p>
          <p>
             
          </p>
          <p>
            <a href="https://flowen.me/" target="_blank" rel="noopener noreferrer">
              Donar :)
            </a>
          </p>
          <p>
            <TransitionLink
              exit={{
                length: 1.25,
                delay: 0,
              }}
              entry={{
                delay: 1.25,
              }}
              to="/chapters"
              className="link-cta"
            >
              Columnas
            </TransitionLink>
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutPage
