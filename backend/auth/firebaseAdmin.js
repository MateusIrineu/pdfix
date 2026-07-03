import fs from "node:fs";
import admin from "firebase-admin";

function getServiceAccount() {
  const jsonInline = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  const path = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;

  if (jsonInline) {
    return JSON.parse(jsonInline);
  }

  if (path) {
    const raw = fs.readFileSync(path, "utf8");
    return JSON.parse(raw);
  }

  throw new Error(
    "Firebase Admin não configurado. Defina FIREBASE_SERVICE_ACCOUNT_JSON ou FIREBASE_SERVICE_ACCOUNT_PATH"
  );
}

export function initFirebaseAdmin() {
  if (admin.apps.length > 0) return;
  admin.initializeApp({
    credential: admin.credential.cert(getServiceAccount())
  });
}

export { admin };