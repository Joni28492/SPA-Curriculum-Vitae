

import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { uiContext } from './ui/UiContext';
export const CurriculumApp = () => {

    const colors = {
        blue: '#6F8AAB',
        red: '#713240',
        orange: '#F5943D',
        lime: '#3A9F47', 
        brown: '#A89660'
    }

    const store={
        colors
    }

    return ( 
        <uiContext.Provider value={store}>
            <AppRouter />
        </uiContext.Provider>
    )
}
