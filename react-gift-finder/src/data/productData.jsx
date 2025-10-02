export const productAttributes = {
  categories: {
    "Pamiątka na lata": [],
    "Kreatywny": [],
    "Osobisty": [],
    "Dekoracyjny": []
  },
  prices: {
    "Subtelny gest": [],
    "Wyjątkowy akcent": [],
    "Królestwo możliwości": [],
  },
  forWho: {
    "Rodzicom": [],
    "Dziadkom": [],
    "Dzieciom do 6 lat": [],
    "Nastolatkom": [],
    "Drugiej Połówce": [],
    "Cioci i wujkowi": [],
    "Bratu i siostrze": [],
    "Przyjaciołom": [],
  }
};
export const  pageGlobalName = "cp-inspiration:gift-selector";

const IMAGE_BASE =
  (typeof process !== 'undefined' && process.env && process.env.REACT_APP_IMAGE_BASE)
    ? process.env.REACT_APP_IMAGE_BASE
    : `${process.env.PUBLIC_URL}/imagesApp`;

export const produuctRelations ={
  "Rodzicom": {
      "Pamiątka na lata": {
        "Subtelny gest": ["CEWE FOTOKSIĄŻKA kwadratowa mała", "Zdjęcie w ramce", "Zdjęcie kwadratowe"],
        "Wyjątkowy akcent": ["CEWE FOTOKSIĄŻKA dla rodziców", "Koc PREMIUM ze zdjęciem", "Kalendarz biurkowy eko"],
        "Królestwo możliwości": ["CEWE FOTOKSIĄŻKA kwadratowa XL", "Kalendarz ścienny Fineline", "Fotoobraz wieloczęściowy"]
  },
      "Dekoracyjny": {
        "Subtelny gest": ["Fotoplakat ze znakiem zodiaku", "Terminarz ścienny roczny", "Zdjęcie w ramce"],
        "Wyjątkowy akcent": ["Fotoplakat z listwą", "Poduszka PREMIUM ze zdjęciem", "Kalendarz dla taty"],
        "Królestwo możliwości": ["Fotopanel", "hexxas", "Fotoobraz na piance ze zdjęciem retro XXL"]
  },
    "Osobisty": {
        "Subtelny gest": ["CEWE FOTOKSIĄŻKA kwadratowa mała","Kubek ceramiczny ze zdjęciem","Koszulka ze zdjęciem"],
        "Wyjątkowy akcent": ["Planer A5","CEWE FOTOKSIĄŻKA Kids","Etui ze zdjęciem na szkle hartowanym"],
        "Królestwo możliwości": ["CEWE FOTOKSIĄŻKA XXL pozioma","Kalendarz ścienny A2 Gold Edition","Fotoobraz na drewnie"]
},
    "Kreatywny": {
        "Subtelny gest": ["Paski ze zdjęciem na magnesie", "Kubek magiczny ze zdjęciem", "Zdjęcia mini"],
        "Wyjątkowy akcent": ["Kalendarz biurkowy kwadratowy", "Pudełko ze zdjęciami", "Fotopuzzle PREMIUM"],
        "Królestwo możliwości": ["CEWE FOTOKSIĄŻKA XXL pionowa", "hexxas", "Terminarz rodzinny na szkle akrylowym"]
    }

},
  "Dziadkom": {
    "Pamiątka na lata": {
      "Subtelny gest": ["Kubek dla babci","Pudełko ze zdjęciami","CEWE FOTOKSIĄŻKA A5* pozioma"],
      "Wyjątkowy akcent": ["CEWE FOTOKSIĄŻKA dla Babci", "CEWE FOTOKSIĄŻKA dla Dziadka", "Fotoobraz na płótnie"],
      "Królestwo możliwości": ["Fotoobraz na drewnie", "Terminarz rodzinny na szkle akrylowym", "CEWE FOTOKSIĄŻKA z prac dziecka"]
    },
    "Dekoracyjny": {
      "Subtelny gest": ["Zdjęcie w ramce", "Paski ze zdjęciem na magnesie", "Kubek dla dziadka"],
      "Wyjątkowy akcent": ["Kalendarz dla dziadków", "Fotoplakat z listwą", "Poduszka PREMIUM ze zdjęciem"],
      "Królestwo możliwości": ["CEWE FOTOKSIĄŻKA dla dziadków", "Kalendarz ścienny XXL panoramiczny", "Koc PREMIUM ze zdjęciem"]
    },
    "Osobisty": {
      "Subtelny gest": ["Kubek ceramiczny ze zdjęciem","Zdjęcia retro","Brelok ze zdjęciem"],
      "Wyjątkowy akcent": ["Pudełko ze zdjęciami","Fotoplakat PREMIUM w ramie","CEWE FOTOKSIĄŻKA dla dziadków"],
      "Królestwo możliwości": ["CEWE FOTOKSIĄŻKA A4* pionowa", "Poduszka PREMIUM ze zdjęciem", "Fotoplakat z mapą"]
    },
    "Kreatywny": {
      "Subtelny gest": ["Zdjęcia mini","Kartki z wkładką foto", "Fotoplakat PREMIUM"],
      "Wyjątkowy akcent": ["CEWE FOTOKSIĄŻKA Kids", "Etui ze smyczą", "Planer A5"],
      "Królestwo możliwości": ["CEWE FOTOKSIĄŻKA kwadratowa XL", "Fotoobraz na płótnie", "Kalendarz ścienny z drewnianą listwą"]
    }
  },
  "Drugiej Połówce": {
    "Pamiątka na lata": {
      "Subtelny gest": ["CEWE FOTOKSIĄŻKA dla dziewczyny", "Zdjęcie w ramce", "Zdjęcie kwadratowe"],
      "Wyjątkowy akcent":["CEWE FOTOKSIĄŻKA dla męża","Fotoplakat z mapą", "Kalendarz dla żony"],
      "Królestwo możliwości": ["CEWE FOTOKSIĄŻKA na rocznicę związku","Kalendarz dla mężczyzny","Fotoobraz wieloczęściowy"]
    },
    "Dekoracyjny": {
      "Subtelny gest":["Fotoplakat z listwą","Kubek dla niej", "Fotopuzzle w ramce"],
      "Wyjątkowy akcent":["Fotoplakat PREMIUM w ramie","Fotoobraz na płótnie","Kalendarz dla dziewczyny"],
      "Królestwo możliwości":["Koc PREMIUM ze zdjęciem","Fotoobraz na płycie Alu-Dibond","CEWE FOTOKSIĄŻKA XXL pozioma"]
    },
    "Osobisty": {
      "Subtelny gest": ["Pudełko ze zdjęciami","CEWE FOTOKSIĄŻKA dla chłopaka","Kubek dla żony"],
      "Wyjątkowy akcent": ["Termos ze zdjęciem","CEWE FOTOKSIĄŻKA dla żony","Koc PREMIUM ze zdjęciem"],
      "Królestwo możliwości": ["Torba PREMIUM ze zdjęciem","CEWE FOTOKSIĄŻKA dla zakochanych","Fotoobraz na drewnie"]
    },
    "Kreatywny": {
      "Subtelny gest": ["Magnesy ze zdjęciem","Kubek dla niej","CEWE FOTOKSIĄŻKA kwadratowa mała"],
      "Wyjątkowy akcent": ["CEWE FOTOKSIĄŻKA na rocznicę ślubu","Fotopuzzle PREMIUM","Terminarz urodzinowy"],
      "Królestwo możliwości": ["CEWE FOTOKSIĄŻKA A4* pozioma","Kalendarz ścienny A3","Fotoobraz na płótnie"]
    } 
  },
  "Dzieciom do 6 lat": {
    "Pamiątka na lata": {
      "Subtelny gest": ["CEWE FOTOKSIĄŻKA bajka","Maskotka ze zdjęciem","Fotopuzzle Kids"],
      "Wyjątkowy akcent": ["Gra fotomemory","CEWE FOTOKSIĄŻKA komiks","Kalendarz ścienny A4"],
      "Królestwo możliwości": ["Fotopuzzle PREMIUM","Fotodomino","CEWE FOTOKSIĄŻKA Kids"]  
    },
    "Dekoracyjny": {
      "Subtelny gest": ["Maskotka ze zdjęciem","Fotoplakat PREMIUM","Zdjęcia mini"],
      "Wyjątkowy akcent": ["Kubek dla chłopca","Kalendarz dla dzieci","Fotopuzzle PREMIUM"],
      "Królestwo możliwości": ["Kalendarz ścienny kwadratowy","Poduszka PREMIUM ze zdjęciem","Koc PREMIUM ze zdjęciem"]
    },
    "Osobisty": {
      "Subtelny gest": ["Kubek magiczny ze zdjęciem","CEWE FOTOKSIĄŻKA kwadratowa mała","Poduszka ze zdjęciem"],
      "Wyjątkowy akcent": ["Kubek ze znakiem zodiaku i zdjęciem","Zeszyt ze zdjęciem","Maskotka ze zdjęciem"],
      "Królestwo możliwości": ["Terminarz urodzinowy","Termos ze zdjęciem","Planer A5 szkolny"]
    },
    "Kreatywny": {
      "Subtelny gest": ["Podkładka pod myszkę ze zdjęciem","CEWE FOTOKSIĄŻKA bajka","Fotopuzzle w ramce"],
      "Wyjątkowy akcent": ["Gra fotomemory","CEWE FOTOKSIĄŻKA dla dziecka","Kredki Faber-Castell Colour Grip ze zdjęciem"],
      "Królestwo możliwości": ["Kredki Faber-Castell Goldfaber Aqua ze zdjęciem","CEWE FOTOKSIĄŻKA komiks","Fotopuzzle Ravensburger"]
    }
  },
  "Nastolatkom": {
      "Pamiątka na lata": {
      "Subtelny gest": ["Fotoplakat PREMIUM","Kubek z inicjałami i zdjęciem","CEWE FOTOKSIĄŻKA kwadratowa mała"],
      "Wyjątkowy akcent": ["Fotoplakat z mapą","Kalendarz dla niej","CEWE FOTOKSIĄŻKA pamiętnik"],
      "Królestwo możliwości": ["CEWE FOTOKSIĄŻKA dla niej","Fotoplakat PREMIUM w ramie","Fotopuzzle PREMIUM"]
    },
    "Dekoracyjny": {
      "Subtelny gest": ["Magnesy ze zdjęciem","Kubek emaliowany ze zdjęciem","Fotoplakat PREMIUM"],
      "Wyjątkowy akcent": ["Kubek z inicjałami i zdjęciem","Kalendarz dla niego","Fotoplakat ze znakiem zodiaku"],
      "Królestwo możliwości": ["Fotoplakat z mapą","hexxas","CEWE FOTOKSIĄŻKA z podróży"]
    },
    "Osobisty": {
      "Subtelny gest": ["Kubek świąteczny","Brelok ze zdjęciem","Zdjęcie w ramce"],
      "Wyjątkowy akcent": ["Kalendarz dla dziewczyny","Fotoplakat PREMIUM w ramie","CEWE FOTOKSIĄŻKA pamiętnik"],
      "Królestwo możliwości": ["Termos ze zdjęciem","Kalendarz dla chłopaka","CEWE FOTOKSIĄŻKA dla niego"]
    },
    "Kreatywny": {
      "Subtelny gest": ["Karty do gry ze zdjęciem","Kubek z podróży","Brelok ze zdjęciem"],
      "Wyjątkowy akcent": ["Kalendarz dla przyjaciółki","Magnesy ze zdjęciem","Termos ze zdjęciem"],
      "Królestwo możliwości": ["Kalendarz ścienny A2","CEWE FOTOKSIĄŻKA zbiór wspomnień","Fotopuzzle Ravensburger"]
    }
  },
  "Bratu i siostrze": {
    "Pamiątka na lata": {
      "Subtelny gest": ["Kubek z wakacji", "CEWE FOTOKSIĄŻKA zbiór wspomnień", "Kalendarz dla podróżnika"],
      "Wyjątkowy akcent": ["CEWE FOTOKSIĄŻKA z wakacji", "Kalendarz dla brata", "Etui drewniane"],
      "Królestwo możliwości": ["CEWE FOTOKSIĄŻKA Kronika rodzinna", "Koc PREMIUM ze zdjęciem", "Fotoobraz na drewnie"]
    },
    "Dekoracyjny": {
      "Subtelny gest": ["Kubek świąteczny", "Koc PREMIUM ze zdjęciem", "Fotoobraz na drewnie"],
      "Wyjątkowy akcent": ["Kubek z podróży", "Etui bio", "Kalendarz dla miłośnika gór"],
      "Królestwo możliwości": ["Fotoplakat z listwą","Fotoobraz na drewnie","CEWE FOTOKSIĄŻKA dla siostry"]
    },
    "Osobisty": {
      "Subtelny gest": ["Pudełko ze zdjęciami", "Kubek z wakacji","CEWE FOTOKSIĄŻKA dla siostry"],
      "Wyjątkowy akcent": ["Kalendarz dla siostry","CEWE FOTOKSIĄŻKA A4* pionowa","Poduszka PREMIUM ze zdjęciem"],
      "Królestwo możliwości": ["CEWE FOTOKSIĄŻKA Kronika roczna", "Koc PREMIUM ze zdjęciem", "Etui ze smyczą"]
    },
    "Kreatywny": {
      "Subtelny gest": ["Karty do gry ze zdjęciem","Magnesy ze zdjęciem","Kubek świąteczny"],
      "Wyjątkowy akcent": ["Fotopuzzle PREMIUM","Kalendarz dla pasjonata motoryzacji","Torba PREMIUM ze zdjęciem"],
      "Królestwo możliwości": ["Etui ze zdjęciem na szkle hartowanym","CEWE FOTOKSIĄŻKA kwadratowa XL","Fartuch kuchenny ze zdjęciem"]
    }
  },
  "Cioci i wujkowi": {
    "Pamiątka na lata": {
      "Subtelny gest": ["Zdjęcie w ramce","CEWE FOTOKSIĄŻKA kwadratowa mała","Kalendarz ścienny A5 poziomy"],
      "Wyjątkowy akcent": ["CEWE FOTOKSIĄŻKA Kronika roczna","Fotoplakat PREMIUM w ramie","Kalendarz dla mężczyzny"],
      "Królestwo możliwości": ["Fotoobraz na szkle akrylowym","CEWE FOTOKSIĄŻKA Kronika rodzinna","Kalendarz ścienny A2 Gold Edition"]
    },
    "Dekoracyjny": {
      "Subtelny gest": ["Pudełko ze zdjęciami","Kalendarz biurkowy kwadratowy","Kalendarz ścienny z drewnianą listwą"],
      "Wyjątkowy akcent": ["Fotoobraz na płótnie","Kalendarz ścienny A3","Fotoplakat z mapą"],
      "Królestwo możliwości": ["Kalendarz ścienny Fineline","Fotoobraz na drewnie","Kalendarz dla podróżnika"]
    },
    "Osobisty": {
      "Subtelny gest": ["Kalendarz biurkowy poziomy","CEWE FOTOKSIĄŻKA A5* pozioma","Zdjęcia mini"],
      "Wyjątkowy akcent": ["Termos ze zdjęciem","Kalendarz ścienny A2","Fotoobraz na płycie Alu-Dibond"],
      "Królestwo możliwości": ["Torba PREMIUM ze zdjęciem","CEWE FOTOKSIĄŻKA Kronika roczna","Gallery Print"]
    },
    "Kreatywny": {
      "Subtelny gest": ["Kalendarz ścienny A5 poziomy","Kubek z inicjałami i zdjęciem","Fotopuzzle PREMIUM"],
      "Wyjątkowy akcent": ["Fotoobraz na płótnie","CEWE FOTOKSIĄŻKA z zeskanowanych zdjęć","Kalendarz dla kobiety"],
      "Królestwo możliwości": ["CEWE FOTOKSIĄŻKA kucharska","Kalendarz ścienny XXL panoramiczny","Koc PREMIUM ze zdjęciem"]
    }
  },
  "Przyjaciołom": {
    "Pamiątka na lata": {
      "Subtelny gest": ["Fotopuzzle w ramce","CEWE FOTOKSIĄŻKA kwadratowa mała","Terminarz ścienny"],
      "Wyjątkowy akcent": ["Torba PREMIUM ze zdjęciem","CEWE FOTOKSIĄŻKA A4* pozioma","Planer A5"],
      "Królestwo możliwości": ["CEWE FOTOKSIĄŻKA XXL pozioma","Fotoobraz wieloczęściowy","Etui skórzane"]
    },
    "Dekoracyjny": {
      "Subtelny gest": ["Fotoplakat ze znakiem zodiaku","Zdjęcia kwadratowe","Terminarz kuchenny"],
      "Wyjątkowy akcent": ["Fotoplakat z listwą","Kalendarz ścienny A3","Koc PREMIUM ze zdjęciem"],
      "Królestwo możliwości": ["Fotoplakat z mapą","Fotopanel","Kalendarz ścienny Fineline"]
    },
    "Osobisty": {
      "Subtelny gest": ["Zdjęcia retro","Brelok ze zdjęciem","Karty do gry ze zdjęciem"],
      "Wyjątkowy akcent": ["CEWE FOTOKSIĄŻKA dla przyjaciółki","Fartuch kuchenny ze zdjęciem","Kubek magiczny ze zdjęciem"],
      "Królestwo możliwości": ["Kalendarz dla przyjaciółki","Poduszka PREMIUM w kształcie serca ze zdjęciem","CEWE FOTOKSIĄŻKA XXL pionowa"]
    },
    "Kreatywny": {
      "Subtelny gest": ["Paski ze zdjęciem na magnesie","CEWE FOTOKSIĄŻKA A4* pionowa","Kalendarz ścienny A5 poziomy"],
      "Wyjątkowy akcent": ["Fotoobraz na płótnie","Torba PREMIUM ze zdjęciem","Kalendarz ścienny A3"],
      "Królestwo możliwości": ["CEWE FOTOKSIĄŻKA XXL pionowa","Fotoobraz na piance ze zdjęciem retro XXL","Fotopuzzle Ravensburger"]
    }
  },
};

