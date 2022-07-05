import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const Title = 'Duckyard';
  const LogoSize = 110;
  const logoPath = '/logo.png';
  return (
    <div className={styles.container}>
      <Head>
        <title>{Title}</title>
        <link rel="icon" href={logoPath} />
        <meta name="description" content={`The ${Title} API!`} />
      </Head>

      <main className={styles.main}>
        <div className={styles.topNav}></div>
        <Image className={styles.logo} src={logoPath} width={LogoSize} height={LogoSize} alt={Title} />
        <span className={styles.logoTitle}>{Title}</span>
        <form className={styles.form}>
          <input className={styles.searchBox} type="text" placeholder={`Welcome to ${Title}!`} autoComplete="off" required />
          <button className={styles.searchSubmit}>
          <svg className={styles.SVGSearchIcon} viewBox="0 0 19 21">
            <g>
              <path fillRule="evenodd" clipRule="evenodd" d="M2.34325 14.6421C-0.781084 11.5177 -0.781084 6.45184 2.34325 3.32812C5.46759 0.203779 10.5329 0.203779 13.6572 3.32812C16.5366 6.20753 16.7618 10.7372 14.3328 13.8752L17.4975 17.0399C18.1761 17.7186 18.1761 18.8189 17.4975 19.4975C16.8189 20.1761 15.7186 20.1761 15.0399 19.4975L11.6492 16.1068C8.64159 17.6484 4.8618 17.1601 2.34325 14.6421ZM3.75744 4.75745C1.41419 7.10024 1.41419 10.8997 3.75744 13.2429C6.10069 15.5857 9.89965 15.5857 12.2429 13.2429C14.5857 10.8997 14.5857 7.10024 12.2429 4.75745C9.89965 2.41419 6.10069 2.41419 3.75744 4.75745Z" />
            </g>
          </svg>
          </button>
        </form>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home;
