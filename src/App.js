import './App.css';
import Main from './components/Main';

function App() {

   const rose = [
    {
       title : "samsung",
       summa : 50000,
       colar : "red",
       img : "https://xiufa.ru/images/upload/80453-eu-smartfon-samsung-galaxy-a34-5g-8-256gb-(zelenyj)_thumb256.jpg",
       id : 1 
    },
    {
       title : "redmi",
       summa : 23000,
       colar : "grey",
       img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC076tFwoxzzA7EedjqFTsRAHWWEWpJZnp8Q&s",
       id : 2
    },
    {
       title : "POCO",
       summa : 40000,
       colar : "green",
       img : "https://xiufa.ru/images/upload/smartfon-xiaomi-poco-x6-pro-5g-12-512gb-(zheltyj)_thumb256.jpg",
       id : 3
    },
    {
       title : "Iphone",
       summa : 60000,
       colar : "green",
       img : "https://www.istudio.store/cdn/shop/files/iPhone_16_Pro_Desert_Titanium_TH_1.jpg?v=1725929129&width=823",
       id : 4
    }
  ]
  
  return (
    <div className="App">
     <Main  text={rose}/> 
    </div>
  );
}

export default App;
