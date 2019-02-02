import http from "./httpService";

export function getUserCVDetails() {
  return http.get("/usercvdetails");
}

export function downloadCV() {
  return http.get("/cvfile", { responseType: "blob" });
}
