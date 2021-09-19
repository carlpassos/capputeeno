import { createContext, ReactNode, useEffect, useState  } from "react";
import { parseCookies, setCookie } from 'nookies'
import { toast } from 'react-toastify';

interface CartProviderProps {
  children: ReactNode;
}

type cartProductData = {
  id: string;
  count: number;
}

export interface CartInfoProps {
  products: cartProductData[],
  count: number,
}

interface cartContextData {
  cartInfo: CartInfoProps,
  loadingCartInfo: boolean,
  getCartCount: () => number;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  updateCartProduct: (id: string, count: number) => void;
}

  const addToCartNotify = () => toast.success("Produto adicionado no carrinho", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const removeFromCartNotify = () => toast.info('Produto Removido do carrinho', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const updateCartNotify = () => toast.info('Produto alterado', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

export const cartContext = createContext({} as cartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const cookies = parseCookies()
  const initialCart = cookies["[CAPPUTEENO] Cart"] ? JSON.parse(cookies["[CAPPUTEENO] Cart"]) : {products: [], count: 0}

  const [cartInfo, setCartInfo] = useState<CartInfoProps>(initialCart);
  const [loadingCartInfo, setLoadingCartInfo] = useState<boolean>(true);


  useEffect(() => {
    if (loadingCartInfo && ( cartInfo.count > 0 )) {
      setLoadingCartInfo(false)
    } 
  }, [cartInfo, loadingCartInfo])

  function getCartCount() {
    return cartInfo.count
  }

  function addToCart(id: string) {
    const fidCartItem = cartInfo?.products?.find( cartItem => cartItem.id === id )
    if(!fidCartItem && cartInfo.products.length === 0) {
      addToCartNotify()
      setCartInfo({products: [{id, count: 1}], count: 1})
      setCookie(null, '[CAPPUTEENO] Cart', JSON.stringify({products: [{id, count: 1}], count: 1}), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      return
    }
    
    if (!fidCartItem) {
      const newCartProducts = cartInfo.products
      newCartProducts.push({id, count: 1})

      const newCartInfo = {
        products: [...newCartProducts],
        count: cartInfo.count + 1
      }
      addToCartNotify()
      setCartInfo(newCartInfo)
      setCookie(null, '[CAPPUTEENO] Cart', JSON.stringify(newCartInfo), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      return
    }

    const newCartProducts = cartInfo.products.map(product => {
      if (product.id === id) {
        return {id, count: product.count + 1}
      }
      return product
    })

    const newCartInfo ={
      products: [...newCartProducts],
      count: cartInfo.count + 1
    }
      addToCartNotify()
      setCartInfo(newCartInfo)
      setCookie(null, '[CAPPUTEENO] Cart', JSON.stringify(newCartInfo), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      return
  }

  function removeFromCart(id: string) {
    let newCartCount = 0;
    const newCartProducts = cartInfo.products.filter(product => {
      if (product.id === id) {
        newCartCount = product.count
        return false
      }
      return true
    })

    const newCartInfo ={
      products: [...newCartProducts],
      count: cartInfo.count - newCartCount
    }
      removeFromCartNotify()
      setCartInfo(newCartInfo)
      setCookie(null, '[CAPPUTEENO] Cart', JSON.stringify(newCartInfo), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      return

  }

  function updateCartProduct(id: string, count: number) {
    let newProductCount = 0;
    const newProducts = cartInfo.products.map(product => {
      if (product.id === id) {
        return {
          id: product.id,
          count
        }
      }
      return product
    })

    const newCartcount = newProducts.reduce((total, product) => {
      return total + product.count;
    }, 0)

    const newCartInfo ={
      products: [...newProducts],
      count: newCartcount
    }

      updateCartNotify()
      setCartInfo(newCartInfo)
      setCookie(null, '[CAPPUTEENO] Cart', JSON.stringify(newCartInfo), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      return

  }

  return (
    <cartContext.Provider value={{
      cartInfo,
      loadingCartInfo,
      getCartCount,
      addToCart,
      removeFromCart,
      updateCartProduct,
    }}>
      {children}
    </cartContext.Provider>
  )
}