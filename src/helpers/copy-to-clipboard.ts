function fallbackCopyToClipboard(text: string) {
  const element = document.createElement("textarea");
  element.value = text;
  element.style.top = "0";
  element.style.left = "0";
  element.style.position = "fixed";

  document.body.appendChild(element);
  element.focus();
  element.select();

  document.execCommand("copy");
  document.body.removeChild(element);
}

export default function copyToClipboard(text: string) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    fallbackCopyToClipboard(text);
  }
}
