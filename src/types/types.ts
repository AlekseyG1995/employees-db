import { IEmployeeDTO } from '../models/employee.dto'
import { IEmployee } from '../models/employee.model'

export interface IFilters {
  role: string
  isArchive: boolean
  showOnPage: number
  page: number
}

export interface IDataFromServer {
  employees: IEmployee[]
  totalCount: number
}

export interface IUpdateParams {
  employeeDTO: IEmployeeDTO
  id: number
}
