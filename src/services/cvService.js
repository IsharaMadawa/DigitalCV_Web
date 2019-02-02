import http from "./httpService";

export function getUserCVDetails() {
  return http.get("http://localhost:3000/api/usercvdetails");
}

export function downloadCV() {
  return http.get("http://localhost:3000/api/cvfile", { responseType: "blob" });
}
