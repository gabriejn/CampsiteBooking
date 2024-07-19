import Head from 'next/head';
import DisplayCollection from './displaycollection';
import EmailSearchAndCollection from './emailsearchtest';
const Home = () => {
  return (
    <div>  <DisplayCollection />
    <EmailSearchAndCollection />
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js app!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    </div>
  );
};

export default Home;
