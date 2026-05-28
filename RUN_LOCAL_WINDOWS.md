# Huong Dan Chay Local Tren Windows

File nay huong dan mo dung thu muc project va chay app local bang CMD hoac PowerShell.

## 1. Mo terminal

Co 2 cach:

- Mo **Command Prompt**.
- Hoac mo **PowerShell**.

## 2. Di chuyen vao thu muc project

Chay lenh:

```bat
cd /d "C:\Users\minhp\OneDrive\Máy tính\build web_landing"
```

Lenh `cd /d` giup chuyen ca o dia neu can.

## 3. Cai dependencies

Neu la lan dau chay project, dung:

```bat
npm install
```

## 4. Chay local dev server

```bat
npm run dev
```

Sau khi chay, terminal se hien URL dang nhu:

```text
http://localhost:5173
```

Hoac:

```text
http://127.0.0.1:5173
```

## 5. Mo app trong trinh duyet

Mo mot trong hai URL:

```text
http://localhost:5173
```

```text
http://127.0.0.1:5173
```

## 6. Lenh build production

Truoc khi deploy len Vercel/GitHub, kiem tra build:

```bat
npm run build
```

Neu build thanh cong, app san sang deploy.

## 7. Loi thuong gap

### 'npm' is not recognized

May chua cai Node.js hoac terminal chua nhan PATH. Hay cai Node.js LTS, sau do dong terminal va mo lai.

### Port 5173 da duoc su dung

Chay voi port khac:

```bat
npm run dev -- --port 5174
```

Sau do mo:

```text
http://localhost:5174
```

### Vercel bao loi TS18003

Kiem tra da commit va push thu muc `src/` len GitHub chua:

```bat
git status
git add .
git commit -m "Initial app"
git push
```
