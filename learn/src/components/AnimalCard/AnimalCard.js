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
        <Card title="Animal">
            <h2>{name}</h2>
            {/* <h3>{scientificName}</h3> */}
            <h3>{size}</h3>
            <AnimalDetails
            scientificName = {scientificName}
            diet={diet} />
            <div>{diet.join(', ')},</div>
            <button onClick={() => showAdditional(additional)}>More Info</button>

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
