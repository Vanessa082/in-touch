type Methods = "POST" | "GET" | "PUT";

interface APIResponse<T = null> {
  message: string;
  status: number;
  data: T;
}

const BASE_URL = "http://localhost:3000";

export function Fetcher<T>(
  url: string,
  options?: {
    method?: Methods;
    data?: Record<string, unknown>;
    headers?: HeadersInit;
  }
): Promise<APIResponse<T>> {
  const OPTIONS = {
    method: options?.method || "GET",
    headers: options?.headers || {},
  };

  if (options?.data) {
    (OPTIONS as unknown as { data: string }).data = JSON.stringify(
      options.data
    );
  }

  return fetch(`${BASE_URL}/${url}`, OPTIONS).then((res) => res.json());
}
