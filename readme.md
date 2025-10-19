# Vefforritun 1, 2025: Verkefni 9, JavaScript #2

## Markmið

- Forrita á móti DOM, Document Object Model.
- Forrita á móti API með fetch.
- Lesa gögn úr JSON.

## Virkni

### Grunnviðmót

Setja skal upp einfalt viðmót sem birtir efnið sem sótt er úr API. Viðmótið skal uppfylla:

- Hámarksbreidd á efni sem þið ákveðið.
- Skalanlegt viðmót sem virkar í öllum skjástærðum.
- Form sem leyfir notanda að slá inn leitarorð.
- Svæði til að birta leitarniðurstöður.
- Fyrir neðan eða í svæðinu skal vera leið til að láta kall í vefþjónustu hegða sér hægt eða að villa komi upp.
  - Þetta getur verið með því að athuga hvort leitarorð innihaldi „error“ eða „slow“. Einnig væri hægt að hafa checkbox eða svipað til að kveikja á þessari virkni.
- Stakt verk birtist þegar notandi smellir á það í leitarniðurstöðum.
- Leið til að fara til baka úr stökum verki í leit.

### Tenging við API

Gögn skulu koma frá vefþjónustu [Art Institute of Chicago](https://api.artic.edu/docs/#introduction). [Sjá skjölun á reitum sem koma í svari](https://api.artic.edu/docs/#fields).

Nota skal `fetch` til að sækja gögn og nota `async`/`await` í kóðanum.

### Leitarniðurstöður

Notandi skal geta slegið inn leitarorð í formi og fengið leitarniðurstöður frá API með kalli í `GET /artworks/search`. Dæmi um kall í https://api.artic.edu/api/v1/artworks/search?q=monet skilar efni í JSON formi (dæmi í `search.json`).

Birta skal heiti verks (`title`) og skal það vera hlekkur til að skoða verkið nánar (með `id`). Hægt er að nota query string til að senda auðkenni verks áfram, t.d. `?artwork=28560`, þá er hægt að nota `URLSearchParams` til að sækja það:

```js
const id = new URLSearchParams(window.location.search).get("id");
```

### Stakt verk

Þegar smellt er á stakt verk í leitarniðurstöðum skal birta nánari upplýsingar um verkið. Nota skal `GET /artworks/{id}` til að sækja gögn um verkið. Dæmi um kall í https://api.artic.edu/api/v1/artworks/28560 skilar efni í JSON formi (dæmi í `artwork.json`).

### Mismunandi stöður í svari

Í forritinu skal gera ráð fyrir mismunandi stöðum sem geta komið upp:

- Bið eftir svari frá vefþjónustu, nota skal `sleep` fall sem gefið er til að bíða.
- Villa við að sækja gögn frá vefþjónustu, nota skal `error` fall sem gefið er til að herma eftir villu.
- Gögn koma til baka frá vefþjónustu.

Nota skal gefinn kóða í `src/lib/helpers.js` til að herma eftir þessum stöðum, sjá skjölun í skrá.

### Skjölun

Skjölun á kóða notar [`jsdoc`](https://jsdoc.app/) en er takmörkuð, bæta skal við skjölun í samræmi við það sem gefið er í grunninum, sjá nánar í skrám.

## Grunnur

Gefinn er grunnur með lausn:

- Inni í `src` möppu eru:
  - `index.html` skrá
  - `styles.css` með algjöru grunn útliti
  - `scripts.js` með grunn og skjölun.
  - `lib/helpers.js` með grunn og skjölun.
  - `lib/elements.js` með hjálparföllum sem má nota.
- `.gitignore` skrá sem hunsar viðeigandi skrár og möppur.
- `package.json` skrá með NPM scripts og dependency á Parcel.
- `package-lock.json` skrá.

Ekki þarf að breyta neinu í `index.html` skrá eða `styles.css`.

Parcel og eslint er uppsett í grunninum, sjá `package.json` fyrir nánari upplýsingar.

### Uppsetning á grunn

Til að byrja að vinna verkefnið er hægt að sækja það frá GitHub:

```bash
# Inni í möppu sem á að geyma verkefnið
git clone https://github.com/vefforritun/vef1-2025-v9.git
# eða ef ssh uppsett
git clone git@github.com:vefforritun/vef1-2025-v9.git

# Förum inn í möppu
cd vef1-2025-v9

# Sækjum öll dependency með NPM
npm install

# Keyrum NPM script fyrir development
npm run dev
```

Áður en skilað er þarf að breyta remote í þitt eigið repo:

```bash
git remote remove origin
git remote add origin <slóð á þitt GitHub repo>
```

## GitHub & Netlify

Setja skal upp verkefnið á GitHub og skila með slóð á repo. Tengja skal Netlify við GitHub repo.

## Mat

- 10% – Grunnviðmót útfært.
- 20% – Tenging við API útfærð.
- 20% – Leitarniðurstöður birtar.
- 20% – Stakt verk birt.
- 10% – Tekið tillit til mismunandi staða í svari.
- 10% – Föll skjöluð með jsdoc.
- 10% – Verkefni sett upp GitHub og á Netlify; engar eslint villur

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 20. október 2025.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags fimmtudaginn 30. október 2025.

Skilaboð skulu innihalda:

- Slóð á verkefnið keyrandi í hýsingu
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `klingsterina`
  - `kristinfrida`
  - `osk`
  - `reynirjr`

## Aðstoð

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Ekki er heimilt að nota stór mállíkön til að vinna verkefni í námskeiðinu, [sjá nánar um notkun](https://github.com/vefforritun/vef1-2025/blob/main/mallikon.md).

## Verkefni og einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 5% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

> Útgáfa 0.1

## Útgáfusaga

| Útgáfa | Lýsing                     |
| ------ | -------------------------- |
| 0.1    | Fyrsta útgáfa verkefnisins |
