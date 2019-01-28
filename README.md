# Planning Poker Deck
> Simple pwa for planning poker thats allow you to create your own deck or use one of defaults including: standard, fibonacci, t-shirt and risky.

[![](https://img.shields.io/website-up-down-green-red/https/shields.io.svg?label=play+now)](https://planning-poker.victorheringer.com.br/)
[![](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/VictorHeringer/planning-poker-deck/blob/master/LICENSE)
[![Issues](https://img.shields.io/github/issues/VictorHeringer/planning-poker-deck.svg)](https://github.com/VictorHeringer/planning-poker-deck/issues)
[![LastComit](https://img.shields.io/github/last-commit/google/skia.svg)](https://github.com/VictorHeringer/planning-poker-deck)

![Example](example.gif)
![Example](example_2.gif)

## Why Planning Poker Deck

- 📴 Offline first. You don't need to rely on your mobile connection to estimate things!

- 💾 Small footprint. Only 150kb gzipped and 300kb unpacked!

- 📝 Create your own custom deck. Or use any of the given default decks that covers most common decks.

- 🆓 No adds. Really, this app will never ever have ads.

- :octocat: Open Source. You know everything that is installed on your phone and always can send a pull resquest to fix or add a feature.

## Setup
This app uses create-react-app so all commands from it, is available here as well.
```
git clone https://github.com/VictorHeringer/planning-poker-deck.git
```
```
cd planning-poker-deck
```
```
npm install
```

## Contributing Translations

You can help translate all text in this app, and it is dead simple.

```
src
├─ assets
  └─ il8n
      en.json
      pt-br.json
      // Add your translation file here
└─ helpers
    I18l.js
```

```js
import ptJson from '../data/il8n/pt-br.json';
import enJson from '../data/il8n/en.json';
```

```js
static get(lang) {
  const data = { [I18n.br()]: ptJson, [I18n.en()]: enJson };
  return data[lang];
}
```

```js
static available() {
  return [I18n.en(), I18n.br()];
}
```

## Release History
* 0.0.1
  * Work in progress

---
Planning poker deck is develop with :hearts: by [@victorheringer_](https://twitter.com/VictorHeringer_)
