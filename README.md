# Kyoto Restaurant Responsive

京都レストランを想定した、スマートフォン・タブレット・デスクトップ向けのレスポンシブWebサイトです。  
Next.js と Tailwind CSS を用いて実装し、Vercel へデプロイしています。

## 🔗 公開URL
- [Webサイト（Vercel）](https://kyoto-restaurant-responsive.vercel.app)
- [制作ログ（ブログ）](https://aobacreate.net/kyoto-restaurant-desktop-deploy/)

## 🛠 使用技術
- Next.js
- Tailwind CSS
- Vercel

## 📱 制作内容・工夫点
- スマートフォン・タブレット・デスクトップ向けレストランWebサイトのレスポンシブ実装
- コンポーネント分割による UI 構築
- 画像の軽量化（WebP 対応）
- 画面サイズごとのレイアウト調整・表示最適化
- Vercel を利用したデプロイ

本プロジェクトは、**スマートフォン版 → タブレット版 → デスクトップ版** の順に段階的に制作しました。 レイアウトや構成はできるだけ共通化しつつ、主に写真サイズや余白の調整によって各デバイスで見やすい表示になるよう工夫しています。

## 🎨 デザイン

- Figma にてUI を設計
- フォントサイズ、行間、余白を意識した設計
- 実装時は Figma の設計に極力沿う形で反映
- [Figma](https://www.figma.com/design/01ngSIscCLz5GOp0shBj5N/-%E5%85%AC%E9%96%8B%E7%94%A8--%E4%BA%AC%E9%83%BD%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3web%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3?node-id=8-64&t=FzlIC7zWxHXGDSVv-1)

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