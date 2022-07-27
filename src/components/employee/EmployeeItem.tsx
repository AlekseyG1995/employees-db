import { FC } from "react"
import { Link } from "react-router-dom"
import { IEmployee } from "../../models/employee.model"

interface EmployeeItemProps {
  employee : IEmployee
}

export const EmployeeItem:FC<EmployeeItemProps> = ({ employee }) => {



  return (
    <Link to={`/edit/${employee.id}`} className="border block">
      <div>{employee.name}</div>
      <div>{employee.role}</div>
      <div>{employee.birthday}</div>
      <div>{employee.phone}</div>
    </Link>
  )
}
