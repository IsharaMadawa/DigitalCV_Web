import http from "./httpService";

export function getUserCVDetails() {
  return http.get("/usercvdetails");
}

export function getUserProfiles() {
  return http.get("/usercvdetails/userprofiles");
}

export function downloadCV() {
  return http.get("/cvfile", { responseType: "blob" });
}

export function setDefaultProfile(profileId) {
  return http.put("usercvdetails/setDefaultProfile/" + profileId);
}

export function createProfile(profile) {
  return http.post("/usercvdetails", profile);
}
