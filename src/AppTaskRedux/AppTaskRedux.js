import React from 'react'
import NavBar from '../components/NavBar'
import { FloatButton } from './components/FloatButton'
import { ModalTaskRedux } from './components/ModalTaskRedux'

export const AppTaskRedux = () => {
    return (
        <div>
            <NavBar />
            <FloatButton />
            <ModalTaskRedux />
        </div>
    )
}
