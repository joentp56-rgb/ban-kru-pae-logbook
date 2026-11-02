// ใส่ค่าจาก Firebase Console → Project settings → Your apps → Web app → firebaseConfig
// ค่าเหล่านี้ไม่ใช่รหัสลับ (ความปลอดภัยอยู่ที่ Rules และระบบล็อกอิน) จึงวางใน repo ได้
window.FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};
