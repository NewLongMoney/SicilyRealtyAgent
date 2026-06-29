/** Build a safe public URL for files under /public/images (handles spaces in folder names). */
export function publicImageUrl(folder: string, filename: string): string {
  const folderPath = folder.split('/').map(segment => encodeURIComponent(segment)).join('/')
  return `/images/${folderPath}/${encodeURIComponent(filename)}`
}
