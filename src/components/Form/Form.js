import { Formik, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { FormButton, FormLabel, Input } from './Form.styled';
import PropTypes from 'prop-types';
let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(7).max(12).required(),
});

const initialValues = {
  name: '',
  id: nanoid(5),
  number: '',
};
export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormLabel htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
        </FormLabel>
        <FormLabel htmlFor="number">
          Phone
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></Input>
          <ErrorMessage name="number" component="div" />
        </FormLabel>

        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </Formik>
  );
};
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
