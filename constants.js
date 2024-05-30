require("dotenv").config({ path: ".env" });
export const BACKEND_URL =
  process.env.NEXT_PUBLIC_ENVIRONMENT !== "PRODUCTION"
    ? "http://localhost:7071"
    : "https://api.twowheelermechanicfoundation.com";
export const PRIMARY_BLUE = "#191970";
