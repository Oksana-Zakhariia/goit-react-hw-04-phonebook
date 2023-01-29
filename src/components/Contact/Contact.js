import PropTypes from 'prop-types';
import { ContactButton, ContactItem } from './Contact.styled';

export const Contact = ({ item, onDelete }) => {
  return (
    <ContactItem id={item.id}>
      <div>
        <span>{item.name} </span>
        <span>{item.number}</span>
      </div>
      <ContactButton
        onClick={() => {
          onDelete(item.id);
        }}
      >
        Delete
      </ContactButton>
    </ContactItem>
  );
};
Contact.propTypes = {
  item: PropTypes.object.isRequired,
};
