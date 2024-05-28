class CustomError {
  local_error: unknown;
  data: Record<string, unknown>;
  status: number;
  message: string = "Something went wrong";

  constructor(
    error: unknown,
    data: Record<string, unknown> | null,
    status: number,
    message?: string
  ) {
    this.local_error = error;
    this.data = data || { message };
    this.status = status;
  }
}

export default CustomError;
