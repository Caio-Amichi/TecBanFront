import defaultSettings from '@/settings'

const title = defaultSettings.title || 'TecBan'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
