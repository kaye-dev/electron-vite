import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
// toIcoの型定義
import toIco from 'to-ico';

const BASE_ICON_PATH = 'assets/base/icon.png';
const ICONS_DIR = 'assets/icons';
const ASSETS_DIR = 'assets';

// サイズ一覧（幅x高さ）
const SIZES = [16, 24, 32, 48, 64, 96, 128, 256, 512, 1024];

// ディレクトリが存在しない場合は作成
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

async function generateIcons() {
  try {
    console.log('アイコン生成を開始します...');

    // 元の画像を読み込み
    const baseImage = sharp(BASE_ICON_PATH);

    // 各サイズのPNG画像を生成
    for (const size of SIZES) {
      const outputPath = path.join(ICONS_DIR, `${size}x${size}.png`);
      await baseImage
        .clone()
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // 透明背景
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ ${outputPath} を生成しました`);
    }

    // assets/icon.png (256x256) を生成
    await baseImage
      .clone()
      .resize(256, 256)
      .png()
      .toFile(path.join(ASSETS_DIR, 'icon.png'));
    
    console.log('✅ assets/icon.png を生成しました');

    // assets/icon.ico を生成（16, 32, 48サイズを含む）
    const icoPath = path.join(ASSETS_DIR, 'icon.ico');
    const icoSizes = [16, 32, 48];
    
    const buffers = await Promise.all(icoSizes.map(size => 
      baseImage
        .clone()
        .resize(size, size)
        .toBuffer()
    ));
    
    // to-icoライブラリを使用してICOファイルを生成
    const icoBuffer = await toIco(buffers);
    fs.writeFileSync(icoPath, icoBuffer);
    
    console.log('✅ assets/icon.ico を生成しました');
    
    console.log('アイコン生成が完了しました！');
  } catch (error) {
    console.error('エラーが発生しました:', error);
    process.exit(1);
  }
}

generateIcons();
