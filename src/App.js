import { Provider } from 'react-redux'
import { store } from './store'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './components'
import { About, AuthWrapper, Cart, Checkout, Error, Home, PrivateRoute, Products, SingleProduct } from './pages'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='about' element={<About />} />
                        <Route path='cart' element={<Cart />} />
                        <Route path='products' element={<Products />}>
                            <Route path=':id' element={<SingleProduct />} />
                        </Route>
                        <Route path='checkout' element={<Checkout />} />
                        <Route path='*' element={<Error />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
