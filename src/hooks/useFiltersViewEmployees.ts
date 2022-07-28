import { useEffect, useState } from "react"
import { casesShowOnPage } from "../config/viewOptions"
import { IFilters } from "../types/types"

export const useFiltersViewEmployees = (fetchEmployees: (filters: IFilters, preferCacheValue: boolean) => {}) => {
  const [filters, setFilters] = useState<IFilters>({
    isArchive: false,
    showOnPage: casesShowOnPage[0],
    role: "",
    page: 1,
  })

  useEffect(() => {
    fetchEmployees(filters, true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.page])

  useEffect(() => {
    setFilters({ ...filters, page: 1 })
    fetchEmployees(filters, true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.showOnPage, filters.isArchive, filters.role])

  return { filters, setFilters }
}
