import { FC } from "react"
import { IEmployee } from "../../models/employee.model"
import { EmployeeItem } from "./EmployeeItem"

interface EmployeeListProps {
  employees: IEmployee[]
}

export const EmployeeList: FC<EmployeeListProps> = ({ employees }) => {
  return (
    <div>
      {employees.length === 0 ? <p className="text-center">Employees list is empty!</p> : employees.map((e) => <EmployeeItem key={e.id} employee={e} />)}
    </div>
  )
}
