import PropTypes from 'prop-types';
import { AddressTitle, AddressDescripte } from './Address.styled';

export const Address = ({street, suite, city}) => {
    return (
        <>
        <AddressTitle>Address:</AddressTitle>
        <AddressDescripte>City: {city}</AddressDescripte>
        <AddressDescripte>Street: {street}</AddressDescripte>
        <AddressDescripte>Suite: {suite}</AddressDescripte>
        </>
    )
}

Address.propTypes = {
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
}