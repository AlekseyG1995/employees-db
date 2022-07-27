import { useEffect, useState } from "react"
import { casesShowOnPage } from "../config/viewOptions"
import { IFilters } from "../types/types"

export const useFiltersViewEmployees = (fetchEmployees: (filters: IFilters) => {}) => {
  const [filters, setFilters] = useState<IFilters>({
    isArchive: false,
    showOnPage: casesShowOnPage[0] || 10,
    role: "",
    page: 1,
  })

  useEffect(() => {
    fetchEmployees(filters)
  }, [filters.page])

  useEffect(() => {
    setFilters({ ...filters, page: 1 })
    fetchEmployees(filters)
  }, [filters.showOnPage, filters.isArchive, filters.role])

  return { filters, setFilters }
}
