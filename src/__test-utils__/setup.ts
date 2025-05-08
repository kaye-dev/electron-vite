// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
import '@testing-library/jest-dom';

// TextEncoder/TextDecoderの定義（React Routerで使用）
// Node.jsのutilパッケージからTextEncoder/TextDecoderを使用せずに
// 直接必要最小限の機能を持つクラスを実装
class MockTextEncoder {
  encode(input?: string): Uint8Array {
    return new Uint8Array(Buffer.from(input || ''));
  }
}

class MockTextDecoder {
  decode(input?: Uint8Array): string {
    return input ? Buffer.from(input).toString() : '';
  }
}

// グローバルオブジェクトにTextEncoder/TextDecoderが存在しない場合、モック実装を使用
if (typeof global.TextEncoder === 'undefined') {
  // @ts-expect-error モック実装なのでTypeScriptの型チェックを無視
  global.TextEncoder = MockTextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
  // @ts-expect-error モック実装なのでTypeScriptの型チェックを無視
  global.TextDecoder = MockTextDecoder;
}
