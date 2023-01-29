import PropTypes from 'prop-types';
import { User } from 'components/User/user';

export const UserList = ({users}) => {
    return (
        <ul>
        {users.map(el => {
            return (<li key={el.id}>
                <User user={el}></User>
            </li>)
        })}
        </ul>
    )
    }

    UserList.propTypes = {
        users: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired
            })
        )
    }