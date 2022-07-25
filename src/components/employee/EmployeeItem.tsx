import { FC } from "react"
import { IEmployee } from "../../models/employee.model"

interface EmployeeItemProps {
  employee : IEmployee
}

export const EmployeeItem:FC<EmployeeItemProps> = ({ employee }) => {
  return (
    <div className="border">
      <div>{employee.name}</div>
      <div>{employee.role}</div>
      <div>{employee.birthday}</div>
      <div>{employee.phone}</div>
    </div>
  )
}
