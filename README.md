# Electron Vite アプリケーション

このプロジェクトは以下の技術スタックを使用したElectronアプリケーションのテンプレートです：

- Electron v36.1.0 - クロスプラットフォームデスクトップアプリケーションフレームワーク
- Vite v6.3.5 - 高速な開発環境とビルドツール
- React v19.1.0 - UIライブラリ
- TypeScript - 型安全な開発言語
- TailwindCSS v3.4.1 - ユーティリティファーストCSSフレームワーク
- ESLint - コード品質管理ツール
- Jest v29.7.0 - テストフレームワーク
- Husky & lint-staged - Git コミット前の自動チェック

## 機能

- 「Hello World」を表示するシンプルなElectronアプリ
- 開発モードでのホットリロード対応
- TailwindCSSによるスタイリング
- TypeScriptによる型安全な開発環境
- Jestによるユニットテストおよび統合テスト
- コミット前の自動リント・テスト実行

## インストール

```bash
# 依存パッケージのインストール
npm install
```

## 使い方

```bash
# 開発モードでアプリを実行
npm run dev

# 開発ビルドでプレビュー
npm start

# 型チェック
npm run typecheck

# ユニットテストの実行
npm test

# ウォッチモードでユニットテストを実行
npm run test:watch

# 統合テストの実行
npm run test:integration

# ウォッチモードで統合テストを実行
npm run test:integration:watch

# リントチェック
npm run lint

# リント自動修正
npm run lint:fix

# コードフォーマット
npm run format
```

## ビルド

```bash
# 全プラットフォーム向けにビルド
npm run build

# 開発環境でアンパックビルド
npm run build:unpack

# Windows向けビルド
npm run build:win

# macOS向けビルド（Universal Binary）
npm run build:mac

# Linux向けビルド
npm run build:linux
```

## プロジェクト構造

```
electron-vite/
├── assets/                 # アプリケーションアセット
├── src/
│   ├── main/              # Electronのメインプロセス
│   ├── preload/           # プリロードスクリプト
│   └── renderer/          # Reactアプリケーション（レンダラープロセス）
├── .eslintrc.js           # ESLint設定
├── .husky/                # Gitフック設定
├── electron-builder.yml   # Electron Builder設定
├── electron.vite.config.ts # Electron-Vite設定
├── jest.config.ts         # Jestユニットテスト設定
├── jest.integration.config.ts # Jest統合テスト設定
├── jest.setup.ts          # Jestセットアップファイル
├── package.json           # プロジェクト設定と依存関係
├── postcss.config.js      # PostCSS設定
├── tailwind.config.js     # TailwindCSS設定
├── tsconfig.json          # TypeScript基本設定
├── tsconfig.node.json     # Node.js用TypeScript設定
├── tsconfig.web.json      # ウェブ用TypeScript設定
└── vite.config.ts         # Vite設定
```

## 技術詳細

- **開発環境**: electron-viteを使用した高速な開発環境
- **UIフレームワーク**: React 19 + TypeScript
- **スタイリング**: TailwindCSS + PostCSS
- **テスト**: Jest + React Testing Library
- **品質管理**: ESLint + Prettier + Husky + lint-staged
- **ビルド**: electron-builder（Windows/macOS/Linux対応）

## ライセンス

MIT
