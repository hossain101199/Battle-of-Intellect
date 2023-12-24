export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
  // return "http://localhost:8000";
};

export const tokenKey = () => {
  return process.env.NEXT_PUBLIC_TOKEN_KEY;
};

export const userKey = () => {
  return process.env.NEXT_PUBLIC_USER_KEY;
};
