import PropTypes from 'prop-types';
import { Item, ContactText, ContactBtn } from './ContactListItem.styled';
import { BsPersonFill, BsXLg } from 'react-icons/bs';

export const ContactListItem = ({ name, number, id, onDeleteContact }) => (
  <Item>
    <ContactText>
      <BsPersonFill />
      &nbsp;{name}: {number}
    </ContactText>
    <ContactBtn onClick={() => onDeleteContact(id)}>
      <BsXLg />
    </ContactBtn>
  </Item>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
