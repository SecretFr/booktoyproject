import React, { Fragment } from 'react';
import Header from '../../layout/Header';
import Banner from '../../elements/ui/Banner';
import Brand from '../../elements/widgets/brand/Brand';
import Deal from '../deal/Deal';
import Footer from '../../layout/Footer';


export default function Home() {
    return (
        <Fragment>
            <Header/>
            <Banner />
            <Brand />
            <Deal />
            <Footer />
        </Fragment>
    );
}