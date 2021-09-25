export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export function copyEnabled(): boolean {
  return !!navigator.clipboard;
}
