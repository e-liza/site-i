export default interface IServerError<T = {}> {
  code: string;
  message?: string;
  data: T;
}
