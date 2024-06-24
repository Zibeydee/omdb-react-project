import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainContent from '../MainContent/MainContent'

function Layout({children}) {
  return (
    <div>
        <Header/>
        <MainContent>
            {children}
        </MainContent>
        <Footer/>
    </div>
  )
}

export default Layout