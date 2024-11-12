import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/user';
import { useUsers } from '../context/UserContext';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ImageUpload from '../components/common/ImageUpload';
import InputField from '../components/common/Input';
import SelectField from '../components/common/SelectField';
import RadioGroup from '../components/common/RadioGroup';
import Button from '../components/common/Button';


const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  role: yup.string().oneOf(['Admin', 'User', 'Guest'], 'Invalid role').required('Role is required'),
  status: yup.string().oneOf(['Active', 'Inactive'], 'Invalid status').required('Status is required'),
}).required();

type FormInputs = Omit<User, 'id' | 'profilePhoto'>;

const AddUserPage = () => {
  const { addUser } = useUsers();
  const navigate = useNavigate();
  const [profilePhoto, setProfilePhoto] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      status: 'Active',
      role: 'User'
    }
  });

  const onSubmit: SubmitHandler<FormInputs> = data => {
    setIsSubmitting(true);
    addUser({ ...data, profilePhoto });
    toast.success('User added successfully');
    reset();
    setIsSubmitting(false);
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white mt-10 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Add User</h1>
      <ImageUpload setProfilePhoto={setProfilePhoto} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Name"
          id="name"
          type="text"
          register={register}
          error={errors.name}
        />
        <InputField
          label="Email"
          id="email"
          type="email"
          register={register}
          error={errors.email}
        />
        <SelectField
          label="Role"
          id="role"
          options={['Admin', 'User', 'Guest']}
          register={register}
          error={errors.role}
        />
        <RadioGroup
          label="Status"
          name="status"
          options={['Active', 'Inactive']}
          register={register}
          error={errors.status}
        />
        <div className="flex justify-end space-x-4 pt-4">
          <Button
            type="button"
            onClick={() => navigate('/')}
            className="btn px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            label="Cancel"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary inline-flex items-center"
            label={isSubmitting ? 'Adding User...' : 'Add User'}
            isLoading={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
};

export default AddUserPage;