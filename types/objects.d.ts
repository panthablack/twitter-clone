type RecursiveObject<T> = {
  [key: string]: T | RecursiveObject<T>
}
