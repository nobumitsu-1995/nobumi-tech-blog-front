export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY || '';

type Props = (action: string, category: string, label: string, value?: string) => void

export const pageview = (url: string) => {
  window.gtag('config', GA_ID, {
    page_path: url,
  })
}

export const gaEvent: Props = (
  action,
  category,
  label,
  value,
) => {
  GA_ID && (
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  }))
}