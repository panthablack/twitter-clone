export type LaravelErrorResponse = {
  message?: string
  messages?: string[]
  exception?: string
  file?: string
  line?: number
  trace?: any[]
}
