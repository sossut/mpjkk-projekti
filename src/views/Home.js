import MediaTable from '../components/MediaTable';
import {Helmet} from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <MediaTable />
    </>
  );
};

export default Home;
