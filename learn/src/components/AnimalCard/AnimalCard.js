import React from "react";
import './AnimalCard.css';
import PropTypes from 'prop-types';
import AnimalDetails from "../AnimalDetails/AnimalDetails";
import Card from '../Card/Card';


export default function AnimalCard({
    additional = {
        notes: "No Additional Information"
    },
    diet,
    name,
    scientificName,
    showAdditional,
    size,
    ...props
}) {


    return (
        <Card title="Animal" details = {<em> Mammal</em>}>
            <AnimalDetails
            scientificName = {scientificName}
            diet={diet} />
            {/* <h3>{scientificName}</h3> */}
            <div>{diet.join(', ')}</div>
            <h2>{name}</h2>
            <h3>{size}</h3>
            

        </Card>
    );
}

AnimalCard.propTypes = {
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
}
