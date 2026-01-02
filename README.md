# Kyoto Restaurant Responsive

京都レストランを想定した、スマートフォン・タブレット・デスクトップ向けの  
レスポンシブWebサイトです。  
Next.js と Tailwind CSS を用いて実装し、Vercel へデプロイしています。

---

## 🔗 公開URL
- Webサイト（Vercel）  
  https://kyoto-restaurant-responsive.vercel.app
- 制作ログ（ブログ）  
  https://aobacreate.net/kyoto-restaurant-desktop-deploy/

---

## 🛠 使用技術
- Next.js
- Tailwind CSS
- Vercel

---

## 📱 制作内容・工夫点
- スマートフォン・タブレット・デスクトップ向け  
  レストランWebサイトのレスポンシブ実装
- コンポーネント分割による UI 構築
- 画像の軽量化（WebP 対応）
- 画面サイズごとのレイアウト調整・表示最適化
- Vercel を利用したデプロイ

本プロジェクトは、  
**スマートフォン版 → タブレット版 → デスクトップ版** の順に段階的に制作しました。  
レイアウトや構成はできるだけ共通化しつつ、主に写真サイズや余白の調整によって  
各デバイスで見やすい表示になるよう工夫しています。

---

## 🚀 ローカルでの起動方法

```bash
npm install
npm run dev
```
ブラウザで以下にアクセスしてください。

`http://localhost:3000`

## 備考
- 本プロジェクトはcreate-next-appを使用して作成しています。
- スマートフォン表示(幅393px基準)を起点として設計しています。