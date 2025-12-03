import type { LanguagePageContent } from '../types';

export const content: LanguagePageContent = {
  languageCode: 'ko',
  uiLanguage: 'fr',

  research: [
    {
      statistic: 'Nombre total de locuteurs',
      value: '82 millions',
      source: 'Ethnologue (2024)',
      sourceUrl: 'https://www.berlitz.com/blog/most-spoken-languages-world',
      year: '2024'
    },
    {
      statistic: 'Locuteurs natifs',
      value: '81 millions',
      source: 'Ethnologue 27e édition',
      sourceUrl: 'https://www.ethnologue.com/language/kor/',
      year: '2024'
    },
    {
      statistic: 'Pays avec statut officiel',
      value: '2 pays + 1 région autonome',
      source: 'Wikipedia - Korean Language',
      sourceUrl: 'https://en.wikipedia.org/wiki/Korean_language',
      year: '2024'
    },
    {
      statistic: 'Pénétration d\'Internet en Corée du Sud',
      value: '97,2%',
      source: 'DataReportal',
      sourceUrl: 'https://datareportal.com/reports/digital-2024-south-korea',
      year: '2024'
    },
    {
      statistic: 'Valeur du marché d\'apprentissage',
      value: '7,2 milliards $ (2024)',
      source: 'GM Insights',
      sourceUrl: 'https://www.gminsights.com/industry-analysis/korean-language-learning-market',
      year: '2024'
    },
    {
      statistic: 'Croissance du marché projetée',
      value: '67 milliards $ d\'ici 2034',
      source: 'GM Insights',
      sourceUrl: 'https://www.gminsights.com/industry-analysis/korean-language-learning-market',
      year: '2034'
    },
    {
      statistic: 'Taux de possession de smartphone',
      value: '94,8%',
      source: 'Statista',
      sourceUrl: 'https://www.statista.com/statistics/777726/south-korea-smartphone-ownership/',
      year: '2023'
    },
    {
      statistic: 'Fans de Hallyu (Vague coréenne)',
      value: '225 millions dans 119 pays',
      sourceUrl: 'https://www.wesleyanbusinessreview.com/issue-x-the-macroeconomy/blog-post-title-three-kh6nb',
      source: 'Wesleyan Business Review',
      year: '2024'
    },
    {
      statistic: 'Impact économique K-pop (export)',
      value: '14,16 milliards $',
      source: 'Hallyu Tourism Report',
      sourceUrl: 'https://www.lemonlab.pro/k-culture-hallyu-tourism-statistics-and-trend-report-2024/',
      year: '2024'
    },
    {
      statistic: 'Taux d\'alphabétisation',
      value: 'Plus de 97%',
      source: 'UNESCO',
      sourceUrl: 'https://sayart.net/news/view/1065642900049951',
      year: '2024'
    }
  ],

  sections: [
    {
      id: 'a-propos-langue-coreenne',
      heading: 'À propos de la langue coréenne',
      level: 2,
      content: `
        <h3>Qu'est-ce que le coréen ?</h3>
        <p>Le coréen est parlé par 82 millions de personnes dans le monde. C'est comme remplir tous les sièges du Madison Square Garden 4 100 fois. Plutôt massif, non ?</p>
        <p>Voici la partie cool : le coréen est unique. Il n'appartient vraiment à aucune grande famille linguistique. Les linguistes se disputent sur ses origines. Certains disent qu'il pourrait être lié au japonais. D'autres pensent qu'il est connecté aux langues mongole ou turque. Mais honnêtement ? Le coréen se tient seul. C'est comme cet enfant à l'école qui ne rentre dans aucune clique mais qui est quand même super populaire.</p>
        <p>Environ 48 millions de personnes vivent en Corée du Sud. 24 millions de plus en Corée du Nord. Ensuite, vous avez 2 millions de locuteurs en Chine, 1 million aux États-Unis et 500 000 au Japon. Les Coréens se sont répandus à travers le monde. Vous trouverez des communautés coréennes au Canada, en Australie, au Brésil et au-delà.</p>
        <p>Le coréen est la langue officielle de deux pays : la Corée du Sud et la Corée du Nord. C'est aussi officiel dans la préfecture autonome coréenne de Yanbian en Chine, aux côtés du mandarin. Même langue, gouvernements différents. Bien que la Corée du Nord et la Corée du Sud utilisent maintenant des vocabulaires légèrement différents. Comme l'anglais britannique et l'anglais américain qui ont des mots différents pour les mêmes choses.</p>

        <h3>Système d'écriture coréen (Hangul)</h3>
        <p>Maintenant, c'est là que le coréen devient vraiment intéressant. Le système d'écriture, appelé Hangul, est brillant. Sérieusement. Les experts l'appellent l'alphabet le plus scientifique du monde.</p>
        <p>Le roi Sejong le Grand a créé le Hangul en 1443. Avant cela, les Coréens utilisaient des caractères chinois. Mais les caractères chinois sont difficiles. Ils prennent des années à apprendre. Le roi Sejong voulait que son peuple puisse lire et écrire. Alors il a conçu un nouvel alphabet à partir de zéro. Imaginez un roi qui pense : « Vous savez quoi ? Mon peuple a besoin d'une meilleure technologie. » C'est essentiellement ce qui s'est passé.</p>
        <p>Le Hangul a 24 lettres de base : 14 consonnes et 10 voyelles. Mais voici la partie géniale : les formes des consonnes sont basées sur les organes de la parole humaine. La lettre pour « g/k » ressemble à l'arrière de votre langue touchant votre gorge. La lettre pour « n » montre votre langue touchant le palais de votre bouche. C'est comme un manuel d'instructions pour votre bouche.</p>
        <p>Les voyelles utilisent un système philosophique. Un point représente le ciel. Une ligne horizontale représente la terre. Une ligne verticale représente l'humanité. Combinez ces éléments, et vous obtenez tous les sons de voyelles. La philosophie ancienne rencontre le design pratique.</p>
        <p>Les lettres se combinent en blocs syllabiques. Au lieu d'écrire « han-gul » en ligne, vous empilez les lettres en deux carrés : 한글. Chaque bloc est une syllabe. Votre œil traite des syllabes entières à la fois. La lecture devient plus rapide. C'est comme lire des morceaux au lieu de lettres individuelles.</p>
        <p>Le résultat ? La Corée du Sud a plus de 97% d'alphabétisation. L'un des taux les plus élevés au monde. Le Hangul est si efficace qu'il a été adopté pour écrire d'autres langues. Certaines communautés autochtones en Indonésie et aux Philippines utilisent maintenant le Hangul pour préserver leurs langues parlées. L'UNESCO a reconnu l'importance du Hangul en ajoutant le document Hunminjeongeum (le manuel Hangul original) au registre Mémoire du monde en 1997.</p>
      `,
      wordCount: 250
    },

    {
      id: 'pourquoi-clavier-coreen-en-ligne',
      heading: 'Pourquoi utiliser un clavier coréen en ligne ?',
      level: 2,
      content: `
        <h3>Cas d'utilisation courants</h3>
        <p>Soyons réalistes. Quand avez-vous vraiment besoin de taper en coréen ?</p>
        <p>Peut-être que vous apprenez le coréen. Les K-dramas vous ont accroché. Ou la K-pop. BTS, BLACKPINK, Stray Kids. Vous voulez lire du contenu de fans, commenter des vidéos YouTube ou discuter avec des fans coréens. Le marché de l'apprentissage du coréen a atteint 7,2 milliards de dollars en 2024. Il devrait atteindre 67 milliards de dollars d'ici 2034. C'est une croissance explosive. Les gens du monde entier apprennent le coréen à des taux records.</p>
        <p>Peut-être planifiez-vous un voyage à Séoul. La Corée est ultra-numérique. Genre, 97,2% de pénétration Internet. Près de 95% de possession de smartphone. Tout se passe en ligne. Vous devez réserver des hôtels, réserver des restaurants, acheter des billets de concert K-pop. De nombreux sites Web coréens ne fonctionnent correctement que lorsque vous tapez en coréen. Bien sûr, Google Translate existe. Mais taper directement en coréen rend tout plus fluide.</p>
        <p>Ou peut-être faites-vous des affaires. La Corée du Sud est la 10e économie mondiale. Samsung, Hyundai, LG, SK Group. Des entreprises majeures. Si vous travaillez dans la technologie, l'automobile ou le divertissement, vous traitez probablement avec des partenaires coréens. Les emails professionnels en coréen montrent du respect. Créent de la confiance. Font aboutir les affaires.</p>
        <p>Les réseaux sociaux sont énormes. 225 millions de fans de Hallyu existent dans 119 pays. C'est la Vague coréenne. Ces fans consomment du contenu coréen quotidiennement. Instagram, Twitter, TikTok, et surtout les plateformes coréennes comme KakaoTalk. Si vous voulez vous engager avec les communautés coréanophones, vous devez taper en coréen.</p>
        <p>La recherche académique compte aussi. La Corée publie des tonnes d'articles scientifiques, de documents historiques et d'études culturelles. Certaines informations n'existent qu'en coréen. Si vous recherchez l'histoire, la technologie ou la culture coréenne, vous devrez rechercher dans des bases de données coréennes et lire des sources coréennes.</p>

        <h3>Avantages par rapport aux claviers physiques</h3>
        <p>Pourquoi utiliser un clavier virtuel au lieu d'acheter des autocollants de clavier coréen ou un clavier physique coréen ?</p>
        <p>Premièrement : accès instantané. Pas de shopping. Pas d'expédition. Pas d'attente. Ouvrez simplement votre navigateur et commencez à taper. Fonctionne sur n'importe quel appareil. Votre ordinateur portable, bureau, tablette ou téléphone. Même l'ordinateur de votre ami quand vous voyagez.</p>
        <p>Deuxièmement : c'est gratuit. Les claviers physiques coréens coûtent de 40 à 100 $. Les autocollants de clavier coûtent de 5 à 15 $. Plus l'expédition depuis la Corée prend des semaines. Pourquoi dépenser de l'argent quand vous pouvez taper gratuitement maintenant ?</p>
        <p>Troisièmement : apprentissage visuel. Quand vous débutez, vous devez voir les caractères Hangul. Les claviers physiques montrent les lettres coréennes, bien sûr. Mais les claviers en ligne offrent plus. Beaucoup montrent la romanisation en dessous. Vous aident à apprendre la prononciation. Vous guident vers les bonnes lettres. C'est comme des roues d'entraînement pour votre cerveau.</p>
        <p>Quatrièmement : pas d'encombrement. Les autocollants de clavier ont l'air désordonnés. Ils se décollent avec le temps. Laissent des résidus collants. Donnent à votre MacBook coûteux l'air d'un projet scolaire. Les claviers en ligne gardent votre clavier physique impeccable. Basculez vers le coréen uniquement quand vous en avez besoin. Revenez au français instantanément.</p>
        <p>Cinquièmement : parfait pour une utilisation occasionnelle. Peut-être que vous ne tapez en coréen qu'une fois par semaine. Pour regarder des émissions de variétés coréennes. Commander des produits de soin coréens. Vérifier les actualités K-pop. Pourquoi dédier un clavier physique à quelque chose que vous utilisez occasionnellement ? Les claviers en ligne apparaissent quand nécessaire. Disparaissent quand ils ne le sont pas. Zéro engagement.</p>
      `,
      wordCount: 300
    },

    {
      id: 'comment-taper-coreen',
      heading: 'Comment taper en coréen comme un pro',
      level: 2,
      content: `
        <h3>Conseils pour débutants</h3>
        <p>Vous commencez la saisie en coréen ? Voici ce qui fonctionne.</p>
        <p>Apprenez d'abord le Hangul. Ne sautez pas cette étape. Vous ne pouvez pas taper ce que vous ne pouvez pas lire. Passez une semaine à apprendre les 24 lettres. C'est plus facile que vous ne le pensez. La plupart des gens maîtrisent le Hangul en 2 à 4 heures. Sérieusement. Le roi Sejong l'a conçu de cette façon. Utilisez des tutoriels YouTube. Téléchargez un tableau Hangul. Pratiquez l'écriture de chaque lettre dix fois.</p>
        <p>Commencez par des mots courants. « Bonjour » (안녕하세요), « Merci » (감사합니다), « Je t'aime » (사랑해요). Ces phrases utilisent différentes combinaisons de lettres. Pratiquez-les jusqu'à ce que vos doigts se souviennent des motifs. La mémoire musculaire est réelle.</p>
        <p>Utilisez initialement le clavier visuel. Cliquez sur les lettres avec votre souris. Regardez comment les blocs syllabiques se forment. La saisie en coréen fonctionne différemment de l'anglais. En français, les lettres apparaissent de gauche à droite. En coréen, les lettres se combinent en blocs. Tapez ㅎ, puis ㅏ, puis ㄴ. Ils fusionnent en 한. Votre cerveau doit voir ce processus. Donnez-lui du temps.</p>
        <p>Ne vous précipitez pas. La vitesse vient plus tard. La précision vient d'abord. Le coréen a des consonnes doubles. ㄱ contre ㄲ. ㅂ contre ㅃ. Sons différents. Significations différentes. Une lettre incorrecte change tout. « 밥 » (bap) signifie riz. « 밮 » n'existe pas. Faites attention aux détails.</p>

        <h3>Techniques avancées</h3>
        <p>Prêt à taper plus vite ? C'est l'heure de passer au niveau supérieur.</p>
        <p>Apprenez la correspondance QWERTY. Les claviers coréens suivent une disposition standard. Les consonnes se regroupent à gauche et au milieu. Les voyelles se regroupent à droite. Ce n'est pas aléatoire. Les lettres les plus courantes se trouvent sous vos doigts les plus forts. Apprenez où chaque lettre se trouve sur un clavier QWERTY. Votre vitesse de frappe en français se transférera.</p>
        <p>Maîtrisez la touche Maj. Le coréen a des consonnes tendues : ㄲ, ㄸ, ㅃ, ㅆ, ㅉ. Elles nécessitent la touche Maj. Maj + ㄱ vous donne ㄲ. Maj + ㅂ vous donne ㅃ. Même position, intensité différente. Pratiquez-les jusqu'à ce qu'elles soient naturelles.</p>
        <p>Apprenez les voyelles composées. Voyelles de base : ㅏ, ㅓ, ㅗ, ㅜ. Voyelles composées : ㅐ, ㅔ, ㅚ, ㅟ. Vous créez des voyelles composées en combinant des traits de base. Sur un clavier, ce sont des touches séparées. Mais comprendre la logique vous aide à vous souvenir des positions. C'est comme des accords sur un piano.</p>
        <p>Utilisez les fonctionnalités de saisie automatique. Le coréen a des espaces entre les mots, contrairement au chinois ou au japonais. Mais les mots composés existent. « Ordinateur » est 컴퓨터 (keompyuteo). « Smartphone » est 스마트폰 (seumatepon). De nombreux systèmes de saisie offrent la saisie automatique. Acceptez les suggestions. Gagnez du temps. Apprenez les mots composés courants.</p>

        <h3>Erreurs courantes à éviter</h3>
        <p>Ne confondez pas les lettres similaires. Le coréen a des sosies. ㅇ contre ㅎ. Les deux circulaires. Sons différents. ㅁ contre ㅂ. Formes similaires. Consonnes différentes. Faites attention aux petits détails. Ces différences comptent.</p>
        <p>N'oubliez pas les consonnes finales. Les blocs syllabiques coréens peuvent se terminer par des consonnes. 한 a ㄴ à la fin. 밥 a ㅂ à la fin. Les francophones oublient souvent celles-ci. Ils tapent 하 au lieu de 한. Syllabes incomplètes. Mauvaise signification. Complétez toujours le bloc syllabique.</p>
        <p>Ne mélangez pas le coréen et le français au hasard. Le coréen utilise des emprunts au français et à l'anglais. Mais ils sont écrits en Hangul. « Café » devient 커피 (keopi). « Bus » devient 버스 (beoseu). Ne tapez pas « J'aime 커피. » Choisissez une langue pour chaque phrase. L'alternance de code confond les lecteurs.</p>
        <p>N'ignorez pas les règles d'espacement. Le coréen utilise des espaces entre les mots. Mais les règles d'espacement diffèrent du français. Les particules s'attachent directement aux mots. Pas d'espace avant 은, 는, 이, 가. « 나는 » est correct. « 나 는 » est faux. Apprenez les règles d'espacement de base. Rend votre écriture professionnelle.</p>
      `,
      wordCount: 300
    },

    {
      id: 'faits-statistiques-coreen',
      heading: 'Faits et statistiques sur la langue coréenne',
      level: 2,
      content: `
        <p>Plongeons dans les chiffres. Données réelles de sources crédibles.</p>
        <p>Le coréen compte 82 millions de locuteurs au total. Cela inclut 81 millions de locuteurs natifs et environ 1 million de locuteurs de langue seconde. La plupart des locuteurs vivent sur la péninsule coréenne : 48 millions en Corée du Sud, 24 millions en Corée du Nord. Mais la diaspora coréenne s'étend sur le globe. La Chine accueille 2 millions de locuteurs coréens. Les États-Unis en ont 1 million. Le Japon en a 500 000. Vous trouverez des communautés coréennes au Canada, en Australie, au Brésil, en Russie et en Asie centrale.</p>
        <p>Le coréen est officiel dans deux pays : la Corée du Sud et la Corée du Nord. Il est également co-officiel dans la préfecture autonome coréenne de Yanbian en Chine, aux côtés du mandarin. C'est tout. Seulement deux territoires et demi. Comparez cela à l'espagnol (20+ pays) ou à l'arabe (25+ pays). La concentration géographique du coréen est inhabituelle pour une langue avec 82 millions de locuteurs.</p>
        <p>La Corée du Sud est une puissance numérique. La pénétration d'Internet a atteint 97,2% en 2024. Presque tout le monde est en ligne. La possession de smartphone a atteint 94,8% en 2023. Le pays affiche des vitesses Internet de 136,4 Mbps sur les connexions mobiles. C'est ultra rapide. Les Coréens passent beaucoup de temps en ligne. Environ 18,6% utilisent Internet plus de 35 heures par semaine. La vie numérique est la vraie vie en Corée.</p>
        <p>La Vague coréenne (Hallyu) a explosé mondialement. En 2024, 225 millions de fans de Hallyu existent dans 119 pays. Il y a 1 748 clubs de fans Hallyu dans le monde. Environ 68% se concentrent sur la K-pop. L'impact économique ? Massif. Les exportations Hallyu ont rapporté 14,16 milliards de dollars en 2024. BTS seul attire 800 000 touristes en Corée du Sud chaque année, générant 3,9 milliards de dollars pour l'économie.</p>
        <p>Le marché de l'apprentissage du coréen est en plein essor. Il a atteint 7,2 milliards de dollars en 2024. Croissance projetée ? 67 milliards de dollars d'ici 2034. C'est une croissance annuelle de 25,1%. Pourquoi ? K-pop. K-dramas. Films coréens. L'influence culturelle stimule l'apprentissage des langues. Les gens veulent comprendre les paroles. Regarder des émissions sans sous-titres. Se connecter directement à la culture coréenne.</p>
        <p>La conception du Hangul contribue au taux d'alphabétisation élevé de la Corée. Plus de 97% des Sud-Coréens peuvent lire et écrire. L'UNESCO reconnaît l'importance du Hangul. L'organisation a établi le Prix d'alphabétisation du roi Sejong, décerné chaque année aux groupes promouvant l'alphabétisation dans le monde. Le Jour du Hangul (9 octobre) célèbre la création de l'alphabet. C'est un jour férié national en Corée du Sud.</p>
      `,
      wordCount: 200
    },

    {
      id: 'faq',
      heading: 'Questions fréquemment posées',
      level: 2,
      content: `
        <h3>Puis-je taper en coréen sur mon clavier ordinaire ?</h3>
        <p>Oui, mais vous devez activer le coréen dans les paramètres de votre système. Windows, Mac, Linux, iOS et Android prennent tous en charge la saisie en coréen. Mais vos touches physiques n'afficheront pas les caractères Hangul. Vous devrez mémoriser la disposition ou utiliser des autocollants de clavier. Un clavier en ligne vous montre exactement où se trouve chaque lettre. Beaucoup plus facile pour les débutants et les utilisateurs occasionnels.</p>

        <h3>Dois-je installer quelque chose ?</h3>
        <p>Non. Zéro installation. Notre clavier coréen en ligne fonctionne entièrement dans votre navigateur. Fonctionne sur Chrome, Firefox, Safari, Edge. Ordinateur de bureau ou mobile. Visitez simplement la page et commencez à taper. Pas de téléchargements. Pas de permissions. Pas de mises à jour logicielles. Votre texte s'enregistre automatiquement dans votre navigateur. Revenez plus tard et il est toujours là.</p>

        <h3>Puis-je copier le texte coréen ?</h3>
        <p>Absolument. Tapez votre texte coréen, cliquez sur le bouton de copie et collez n'importe où. Email, réseaux sociaux, documents, messages, recherches Google. Le texte est du vrai Unicode coréen. Fonctionne partout où le texte coréen est pris en charge. Ce qui est essentiellement partout en 2024. Vous pouvez même le coller dans Microsoft Word, Google Docs ou des logiciels de design comme Photoshop.</p>

        <h3>Comment rechercher sur Google en coréen ?</h3>
        <p>Tapez votre requête de recherche en coréen dans notre clavier. Ensuite, cliquez sur le bouton Google. Nous enverrons votre recherche à Google. Vous verrez des résultats de recherche en coréen. Pareil pour YouTube, Naver (le plus grand moteur de recherche de Corée) et d'autres plateformes. Recherchez le Web coréen sans changer de clavier. Trouvez des recettes coréennes, des actualités K-pop, des tutoriels coréens et plus encore.</p>
      `,
      wordCount: 100
    }
  ],

  internalLinks: [
    {
      text: 'clavier japonais',
      href: '/clavier-japonais/',
      context: 'same_region'
    },
    {
      text: 'clavier chinois (Taiwan)',
      href: '/clavier-chinois-taiwan/',
      context: 'same_region'
    },
    {
      text: 'clavier thaï',
      href: '/clavier-thai/',
      context: 'same_region'
    }
  ],

  totalWords: 1150,
  lastUpdated: '2024-12-02'
};

export default content;
