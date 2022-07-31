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
      <form className="" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label className="">
            First name
            <input
              defaultValue={preData && preData.name.split(" ")[0]}
              className="my-input"
              type="text"
              {...register("firstName", validationRules.firstName)}
            />
          </label>
          <span className="my-error-input">{errors.firstName?.message}</span>
        </div>
        <div className="my-form-item">
          <label className="">
            Last name
            <input
              defaultValue={preData && preData.name.split(" ")[1]}
              className="my-input"
              type="text"
              {...register("lastName", validationRules.lastName)}
            />
          </label>
          <span className="my-error-input font-thin">{errors.lastName?.message}</span>
        </div>
        <div className="my-form-item">
          <label className="">
            Day of birthday
            <input
              defaultValue={preData && convertToClientFormat(preData.birthday)}
              className="my-input bg-white"
              type="date"
              {...register("dob", validationRules.dob)}
            />
          </label>
          <span className="my-error-input">{errors.dob?.message}</span>
        </div>
        <div className="my-form-item">
          <label className="">
            Role
            <select defaultValue={preData ? preData.role : ""} className="my-input bg-white" {...register("role", validationRules.role)}>
              <option value="">{"<not selected...>"}</option>
              {rolesList.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>
          <span className="my-error-input">{errors.role?.message}</span>
        </div>
        <div className="my-form-item">
          <label className="">
            Phone
            <Controller
              name="phone"
              control={control}
              rules={validationRules.phone}
              defaultValue={preData && preData.phone}
              render={({ field }) => <IMaskInput className="my-input" mask={"{+7} (000) 000-0000"} {...field} inputRef={field.ref} />}
            />
          </label>
          <span className="my-error-input">{errors.phone?.message}</span>
        </div>

        {isEditMode && (
          <div className="my-form-item flex items-center">
            <label htmlFor="isArchive"> isArchive &nbsp; </label>
            <input
              id="isArchive"
              className="w-4 h-4"
              type="checkbox"
              defaultChecked={preData && preData.isArchive}
              {...register("isArchive")}
            />
          </div>
        )}

        <div className={`mt-1 flex ${!isEditMode ? "justify-center" : "justify-around"}`}>
          <div className="form_submit-button text-center">
            <button className="border my-3 py-1.5 px-4 bg-cyan-600 text-white rounded-sm" type="submit">
              {isEditMode ? "update employee" : "add employee"}
            </button>
          </div>
          {isEditMode && (
            <button onClick={deleteEmployeeHandler} className="border my-3 py-1.5 px-4 bg-red-600 text-white rounded-sm">
              delete employee
            </button>
          )}
        </div>
      </form>
    </>
  )
}
