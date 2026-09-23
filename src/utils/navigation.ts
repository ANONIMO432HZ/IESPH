/**
 * Guarantees immediate viewport scroll reset across browsers and devices
 */
export function scrollToTop() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur()
  }
  window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0

  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  })
}

/**
 * Clean navigation utility for SPA routing without hash '#'
 * Updates the browser URL history cleanly and scrolls smoothly to target sections or pages
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
    window.dispatchEvent(new PopStateEvent("popstate"))
  }

  if (
    cleanPath === "/" ||
    cleanPath === "" ||
    cleanPath.startsWith("/carreras/")
  ) {
    scrollToTop()
    return
  }

  if (cleanPath === "/libro-de-reclamaciones") {
    window.dispatchEvent(new CustomEvent("open-complaints-modal"))
    return
  }

  const sectionId = cleanPath.replace(/^\//, "")
  const attemptScroll = (attempts = 0) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: options?.behavior ?? "smooth" })
    } else if (attempts < 15) {
      setTimeout(() => attemptScroll(attempts + 1), 50)
    }
  }
  requestAnimationFrame(() => attemptScroll())
}
