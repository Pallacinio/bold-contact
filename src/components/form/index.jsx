import './index.scss';
import FormInput from '../formInput';

const Form = () => {
  const handlePhoneChange = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  };

  return (
    <form className="form">
        <div className="form__row">
          <FormInput
            style="half"
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <FormInput
            style="half"
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          />
        </div>
        <FormInput
          style="full"
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          required
          onChange={handlePhoneChange} 
        />
        <FormInput
          style="full"
          type="text"
          name="service"
          placeholder="What Service are you interested in?"
          required
        />
      <button type="submit" className="form__btn">SUBMIT NOW</button>
    </form>
  );
};

export default Form;
