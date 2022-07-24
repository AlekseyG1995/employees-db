import { IEmployee } from "../../models/employee.model"
import { EmployeeItem } from "./EmployeeItem"

export const EmployeeList = ({ employees }: { employees: IEmployee[] }) => {
  return (
    <div className="border bg-slate-400">
      {employees.map((e) => (
        <EmployeeItem key={e.id} employee={e} />
      ))}
    </div>
  )
}
