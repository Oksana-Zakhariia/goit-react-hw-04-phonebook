import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.styled';
export const ContactList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => {
        console.log(item.name);
        return (
          <li key={item.id}>
            <Contact item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </List>
  );
};
ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
