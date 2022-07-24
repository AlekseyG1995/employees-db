import { IEmployee } from "../../models/employee.model"

export const EmployeeItem = ({ employee }: { employee: IEmployee }) => {
  return (
    <div className="border">
      <div>{employee.name}</div>
      <div>{employee.role}</div>
      <div>{employee.birthday}</div>
      <div>{employee.phone}</div>
    </div>
  )
}
