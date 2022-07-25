import { rolesList } from "../models/rolesList"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { validationRules } from "../utils/validationRules"
import { FC } from "react"
import { IEmployeeDTO } from "../models/employee.dto"
import { IMaskInput } from "react-imask"

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

export const EmployeeForm: FC<EmployeeFormProps> = ({ addEmployee }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<IFormInputs>()
  const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
    const [year, month, day] = data.dob.split("-")
    const employeeDTO: IEmployeeDTO = {
      name: `${data.firstName} ${data.lastName}`,
      role: data.role,
      isArchive: false,
      phone: data.phone.trim(),
      birthday: `${day}.${month}.${year}`, // convert Date of Birthday to pattern
    }
    try {
      const response = await addEmployee(employeeDTO)
      console.log("[task-log] Employee has been added!", response)
      reset()
    } catch (e) {
      console.error("[task-log] Employee has not been added!", e)
      alert("Something went wrong!")
    }
  }

  return (
    <>
      <form className="form w-[30vw]" action="" onSubmit={handleSubmit(onSubmit)}>
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
            <Controller
              name="phone"
              control={control}
              rules={validationRules.phone}
              render={({ field }) => <IMaskInput className="w-full" mask={"{+7} ({9}00) 000-0000"} {...field} inputRef={field.ref} />}
            />
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
