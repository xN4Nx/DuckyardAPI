import type { NextApiRequest, NextApiResponse } from 'next';

export const response_404 = `
<html>
  <head>
  <title>404 Not Found</title>
    <meta name="viewport" content="width=device-width">
    <style>
      @font-face {
        font-family: 'Proxima Nova';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://dl.dropboxusercontent.com/s/3yjki3wzl8mmwlx/400.otf?dl=0) format('opentype');
      }
      @font-face {
        font-family: 'Proxima Nova';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://dl.dropboxusercontent.com/s/y4ivoazwqc1iv5p/500.otf?dl=0) format('opentype');
      }

      * {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        font-weight: 300;
        line-height: 1.1;
        position: relative;
        text-decoration: none;
        box-sizing: border-box;
        scroll-behavior: smooth;
        background-color: transparent;
        text-rendering: geometricPrecision;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
        font-family: 'Proxima Nova', sans-serif;
      }

      body {
        color: #DDD;
        width: 100%;
        height: 100vh;
        display: flex;
        overflow: hidden;
        user-select: none;
        align-items: center;
        background-color: #000;
        justify-content: center;
      }

      body > div {
        width: 100%;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      body > div > h1 {
        color: #FFF;
        width: 65px;
        height: 100%;
        font-size: 24px;
        font-weight: 500;
        display: inline-block;
        padding: 10px 23px 10px 0;
        border-right: 1px solid rgb(255, 255, 255, .3);
      }

      body > div > h2 {
        font-size: 14px;
        font-weight: 400;
        margin-left: 20px;
      }
    </style>
  </head>
  <body>
    <div>
      <h1>404</h1>
      <h2>This page could not be found.</h2>
    </div>
  </body>
</html>
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(404).end(response_404);
}
