import Featured from "../../components/feature/Featured";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import "./home.scss";
import Tmdb from '../../Tmdb';
import { useState, useEffect } from "react";

function Home() {

  
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  


  useEffect(() => {
    const loadAll = async () => {
      // getting the TOTAL list
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // getting the Featured
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);


  return (
    <div className="home">
      <Navbar />
      {featuredData &&
        <Featured item={featuredData} />
      }
      {movieList.map((item, key) => (
          <List key = {key} title={item.title} items={item.items}/>
        ))}
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif" alt="Loading..." />
        </div>
      }
      
    </div>
  );
}

export default Home;
