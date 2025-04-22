export default interface IServerError<T = unknown> {
  code: string;
  message?: string;
  data: T;
}
