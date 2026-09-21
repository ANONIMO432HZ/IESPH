/**
 * Clean navigation utility for SPA routing without hash '#'
 * Updates the browser URL history cleanly and scrolls smoothly to target sections
 */
export function navigateTo(
  path: string,
  options?: { behavior?: ScrollBehavior },
) {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("tel:") ||
    path.startsWith("mailto:")
  ) {
    window.open(path, "_blank", "noopener,noreferrer")
    return
  }

  // Normalize path
  const cleanPath = path.startsWith("/") ? path : `/${path}`

  // Update browser URL cleanly without reload
  if (window.location.pathname !== cleanPath) {
    window.history.pushState(null, "", cleanPath)
  }

  if (cleanPath === "/" || cleanPath === "") {
    window.scrollTo({ top: 0, behavior: options?.behavior ?? "smooth" })
    return
  }

  if (cleanPath === "/libro-de-reclamaciones") {
    window.dispatchEvent(new CustomEvent("open-complaints-modal"))
    return
  }

  const sectionId = cleanPath.replace(/^\//, "")
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: options?.behavior ?? "smooth" })
  }
}
