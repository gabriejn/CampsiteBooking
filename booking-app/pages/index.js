import Head from 'next/head';
import DisplayCollection from './displaycollection';
import EmailSearchAndCollection from './emailsearchtest';
import EmailSearchInput from './EmailSearch';
import BasicExample from './test_bstrapui';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <div>  <DisplayCollection />
    <EmailSearchAndCollection/>
    <BasicExample />
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js app!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    </div>
  );
};

export default Home;
