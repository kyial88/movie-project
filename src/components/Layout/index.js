import React from 'react';
import Header from "../Header";
import { Pagination } from 'swiper/modules';

const Layout = ({children}) => {
    return (
        <>
           <Header />
            <main>
                {children}
            </main>

        </>
    );
};


export default Layout;