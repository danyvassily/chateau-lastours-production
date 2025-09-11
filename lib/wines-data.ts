export interface Wine {
  id: string
  name: string
  collection: "classique" | "methode" | "fruitees" | "poussin" | "domeni" | "confidentielle" | "opus"
  type: "rouge" | "blanc" | "rose" | "effervescent"
  vintage: number
  price: number
  description: string
  longDescription: string
  tastingNotes: {
    appearance: string
    nose: string
    palate: string
    finish: string
  }
  technicalInfo: {
    alcohol: string
    grapes: string[]
    aging: string
    production: string
  }
  conservation: {
    temperature: string
    duration: string
    conditions: string
  }
  foodPairing: {
    appetizers: string[]
    mainCourses: string[]
    cheeses: string[]
    desserts?: string[]
  }
  servingAdvice: {
    temperature: string
    decanting?: string
    glassware: string
    timing: string
  }
  composition: {
    terroir: string
    harvest: string
    vinification: string
    philosophy: string
  }
  awards: string[]
  image: string
  inStock: boolean
  featured: boolean
}

export const wines: Wine[] = [
  {
    id: "rouge-tradition-2020",
    name: "Rouge Tradition",
    collection: "classique",
    type: "rouge",
    vintage: 2020,
    price: 28,
    description:
      "Un rouge classique aux arômes de fruits rouges et d'épices douces, reflet de notre terroir ancestral.",
    longDescription:
      "Notre Rouge Tradition 2020 incarne l'essence même de notre savoir-faire séculaire. Élaboré à partir de nos plus belles parcelles de Syrah et Grenache, ce vin révèle toute la richesse de notre terroir argilo-calcaire. Vinifié selon les méthodes traditionnelles et élevé en fûts de chêne français pendant 12 mois, il développe une complexité remarquable tout en conservant la fraîcheur caractéristique de nos vins.",
    tastingNotes: {
      appearance: "Robe rouge profond aux reflets violacés",
      nose: "Bouquet complexe de fruits rouges mûrs, épices douces et notes boisées subtiles",
      palate: "Attaque franche, tanins soyeux, belle structure avec des arômes de cerise, poivre et réglisse",
      finish: "Finale longue et élégante sur les fruits et les épices",
    },
    technicalInfo: {
      alcohol: "14.5%",
      grapes: ["Syrah 60%", "Grenache 40%"],
      aging: "12 mois en fûts de chêne français",
      production: "15 000 bouteilles",
    },
    conservation: {
      temperature: "14-16°C",
      duration: "5-8 ans",
      conditions: "Cave fraîche et sombre, bouteilles couchées",
    },
    foodPairing: {
      appetizers: ["Charcuterie fine", "Fromages affinés", "Tapenade"],
      mainCourses: ["Agneau grillé", "Bœuf braisé", "Plats mijotés"],
      cheeses: ["Roquefort", "Cantal", "Fromages du terroir"],
    },
    servingAdvice: {
      temperature: "16-18°C",
      decanting: "Carafage recommandé 1h avant",
      glassware: "Verre à vin rouge de Bordeaux",
      timing: "Optimal après 2-3 ans de garde",
    },
    composition: {
      terroir: "Terroir argilo-calcaire, coteaux bien exposés",
      harvest: "Vendanges manuelles, tri sélectif",
      vinification: "Méthodes traditionnelles, élevage en fûts",
      philosophy: "Révéler la richesse de notre terroir ancestral",
    },
    awards: ["Médaille d'Or - Concours Général Agricole 2023", "92/100 - Wine Spectator"],
    image: "/wine-rouge-tradition.png",
    inStock: true,
    featured: true,
  },
  {
    id: "blanc-minerale-2022",
    name: "Blanc Minérale",
    collection: "classique",
    type: "blanc",
    vintage: 2022,
    price: 24,
    description:
      "Un blanc sec et minéral, expression pure de notre terroir calcaire, aux notes d'agrumes et de fleurs blanches.",
    longDescription:
      "Le Blanc Minérale 2022 est l'expression la plus pure de notre terroir calcaire. Issu de vignes de Chardonnay et Viognier plantées sur les coteaux les mieux exposés, ce vin bénéficie d'une vinification soignée en cuves inox pour préserver toute sa fraîcheur. Un élevage partiel sur lies fines apporte rondeur et complexité à ce blanc d'une grande élégance.",
    tastingNotes: {
      appearance: "Robe dorée brillante aux reflets verts",
      nose: "Arômes d'agrumes, fleurs blanches et notes minérales caractéristiques",
      palate: "Bouche fraîche et vive, belle acidité, saveurs d'agrumes et de pierre à fusil",
      finish: "Finale cristalline et persistante",
    },
    technicalInfo: {
      alcohol: "13%",
      grapes: ["Chardonnay 70%", "Viognier 30%"],
      aging: "6 mois sur lies fines",
      production: "12 000 bouteilles",
    },
    conservation: {
      temperature: "12-14°C",
      duration: "3-5 ans",
      conditions: "Cave tempérée, bouteilles couchées, éviter les variations de température",
    },
    foodPairing: {
      appetizers: ["Foie gras", "Escargots", "Charcuterie fine"],
      mainCourses: ["Poissons en sauce", "Volaille fermière", "Plats épicés"],
      cheeses: ["Roquefort", "Bleu des Causses", "Fromages à pâte persillée"],
    },
    servingAdvice: {
      temperature: "10-12°C",
      glassware: "Verre à vin blanc de Bourgogne",
      timing: "Ouvrir 30 minutes avant dégustation",
    },
    composition: {
      terroir: "Coteaux argilo-calcaires exposés sud-ouest",
      harvest: "Vendanges manuelles, maturité optimale",
      vinification: "Pressurage doux, fermentation contrôlée à 16°C",
      philosophy: "Révéler l'authenticité des cépages gaillacois",
    },
    awards: ["Guide Hachette 2024 - 1 étoile"],
    image: "/wine-blanc-minerale.png",
    inStock: true,
    featured: false,
  },
  {
    id: "cuvee-prestige-2019",
    name: "Cuvée Prestige",
    collection: "methode",
    type: "rouge",
    vintage: 2019,
    price: 65,
    description:
      "Notre cuvée d'exception, assemblage minutieux de nos plus belles parcelles, élevée 18 mois en fûts neufs.",
    longDescription:
      "La Cuvée Prestige 2019 représente l'aboutissement de notre art. Sélectionnée uniquement lors des millésimes exceptionnels, cette cuvée provient de nos parcelles centenaires situées sur les meilleurs coteaux. L'assemblage minutieux de Syrah, Mourvèdre et Grenache, suivi d'un élevage de 18 mois en fûts de chêne français neufs, donne naissance à un vin d'une complexité et d'une élégance rares.",
    tastingNotes: {
      appearance: "Robe pourpre intense, presque noire",
      nose: "Bouquet complexe de fruits noirs, épices, cacao et notes torréfiées",
      palate: "Puissance et élégance, tanins nobles, arômes de cassis, truffe et vanille",
      finish: "Finale exceptionnellement longue et raffinée",
    },
    technicalInfo: {
      alcohol: "15%",
      grapes: ["Syrah 50%", "Mourvèdre 30%", "Grenache 20%"],
      aging: "18 mois en fûts de chêne français neufs",
      production: "3 000 bouteilles",
    },
    conservation: {
      temperature: "14-16°C",
      duration: "5-8 ans",
      conditions: "Cave fraîche et sombre, bouteilles couchées",
    },
    foodPairing: {
      appetizers: ["Charcuterie du terroir", "Pâtés de campagne", "Fromages affinés"],
      mainCourses: ["Cassoulet", "Confit de canard", "Gibier", "Viandes grillées"],
      cheeses: ["Roquefort", "Cantal", "Fromages du terroir"],
    },
    servingAdvice: {
      temperature: "16-18°C",
      decanting: "Carafage recommandé 1h avant service",
      glassware: "Verre à vin rouge de Bordeaux",
      timing: "Optimal après 2-3 ans de garde",
    },
    composition: {
      terroir: "Sols argilo-calcaires et grès, exposition sud",
      harvest: "Vendanges manuelles, tri parcellaire",
      vinification: "Macération longue 21 jours, pigeage traditionnel",
      philosophy: "Exprimer la typicité des cépages gaillacois anciens",
    },
    awards: ["95/100 - Robert Parker", "Médaille d'Or - Concours Mondial de Bruxelles 2022"],
    image: "/wine-cuvee-prestige.png",
    inStock: true,
    featured: true,
  },
  {
    id: "effervescent-methode-2020",
    name: "Effervescent Méthode",
    collection: "methode",
    type: "effervescent",
    vintage: 2020,
    price: 42,
    description: "Un effervescent élaboré selon la méthode traditionnelle, aux bulles fines et persistantes.",
    longDescription:
      "Notre Effervescent Méthode 2020 est élaboré selon la méthode traditionnelle champenoise. Après une première fermentation en cuve, le vin subit une seconde fermentation en bouteille, suivie d'un vieillissement sur lies de 24 mois minimum. Cette méthode ancestrale confère à notre effervescent sa finesse de bulles et sa complexité aromatique exceptionnelle.",
    tastingNotes: {
      appearance: "Robe dorée aux reflets cuivrés, bulles fines et persistantes",
      nose: "Arômes de fruits blancs, brioche et notes de miel",
      palate: "Mousse crémeuse, fraîcheur vive, saveurs de poire et d'amande",
      finish: "Finale élégante et rafraîchissante",
    },
    technicalInfo: {
      alcohol: "12.5%",
      grapes: ["Chardonnay 60%", "Pinot Noir 40%"],
      aging: "24 mois sur lies en bouteille",
      production: "8 000 bouteilles",
    },
    conservation: {
      temperature: "10-12°C",
      duration: "2-3 ans",
      conditions: "Cave fraîche, à l'abri de la lumière, bouteilles couchées",
    },
    foodPairing: {
      appetizers: ["Huîtres", "Saumon fumé", "Tartines de chèvre frais"],
      mainCourses: ["Poissons grillés", "Volaille aux herbes", "Cuisine asiatique"],
      cheeses: ["Rocamadour", "Crottin de Chavignol", "Fromages de chèvre frais"],
      desserts: ["Tarte aux fruits", "Sorbets", "Pâtisseries légères"],
    },
    servingAdvice: {
      temperature: "8-10°C",
      glassware: "Flûte à champagne ou verre à vin blanc",
      timing: "À consommer dans l'année, idéal en apéritif",
    },
    composition: {
      terroir: "Sols argilo-calcaires des coteaux gaillacois",
      harvest: "Vendanges manuelles en septembre, tri sélectif",
      vinification: "Méthode ancestrale, fermentation naturelle en bouteille",
      philosophy: "Respecter la tradition gaillacoise du perlé naturel",
    },
    awards: ["Médaille d'Or - Concours des Effervescents 2023"],
    image: "/wine-effervescent-methode.png",
    inStock: true,
    featured: false,
  },
  {
    id: "rose-gourmand-2023",
    name: "Rosé Gourmand",
    collection: "fruitees",
    type: "rose",
    vintage: 2023,
    price: 18,
    description: "Un rosé expressif et gourmand, aux arômes de fruits rouges frais et de fleurs de garrigue.",
    longDescription:
      "Le Rosé Gourmand 2023 capture toute la fraîcheur et l'exubérance de notre terroir méditerranéen. Élaboré par saignée à partir de nos plus beaux Grenache et Cinsault, ce rosé révèle des arômes intenses de fruits rouges et de fleurs sauvages. Sa vinification à basse température préserve tous les arômes primaires du fruit.",
    tastingNotes: {
      appearance: "Robe rose saumon aux reflets brillants",
      nose: "Explosion de fruits rouges frais, fraise, framboise et notes florales",
      palate: "Attaque fraîche, belle vivacité, saveurs de fruits rouges et d'épices douces",
      finish: "Finale croquante et désaltérante",
    },
    technicalInfo: {
      alcohol: "13%",
      grapes: ["Grenache 70%", "Cinsault 30%"],
      aging: "3 mois en cuve inox",
      production: "20 000 bouteilles",
    },
    conservation: {
      temperature: "10-12°C",
      duration: "1-2 ans",
      conditions: "À consommer jeune, cave fraîche",
    },
    foodPairing: {
      appetizers: ["Salade de chèvre chaud", "Tapenade", "Crudités"],
      mainCourses: ["Grillades", "Poissons", "Cuisine méditerranéenne"],
      cheeses: ["Fromages frais", "Mozzarella", "Feta"],
    },
    servingAdvice: {
      temperature: "8-10°C",
      glassware: "Verre à vin blanc ou rosé",
      timing: "Idéal en apéritif ou repas estival",
    },
    composition: {
      terroir: "Coteaux bien exposés, sols drainants",
      harvest: "Vendanges matinales pour préserver la fraîcheur",
      vinification: "Pressurage direct, fermentation à basse température",
      philosophy: "Capturer la fraîcheur et l'élégance du fruit",
    },
    awards: [],
    image: "/wine-rose-gourmand.png",
    inStock: true,
    featured: true,
  },
  {
    id: "rouge-fruité-2022",
    name: "Rouge Fruité",
    collection: "fruitees",
    type: "rouge",
    vintage: 2022,
    price: 22,
    description: "Un rouge jeune et dynamique, aux tanins souples et aux arômes de fruits noirs éclatants.",
    longDescription:
      "Le Rouge Fruité 2022 incarne la modernité de notre approche viticole. Issu de jeunes vignes de Merlot et Cabernet Sauvignon, ce vin privilégie l'expression du fruit et la souplesse. Une macération courte et un élevage minimal en cuve permettent de conserver toute la fraîcheur et l'intensité aromatique des raisins.",
    tastingNotes: {
      appearance: "Robe rouge rubis éclatante",
      nose: "Arômes intenses de fruits noirs, mûre, cassis et notes épicées",
      palate: "Bouche ronde et fruitée, tanins souples, belle concentration",
      finish: "Finale gourmande sur les fruits noirs",
    },
    technicalInfo: {
      alcohol: "13.5%",
      grapes: ["Merlot 60%", "Cabernet Sauvignon 40%"],
      aging: "6 mois en cuve inox",
      production: "18 000 bouteilles",
    },
    conservation: {
      temperature: "12-14°C",
      duration: "3-5 ans",
      conditions: "Cave fraîche, potentiel de garde exceptionnel pour un rosé",
    },
    foodPairing: {
      appetizers: ["Tartare de thon", "Carpaccio de Saint-Jacques", "Caviar d'aubergine"],
      mainCourses: ["Bouillabaisse", "Agneau aux herbes", "Cuisine fusion"],
      cheeses: ["Fromages de brebis", "Pélardon", "Picodon"],
    },
    servingAdvice: {
      temperature: "10-12°C",
      decanting: "Aération recommandée 30 minutes",
      glassware: "Verre à vin rouge pour révéler la complexité",
      timing: "Rosé de gastronomie, parfait pour les grandes occasions",
    },
    composition: {
      terroir: "Parcelles d'exception sur schistes et calcaires",
      harvest: "Vendanges manuelles, sélection parcellaire stricte",
      vinification: "Macération pelliculaire courte, élevage sur lies",
      philosophy: "Créer un rosé de garde aux arômes complexes",
    },
    awards: ["95/100 - Revue du Vin de France", "Coup de Cœur - Guide Bettane & Desseauve"],
    image: "/wine-rouge-fruité.png",
    inStock: true,
    featured: false,
  },
  {
    id: "perle-blanc-2023",
    name: "Perlé Blanc",
    collection: "domeni",
    type: "blanc",
    vintage: 2023,
    price: 16,
    description:
      "Un blanc perlé traditionnel gaillacois, légèrement effervescent, aux arômes de pomme verte et de fleurs blanches.",
    longDescription:
      "Le Perlé Blanc 2023 perpétue la tradition millénaire du vignoble gaillacois. Élaboré exclusivement à partir de Mauzac, cépage emblématique de l'appellation, ce vin révèle une effervescence naturelle obtenue par la méthode ancestrale. Sa fraîcheur et sa légèreté en font le compagnon idéal des moments de convivialité.",
    tastingNotes: {
      appearance: "Robe jaune pâle aux reflets dorés, fine effervescence naturelle",
      nose: "Arômes délicats de pomme verte, poire, fleurs blanches et notes miellées",
      palate: "Bouche fraîche et vive, bulles fines, saveurs fruitées et minérales",
      finish: "Finale désaltérante aux notes d'agrumes",
    },
    technicalInfo: {
      alcohol: "11.5%",
      grapes: ["Mauzac 100%"],
      aging: "Méthode ancestrale, 4 mois sur lies",
      production: "25 000 bouteilles",
    },
    conservation: {
      temperature: "10-12°C",
      duration: "2-3 ans",
      conditions: "Cave fraîche, à l'abri de la lumière, bouteilles couchées",
    },
    foodPairing: {
      appetizers: ["Huîtres", "Saumon fumé", "Tartines de chèvre frais"],
      mainCourses: ["Poissons grillés", "Volaille aux herbes", "Cuisine asiatique"],
      cheeses: ["Rocamadour", "Crottin de Chavignol", "Fromages de chèvre frais"],
      desserts: ["Tarte aux fruits", "Sorbets", "Pâtisseries légères"],
    },
    servingAdvice: {
      temperature: "8-10°C",
      glassware: "Flûte à champagne ou verre à vin blanc",
      timing: "À consommer dans l'année, idéal en apéritif",
    },
    composition: {
      terroir: "Sols argilo-calcaires des coteaux gaillacois",
      harvest: "Vendanges manuelles en septembre, tri sélectif",
      vinification: "Méthode ancestrale, fermentation naturelle en bouteille",
      philosophy: "Respecter la tradition gaillacoise du perlé naturel",
    },
    awards: ["Médaille d'Argent - Concours Général Agricole 2024"],
    image: "/wine-perle-blanc.png",
    inStock: true,
    featured: true,
  },
  {
    id: "tradition-blanc-2022",
    name: "Tradition Blanc",
    collection: "domeni",
    type: "blanc",
    vintage: 2022,
    price: 18,
    description:
      "Un blanc sec traditionnel alliant Mauzac et Loin de l'Œil, expression authentique du terroir gaillacois.",
    longDescription:
      "Le Tradition Blanc 2022 célèbre l'authenticité des cépages gaillacois. L'assemblage harmonieux de Mauzac et Loin de l'Œil, cépages autochtones de l'appellation, révèle toute la typicité de notre terroir. Ce vin incarne parfaitement notre philosophie : 'Un bon vin, c'est avant tout celui qu'on aime'.",
    tastingNotes: {
      appearance: "Robe jaune dorée aux reflets brillants",
      nose: "Bouquet expressif de fruits blancs, acacia, miel et notes minérales",
      palate: "Attaque franche, belle rondeur, équilibre parfait entre fraîcheur et richesse",
      finish: "Finale persistante aux arômes de fruits secs et d'épices douces",
    },
    technicalInfo: {
      alcohol: "12.5%",
      grapes: ["Mauzac 60%", "Loin de l'Œil 40%"],
      aging: "8 mois en cuve inox avec bâtonnage",
      production: "20 000 bouteilles",
    },
    conservation: {
      temperature: "12-14°C",
      duration: "3-5 ans",
      conditions: "Cave tempérée, bouteilles couchées, éviter les variations de température",
    },
    foodPairing: {
      appetizers: ["Foie gras", "Escargots", "Charcuterie fine"],
      mainCourses: ["Poissons en sauce", "Volaille fermière", "Plats épicés"],
      cheeses: ["Roquefort", "Bleu des Causses", "Fromages à pâte persillée"],
    },
    servingAdvice: {
      temperature: "10-12°C",
      glassware: "Verre à vin blanc de Bourgogne",
      timing: "Ouvrir 30 minutes avant dégustation",
    },
    composition: {
      terroir: "Coteaux argilo-calcaires exposés sud-ouest",
      harvest: "Vendanges manuelles, maturité optimale",
      vinification: "Pressurage doux, fermentation contrôlée à 16°C",
      philosophy: "Révéler l'authenticité des cépages gaillacois",
    },
    awards: ["Guide Hachette 2024 - 1 étoile"],
    image: "/wine-tradition-blanc.png",
    inStock: true,
    featured: false,
  },
  {
    id: "tradition-rouge-2021",
    name: "Tradition Rouge",
    collection: "domeni",
    type: "rouge",
    vintage: 2021,
    price: 20,
    description: "Un rouge généreux assemblant Duras et Braucol, cépages emblématiques du vignoble gaillacois.",
    longDescription:
      "Le Tradition Rouge 2021 puise sa force dans l'assemblage de deux cépages autochtones exceptionnels : le Duras et le Braucol. Ces variétés anciennes, parfaitement adaptées à notre terroir, donnent naissance à un vin de caractère qui exprime toute la générosité de notre philosophie familiale.",
    tastingNotes: {
      appearance: "Robe rouge profond aux reflets violacés",
      nose: "Arômes complexes de fruits noirs, épices, garrigue et notes animales subtiles",
      palate: "Structure tannique noble, belle concentration, saveurs de mûre et poivre",
      finish: "Finale longue et épicée, caractéristique du Braucol",
    },
    technicalInfo: {
      alcohol: "13.5%",
      grapes: ["Duras 60%", "Braucol 40%"],
      aging: "12 mois en fûts de chêne français",
      production: "18 000 bouteilles",
    },
    conservation: {
      temperature: "14-16°C",
      duration: "5-8 ans",
      conditions: "Cave fraîche et sombre, bouteilles couchées",
    },
    foodPairing: {
      appetizers: ["Charcuterie du terroir", "Pâtés de campagne", "Fromages affinés"],
      mainCourses: ["Cassoulet", "Confit de canard", "Gibier", "Viandes grillées"],
      cheeses: ["Roquefort", "Cantal", "Fromages du terroir"],
    },
    servingAdvice: {
      temperature: "16-18°C",
      decanting: "Carafage recommandé 1h avant service",
      glassware: "Verre à vin rouge de Bordeaux",
      timing: "Optimal après 2-3 ans de garde",
    },
    composition: {
      terroir: "Sols argilo-calcaires et grès, exposition sud",
      harvest: "Vendanges manuelles, tri parcellaire",
      vinification: "Macération longue 21 jours, pigeage traditionnel",
      philosophy: "Exprimer la typicité des cépages gaillacois anciens",
    },
    awards: ["Médaille d'Or - Concours des Vins de Gaillac 2023"],
    image: "/wine-tradition-rouge.png",
    inStock: true,
    featured: true,
  },
  {
    id: "tradition-rose-2023",
    name: "Tradition Rosé",
    collection: "domeni",
    type: "rose",
    vintage: 2023,
    price: 17,
    description: "Un rosé délicat issu de Duras et Syrah, alliant fraîcheur gaillacoise et élégance méditerranéenne.",
    longDescription:
      "Le Tradition Rosé 2023 marie harmonieusement la typicité gaillacoise du Duras à l'élégance de la Syrah. Cette cuvée exprime notre savoir-faire dans l'art délicat de l'élaboration des rosés, privilégiant la finesse et la fraîcheur pour créer un vin de plaisir immédiat.",
    tastingNotes: {
      appearance: "Robe rose pâle aux reflets saumon",
      nose: "Bouquet délicat de fruits rouges, pêche blanche et notes florales",
      palate: "Attaque fraîche, belle vivacité, saveurs de fraise et d'agrumes",
      finish: "Finale croquante et rafraîchissante",
    },
    technicalInfo: {
      alcohol: "12.5%",
      grapes: ["Duras 70%", "Syrah 30%"],
      aging: "4 mois en cuve inox",
      production: "15 000 bouteilles",
    },
    conservation: {
      temperature: "10-12°C",
      duration: "1-2 ans",
      conditions: "À consommer jeune, cave fraîche",
    },
    foodPairing: {
      appetizers: ["Salade de chèvre chaud", "Tapenade", "Crudités"],
      mainCourses: ["Grillades", "Poissons", "Cuisine méditerranéenne"],
      cheeses: ["Fromages frais", "Mozzarella", "Feta"],
    },
    servingAdvice: {
      temperature: "8-10°C",
      glassware: "Verre à vin blanc ou rosé",
      timing: "Idéal en apéritif ou repas estival",
    },
    composition: {
      terroir: "Coteaux bien exposés, sols drainants",
      harvest: "Vendanges matinales pour préserver la fraîcheur",
      vinification: "Pressurage direct, fermentation à basse température",
      philosophy: "Capturer la fraîcheur et l'élégance du fruit",
    },
    awards: [],
    image: "/wine-tradition-rose.png",
    inStock: true,
    featured: false,
  },
  {
    id: "petrichor-rose-2023",
    name: "Petrichor Rosé",
    collection: "confidentielle",
    type: "rose",
    vintage: 2023,
    price: 32,
    description: "Un rosé d'exception aux arômes complexes, évoquant l'odeur de la terre après la pluie.",
    longDescription:
      "Petrichor Rosé 2023 tire son nom de cette odeur si particulière de la terre après la pluie. Cette cuvée confidentielle, élaborée à partir de nos plus belles parcelles de Grenache et Mourvèdre, capture l'essence même de notre terroir dans un rosé d'une complexité rare et d'une élégance absolue.",
    tastingNotes: {
      appearance: "Robe rose cuivré aux reflets dorés",
      nose: "Arômes complexes de fruits rouges confits, épices douces, garrigue et minéralité",
      palate: "Bouche ample et structurée, belle tension, saveurs de fruits rouges et d'herbes sauvages",
      finish: "Finale longue et saline, évoquant la terre mouillée",
    },
    technicalInfo: {
      alcohol: "14%",
      grapes: ["Grenache 60%", "Mourvèdre 40%"],
      aging: "6 mois en fûts de chêne français",
      production: "5 000 bouteilles",
    },
    conservation: {
      temperature: "12-14°C",
      duration: "3-5 ans",
      conditions: "Cave fraîche, potentiel de garde exceptionnel pour un rosé",
    },
    foodPairing: {
      appetizers: ["Tartare de thon", "Carpaccio de Saint-Jacques", "Caviar d'aubergine"],
      mainCourses: ["Bouillabaisse", "Agneau aux herbes", "Cuisine fusion"],
      cheeses: ["Fromages de brebis", "Pélardon", "Picodon"],
    },
    servingAdvice: {
      temperature: "10-12°C",
      decanting: "Aération recommandée 30 minutes",
      glassware: "Verre à vin rouge pour révéler la complexité",
      timing: "Rosé de gastronomie, parfait pour les grandes occasions",
    },
    composition: {
      terroir: "Parcelles d'exception sur schistes et calcaires",
      harvest: "Vendanges manuelles, sélection parcellaire stricte",
      vinification: "Macération pelliculaire courte, élevage sur lies",
      philosophy: "Créer un rosé de garde aux arômes complexes",
    },
    awards: ["95/100 - Revue du Vin de France", "Coup de Cœur - Guide Bettane & Desseauve"],
    image: "/wine-petrichor-rose.png",
    inStock: true,
    featured: true,
  },
  {
    id: "petrichor-rouge-2020",
    name: "Petrichor Rouge",
    collection: "confidentielle",
    type: "rouge",
    vintage: 2020,
    price: 45,
    description:
      "Un rouge d'exception, cuvée confidentielle révélant toute la complexité de notre terroir d'exception.",
    longDescription:
      "Petrichor Rouge 2020 représente l'aboutissement de notre quête d'excellence. Cette cuvée confidentielle, produite uniquement lors des millésimes exceptionnels, révèle la quintessence de notre terroir. L'assemblage minutieux et l'élevage prolongé donnent naissance à un vin d'une profondeur et d'une complexité remarquables.",
    tastingNotes: {
      appearance: "Robe pourpre intense, presque noire",
      nose: "Bouquet complexe de fruits noirs, truffe, cacao, épices nobles et minéralité",
      palate: "Puissance et finesse, tanins soyeux, concentration exceptionnelle",
      finish: "Finale interminable aux notes de réglisse et de pierre mouillée",
    },
    technicalInfo: {
      alcohol: "15%",
      grapes: ["Syrah 50%", "Mourvèdre 30%", "Grenache 20%"],
      aging: "18 mois en fûts neufs, puis 12 mois en bouteille",
      production: "2 500 bouteilles",
    },
    conservation: {
      temperature: "14-16°C",
      duration: "10-15 ans",
      conditions: "Cave de vieillissement, potentiel de garde exceptionnel",
    },
    foodPairing: {
      appetizers: ["Foie gras poêlé", "Truffe noire", "Charcuterie d'exception"],
      mainCourses: ["Gibier noble", "Bœuf de Aubrac", "Plats en sauce"],
      cheeses: ["Roquefort AOP", "Fromages d'exception", "Plateau de fromages affinés"],
    },
    servingAdvice: {
      temperature: "18-20°C",
      decanting: "Carafage obligatoire 2h avant service",
      glassware: "Verre à vin rouge de Bourgogne grand cru",
      timing: "Vin de garde, optimal après 5 ans",
    },
    composition: {
      terroir: "Parcelles centenaires sur terroir d'exception",
      harvest: "Vendanges manuelles, tri grain par grain",
      vinification: "Macération longue 28 jours, élevage en fûts neufs",
      philosophy: "Révéler l'âme profonde de notre terroir d'exception",
    },
    awards: ["97/100 - Robert Parker", "Médaille d'Or - Concours Mondial de Bruxelles"],
    image: "/wine-petrichor-rouge.png",
    inStock: true,
    featured: true,
  },
]

export function getWinesByCollection(collection: string) {
  return wines.filter((wine) => wine.collection === collection)
}

export function getFeaturedWines() {
  return wines.filter((wine) => wine.featured)
}

export function getWineBySlug(slug: string) {
  return wines.find((wine) => wine.id === slug)
}

export function getWinesByType(type: string) {
  return wines.filter((wine) => wine.type === type)
}

export function getAllCollections() {
  return ["classique", "methode", "fruitees", "poussin", "domeni", "confidentielle", "opus"]
}
