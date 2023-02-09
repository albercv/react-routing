import React from 'react'
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom'
import { Contact } from '../components/Contact'
import { Home } from '../components/Home'
import { Item } from '../components/Item'
import { Person } from '../components/Person'
import { NotFound } from '../components/NotFound'
import { Explode } from '../components/Explode'

export const MainRouter = () => {
    return (
        <BrowserRouter className='layout'>
            <h1 className='header'>Cabecera</h1>
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to="/home" className={({isActive}) => { return isActive?'active':''}}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive}) => { return isActive?'active':''}}>CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink to="/item" className={({isActive}) => { return isActive?'active':''}}>ITEM</NavLink>
                    </li>
                    <li>
                        <NavLink to="/person" className={({isActive}) => { return isActive?'active':''}}>PERSON</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bomb" className={({isActive}) => { return isActive?'active':''}}>BOMB</NavLink>
                    </li>
                </ul>
            </nav>
            <section className='mainSection'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/item' element={<Item />} />
                    <Route path='/person/:personName/:surname' element={<Person />} />
                    <Route path='/person' element={<Person />} />
                    <Route path='/*' element={<NotFound />} />
                    <Route path='/bomb' element={<Explode />} />
                    <Route path='/redirect' element={<NavLink to="/index" />} />
                </Routes>
            </section>
            <footer className='footer'>
                <h6> &copy; <a href="https://evolve2digital.com" >evolve2digital.com</a></h6>
            </footer>
        </BrowserRouter>
    )
}
