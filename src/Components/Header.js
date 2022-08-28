function Header(props){
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/bag.png" alt="" />
          <div >
            <h1 className="text-uppercase">React food</h1>
            <p className="opacity-5">Best food shop</p>
          </div>
        </div>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={17} height={17} src="/img/shopping4.png" alt="" />
            <span>100 $</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/client3.png" alt="" />
          </li>
        </ul>
      </header>
    );
}

export default Header;