export const products = 
[
  {
    "name": "Brelok ze zdjęciem",
    "description": "Brelok ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/brelok-ze-zdjeciem.html",
    "globalName": "cp-gifts:decoration:photo-key-chain:pip"
  },
  {
    "name": "Fotopuzzle PREMIUM",
    "src": "",
    "description": "Puzzle z własnym zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/fotopuzzle-premium.html",
    "globalName": "cp-gifts:games:premium-puzzle:pip"
  },
  {
    "name": "Personalizowany plakat",
    "src": "",
    "description": "Plakat z własnym nadrukiem",
    "link": "https://www.cewe.pl/fotoplakaty.html",
    "globalName": "cp-poster-canvas:poster:cat"
  },
  {
    "name": "Torba PREMIUM ze zdjęciem",
    "src": "",
    "description": "Torba PREMIUM ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/torba-premium-ze-zdjeciem.html",
    "globalName": "cp-gifts:textiles:carrying-bag-premium:pip"
  },
  {
    "name": "Kalendarz ścienny",
    "src": "",
    "description": "Kalendarz ścienny",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/scienny.html",
    "globalName": "cp-calendars:wall"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla dziewczyny",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-dziewczyny.html",
    "globalName": "cp-photobooks:seo:girlfriend-photobook:pip"
  },
  {
    "name": "Zdjęcie w ramce",
    "src": "",
    "description": "Zdjęcie w ramce",
    "link": "https://www.cewe.pl/zdjecia/zdjecie-w-ramce.html",
    "globalName": "cp-photos:prints-framed:pip"
  },
  {
    "name": "Zdjęcie kwadratowe",
    "src": "",
    "description": "Zdjęcie kwadratowe",
    "link": "https://www.cewe.pl/zdjecia/kwadratowe.html",
    "globalName": "cp-gifts:art-prints:square-prints:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA kwadratowa mała",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA kwadratowa mała",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/kwadratowa-mala.html",
    "globalName": "cp-cewe-photobooks:compact-square:pip"
  },
  {
    "name": "Kubek dla mamy",
    "src": "",
    "description": "Kubek dla mamy",
    "link": "https://www.cewe.pl/fotoprezenty/kubki/pomysly/kubek-dla-mamy.html",
    "globalName": "cp-drinking-vessels:seo:mug-for-mam:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla rodziców",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla rodziców",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-rodzicow.html",
    "globalName": "cp-photobooks:seo:parents-photobook:pip"
  },
  {
    "name": "Koc PREMIUM ze zdjęciem",
    "src": "",
    "description": "Koc PREMIUM ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/koc-premium-ze-zdjeciem.html",
    "globalName": "cp-gifts:textiles:premium-blanket:pip"
  },
  {
    "name": "Kalendarz biurkowy eko",
    "src": "",
    "description": "Kalendarz biurkowy eko",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/biurkowy-eko.html",
    "globalName": "cp-calendars:table:nature:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA kwadratowa XL",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA kwadratowa XL",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/kwadratowa-xl.html",
    "globalName": "cp-cewe-photobooks:xl:pip"
  },
  {
    "name": "Kalendarz ścienny Fineline",
    "src": "",
    "description": "Kalendarz ścienny Fineline",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/scienny-fineline.html",
    "globalName": "cp-calendars:wall:fineline:pip"
  },
  {
    "name": "Fotoobraz wieloczęściowy",
    "src": "",
    "description": "Fotoobraz wieloczęściowy",
    "link": "https://www.cewe.pl/obraz-ze-zdjeciem/fotoobraz-wieloczesciowy.html",
    "globalName": "cp-poster-canvas:multi-panel:pip"
  },
  {
    "name": "Fotoplakat ze znakiem zodiaku",
    "src": "",
    "description": "Fotoplakat ze znakiem zodiaku",
    "link": "https://www.cewe.pl/fotoprezenty/fotoplakat-ze-znakiem-zodiaku.html",
    "globalName": "cp-poster-canvas:zodiac-sign-poster:pip"
  },
  {
    "name": "Terminarz ścienny roczny",
    "src": "",
    "description": "Terminarz ścienny roczny",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/terminarz-scienny-roczny.html",
    "globalName": "cp-calendars:wall:annual-planner:pip"
  },
  {
    "name": "Fotoplakat z listwą",
    "src": "",
    "description": "Fotoplakat z listwą",
    "link": "https://www.cewe.pl/fotoplakat/z-listwa.html",
    "globalName": "cp-poster-canvas:poster-hanger:pip"
  },
  {
    "name": "Poduszka PREMIUM ze zdjęciem",
    "src": "",
    "description": "Poduszka PREMIUM ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/poduszka-premium-ze-zdjeciem.html",
    "globalName": "cp-gifts:textiles:premium-pillow:pip"
  },
  {
    "name": "Kalendarz dla taty",
    "src": "",
    "description": "Kalendarz dla taty",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/pomysly/kalendarz-dla-taty.html",
    "globalName": "cp-calendars:seo:calendar-for-dad:pip"
  },
  {
    "name": "Fotopanel",
    "src": "",
    "description": "Fotopanel",
    "link": "https://www.cewe.pl/obraz-ze-zdjeciem/fotopanel.html",
    "globalName": "cp-poster-canvas:panel:pip"
  },
  {
    "name": "hexxas",
    "src": "",
    "description": "hexxas",
    "link": "https://www.cewe.pl/obraz-ze-zdjeciem/hexxas.html",
    "globalName": "cp-poster-canvas:hexxas:pip"
  },
  {
    "name": "Fotoobraz na piance ze zdjęciem retro XXL",
    "src": "",
    "description": "Fotoobraz na piance ze zdjęciem retro XXL",
    "link": "https://www.cewe.pl/obraz-ze-zdjeciem/fotoobraz-na-piance-ze-zdjeciem-retro-xxl.html",
    "globalName": "cp-poster-canvas:xxl-retro-print:pip"
  },
  {
    "name": "Kubek ceramiczny ze zdjęciem",
    "src": "",
    "description": "Kubek ceramiczny ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/kubek-ceramiczny-ze-zdjeciem.html",
    "globalName": "cp-gifts:drinking-vessels:mug:pip"
  },
  {
    "name": "Koszulka ze zdjęciem",
    "src": "",
    "description": "Koszulka ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/koszulka-ze-zdjeciem.html",
    "globalName": "cp-gifts:textiles:t-shirt:pip"
  },
  {
    "name": "Planer A5",
    "src": "",
    "description": "Planer A5",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/planer-a5.html",
    "globalName": "cp-calendars:appointment-agenda:planner-a5:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA Kids",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA Kids",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/kids.html",
    "globalName": "cp-cewe-photobooks:kids:pip"
  },
  {
    "name": "Etui ze zdjęciem na szkle hartowanym",
    "src": "",
    "description": "Etui ze zdjęciem na szkle hartowanym",
    "link": "https://www.cewe.pl/etui-ze-zdjeciem/na-szkle-hartowanym.html",
    "globalName": "cp-smartphone-cases:gallery-case:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA XXL pozioma",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA XXL pozioma",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/xxl-pozioma.html",
    "globalName": "cp-cewe-photobooks:xxl-panorama:pip"
  },
  {
    "name": "Kalendarz ścienny A2 Gold Edition",
    "src": "",
    "description": "Kalendarz ścienny A2 Gold Edition",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/scienny-a2-gold-edition.html",
    "globalName": "cp-calendars:wall:a2-gold-edition:pip"
  },
  {
    "name": "Paski ze zdjęciem na magnesie",
    "src": "",
    "description": "Paski ze zdjęciem na magnesie",
    "link": "https://www.cewe.pl/fotoprezenty/paski-ze-zdjeciem-na-magnesie.html",
    "globalName": "cp-gifts:photo-magnets:photo-magnet-stripe:pip"
  },
  {
    "name": "Terminarz rodzinny na szkle akrylowym",
    "src": "",
    "description": "Terminarz rodzinny na szkle akrylowym",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/terminarz-rodzinny-na-szkle-akrylowym.html",
    "globalName": "cp-calendars:appointment-agenda:family-behind-acrylglass:pip"
  },
  {
    "name": "Kubek magiczny ze zdjęciem",
    "src": "",
    "description": "Kubek magiczny ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/kubek-magiczny-ze-zdjeciem.html",
    "globalName": "cp-gifts:drinking-vessels:magic-mug:pip"
  },
  {
    "name": "Zdjęcia mini",
    "src": "",
    "description": "Zdjęcia mini",
    "link": "https://www.cewe.pl/zdjecia/zdjecia-mini.html",
    "globalName": "cp-gifts:little-prints:pip"
  },
  {
    "name": "Kalendarz biurkowy kwadratowy",
    "src": "",
    "description": "Kalendarz biurkowy kwadratowy",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/biurkowy-kwadratowy.html",
    "globalName": "cp-calendars:table:square:pip"
  },
  {
    "name": "Pudełko ze zdjęciami",
    "src": "",
    "description": "Pudełko ze zdjęciami",
    "link": "https://www.cewe.pl/zdjecia/pudelko-ze-zdjeciami.html",
    "globalName": "cp-photos:photo-boxes:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA XXL pionowa",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA XXL pionowa",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/xxl-pionowa.html",
    "globalName": "cp-cewe-photobooks:xxl:pip"
  },
  {
    "name": "Kubek dla babci",
    "src": "",
    "description": "Kubek dla babci",
    "link": "https://www.cewe.pl/fotoprezenty/kubki/pomysly/kubek-dla-babci.html",
    "globalName": "cp-drinking-vessels:seo:mug-for-grandmother:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA A5* pozioma",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA A5 pozioma",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/a5-pozioma.html",
    "globalName": "cp-cewe-photobooks:compact-panorama:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla Babci",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla Babci",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-babci.html",
    "globalName": "cp-photobooks:seo:grandmother-photobook:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla Dziadka",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla Dziadka",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-dziadka.html",
    "globalName": "cp-photobooks:seo:grandfather-photobook:pip"
  },
  {
    "name": "Fotoobraz na płótnie",
    "src": "",
    "description": "Fotoobraz na płótnie",
    "link": "https://www.cewe.pl/obraz-ze-zdjeciem/fotoobraz-na-plotnie.html",
    "globalName": "cp-poster-canvas:canvas:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA z prac dziecka",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA z prac dziecka",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-z-prac-dziecka.html",
    "globalName": "cp-photobooks:seo:photobook-of-child-work:pip"
  },
  {
    "name": "Kubek dla dziadka",
    "src": "",
    "description": "Kubek dla dziadka",
    "link": "https://www.cewe.pl/fotoprezenty/kubki/pomysly/kubek-dla-dziadka.html",
    "globalName": "cp-drinking-vessels:seo:mug-for-grandfather:pip"
  },
  {
    "name": "Kalendarz dla dziadków",
    "src": "",
    "description": "Kalendarz dla dziadków",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/pomysly/kalendarz-dla-dziadkow.html",
    "globalName": "cp-calendars:seo:calendar-for-grandparents:pip"
  },
  {
    "name": "Poduszka ze zdjęciem",
    "src": "",
    "description": "Poduszka ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/poduszka-ze-zdjeciem.html",
    "globalName": "cp-gifts:textiles:pillowcase:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla dziadków",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla dziadków",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-dziadkow.html",
    "globalName": "cp-photobooks:seo:photobook-for-grandparents:pip"
  },
  {
    "name": "Kalendarz ścienny XXL panoramiczny",
    "src": "",
    "description": "Kalendarz ścienny XXL panoramiczny",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/scienny-xxl-panoramiczny.html",
    "globalName": "cp-calendars:wall:xxl-panorama:pip"
  },
  {
    "name": "Zdjęcia retro",
    "src": "",
    "description": "Zdjęcia retro",
    "link": "https://www.cewe.pl/zdjecia/zdjecia-retro.html",
    "globalName": "cp-gifts:art-prints:retro-prints:pip"
  },
  {
    "name": "Fotoplakat PREMIUM w ramie",
    "src": "",
    "description": "Fotoplakat PREMIUM w ramie",
    "link": "https://www.cewe.pl/fotoplakat/premium-w-ramie.html",
    "globalName": "cp-poster-canvas:frames:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla dziadków",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla dziadków",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-dziadkow.html",
    "globalName": "cp-photobooks:seo:photobook-for-grandparents:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA A4* pionowa",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA A4 pionowa",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/a4-pionowa.html",
    "globalName": "cp-cewe-photobooks:large:pip"
  },
  {
    "name": "Poduszka PREMIUM w kształcie serca ze zdjęciem",
    "src": "",
    "description": "Poduszka PREMIUM w kształcie serca ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/poduszka-premium-w-ksztalcie-serca-ze-zdjeciem.html",
    "globalName": "cp-gifts:textiles:heart-pillow-premium:pip"
  },
  {
    "name": "Fotoplakat z mapą",
    "src": "",
    "description": "Fotoplakat z mapą",
    "link": "https://www.cewe.pl/fotoplakat/z-mapa.html",
    "globalName": "cp-poster-canvas:streetmap-poster:pip"
  },
  {
    "name": "Kartki z wkładką foto",
    "src": "",
    "description": "Kartki z wkładką foto",
    "link": "https://www.cewe.pl/kartka-ze-zdjeciem/kartki-z-wkladka-foto.html",
    "globalName": "cp-greetingcards:cards-with-extra-photo-card:pip"
  },
  {
    "name": "Fotoplakat PREMIUM",
    "src": "",
    "description": "Fotoplakat PREMIUM",
    "link": "https://www.cewe.pl/fotoplakat/premium.html",
    "globalName": "cp-poster-canvas:poster:pip"
  },
  {
    "name": "Etui ze smyczą",
    "src": "",
    "description": "Etui ze smycza",
    "link": "https://www.cewe.pl/etui-ze-zdjeciem/ze-smycza.html",
    "globalName": "cp-smartphone-cases:carry:pip"
  },
  {
    "name": "Kalendarz ścienny z drewnianą listwą",
    "src": "",
    "description": "Kalendarz ścienny z drewnianą listwą",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/scienny-z-drewniana-listwa.html",
    "globalName": "cp-calendars:wall:rail:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla męża",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla męża",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-meza.html",
    "globalName": "cp-photobooks:seo:photobook-for-husband:pip"
  },
  {
    "name": "Kalendarz dla żony",
    "src": "",
    "description": "Kalendarz dla żony",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/pomysly/kalendarz-dla-zony.html",
    "globalName": "cp-calendars:seo:calendar-for-wife:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA na rocznicę związku",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA na rocznicę związku",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-na-rocznice-zwiazku.html",
    "globalName": "cp-photobooks:seo:anniversary-photobook:pip"
  },
  {
    "name": "Kalendarz dla mężczyzny",
    "src": "",
    "description": "Kalendarz dla mężczyzny",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/pomysly/kalendarz-dla-mezczyzny.html",
    "globalName": "cp-calendars:seo:calendar-for-men:pip"
  },
  {
    "name": "Kubek dla niej",
    "src": "",
    "description": "Kubek dla niej",
    "link": "https://www.cewe.pl/fotoprezenty/kubki/pomysly/kubek-dla-niej.html",
    "globalName": "cp-drinking-vessels:seo:mug-for-her:pip"
  },
  {
    "name": "Fotopuzzle w ramce",
    "src": "",
    "description": "Fotopuzzle w ramce",
    "link": "https://www.cewe.pl/fotoprezenty/fotopuzzle-w-ramce.html",
    "globalName": "cp-gifts:games:voucher-puzzle:pip"
  },
  {
    "name": "Kalendarz dla dziewczyny",
    "src": "",
    "description": "Kalendarz dla dziewczyny",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/pomysly/kalendarz-dla-dziewczyny.html",
    "globalName": "cp-calendars:seo:calendar-for-girlfriend:pip"
  },
  {
    "name": "Fotoobraz na płycie Alu-Dibond",
    "src": "",
    "description": "Fotoobraz na płycie Alu-Dibond",
    "link": "https://www.cewe.pl/obraz-ze-zdjeciem/fotoobraz-na-plycie-alu-dibond.html",
    "globalName": "cp-poster-canvas:alu-dibond-direct-print:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla chłopaka",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla chłopaka",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-chlopaka.html",
    "globalName": "cp-photobooks:seo:boyfriend-photobook:pip"
  },
  {
    "name": "Kubek dla żony",
    "src": "",
    "description": "Kubek dla żony",
    "link": "https://www.cewe.pl/fotoprezenty/kubki/pomysly/kubek-dla-zony.html",
    "globalName": "cp-drinking-vessels:seo:mug-for-wife:pip"
  },
  {
    "name": "Termos ze zdjęciem",
    "src": "",
    "description": "Termos ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/termos-ze-zdjeciem.html",
    "globalName": "cp-gifts:drinking-vessels:stainless-steel-bottle:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla żony",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla żony",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-zony.html",
    "globalName": "cp-photobooks:seo:photobook-for-the-wife:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla zakochanych",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla zakochanych",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-zakochanych.html",
    "globalName": "cp-photobooks:seo:photobook-for-lovers:pip"
  },
  {
    "name": "Fotoobraz na drewnie",
    "src": "",
    "description": "Fotoobraz na drewnie",
    "link": "https://www.cewe.pl/obraz-ze-zdjeciem/fotoobraz-na-drewnie.html",
    "globalName": "cp-poster-canvas:wood:pip"
  },
  {
    "name": "Magnesy ze zdjęciem",
    "src": "",
    "description": "Magnesy ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/magnesy-ze-zdjeciem.html",
    "globalName": "cp-gifts:decoration:photo-magnet:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA na rocznicę ślubu",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA na rocznicę ślubu",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-na-rocznice-slubu.html",
    "globalName": "cp-photobooks:seo:wedding-anniversary-photobook:pip"
  },
  {
    "name": "Terminarz urodzinowy",
    "src": "",
    "description": "Terminarz urodzinowy",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/terminarz-urodzinowy.html",
    "globalName": "cp-calendars:wall:birthday:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA A4* pozioma",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA A4 pozioma",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/a4-pozioma.html",
    "globalName": "cp-cewe-photobooks:large-panorama:pip"
  },
  {
    "name": "Kalendarz ścienny A3",
    "src": "",
    "description": "Kalendarz ścienny A3",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/scienny-a3.html",
    "globalName": "cp-calendars:wall:a3:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA bajka",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA bajka",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-bajka.html",
    "globalName": "cp-photobooks:seo:fairy-tale-photobook:pip"
  },
  {
    "name": "Maskotka ze zdjęciem",
    "src": "",
    "description": "Maskotka ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/maskotka-ze-zdjeciem.html",
    "globalName": "cp-gifts:games:stuffed-toy:pip"
  },
  {
    "name": "Fotopuzzle Kids",
    "src": "",
    "description": "Fotopuzzle Kids",
    "link": "https://www.cewe.pl/fotoprezenty/fotopuzzle-kids.html",
    "globalName": "cp-gifts:games:kids-puzzle:pip"
  },
  {
    "name": "Gra fotomemory",
    "src": "",
    "description": "Gra fotomemory",
    "link": "https://www.cewe.pl/fotoprezenty/gra-fotomemory.html",
    "globalName": "cp-gifts:games:photo-memo:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA komiks",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA komiks",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-komiks.html",
    "globalName": "cp-photobooks:seo:photobook-comic:pip"
  },
  {
    "name": "Kalendarz ścienny A4",
    "src": "",
    "description": "Kalendarz ścienny A4",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/scienny-a4.html",
    "globalName": "cp-calendars:wall:a4:pip"
  },
  {
    "name": "Fotodomino",
    "src": "",
    "description": "Fotodomino",
    "link": "https://www.cewe.pl/fotoprezenty/fotodomino.html",
    "globalName": "cp-gifts:games:photo-domino:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA Kids",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA Kids",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/kids.html",
    "globalName": "cp-cewe-photobooks:kids:pip"
  },
  {
    "name": "Kubek dla chłopca",
    "src": "",
    "description": "Kubek dla chłopca",
    "link": "https://www.cewe.pl/fotoprezenty/kubki/pomysly/kubek-dla-chlopca.html",
    "globalName": "cp-drinking-vessels:seo:mug-for-boy:pip"
  },
  {
    "name": "Kalendarz dla dzieci",
    "src": "",
    "description": "Kalendarz dla dzieci",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/pomysly/kalendarz-dla-dzieci.html",
    "globalName": "cp-calendars:seo:calendar-for-kids:pip"
  },
  {
    "name": "Kalendarz ścienny kwadratowy",
    "src": "",
    "description": "Kalendarz ścienny kwadratowy",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/scienny-kwadratowy.html",
    "globalName": "cp-calendars:wall:square:pip"
  },
  {
    "name": "Kubek magiczny ze zdjęciem",
    "src": "",
    "description": "Kubek magiczny ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/kubek-magiczny-ze-zdjeciem.html",
    "globalName": "cp-gifts:drinking-vessels:magic-mug:pip"
  },
  {
    "name": "Kubek ze znakiem zodiaku i zdjęciem",
    "src": "",
    "description": "Kubek ze znakiem zodiaku i zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/kubek-ze-znakiem-zodiaku-i-zdjeciem.html",
    "globalName": "cp-gifts:drinking-vessels:zodiac-sign-mug:pip"
  },
  {
    "name": "Zeszyt ze zdjęciem",
    "src": "",
    "description": "Zeszyt ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/zeszyt-ze-zdjeciem.html",
    "globalName": "cp-gifts:school-college-office:notebook:pip"
  },
  {
    "name": "Planer A5 szkolny",
    "src": "",
    "description": "Planer A5 szkolny",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/planer-a5-szkolny.html",
    "globalName": "cp-calendars:appointment-agenda:student:pip"
  },
  {
    "name": "Podkładka pod myszkę ze zdjęciem",
    "src": "",
    "description": "Podkładka pod myszkę ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/podkladka-pod-myszke-ze-zdjeciem.html",
    "globalName": "cp-gifts:school-college-office:mousepad:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla dziecka",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla dziecka",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-dziecka.html",
    "globalName": "cp-photobooks:seo:photobook-for-kid:pip"
  },
  {
    "name": "Kredki Faber-Castell Colour Grip ze zdjęciem",
    "src": "",
    "description": "Kredki Faber-Castell Colour Grip ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/kredki-faber-castell-colour-grip.html",
    "globalName": "cp-gifts:school-college-office:pip"
  },
  {
    "name": "Kredki Faber-Castell Goldfaber Aqua ze zdjęciem",
    "src": "",
    "description": "Kredki Faber-Castell Goldfaber Aqua ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/kredki-faber-castell-goldfaber-aqua.html",
    "globalName": "cp-gifts:school-college-office:faber-castell-colored-pencil-tin:pip"
  },
  {
    "name": "Fotopuzzle Ravensburger",
    "src": "",
    "description": "Fotopuzzle Ravensburger",
    "link": "https://www.cewe.pl/fotoprezenty/fotopuzzle-ravensburger.html",
    "globalName": "cp-gifts:games:ravensburger-puzzle:pip"
  },
  {
    "name": "Kubek z inicjałami i zdjęciem",
    "src": "",
    "description": "Kubek z inicjałami i zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/kubek-z-inicjalami-i-zdjeciem.html",
    "globalName": "cp-gifts:drinking-vessels:name-mug:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA pamiętnik",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA pamiętnik",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-pamietnik.html",
    "globalName": "cp-photobooks:seo:photobook-diary:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla niej",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla niej",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-niej.html",
    "globalName": "cp-photobooks:seo:photobook-for-her:pip"
  },
  {
    "name": "Kubek emaliowany ze zdjęciem",
    "src": "",
    "description": "Kubek emaliowany ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/kubek-emaliowany-ze-zdjeciem.html",
    "globalName": "cp-gifts:enamel-mug:pip"
  },
  {
    "name": "Kalendarz dla niego",
    "src": "",
    "description": "Kalendarz dla niego",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/pomysly/kalendarz-dla-niego.html",
    "globalName": "cp-calendars:seo:calendar-for-him:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA z podróży",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA z podróży",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-z-podrozy.html",
    "globalName": "cp-photobooks:seo:travel-photobook:pip"
  },
  {
    "name": "Kubek świąteczny",
    "src": "",
    "description": "Kubek świąteczny",
    "link": "https://www.cewe.pl/fotoprezenty/kubki/pomysly/kubek-swiateczny.html",
    "globalName": "cp-drinking-vessels:seo:christmas-mug:pip"
  },
  {
    "name": "Kalendarz dla chłopaka",
    "src": "",
    "description": "Kalendarz dla chłopaka",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/pomysly/kalendarz-dla-chlopaka.html",
    "globalName": "cp-calendars:seo:calendar-for-boyfriend:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla niego",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla niego",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-niego.html",
    "globalName": "cp-photobooks:seo:photobook-for-him:pip"
  },
  {
    "name": "Karty do gry ze zdjęciem",
    "src": "",
    "description": "Karty do gry ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/karty-do-gry-ze-zdjeciem.html",
    "globalName": "cp-gifts:games:playing-cards:pip"
  },
  {
    "name": "Kubek z podróży",
    "src": "",
    "description": "Kubek z podróży",
    "link": "https://www.cewe.pl/fotoprezenty/kubki/pomysly/kubek-z-podrozy.html",
    "globalName": "cp-drinking-vessels:seo:mug-from-journey:pip"
  },
  {
    "name": "Kalendarz dla przyjaciółki",
    "src": "",
    "description": "Kalendarz dla przyjaciółki",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/pomysly/kalendarz-dla-przyjaciolki.html",
    "globalName": "cp-calendars:seo:calendar-for-friend:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA zbiór wspomnień",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA zbiór wspomnień",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-zbior-wspomnien.html",
    "globalName": "cp-photobooks:seo:photobook-collection-of-memories:pip"
  },
  {
    "name": "Kubek z wakacji",
    "src": "",
    "description": "Kubek z wakacji",
    "link": "https://www.cewe.pl/fotoprezenty/kubki/pomysly/kubek-z-wakacji.html",
    "globalName": "cp-drinking-vessels:seo:mug-from-holiday:pip"
  },
  {
    "name": "Kalendarz dla podróżnika",
    "src": "",
    "description": "Kalendarz dla podróżnika",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/pomysly/kalendarz-dla-podroznika.html",
    "globalName": "cp-calendars:seo:calendar-for-traveler:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA z wakacji",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA z wakacji",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-z-wakacji.html",
    "globalName": "cp-photobooks:seo:holiday-photobook:pip"
  },
  {
    "name": "Kalendarz dla brata",
    "src": "",
    "description": "Kalendarz dla brata",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/pomysly/kalendarz-dla-brata.html",
    "globalName": "cp-calendars:seo:calendar-for-brother:pip"
  },
  {
    "name": "Etui drewniane",
    "src": "",
    "description": "Etui drewniane",
    "link": "https://www.cewe.pl/etui-ze-zdjeciem/drewniane.html",
    "globalName": "cp-smartphone-cases:wooden:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA Kronika rodzinna",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA Kronika rodzinna",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/kronika-rodzinna.html",
    "globalName": "cp-photobooks:seo:family-chronicle-photobook:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla brata",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla brata",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-brata.html",
    "globalName": "cp-photobooks:seo:photobook-for-brother:pip"
  },
  {
    "name": "Etui bio",
    "src": "",
    "description": "Etui bio",
    "link": "https://www.cewe.pl/etui-ze-zdjeciem/bio.html",
    "globalName": "cp-smartphone-cases:bio-based:pip"
  },
  {
    "name": "Kalendarz dla miłośnika gór",
    "src": "",
    "description": "Kalendarz dla miłośnika gór",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/pomysly/kalendarz-dla-milosnika-gor.html",
    "globalName": "cp-calendars:seo:calendar-for-a-mountain-lover:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla siostry",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla siostry",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-siostry.html",
    "globalName": "cp-photobooks:seo:photobook-for-sister:pip"
  },
  {
    "name": "Kubek z wakacji",
    "src": "",
    "description": "Kubek z wakacji",
    "link": "https://www.cewe.pl/fotoprezenty/kubki/pomysly/kubek-z-wakacji.html",
    "globalName": "cp-drinking-vessels:seo:mug-from-holiday:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla siostry",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla siostry",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-siostry.html",
    "globalName": "cp-photobooks:seo:photobook-for-sister:pip"
  },
  {
    "name": "Kalendarz dla siostry",
    "src": "",
    "description": "Kalendarz dla siostry",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/pomysly/kalendarz-dla-siostry.html",
    "globalName": "cp-calendars:seo:calendar-for-sister:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA Kronika roczna",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA Kronika roczna",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/kronika-roczna.html",
    "globalName": "cp-photobooks:seo:yearbook-photobook:pip"
  },
  {
    "name": "Etui ze smyczą",
    "src": "",
    "description": "Etui ze smyczą",
    "link": "https://www.cewe.pl/etui-ze-zdjeciem/ze-smycza.html",
    "globalName": "cp-smartphone-cases:carry:pip"
  },
  {
    "name": "Fartuch kuchenny ze zdjęciem",
    "src": "",
    "description": "Fartuch kuchenny ze zdjęciem",
    "link": "https://www.cewe.pl/fotoprezenty/fartuch-kuchenny-ze-zdjeciem.html",
    "globalName": "cp-gifts:textiles:cooking-apron:pip"
  },
  {
    "name": "Kalendarz ścienny A5 poziomy",
    "src": "",
    "description": "Kalendarz ścienny A5 poziomy",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/scienny-a5-poziomy.html",
    "globalName": "cp-calendars:wall:a5:pip"
  },
  {
    "name": "Fotoobraz na szkle akrylowym",
    "src": "",
    "description": "Fotoobraz na szkle akrylowym",
    "link": "https://www.cewe.pl/obraz-ze-zdjeciem/fotoobraz-na-szkle-akrylowym.html",
    "globalName": "cp-poster-canvas:acryl-glass-direct-print:pip"
  },
  {
    "name": "Kalendarz biurkowy poziomy",
    "src": "",
    "description": "Kalendarz biurkowy poziomy",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/biurkowy-poziomy.html",
    "globalName": "cp-calendars:table:stand-up:pip"
  },
  {
    "name": "Gallery Print",
    "src": "",
    "description": "Gallery Print",
    "link": "https://www.cewe.pl/obraz-ze-zdjeciem/gallery-print.html",
    "globalName": "cp-poster-canvas:gallery-print:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA z zeskanowanych zdjęć",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA z zeskanowanych zdjęć",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-ze-starych-zdjec.html",
    "globalName": "cp-photobooks:seo:old-photos-photobook:pip"
  },
  {
    "name": "Kalendarz dla kobiety",
    "src": "",
    "description": "Kalendarz dla kobiety",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/pomysly/kalendarz-dla-kobiety.html",
    "globalName": "cp-calendars:seo:calendar-for-women:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA kucharska",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA kucharska",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-kucharska.html",
    "globalName": "cp-photobooks:seo:cookbook-photobook:pip"
  },
  {
    "name": "Etui skórzane",
    "src": "",
    "description": "Etui skórzane",
    "link": "https://www.cewe.pl/etui-ze-zdjeciem/skorzane.html",
    "globalName": "cp-smartphone-cases:leather:pip"
  },
  {
    "name": "Terminarz kuchenny",
    "src": "",
    "description": "Terminarz kuchenny",
    "link": "https://www.cewe.pl/kalendarz-ze-zdjeciami/terminarz-kuchenny.html",
    "globalName": "cp-calendars:wall:kitchen:pip"
  },
  {
    "name": "CEWE FOTOKSIĄŻKA dla przyjaciółki",
    "src": "",
    "description": "CEWE FOTOKSIĄŻKA dla przyjaciółki",
    "link": "https://www.cewe.pl/cewe-fotoksiazka/pomysly/fotoksiazka-dla-przyjaciolki.html",
    "globalName": "cp-photobooks:seo:friend-photobook:pip"
  }
]


