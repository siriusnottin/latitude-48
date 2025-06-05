import {getSiteTitle} from './siteTitle';

// Utility to generate a consistent page title
export function getPageTitle(page: string, options?: { inverted?: boolean }) {
  const siteTitle = getSiteTitle();
  if (options?.inverted) {
    return page ? `${siteTitle} – ${page}` : siteTitle;
  }
  return page ? `${page} – ${siteTitle}` : siteTitle;
}
