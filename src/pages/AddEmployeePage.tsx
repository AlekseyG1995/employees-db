import React, { FC } from "react"
import { EmployeeForm } from "../components/EmployeeForm"

import { useAddMutation } from "../store/employeesAPI/employees.api"

export const AddEmployeePage:FC = () => {
  const [addEmployee, {}] = useAddMutation()
  // console.log(useAddMutation())

  return (
    <div>
      <EmployeeForm addEmployee={addEmployee}/>
    </div>
  )
}
