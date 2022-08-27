import Card from "./Components/Card";
import Header from "./Components/Header";
import CartDrawer from "./Components/CartDrawer";

const arr = [
  {
    title: 'Vegetarian food',
    price: '100',
    imageUrl: '/img/food.png'
  },
  {
    title: 'Hamburger',
    price: '120',
    imageUrl: '/img/food1.png'
  }
];

function App() {
  return (
    <div className="wrapper clear">
      <CartDrawer />
      <Header />
      <div className="content p-40">
        {/*--------------------------------------------------------------------------------------------search-block*/}
        <div className="d-flex align-center justify-between mb-40">
          <h1 >All coupons</h1>
          <div className="search-block d-flex align-center justify-between">
            <img className="search-png" width={25} height={25} src="/img/search.png" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorit={() => console.log('Added to bookmarks')}
              onPlus={() => console.log('Added to cart')}
            />))};

        </div>
      </div>
    </div>
  );
}

export default App;
