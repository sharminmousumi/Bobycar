import React , {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';


function App() {
  const showproduct='product' , showShoppingCart='ShoppingCart';
  const [show,setShow]=useState(showproduct);
  let Body= 0;
  if(show===showproduct){
     Body=<Product/>
  }else{
    Body=<ShoppingCart/>
  }
  return (
    <div className="App">
     
     <Header setShow={setShow} sendNav={{showproduct,showShoppingCart}}/>
     <main className="main">
       <div>
            <div className="bottom-right">Köp din Bobbycar online<br/>
            {/* <div>
            <span id="content1">Fri Frakt på allt</span><span id="content2">Livstids service</span>
            
            </div> */}
            
                       <div className="text"> Fri Frakt på allt <br/>
                                              Livstids service<br/>
                                              Snabbast och säkrast på marknade<br/></div> 
                </div>
      </div>
    
     {Body}
      
      </main>
     <Footer/>
    </div>
  );
}

export default App;
