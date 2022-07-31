// !!!! все дефолты объявлять в useForm

import { rolesList } from "../models/rolesList"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { validationRules } from "../utils/validationRules"
import { FC } from "react"
import { IEmployeeDTO } from "../models/employee.dto"
import { IMaskInput } from "react-imask"
import { IEmployee } from "../models/employee.model"
import { convertToClientFormat, convertToServerFormat } from "../utils/convertData"
import { IUpdateParams } from "../types/types"
import { useNavigate } from "react-router-dom"

interface IFormInputs {
  firstName: string
  lastName: string
  role: string
  dob: string
  phone: string
  isArchive: boolean
}

interface EmployeeFormProps {
  addEmployee?: (employee: IEmployeeDTO) => void
  updateEmployee?: (updateObject: IUpdateParams) => void
  deleteEmployee?: (id: number) => void
  isEditMode?: boolean
  preData?: IEmployee
}

export const EmployeeForm: FC<EmployeeFormProps> = ({ addEmployee, preData, isEditMode, updateEmployee, deleteEmployee }) => {
  if (!isEditMode && !addEmployee) throw new Error('Wrong config: for AddMode should be function "addEmployee"')
  if (isEditMode && !updateEmployee) throw new Error('Wrong config: for updateMode should be function "updateEmployee"')
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<IFormInputs>()
  const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
    const employeeDTO: IEmployeeDTO = {
      name: `${data.firstName} ${data.lastName}`,
      role: data.role,
      isArchive: data.isArchive || false,
      phone: data.phone,
      birthday: convertToServerFormat(data.dob), // convert Date of Birthday to pattern
    }
    try {
      const response = !isEditMode ? await addEmployee!(employeeDTO) : await updateEmployee!({ employeeDTO, id: preData!.id })
      console.log(`[task-log] Employee has been ${isEditMode ? "updated" : "added"}!`, response)

      !isEditMode && reset()
    } catch (e) {
      console.error(`[task-log] Employee has not been ${isEditMode ? "updated" : "added"}!`, e)
      alert("Something went wrong!")
    }
  }

  const deleteEmployeeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    deleteEmployee && deleteEmployee(preData!.id)
    console.log("[Employee Form] deleting...")
    navigate("/", { replace: true })
  }

  return (
    <>
      <form className="form w-[30vw]" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-firstname">
          <label className="text-sm">
            First name
            <input
              defaultValue={preData && preData.name.split(" ")[0]}
              className="block w-full"
              type="text"
              {...register("firstName", validationRules.firstName)}
            />
          </label>
          {errors.firstName?.message}
        </div>
        <div className="form_lastname">
          <label className="text-sm">
            Last name
            <input
              defaultValue={preData && preData.name.split(" ")[1]}
              className="block w-full"
              type="text"
              {...register("lastName", validationRules.lastName)}
            />
          </label>
          {errors.lastName?.message}
        </div>
        <div className="form_dob">
          <label className="text-sm">
            Day of birthday
            <input
              defaultValue={preData && convertToClientFormat(preData.birthday)}
              className="block w-full"
              type="date"
              {...register("dob", validationRules.dob)}
            />
          </label>
          {errors.dob?.message}
        </div>
        <div className="form_role">
          <label className="text-sm">
            Role
            <select
              defaultValue={preData ? preData.role : ''}
              className="block w-full"
              {...register("role", validationRules.role)}
            >
              <option value="">{'<not selected...>'}</option>
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
              defaultValue={preData && preData.phone}
              render={({ field }) => <IMaskInput className="w-full" mask={"{+7} (000) 000-0000"} {...field} inputRef={field.ref} />}
            />
          </label>
          {errors.phone?.message}
        </div>

        {isEditMode && (
          <div className="form_isArhive">
            <label>
              isArchive
              <input type="checkbox" defaultChecked={preData && preData.isArchive} {...register("isArchive")} />
            </label>
          </div>
        )}

        <div className="form_submit-button text-center">
          <button className="border w-[50%]" type="submit">
            {isEditMode ? "Update" : "add"}
          </button>
        </div>
        {isEditMode && (
          // <div className="mt-3">
          <button onClick={deleteEmployeeHandler} className="border w-full bg-red-600">
            delete employee
          </button>
          // </div>
        )}
      </form>
    </>
  )
}
