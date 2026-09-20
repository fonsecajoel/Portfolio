/** Resolve caminhos de assets respeitando o Vite `base` (subpath-friendly). */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;