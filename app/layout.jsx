import './globals.css'
import {Inter} from 'next/font/google'
import CartProvider from './components/Providers'
import MyNavbar from './components/MyNavbar'
import ShoppingCartModal from './components/ShoppingCartModal'
import MyFooter from './components/MyFooter'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'The Unofficial Merch Store',
  description: 'The unofficial Merch Store',
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CartProvider>
          <MyNavbar />
          <ShoppingCartModal />
          <main>{children}</main>
          <MyFooter />
        </CartProvider>
      </body>
    </html>
  )
}
