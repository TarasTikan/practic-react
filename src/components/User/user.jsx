import PropTypes from 'prop-types';
import { Paragraph, Span } from './User.styled';
import { Address } from 'components/Address/Address';
import Avatar from 'react-avatar';

export const User = ({user: {name, email, isOnline, address: {street, suite, city}}}) => {
    const emailChek = email.endsWith('biz')
return (
    <>
    <Avatar size='40' round={true} name={name}/>
    <Paragraph>Name: <Span>{name}</Span></Paragraph>
    <Paragraph>email: <Span isRed={emailChek}>{email}</Span></Paragraph>
    <Paragraph>isOnline: <Span Online={isOnline}>{isOnline}</Span></Paragraph>
    <Address street={street} suite={suite} city={city}/>
    </>
)
}

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        isOnline: PropTypes.string.isRequired,
        address: PropTypes.shape({
            street: PropTypes.string.isRequired,
            suite: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired
        }).isRequired
    })
}
