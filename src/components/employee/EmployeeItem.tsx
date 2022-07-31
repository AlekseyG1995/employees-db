import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IEmployee } from '../../models/employee.model'
import { convertToClientFormat } from '../../utils/convertData'

interface EmployeeItemProps {
  employee: IEmployee
}

const colorsRole = {
  tester: 'bg-red-400',
  backend: 'bg-green-500',
  frontend: 'bg-blue-300'
}

const getAge = (birthday: string) => new Date().getFullYear() - new Date(convertToClientFormat(birthday)).getFullYear()

export const EmployeeItem: FC<EmployeeItemProps> = ({ employee }) => {
  return (
    <Link to={`/edit/${employee.id}`} className="border my-2 relative rounded-md bg-white block">
      <div className={`rounded-sm px-2 absolute right-1 top-1 text-white ${colorsRole[employee.role]}`}>{employee.role}</div>
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
