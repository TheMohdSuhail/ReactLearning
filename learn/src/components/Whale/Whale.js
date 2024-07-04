import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';

export default function Whale() {
    // const { search } = useLocation();
    // const match = search.match(/type=(.*)/);
    // const type = match?.[1];

    // const {type} = useParams();

    // const match = useMatch('/whale/*');



    return (
        <>
            <h2>Whale</h2>
            <Routes>
            <Route path="beluga" element={<Beluga />} />
            <Route path="blue" element={<Blue />} />
            </Routes>
        </>
    );
}