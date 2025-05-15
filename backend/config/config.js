export default {
  accessTokenSecret:
    process.env.ACCESS_TOKEN_SECRET || "your_access_token_secret",
  refreshTokenSecret:
    process.env.REFRESH_TOKEN_SECRET || "your_refresh_token_secret",
  accessTokenExpiry: "15m",
  refreshTokenExpiry: "7d",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  },
};