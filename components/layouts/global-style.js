// language=CSS
export default () => (
  <style global jsx>{`
    @import url('https://fonts.googleapis.com/css?family=Space+Mono|Work+Sans');

    body {
      font-size: 1.2rem;
      line-height: 1.6rem;
      // font-family: 'Source Sans Pro', sans-serif;
      font-family: 'Work Sans', sans-serif;
      margin: 0px;
      color: #111;
      background-color: #fff !important;
    }

    img {
      max-width: 100%;
    }

    a {
      color: #111;
      word-break: break-all;
    }

    * {
      box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #293a7d;
      font-family: 'Space Mono', monospace;
      letter-spacing: 0.2px;
    }

    h1 {
      font-size: 40px;
      line-height: 50px;
      font-weight: 400;
    }

    h2 {
      letter-spacing: 0.2px;
      text-align: center;
      margin: 2rem 0;
    }

    @media (max-width: 768px) {
      h1,
      h2 {
        font-size: 24px;
      }
    }

    .apply__container h1 {
      font-weight: 700;
    }

    p {
      font-family: 'Work Sans', sans-serif;
      font-size: 18px;
      line-height: 1.8rem;
    }
  `}</style>
)