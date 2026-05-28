# PhuDong Web Brief Builder

PhuDong Web Brief Builder la ung dung local de thu thap brief truoc khi build website, landing page hoac ung dung. App tao Master Prompt deploy-ready/release-ready de dua vao Codex, Cursor, Claude, Gemini, ChatGPT hoac AI builder khac.

## Tinh nang chinh

- Form brief theo 18 nhom cau hoi.
- App build brief cho web app, mobile app, desktop app, internal tool va dashboard.
- Prompt build ung dung co platforms, user roles, workflows, screens, data entities, auth, permissions, API, state management, notifications va release requirements.
- Tuy chon bang mau chu dao va mo ta mau giao dien de dua vao Master Prompt.
- Build Readiness Score 0-100%.
- Danh sach field bat buoc con thieu.
- Preview Master Prompt realtime.
- Template brief theo loai san pham: landing page, company site, ecommerce, SaaS/web app, portfolio, mobile app, desktop app, internal tool, dashboard.
- Prompt mode cho Codex, Cursor, Claude, Gemini, ChatGPT.
- Language toggle cho prompt: Vietnamese / English.
- Preview tabs: Prompt, JSON, Checklist.
- Saved drafts nhieu brief trong local storage.
- Quality warnings cho brief yeu hoac chua san sang release.
- Copy Prompt, Copy JSON.
- Export TXT, Markdown, JSON.
- Export release package ZIP gom prompt, brief JSON, checklist va handover notes.
- Import JSON co validate va normalize.
- Share/import brief bang local-safe share link.
- Autosave draft bang storage adapter rieng.
- UI 3 cot cho desktop, tab ngang tren tablet/mobile.

## Cai dat

```bash
npm install
```

## Chay local

```bash
npm run dev
```

## Build production

```bash
npm run build
```

## Deploy len Vercel

Project da co `vercel.json`. Khi import GitHub repo vao Vercel, dung:

- Framework Preset: Vite
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

Xem them `DEPLOYMENT.md`.

## Cau truc thu muc

```text
src/
  components/      UI components
  components/fields reusable form fields
  data/            default brief va cau hinh question groups
  hooks/           useBrief, useAutosave, usePrompt, useReadinessScore, useToast
  lib/             storage, import/export, prompt generator, readiness
  types/           TypeScript schema
```

## Cach dung app

1. Chon template neu muon bat dau nhanh.
2. Chon tung nhom cau hoi o sidebar hoac tab mobile.
3. Dien thong tin brief cho website, landing page hoac ung dung.
4. Theo doi Build Readiness Score, muc bat buoc con thieu va quality warnings.
5. Chon AI builder va ngon ngu prompt o cot phai.
6. Xem Master Prompt realtime.
7. Copy prompt hoac export TXT, Markdown, JSON, ZIP de dua vao AI builder.
8. Bam Save de luu draft neu muon tiep tuc sau.

## Huong dan cho nguoi moi

- Bat dau bang `Template brief` de co cau truc san.
- Neu build website/landing page, tap trung vao `Thong tin du an`, `Muc tieu kinh doanh`, `Cau truc website`, `Noi dung chinh`, `Phong cach thiet ke`.
- Neu build ung dung, chon `Loai san pham = application` va dien them nhom `App build brief`.
- Dung `Bang mau chu dao` va `Mo ta mau giao dien` de prompt tao UI dung gu.
- Khi readiness score dat tren 70%, co the tao ban gan production. Tren 90% la brief da san sang build deploy-ready.
- Dung tab `Checklist` de xem viec can hoan thien truoc release.

## Export/import brief

- `Prompt`: copy Master Prompt.
- `JSON`: copy brief JSON.
- `TXT`: export prompt dang `.txt`.
- `MD`: export prompt dang `.md`.
- `Export`: export brief dang `.json`.
- `Import`: nhap lai brief tu file JSON da export.
- `Share`: copy link chua brief trong hash URL.
- `ZIP`: export release package gom prompt, JSON, checklist va handover notes.

## Draft va template

- Chon template trong sidebar de tao nhanh brief theo loai website.
- Bam Save de luu draft hien tai.
- Danh sach Saved drafts cho phep mo lai hoac xoa draft.
- Draft duoc luu local bang storage adapter, khong can backend/database.

## Nang cap desktop

Kien truc hien tai khong goi `localStorage` truc tiep trong component. Storage nam trong `src/lib/storage.ts`, nen co the thay adapter bang file system storage cua Tauri hoac Electron. Xem them `DESKTOP_UPGRADE.md`.

## Roadmap phat trien

- Multi-project workspace.
- Save As va Open brief file native.
- Template brief theo nganh.
- Prompt variants cho landing page, SaaS, ecommerce.
- Desktop app voi native menu va auto-update.
