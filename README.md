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

- 💾 Small footprint. Less than 100kb gzipped and around 300kb unpacked!

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

This app has a story book, if you wanna check it out, just run:

```
npm run storybook
```
## Contributing Translations

You can help translate all text in this app, and it is dead simple.

First you need to create a file. After, copy the content from other translation file.
```
src
└─  resources
  └─ il8n
      en.json
      pt-br.json
      // Add here. As an exemple for Spanish (Spain) translation would be added as es-es.json
```

Then, at I18l.js file just follow the steps:

```
str
└─ helpers
    I18l.js
```

Import the file

```js
import ptBrJson from '../data/il8n/pt-br.json';
import enJson from '../data/il8n/en.json';
import esEsJson from '../data/il8n/en.json'; // Add previusly created es-es.json
```

Add the key name

```js
static en() {
  return 'en';
}
static ptBr() {
  return 'pt_br';
}
static esEs() {
  return 'es_es'; // This will be the array key and the selectable value at configuration
}
```

Relate the translation data to it's respective key

```js
static get(lang) {
  const data = { [
    I18n.ptBr()]: ptBrJson, 
    [I18n.en()]: enJson,
    [I18n.esEs()]: esEsJson  //[key]: translation file content
  };
  return data[lang];
}
```

Add to available languages

```js
static available() {
  return [
    I18n.en(), 
    I18n.ptBr(),
    I18n.esEs() // Key to be selected
  ];
}
```

## Release History
* 0.0.1
  * Work in progress

---
The dark mode is inspired by the awesome [dracula-theme](https://github.com/dracula/dracula-theme) color palette.

Planning poker deck is develop with :hearts: by [@victorheringer_](https://twitter.com/VictorHeringer_)
