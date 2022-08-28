import React from "react";
import axios from "axios";
import Card from "./Components/Card";
import Header from "./Components/Header";
import CartDrawer from "./Components/CartDrawer";




function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://6309ebeef8a20183f778cc87.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://6309ebeef8a20183f778cc87.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://6309ebeef8a20183f778cc87.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    // console.log(id);
    // axios.delete(`https://6309ebeef8a20183f778cc87.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && < CartDrawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">

        <div className="d-flex align-center justify-between mb-40">
          <h2 >{searchValue ? `Search by request: "${searchValue}"` : "All menu"}</h2>
          <div className="search-block d-flex align-center justify-between">
            <img className="search-png" width={25} height={25} src="/img/search.png" alt="Search" />
            {searchValue &&
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p"
                width={18}
                height={18}
                src="/img/close.png"
                alt="Clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorit={() => console.log('Added to bookmarks')}
                onPlus={(obj) => onAddToCart(obj)}
              />))}
        </div>
      </div>
    </div>
  );
}

export default App;