export const categoryImageMap = {
  "Pamiątka na lata": "pamiatka_na_lata.png",
  "Kreatywny": "kreatywny.png",
  "Dekoracyjny": "dekoracyjny.png",
  "Osobisty": "osobisty.png",
};

export const priceImageMap = {
  "Subtelny gest": "biednie.png",
  "Wyjątkowy akcent": "skromnie.png",
  "Królestwo możliwości": "skromnie_biednie.png",
};

export const forWhoShortcuts = {
  "Rodzicom": "parents",
  "Dziadkom": "grandparents",
  "Dzieciom do 6 lat": "kids",
  "Nastolatkom": "teens",
  "Drugiej Połówce": "partner",
  "Cioci i wujkowi": "family",
  "Bratu i siostrze": "siblings",
  "Przyjaciołom": "friends",
};
let imageBase = `https://cdn.cewe.pl/GiftAppReact/imagesApp`;
export const recipientOptions = [
  
  { 
    src: `${imageBase}/rodzice.png`, 
    description: 'Rodzicom' 
  },
  { 
    src: `${imageBase}/dziadkowie.png`, 
    description: 'Dziadkom' 
  },
  { 
    src: `${imageBase}/druga_polowka.png`, 
    description: 'Drugiej Połówce' 
  },
  { 
    src: `${imageBase}/dzieci_do_6_lat.png`, 
    description: 'Dzieciom do 6 lat' 
  },
  { 
    src: `${imageBase}/nastolatki.png`, 
    description: 'Nastolatkom' 
  },
  { 
    src: `${imageBase}/brat_siostra.png`, 
    description: 'Bratu i siostrze' 
  },
  { 
    src: `${imageBase}/ciocia_wujek.png`, 
    description: 'Cioci i wujkowi' 
  },
  { 
    src: `${imageBase}/przyjaciele.png`, 
    description: 'Przyjaciołom' 
  },
];

export function generateProductFileNames(userForWho, productNames) {
  console.log("działa")
  // const prefix = "default";

    function normalizeText(text) {
    const polishMap = {
      'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n',
      'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
      'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N',
      'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z'
    };
    return text
      .split('')
      .map(char => polishMap[char] || char)
      .join('')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]/g, '');
  }

  return productNames.map(product => {
    const normalizedProduct = normalizeText(product.toLowerCase());
    console.log(normalizedProduct)
    let imageBase = `https://cdn.cewe.pl/GiftAppReact/imagesApp`;
    return {
      name: product,
      src: `${imageBase}/${normalizedProduct}.jpg`
    };
  });
}

export function findMatchingProducts(userPrice, userCategory, userForWho) {
  let matchingNames = [];
  if (
    produuctRelations[userForWho] &&
    produuctRelations[userForWho][userCategory] &&
    produuctRelations[userForWho][userCategory][userPrice]
  ) {
    matchingNames = produuctRelations[userForWho][userCategory][userPrice];
  }

  return matchingNames.map(name => {
    const foundProduct = products.find(p => p.name.toLowerCase() === name.toLowerCase());
    return foundProduct
      ? foundProduct
      : { name, description: '', link: '', src: '' };
    });
  }

  