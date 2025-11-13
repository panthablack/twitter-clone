export type LaravelErrorResponse = {
  message?: string
  messages?: string[]
  errors?: Record<string, string[]>
  exception?: string
  file?: string
  line?: number
  trace?: any[]
}
