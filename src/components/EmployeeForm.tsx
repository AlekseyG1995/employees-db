import { rolesList } from "../models/rolesList"
import { useForm, SubmitHandler } from "react-hook-form"

// const [day, month, year] = str.split('/');
// const date = `${year}-${month}-${day}`;

interface IFormInputs {
  firstName: string
  lastName: string
  role: string
  dob: Date
  phone: string
}

export const EmployeeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>()
  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    // need change final Data
    console.log(data)
  }
  
  return (
    <>
      <form className="form" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-firstname">
          <label className="text-sm">
            First name
            <input className="block w-full" type="text" {...register("firstName", { required: true })} />
          </label>
          {errors.firstName && "First name is required"}
        </div>
        <div className="form_lastname">
          <label className="text-sm">
            Last name
            <input className="block w-full" type="text" {...register("lastName", { required: true })} />
          </label>
          {errors.lastName && "Last name is required"}
        </div>
        <div className="form_dob">
          <label className="text-sm">
            Day of birthday
            <input className="block w-full" type="date" {...register("dob", { required: true })} />
          </label>
          {errors.dob && "Day of birthday is required"}
        </div>
        <div className="form_role">
          <label className="text-sm">
            Role
            <select defaultValue={rolesList[0]} className="block w-full" {...register("role", { required: true })}>
              {rolesList.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>
          {errors.role && "Role is required"}
        </div>
        <div className="form_phone">
          <label className="text-sm">
            Phone
            <input className="block w-full" type="phone" {...register("phone", { 
              required: {
                message: 'Phone number must not be empty',
                value: true
              },
              pattern: {
                value: /\+7\s*\([0-9]{3}\)\s*[0-9]{3}-[0-9]{4}/g,
                message: 'Number must be format +7 (xxx) xxx-xxxx'
              }
              })} />
          </label>
          {errors.phone?.message}
        </div>
        <div className="form_submit-button text-center">
          <button className="border w-[50%]" type="submit">
            OK
          </button>
        </div>
      </form>
    </>
  )
}
