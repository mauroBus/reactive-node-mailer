// @flow
import t from 'format-message'

type Lang = 'en'
type Translation = {
  message: string,
  format?: (args?: Object) => string,
  toParts?: (args?: Object) => any[],
}
type OptTranslation = ?{ [string]: string | Translation }

type LangObject = {|
  name: string,
  import: () => Promise<OptTranslation>
|}

export const languagesMap: Map<Lang, LangObject> = new Map([
  // TODO: Add more langs.
  [
    'en',
    {
      name: 'English (US)',
      import: () => import('../translations/en.json')
    }
  ]
])

export const loadTranslations = (locale: Lang = 'en') => {
  const language = languagesMap.get(locale)

  if (!language) return

  language.import().then((strings: OptTranslation) => {
    t.setup({
      locale,
      translations: { [locale]: strings }
    })
  })
}
