import { Input } from '@material-tailwind/react';
import { ChangeEvent, FormEvent, useState } from 'react';

function Form() {
  const [ formData, setFormData ] = useState(
    {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      company: ''
    }
  );

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [ name ]: type === 'checkbox' ? checked : value
      };
    });
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("🚀 ~ file: Form.tsx:31 ~ InputChanges ~ formData:", formData);
  }

  return (
    <>
      <p className='text-center mt-5 font-light text-3xl text-stone-300'>
        FORM TEMPLATE
      </p>
      <main>
        <h3 className='text-center mt-3 px-9'>
          This is a simple form template to be reused in other components
        </h3>
      </main>

      {/* -------- start of form -------- */}
      <div className="m-8">
        <form className="max-w-[430px] mx-auto" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-5 group">
            {/* Necessary attributes: name, label, type, value, onChange */}
            {/* Essential input tags for React: `name`, `value` */}
            <Input
              name='username'
              label='User name'
              type='text'
              onChange={handleChange}
              value={formData.username}
              className=''
              color='blue'
              variant='outlined'
              size='lg'
              crossOrigin={undefined}
            />
          </div>

          {/* userneme input inspect */}

          <div className="relative z-0 w-full mb-5 group">
            <Input
              name='email'
              label='Email address'
              type="text"
              onChange={handleChange}
              value={formData.email}
              className=''
              color='blue'
              variant='outlined'
              size='lg'
              crossOrigin={undefined}
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <Input
              name='password'
              label='Password'
              type='password'
              onChange={handleChange}
              value={formData.password}
              className=''
              color='blue'
              variant='outlined'
              size='lg'
              crossOrigin={undefined}
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <Input
              name='confirmPassword'
              label='Confirm password'
              type='password'
              onChange={handleChange}
              value={formData.confirmPassword}
              className=''
              color='blue'
              variant='outlined'
              size='lg'
              crossOrigin={undefined}
            />
          </div>
          <div className="grid md:grid-cols-2 md:gap-10">
            <div className="relative z-0 w-full mb-5 group">
              <Input
                name='firstName'
                label='First name'
                type='text'
                onChange={handleChange}
                value={formData.firstName}
                className=''
                color='blue'
                variant='outlined'
                size='lg'
                crossOrigin={undefined}
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <Input
                name='lastName'
                label='Last name'
                type='text'
                onChange={handleChange}
                value={formData.lastName}
                className=''
                color='blue'
                variant='outlined'
                size='lg'
                crossOrigin={undefined}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-10">
            <div className="relative z-0 w-full mb-5 group">
              <Input
                name='phoneNumber'
                label='Phone number'
                type='text'
                onChange={handleChange}
                value={formData.phoneNumber}
                className=''
                color='blue'
                variant='outlined'
                size='lg'
                crossOrigin={undefined}
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <Input
                name='company'
                label='Company ( Ex. Google )'
                type='text'
                onChange={handleChange}
                value={formData.company}
                className=''
                color='blue'
                variant='outlined'
                size='lg'
                crossOrigin={undefined}
              />
            </div>

          </div>
          <button type="submit" className="text-blue bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full lg:w-full xl:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
      {/* -------- End of form -------- */}
    </>
  );
}

export default Form;