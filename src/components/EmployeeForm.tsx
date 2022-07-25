import { rolesList } from "../models/rolesList"
import { useForm, SubmitHandler } from "react-hook-form"
import { validationRules } from "../utils/validationRules"
import { FC } from "react"
import { IEmployeeDTO } from "../models/employee.dto"


interface IFormInputs {
  firstName: string
  lastName: string
  role: string
  dob: string
  phone: string
}

interface EmployeeFormProps {
  addEmployee: (employee: IEmployeeDTO) => void
}

export const EmployeeForm:FC<EmployeeFormProps> = ({addEmployee}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>()
  const onSubmit: SubmitHandler<IFormInputs> =async (data: IFormInputs) => {
    const [year, month, day] = data.dob.split('-')
    const employeeDTO:IEmployeeDTO = {
      name: `${data.firstName} ${data.lastName}`,
      role: data.role,
      phone: data.phone.trim(),
      birthday: `${day}.${month}.${year}` // convert Date of Birthday to pattern
    }
    console.log(employeeDTO)
    const responce = await addEmployee(employeeDTO)
    console.log('!!!', responce);
    
  }

  return (
    <>
      <form className="form" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-firstname">
          <label className="text-sm">
            First name
            <input className="block w-full" type="text" {...register("firstName", validationRules.firstName)} />
          </label>
          {errors.firstName?.message}
        </div>
        <div className="form_lastname">
          <label className="text-sm">
            Last name
            <input className="block w-full" type="text" {...register("lastName", validationRules.lastName)} />
          </label>
          {errors.lastName?.message}
        </div>
        <div className="form_dob">
          <label className="text-sm">
            Day of birthday
            <input className="block w-full" type="date" {...register("dob", validationRules.dob)} />
          </label>
          {errors.dob?.message}
        </div>
        <div className="form_role">
          <label className="text-sm">
            Role
            <select defaultValue={rolesList[0]} className="block w-full" {...register("role", validationRules.role)}>
              {rolesList.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>
          {errors.role?.message}
        </div>
        <div className="form_phone">
          <label className="text-sm">
            Phone
            <input className="block w-full" type="phone" {...register("phone", validationRules.phone)} />
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
