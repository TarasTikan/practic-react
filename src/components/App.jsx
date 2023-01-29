import { data } from 'data/data';
import { User } from './User/user';
import { UserList } from './UserList/UserList';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
      <User user={data[0]} />
      <UserList users={data} />
      <Section>
        <Section title="List of users" />
        <UserList users={data} />
      </Section>
    </>
  );
};
