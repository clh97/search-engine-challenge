export interface SuccessResponse {
  success: true;
  status: number;
  data: any;
}

export interface ErrorResponse {
  success: false;
  status: number;
  error: string;
}
