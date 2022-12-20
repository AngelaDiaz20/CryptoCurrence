import {useEffect, useState} from 'react' 
import './theme/App.css';
import Header from './components/layout/Header';
import Statistics from './components/common/Statistics';
import Trend from './components/common/Trend';
import Footer from './components/layout/Footer';
import TableCoins from './components/common/TableCoins';

function App() {
  const [coins, setCoins] = useState()

  const getData = async () =>{
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C90d%2C1y`)
    const json = await response.json()
    setCoins(json)
  }

  useEffect(() => {
    getData()
  },[]) 

  return (
    !coins ? "Cargando..." :(
    <div className="App">
      <Header/>
      <Statistics/>
      <TableCoins coins={coins}/>
      <Trend/>
      <Footer/>
    </div>
  ));
}

export default App;
