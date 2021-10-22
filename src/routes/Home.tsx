import './App.css';
import {Header} from '../components/Header/Header';
import {useEffect} from 'react';
import {useFetch} from '../modules/notification-center/infra/notification-center.infra';

const Home = () => {
  const {sendQuery} = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      sendQuery()
    }
    fetchData();
}, [sendQuery]);

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default Home;
