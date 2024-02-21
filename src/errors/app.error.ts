export class AppError {
  public statusCode: number;
  public message: string | string[];

  constructor(message: string | string[], statusCode: number) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
