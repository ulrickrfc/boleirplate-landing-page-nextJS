import { NextSeo } from 'next-seo';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
      // EXEMPLO, MUDAR PARA O SITE A SER DENSENVOLVIDO EM QUESTÃO
        title="React Avançado - Crie aplicações reais com NextJS, GraphQL e mais."
        description="Aprenda a criar um Ecommerce completo, indo do Backend ao Frontend utilizando tecnologias como ReactJS, NextJS, Strapi, GraphQL, Apollo e muito mais!"
        canonical="https://reactavancado.com.br/"
        openGraph={{
          url: 'https://reactavancado.com.br/',
          title:
            'React Avançado - Crie aplicações reais com NextJS, GraphQL e mais.',
          description:
            'Aprenda a criar um Ecommerce completo, indo do Backend ao Frontend utilizando tecnologias como ReactJS, NextJS, Strapi, GraphQL, Apollo e muito mais!',
          images: [{ url: 'https://reactavancado.com.br/img/cover.png' }],
          site_name: 'React Avançado',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@Willian_justen',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
