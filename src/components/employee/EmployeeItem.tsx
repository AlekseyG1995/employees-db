import { FC } from "react"
import { Link } from "react-router-dom"
import { IEmployee } from "../../models/employee.model"

interface EmployeeItemProps {
  employee : IEmployee
}

export const EmployeeItem:FC<EmployeeItemProps> = ({ employee }) => {

const getAge = (birthday: string) => new Date().getFullYear() - new Date(convertToClientFormat(birthday)).getFullYear()

export const EmployeeItem: FC<EmployeeItemProps> = ({ employee }) => {
  return (
    <Link to={`/edit/${employee.id}`} className="border my-2 relative rounded-md bg-white block">
      <div className={colorsRole[employee.role].concat(" rounded-sm px-2 absolute right-1 top-1 text-white")}>{employee.role}</div>
      <div className="py-2 px-1">
        <div className="font-semibold sm:text-xl sm:text-center">{employee.name}</div>
        <div className="flex justify-between">
          <div>
            {employee.birthday}
            <span className="italic"> ({getAge(employee.birthday)})</span> 
          </div>
      <div>{employee.phone}</div>
        </div>
      </div>
    </Link>
  )
}
