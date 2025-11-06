import { format, formatDistanceToNowStrict, parseISO } from 'date-fns'

export const getHumanReadableDate = (date: string) => format(parseISO(date), 'MMMM d, yyyy h:mm a')

export const getHumanReadableTimeToNow = (date: string) => formatDistanceToNowStrict(parseISO(date))
