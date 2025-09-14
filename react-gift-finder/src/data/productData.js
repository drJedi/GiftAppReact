export const productAttributes = {
  categories: {
    "Coś specjalnego, co uchwyci wszystkie nasze wspólne wspomnienia": ["Fotoalbum", "Koc PREMIUM ze zdjęciem"],
    "Mniejszy prezent pasujący do głównego": ["Brelok", "Zażółć gęślą jaźń"],
    "Coś kreatywnego": ["Zdjecia", "Puzzle z własnym nadrukiem"],
    "Coś osobistego": ["Kubek z nadrukiem", "Personalizowany plakat", 'Brelok'],
    "Coś dekoracyjnego": ["Personalizowany plakat", "Kubek z nadrukiem", "Puzzle z własnym nadrukiem"]
  },
  prices: {
    "Biednie": ["Brelok", "Kubek z nadrukiem"],
    "skromnie": ["Torba PREMIUM ze zdjęciem"],
    "Skromnie ale biednie": ["Personalizowany plakat", "Kalendarz ścienny"],
    "$CEWE": ["Fotoalbum", "Koc PREMIUM ze zdjęciem"]
  },
  forWho: {
    "My parents": ["Fotoalbum", "Personalizowany plakat"],
    "The youngest ones (0-6 years old)": ["Zdjecia", "Puzzle z własnym nadrukiem", "Brelok"],
    "The older children (10-19 years old)": ["Zdjecia", "Brelok"],
    "My other half": ["Personalizowany plakat", "Kubek z nadrukiem"],
    "Aunties and uncles": ["Torba PREMIUM ze zdjęciem", "Kalendarz ścienny"],
    "My brothers or sisters": ["Zażółć gęślą jaźń", "Brelok"],
    "My friends": ["Kubek z nadrukiem", "Puzzle z własnym nadrukiem"],
    "The grandparents": ["Fotoalbum", "Brelok"]
  }
};

export const products = [
  { name: "Fotoalbum", src: "", description: 'Fotoalbum z wakacji', link: "https://www.cewe.pl/cewe-fotoksiazka.html" },
  { name: "Koc PREMIUM ze zdjęciem", src: "", description: 'Koc PREMIUM ze zdjęciem z wydarzeniami rodzinnymi', link: "https://www.cewe.pl/fotoprezenty/koc-premium-ze-zdjeciem.html" },
  { name: "Brelok", src: "", description: 'Personalizowany brelok', link: "https://www.cewe.pl/fotoprezenty/brelok-ze-zdjeciem.html" },
  { name: "Zażółć gęślą jaźń", src: "", description: 'Zażółć gęślą jaźń', link: "https://www.cewe.pl" },
  { name: "Zdjecia", src: "", description: 'Zestaw do tworzenia własnych dekoracji', link: "https://www.cewe.pl" },
  { name: "Puzzle z własnym nadrukiem", src: "", description: 'Puzzle z własnym zdjęciem', link: "https://www.cewe.pl/fotoprezenty/fotopuzzle-premium.html" },
  { name: "Kubek z nadrukiem", src: "", description: 'Kubek z własnym zdjęciem', link: "https://www.cewe.pl/fotoprezenty/kubki.html" },
  { name: "Personalizowany plakat", src: "", description: 'Plakat z własnym nadrukiem', link: "https://www.cewe.pl/fotoplakaty.html" },
  { name: "Torba PREMIUM ze zdjęciem", src: "", description: 'Torba PREMIUM ze zdjęciem', link: "https://www.cewe.pl/fotoprezenty/torba-premium-ze-zdjeciem.html" },
  { name: "Kalendarz ścienny", src: "", description: 'Kalendarz ścienny', link: "https://www.cewe.pl/kalendarz-ze-zdjeciami/scienny.html" }
];

export const categoryImageMap = {
  "Coś specjalnego, co uchwyci wszystkie nasze wspólne wspomnienia": "cewe-special.png",
  "Mniejszy prezent pasujący do głównego": "two-gifts-cewe.png",
  "Coś kreatywnego": "creative-cewe.png",
  "Coś osobistego": "personal.png",
  "Coś dekoracyjnego": "decorative.png"
};

export const priceImageMap = {
  "Biednie": "biednie.png",
  "skromnie": "skromnie.png",
  "Skromnie ale biednie": "skromnie_biednie.png",
  "$CEWE": "cewe.png",
};

export const forWhoShortcuts = {
  "My parents": "parents",
  "The youngest ones (0-6 years old)": "kids",
  "The older children (10-19 years old)": "teens",
  "My other half": "partner",
  "Aunties and uncles": "family",
  "My brothers or sisters": "siblings",
  "My friends": "friends",
  "The grandparents": "grandparents"
};

export const recipientOptions = [
  { 
    src: 'https://cewe-uk.leadfamly.com/files/4649/Gift_Finder_Updates_2023/Question1/q1a1myparents.png', 
    description: 'My parents' 
  },
  { 
    src: 'https://cewe-uk.leadfamly.com/files/4649/Gift_Finder_Updates_2023/Question1/q1a2theyoungestones0-6yearsold.png', 
    description: 'The youngest ones (0-6 years old)' 
  },
  { 
    src: 'https://cewe-uk.leadfamly.com/files/4649/Gift_Finder_Updates_2023/Question1/q1a8theolderchildren.png', 
    description: 'The older children (10-19 years old)' 
  },
  { 
    src: './imagesApp/dla-drugiej-osoby.png', 
    description: 'My other half' 
  },
  { 
    src: 'https://cewe-uk.leadfamly.com/files/4649/Gift_Finder_Updates_2023/Question1/q1a4auntiesanduncles.png', 
    description: 'Aunties and uncles' 
  },
  { 
    src: './imagesApp/mkbewe__kapitan_bomba__by_rebus2077_dixzs6w.png', 
    description: 'My brothers or sisters' 
  },
  { 
    src: './imagesApp/tytus.png', 
    description: 'My friends' 
  },
  { 
    src: 'https://cewe-uk.leadfamly.com/files/4649/Gift_Finder_Updates_2023/Question1/q1a6thegrandparents.png', 
    description: 'The grandparents' 
  }
];

export function generateProductFileNames(userForWho, productNames) {
  const prefix = forWhoShortcuts[userForWho] || "default";

  function normalizeText(text) {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]/g, '');
  }

  return productNames.map(product => {
    const normalizedProduct = normalizeText(product.toLowerCase());
    return {
      name: product,
      src: `./imagesApp/${prefix}_${normalizedProduct}.jpg`
    };
  });
}

export function findMatchingProducts(userPrice, userCategory, userForWho) {
  let categoryProducts = userCategory ? productAttributes.categories[userCategory] : [];
  let priceProducts = userPrice ? productAttributes.prices[userPrice] : [];
  let forWhoProducts = userForWho ? productAttributes.forWho[userForWho] : [];
  
  const matchingProductsNames = [...new Set([...categoryProducts, ...priceProducts, ...forWhoProducts])];
  
  return generateProductFileNames(userForWho, matchingProductsNames).map(file => {
    const foundProduct = products.find(p => p.name === file.name);
    return {
      ...file,
      description: foundProduct ? foundProduct.description : '',
      link: foundProduct ? foundProduct.link : ''
    };
  });
}
