# Electron Vite アプリケーション

このプロジェクトは以下の技術スタックを使用したElectronアプリケーションのテンプレートです：

- Electron - デスクトップアプリケーションフレームワーク
- Vite - 高速な開発環境とビルドツール
- React - UIライブラリ
- TailwindCSS - ユーティリティファーストCSSフレームワーク
- ESLint - コード品質管理ツール
- Jest - テストフレームワーク

## 機能

- 「Hello World」を表示するシンプルなElectronアプリ
- 開発モードでのホットリロード対応
- TailwindCSSによるスタイリング
- Jestによるコンポーネントのテスト

## インストール

```bash
# 依存パッケージのインストール
npm install
```

## 使い方

```bash
# 開発モードでアプリを実行
npm start

# テストの実行
npm test

# アプリケーションのビルド
npm run build
```

## プロジェクト構造

```
electron-vite/
├── assets/              # アプリケーションアセット
├── src/
│   ├── main/           # Electronのメインプロセス
│   ├── preload/        # プリロードスクリプト
│   └── renderer/       # Reactアプリケーション（レンダラープロセス）
├── .eslintrc.js        # ESLint設定
├── electron-builder.yml # Electron Builder設定
├── jest.config.js      # Jest設定
├── package.json        # プロジェクト設定と依存関係
├── postcss.config.js   # PostCSS設定
├── tailwind.config.js  # TailwindCSS設定
└── vite.config.js      # Vite設定
