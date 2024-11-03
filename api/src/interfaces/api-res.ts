interface APIResponse<T = null> {
  message: string;
  data: T;
  status: 200,
};

export type {
  APIResponse,
}
