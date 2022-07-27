import { FC } from "react"
import { IEmployee } from "../../models/employee.model"
import { EmployeeItem } from "./EmployeeItem"

interface EmployeeListProps {
  employees: IEmployee[]
}

export const EmployeeList: FC<EmployeeListProps> = ({ employees }) => {
  return (
    <div className="border bg-slate-400">
      {employees.map((e) => (
        <EmployeeItem key={e.id} employee={e} />
      ))}
    </div>
  )
}