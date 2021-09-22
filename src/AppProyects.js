import React from 'react'
import { Provider } from 'react-redux'
import { store } from './AppTaskRedux/store/store'
import { AppRouter } from './routes/AppRouter'

export const AppProyects = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
