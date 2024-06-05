function GetFirebaseStoragePath() {
  return process.env.NODE_ENV === "PRODUCTION" ? "" : "local/";
}

export default GetFirebaseStoragePath;
