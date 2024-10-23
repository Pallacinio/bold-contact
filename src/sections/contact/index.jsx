import './index.css';
import Heading from '../../components/heading';
import Text from '../../components/text';
import Form from '../../components/form';

const Contact = () => {

  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <Heading level={2} color="black">
            Contact
          </Heading>
          <Text color="black">
            Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours
          </Text>
        </div>
        <div className="">
          <Form/>
        </div>
      </div>
    </div>
  )
};

export default Contact;
