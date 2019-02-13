import t from 'format-message'

export const languagesMap = new Map([
  // TODO: Add more langs.
  [
    'en',
    {
      name: 'English (US)',
      import: () => import('../translations/en.json')
    }
  ]
])

export const loadTranslations = (locale = 'en') => {
  const language = languagesMap.get(locale)
  language.import().then(strings => {
    t.setup({
      locale,
      translations: { [locale]: strings }
    })
  })
}
