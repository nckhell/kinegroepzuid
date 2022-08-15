export const stripHtml = (html: string): string => {
  if (typeof window !== 'undefined') {
    const tmp = document.createElement('DIV')
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ''
  }

  return html
}
