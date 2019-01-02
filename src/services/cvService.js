import staticPhoto from "./../utils/img/profile.png";
import http from "./httpService";

export function getUserFacebookProfilePicture() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "production") {
    return http.get(
      "https://graph.facebook.com/100000510573524/picture?type=large"
    );
  } else {
    return staticPhoto;
  }
}

export function getUserCVDetails() {
  return http.get("http://localhost:3000/api/usercvdetails");
}
