import http from "./httpService";

export function getUserCVDetails() {
  return http.get("http://localhost:3000/api/usercvdetails");
}
