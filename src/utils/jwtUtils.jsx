// utils/jwtUtils.js

import { jwtDecode } from "jwt-decode";

/**
 * Safely decode a JWT and return its payload.
 * Throws if invalid.
 */
export function decodeJwt(token) {
  if (typeof token !== "string") {
    throw new Error("Invalid token: not a string");
  }

  let decoded;
  try {
    decoded = jwtDecode(token);
  } catch (e) {
    console.error("Invalid JWT when decoding:", e);
    throw e;
  }

  return decoded;
}
