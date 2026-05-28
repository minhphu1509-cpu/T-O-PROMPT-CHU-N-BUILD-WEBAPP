# Desktop Upgrade Guide

PhuDong Web Brief Builder da duoc tach logic de co the nang cap thanh desktop app ma khong rewrite UI.

## 1. Giu nguyen React/Vite frontend

Frontend hien tai la React + Vite + TypeScript. Khi nang cap, giu nguyen `src/components`, `src/hooks`, `src/lib/promptGenerator.ts`, `src/lib/readiness.ts` va schema trong `src/types/brief.ts`.

## 2. Boc app bang Tauri hoac Electron

Hai huong nang cap phu hop:

- Tauri: nhe, phu hop ung dung productivity local.
- Electron: ecosystem lon, de them native menu va file dialog.

## 3. Thay storage adapter

Hien MVP dung `src/lib/storage.ts` de doc/ghi localStorage. Desktop version nen thay cac ham sau bang file system storage:

- `loadBrief()`
- `saveBrief(brief)`
- `clearBrief()`
- `getStorageInfo()`
- `migrateBriefIfNeeded(brief)`

Component khong goi localStorage truc tiep, nen viec thay adapter khong anh huong UI.

## 4. Them native menu

Menu de xuat:

- New
- Open
- Save
- Save As
- Export TXT
- Export Markdown
- Export JSON
- Import JSON

## 5. Them multi-project workspace

Desktop version co the luu moi brief thanh mot file `.phudong-brief.json` trong workspace. Sau do them recent files va project switcher.

## 6. Them auto-update

- Tauri: dung updater plugin.
- Electron: dung electron-updater.

## 7. Khong rewrite UI

Can giu contract cua storage adapter va import/export layer. Neu can them native file dialog, hay goi tu lib/action rieng roi truyen ket qua vao `useBrief`.
