
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import Products from './components/Products'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'


import {Provider} from 'react-redux';
import store from './store'

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/product/newproduct" element={<AddProduct />} />
            <Route exact path="/product/edit/:id" element={<EditProduct />} />
            
            {/* <Route exact path='/search' element={<Search />} /> */}
            
            {/* <Route exact path='/profile/user/:id' element={<PrivateRoute component={Profile} />} /> */}
          </Routes>
        </div>
        </Provider>
      </Router>
    </>
  );
}

export default App;
