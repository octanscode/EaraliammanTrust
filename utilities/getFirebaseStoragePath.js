function GetFirebaseStoragePath() {
  return process.env.NEXT_PUBLIC_NODE_ENV === "PRODUCTION" ? "" : "local/";
}

export default GetFirebaseStoragePath;
