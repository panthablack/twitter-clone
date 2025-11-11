export const resolveArray = (value: any): any[] => {
  if (Array.isArray(value)) return value
  else return []
}
