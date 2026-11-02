# Iron Log

แอปส่วนตัวสำหรับเวทเทรนนิ่ง บันทึกอาหารไทย (ถ่ายรูปประเมิน kcal ได้) และติดตามความคืบหน้า
เป็น PWA ล้วน (HTML/JS ไฟล์เดียว) โฮสต์บน GitHub Pages ติดตั้งลง Home Screen ของ iPhone ได้ และใช้งาน offline ได้

## ฟีเจอร์
- **TRAIN**: Upper/Lower จันทร์–พฤหัสบดี และ Zone 2 วันศุกร์ · double progression · ตัวช่วยคำนวณแผ่นน้ำหนัก · rest timer ที่แสดงท่าถัดไป · animation ทุกท่าพร้อม cue ภาษาไทย
- **FOOD**: ถ่ายรูปหรือพิมพ์เมนูแล้วบันทึก kcal/P/C/F ให้อัตโนมัติ (Anthropic API) · เมนูลัดอาหารไทย · แก้ตัวเลขทีหลังได้
- **PROGRESS**: น้ำหนักพร้อม 7-day MA, e1RM (Epley), รอบเอว, kcal 14 วัน, Adaptive TDEE
- **ข้อมูล**: เก็บใน localStorage ของเครื่อง · มีปุ่ม Export/Import JSON สำหรับสำรองข้อมูล

## Deploy บน GitHub Pages
1. สร้าง repo ใหม่ เช่น `iron-log` แบบ Public (GitHub Pages แบบฟรีต้องเป็น public)
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้นไปที่ root ของ repo (`index.html`, `sw.js`, `manifest.webmanifest`, `icons/`, `ek/`)
3. ไปที่ **Settings › Pages** แล้วตั้ง Source = `Deploy from a branch`, Branch = `main` / `(root)` จากนั้นกด Save
4. รอ 1–2 นาที แอปจะอยู่ที่ `https://<username>.github.io/iron-log/`

## ติดตั้งบน iPhone
1. เปิดลิงก์ด้วย **Safari**
2. กดปุ่ม Share แล้วเลือก **Add to Home Screen**
3. เปิดแอปจากไอคอนบน Home Screen (ถ้าเปิดผ่าน Safari ข้อมูลจะแยกจากแอปบน Home Screen)

## ตั้งค่า AI (ถ่ายรูปอาหาร)
1. สร้าง API key ที่ https://console.anthropic.com/ ในเมนู API Keys
2. ในแอป ไปที่ **PROGRESS › ตั้งค่า AI** วาง key แล้วกด **ทดสอบ**
3. เลือกโมเดล: Haiku 5.5 (เร็ว ค่าใช้จ่ายต่ำ) หรือ Sonnet 5.5 (ประเมินละเอียดกว่า)

> key ถูกเก็บใน localStorage ของเครื่องนั้นเท่านั้น และแอปส่งตรงไปที่ `api.anthropic.com` (ไม่มี server ตรงกลาง)
> ใช้กับเครื่องส่วนตัวเท่านั้น และแนะนำให้ตั้ง spend limit ใน Console

## ย้ายข้อมูลจากเวอร์ชันเดิม
ไปที่ **PROGRESS › สำรองข้อมูล › Import JSON** แล้วเลือกไฟล์ `iron-log-backup-YYYY-MM-DD.json`

## อัปเดตแอป
หลังแก้ `index.html` ให้เปลี่ยน `const V='ironlog-v1'` ใน `sw.js` เป็นเลขเวอร์ชันใหม่ (เช่น `v2`) แล้ว push
แอปบนมือถือจะได้เวอร์ชันใหม่ในการเปิดครั้งถัดไป

## Credits / License
- ภาพอ้างอิงท่าออกกำลังกายในโฟลเดอร์ `ek/` มาจาก [Everkinetic](https://github.com/everkinetic/data) (Greg Priday) ภายใต้ [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) และไม่ได้ดัดแปลงไฟล์
- Animation ของท่าออกกำลังกายวาดด้วยโค้ดใน `index.html` (Iron Log)
- ค่าพลังงานในแอปเป็นค่าประมาณเพื่อการวางแผน ไม่ใช่คำแนะนำทางการแพทย์
