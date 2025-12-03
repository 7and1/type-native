import type { LanguagePageContent } from '../types';

export const content: LanguagePageContent = {
  languageCode: 'ja',
  uiLanguage: 'fr',

  research: [
    {
      statistic: 'Nombre total de locuteurs',
      value: '125 millions',
      source: 'Ethnologue & World Data',
      sourceUrl: 'https://www.worlddata.info/languages/japanese.php',
      year: '2024'
    },
    {
      statistic: 'Locuteurs natifs',
      value: '123 millions',
      source: 'Babbel Language Statistics',
      sourceUrl: 'https://www.babbel.com/en/magazine/the-10-most-spoken-languages-in-the-world',
      year: '2024'
    },
    {
      statistic: 'Pays avec statut officiel',
      value: '1 (Japon) + Angaur, Palau',
      source: 'Wikipedia - Langue japonaise',
      sourceUrl: 'https://en.wikipedia.org/wiki/Japanese_language',
      year: '2024'
    },
    {
      statistic: 'Pénétration Internet au Japon',
      value: '84,9% (104,4 millions d\'utilisateurs)',
      source: 'DataReportal Digital 2024',
      sourceUrl: 'https://datareportal.com/reports/digital-2024-japan',
      year: '2024'
    },
    {
      statistic: 'Utilisateurs des réseaux sociaux au Japon',
      value: '96 millions (78,1% de la population)',
      source: 'DataReportal Digital 2024',
      sourceUrl: 'https://datareportal.com/reports/digital-2024-japan',
      year: '2024'
    },
    {
      statistic: 'Candidats au test JLPT dans le monde',
      value: '788 000+ par an',
      source: 'Statistiques officielles JLPT',
      sourceUrl: 'https://www.jlpt.jp/e/statistics/archive/202402.html',
      year: '2024'
    },
    {
      statistic: 'Croissance Instagram au Japon',
      value: '+21,3% (+9,8 millions d\'utilisateurs)',
      source: 'DataReportal Japon 2024',
      sourceUrl: 'https://datareportal.com/reports/digital-2024-japan',
      year: '2023-2024'
    },
    {
      statistic: 'Kanji enseignés dans les écoles',
      value: '2 136 jōyō kanji',
      source: 'Wikipedia - Écriture japonaise',
      sourceUrl: 'https://en.wikipedia.org/wiki/Japanese_writing_system',
      year: '2024'
    },
    {
      statistic: 'Taille du marché mondial de l\'anime',
      value: '34,3 milliards $',
      source: 'Recherche sur le marché de l\'anime',
      sourceUrl: 'https://akjapanimports.com/2024/05/15/anime-and-manga-the-global-influence-of-japanese-pop-culture/',
      year: '2024'
    },
    {
      statistic: 'Téléspectateurs Gen Z d\'anime dans le monde',
      value: '69% (contre 57% millennials)',
      source: 'Campaign Asia Analysis',
      sourceUrl: 'https://www.campaignasia.com/article/brands-court-gen-z-with-anime-as-popularity-surges/491930',
      year: '2024'
    }
  ],

  sections: [
    {
      id: 'a-propos-langue-japonaise',
      heading: 'À propos de la langue japonaise',
      level: 2,
      content: `
        <h3>Qu'est-ce que le japonais ?</h3>
        <p>Le japonais est parlé par environ 125 millions de personnes. Presque toutes vivent au Japon. C'est ce qui rend le japonais unique. C'est la langue majeure la plus géographiquement concentrée sur Terre.</p>
        <p>Imaginez : si vous rassembliez tous les locuteurs japonais en un seul endroit, ils tiendraient à l'intérieur du Japon. Aucune autre langue majeure ne fonctionne ainsi. Les locuteurs espagnols vivent dans plus de 20 pays. Les locuteurs anglais couvrent le monde. Mais le japonais ? Concentration de près de 100% dans un seul pays insulaire.</p>
        <p>Le japonais se classe autour de la 9e à la 13e place parmi les langues mondiales par nombre total de locuteurs. Pas mal pour une langue coincée sur une île, non ?</p>
        <p>Voici quelque chose de cool : le japonais n'a aucune relation prouvée avec d'autres langues. Les linguistes ne peuvent pas se mettre d'accord sur son arbre généalogique. Le coréen partage certaines similitudes. Mais ils ne sont probablement pas liés. Le japonais est seul. C'est une île linguistique à plus d'un titre.</p>
        <p>Le Japon n'a techniquement pas de langue officielle. Fou, non ? Mais le japonais est la langue nationale de facto. Tout le monde la parle. Toutes les affaires gouvernementales l'utilisent. Les écoles l'enseignent. C'est officiel sans être officiellement officiel.</p>
        <p>Une petite exception : l'île d'Angaur à Palau liste le japonais comme langue officielle. Vestige de l'époque où le Japon gouvernait Palau. Bien que pratiquement personne n'y parle japonais maintenant.</p>

        <h3>Le système d'écriture japonais : trois écritures entrent dans un bar...</h3>
        <p>Attachez votre ceinture. Le japonais utilise trois systèmes d'écriture complètement différents en même temps. Hiragana. Katakana. Kanji. Tous mélangés dans la même phrase. C'est comme écrire le français avec des lettres grecques et des caractères chinois simultanément.</p>
        <p>Hiragana a 46 caractères de base. Ce sont des symboles courbés et fluides. Les enfants japonais apprennent d'abord l'hiragana. Il est utilisé pour les mots japonais natifs et les particules grammaticales. Considérez-le comme l'écriture de base.</p>
        <p>Katakana a aussi 46 caractères de base. Ce sont des symboles angulaires et nets. Mêmes sons que l'hiragana, formes différentes. Le katakana écrit les mots étrangers, l'emphase et les termes techniques. Comme « ordinateur » (コンピュータ) ou « café » (コーヒー).</p>
        <p>Ensuite, il y a les Kanji. Oh là là. Les Kanji sont des caractères chinois adoptés en japonais il y a plus de 1 500 ans. Caractères Kanji totaux ? Plus de 50 000 existent. Ne paniquez pas. Les écoles japonaises enseignent 2 136 Kanji essentiels. Maîtrisez-les et vous pourrez lire les journaux et les livres.</p>
        <p>Voici la partie folle : environ 2 000 Kanji représentent plus de 95% des caractères dans le texte écrit réel. Donc vous n'avez pas besoin de tous les 50 000. Juste les courants.</p>
        <p>Pourquoi trois systèmes ? Accident historique. Le japonais existait comme langue parlée sans écriture. Puis les érudits japonais ont découvert les caractères chinois. Ils ont emprunté les Kanji pour le sens. Mais les Kanji ne pouvaient pas exprimer la grammaire japonaise. Alors ils ont inventé l'Hiragana à partir de Kanji simplifiés. Plus tard, ils ont créé le Katakana pour les mots étrangers affluant au Japon.</p>
        <p>Maintenant, le japonais mélange les trois dans chaque phrase. « Je suis allé chez McDonald's hier » pourrait utiliser des Kanji pour « je » et « allé », l'Hiragana pour les particules grammaticales et le Katakana pour « McDonald's ». Cela fait du japonais l'un des systèmes d'écriture les plus complexes activement utilisés aujourd'hui.</p>
      `,
      wordCount: 250
    },

    {
      id: 'pourquoi-clavier-japonais-en-ligne',
      heading: 'Pourquoi utiliser un clavier japonais en ligne ?',
      level: 2,
      content: `
        <h3>Cas d'utilisation courants</h3>
        <p>Soyons réalistes. Quand avez-vous vraiment besoin de taper en japonais ?</p>
        <p>Peut-être que vous apprenez le japonais. Votre manuel montre l'Hiragana et le Katakana. Vous devez pratiquer leur écriture. Les devoirs nécessitent de taper des réponses en japonais. Un clavier en ligne vous montre où se trouve chaque caractère. Cliquez et apprenez. Pas de devinettes.</p>
        <p>Ou vous êtes obsédé par les animes et les mangas. Vous voulez lire le Twitter japonais. Suivre des artistes japonais sur Instagram. Commenter en japonais sur des vidéos YouTube. Rechercher sur Reddit japonais. Un clavier en ligne rend cela instantané. Aucune configuration requise.</p>
        <p>Peut-être planifiez-vous un voyage à Tokyo, Osaka ou Kyoto. Vous devez réserver des hôtels avec des sites Web japonais. Envoyer des emails aux guides touristiques japonais. Écrire des messages aux hôtes Airbnb. Montrer du respect en utilisant leur langue. Crée la confiance rapidement.</p>
        <p>Les affaires sont aussi énormes. Le Japon est la troisième plus grande économie du monde. Vous négociez avec des fournisseurs japonais. Vous communiquez avec des collègues du bureau de Tokyo. Vous traduisez des descriptions de produits. Le japonais professionnel montre que vous êtes sérieux.</p>
        <p>Les réseaux sociaux au Japon sont massifs. 96 millions d'utilisateurs de réseaux sociaux. Instagram a augmenté de 21,3% en un an. La messagerie LINE atteint 83,4% des internautes. Si vous voulez engager un public japonais, vous devez écrire en japonais. L'anglais ne suffira pas.</p>
        <p>Le test JLPT est une autre grande raison. C'est le test de compétence en langue japonaise. 788 000 personnes le passent chaque année. Étudier nécessite de taper en japonais. Pratiquer l'écriture nécessite une saisie japonaise. Les claviers en ligne vous aident à vous préparer sans acheter d'équipement spécial.</p>

        <h3>Avantages par rapport aux claviers physiques</h3>
        <p>Pourquoi choisir le virtuel plutôt que les claviers physiques japonais ?</p>
        <p>Premièrement : accès instantané. Pas de téléchargements. Pas d'installations. Pas de mises à jour de pilotes. Pas de problèmes de compatibilité. Ouvrez votre navigateur. Commencez à taper. Fonctionne sur Windows, Mac, Linux, Chromebook. Fonctionne même sur tablettes et téléphones. N'importe quel appareil, n'importe où.</p>
        <p>Deuxièmement : c'est complètement gratuit. Les claviers physiques japonais coûtent 40-60 $. Les autocollants de clavier coûtent 10-15 $. Plus le temps d'expédition. Plus les frais de douane potentiels. Pourquoi dépenser de l'argent quand vous pouvez taper gratuitement maintenant ?</p>
        <p>Troisièmement : apprentissage visuel. Vous voyez exactement quelle touche produit quel caractère. Hiragana clairement étiqueté. Katakana affiché. Kanji courants affichés. Votre cerveau apprend par association visuelle. Beaucoup plus rapide que mémoriser des positions de touches invisibles.</p>
        <p>Quatrièmement : pas d'encombrement physique. Les autocollants japonais sur les claviers ont l'air désordonné. Ils se décollent après des mois. Laissent des résidus collants. Donnent à votre clavier un aspect peu professionnel. Les claviers en ligne gardent votre clavier physique propre et normal.</p>
        <p>Cinquièmement : flexibilité pour les apprenants. Vous n'êtes pas encore fluide. Vous n'avez besoin du japonais qu'occasionnellement. Peut-être une fois par semaine pour les cours. Peut-être deux fois par mois pour des projets de loisirs. Pourquoi dédier de l'espace de clavier physique à quelque chose que vous utilisez rarement ? Les claviers en ligne apparaissent quand nécessaire. Disparaissent quand ils ne le sont pas.</p>
        <p>Sixièmement : plusieurs méthodes de saisie. Les claviers en ligne prennent souvent en charge plusieurs systèmes de saisie. Saisie Romaji (taper « ka » produit か). Sélection directe de kana. Suggestions de conversion Kanji. Les claviers physiques vous bloquent dans une méthode. Les claviers en ligne vous donnent des options.</p>
      `,
      wordCount: 300
    },

    {
      id: 'comment-taper-japonais',
      heading: 'Comment taper en japonais comme un pro',
      level: 2,
      content: `
        <h3>Conseils pour débutants</h3>
        <p>Commencez simplement. Apprenez d'abord l'Hiragana. Les 46 caractères. Ne vous précipitez pas. Prenez une semaine. Pratiquez cinq caractères par jour. Au jour 10, vous les connaîtrez tous.</p>
        <p>Utilisez beaucoup le clavier visuel au début. Cliquez sur chaque caractère Hiragana. Regardez-le apparaître. Vos yeux connectent la forme au son. Cette mémoire visuelle colle mieux que la mémorisation abstraite.</p>
        <p>Pratiquez les mots courants. « Bonjour » (こんにちは), « Merci » (ありがとう), « Au revoir » (さようなら). Ceux-ci utilisent différentes combinaisons d'Hiragana. Tapez-les à plusieurs reprises. Vos doigts apprennent les motifs.</p>
        <p>Ne vous inquiétez pas encore des Kanji. Sérieusement. L'Hiragana peut écrire n'importe quoi en japonais. Les Kanji rendent la lecture plus rapide et plus claire. Mais les débutants peuvent survivre avec l'Hiragana seul. Maîtrisez d'abord l'Hiragana. Ajoutez les Kanji plus tard.</p>
        <p>Utilisez la saisie Romaji si votre clavier la prend en charge. Tapez « ko-n-ni-chi-wa » et cela se convertit en こんにちは. Cela fait le pont entre le français et le japonais. Vous n'avez pas besoin de mémoriser immédiatement les positions des touches japonaises. Votre vitesse de frappe en français se transfère.</p>

        <h3>Techniques avancées</h3>
        <p>Prêt à passer au niveau supérieur ? C'est l'heure de la vitesse.</p>
        <p>Apprenez la disposition du clavier japonais. Elle est basée sur AZERTY mais différente. La rangée あ (a) se trouve là où AZERTY a des chiffres. La rangée か (ka) correspond à peu près à QSDFG. Pratiquez jusqu'à ce que vos doigts mémorisent les positions. Cela débloque une vraie vitesse de frappe.</p>
        <p>Maîtrisez la conversion Kanji. Tapez d'abord en Hiragana. Ensuite, appuyez sur la barre d'espacement. Un menu affiche les options Kanji. Pour « かんじ » (kanji), vous verrez 漢字 (caractères chinois), 感じ (sentiment), 幹事 (organisateur). Choisissez le bon. C'est ainsi que les Japonais natifs tapent. Apprenez-le.</p>
        <p>Utilisez le texte prédictif. Les systèmes de saisie japonais modernes prédisent ce que vous tapez. Tapez « おはよ » et il suggère « おはようございます » (bonjour). Acceptez les suggestions avec Entrée ou Tab. Cela triple votre vitesse.</p>
        <p>Apprenez les raccourcis katakana. De nombreux claviers en ligne vous permettent de taper du katakana en maintenant Maj tout en tapant en romaji. Ou en appuyant sur un bouton de mode katakana. Maîtrisez ceci pour les mots étrangers. Le café devient コーヒー instantanément.</p>
        <p>Pratiquez la saisie des particules. Le japonais utilise beaucoup de particules grammaticales. は (wa), が (ga), を (wo), に (ni), で (de), と (to). Celles-ci apparaissent dans chaque phrase. Faites-en une mémoire musculaire. Votre frappe coule naturellement.</p>

        <h3>Erreurs courantes à éviter</h3>
        <p>Ne tapez pas trop vite au début. Le japonais a des caractères qui se ressemblent. あ (a) et お (o) se ressemblent. め (me) et ぬ (nu) confondent les débutants. Ralentissez. La précision bat la vitesse à chaque fois. Un mauvais caractère change complètement le sens.</p>
        <p>N'ignorez pas les petits caractères. ゃ (ya), ゅ (yu), ょ (yo) sont des versions plus petites. Ils se combinent avec d'autres caractères. きゃ (kya), しゅ (shu), ちょ (cho). Manquer le petit caractère casse le mot. « しょうがつ » (Nouvel An) devient absurde si vous tapez « しようがつ ».</p>
        <p>Ne mélangez pas les écritures au hasard. Le japonais mélange les écritures, oui. Mais il y a des règles. Les mots natifs utilisent l'Hiragana ou le Kanji. Les mots étrangers utilisent le Katakana. N'écrivez pas « café » en Hiragana. N'écrivez pas « sakura » en Katakana (sauf si vous êtes styliste). Suivez les conventions.</p>
        <p>Ne sautez pas la pratique de conversion Kanji. Les débutants tapent souvent tout en Hiragana pour éviter les Kanji. Cela crée un texte illisible. Les lecteurs japonais natifs s'attendent à des Kanji. Pratiquez la conversion de l'Hiragana en Kanji. Commencez avec des Kanji courants. Construisez progressivement.</p>
        <p>N'oubliez pas la ponctuation. Le japonais utilise des signes de ponctuation différents. 。 est un point. 、 est une virgule. 「」 sont des guillemets. 〜 prolonge les sons. Apprenez-les. La ponctuation française dans le texte japonais a l'air amateur.</p>
      `,
      wordCount: 300
    },

    {
      id: 'faits-statistiques-japonais',
      heading: 'Faits et statistiques sur la langue japonaise',
      level: 2,
      content: `
        <p>Plongeons dans les vrais chiffres. Données de sources crédibles.</p>
        <p>Le japonais compte 125 millions de locuteurs au total. Environ 123 millions sont des locuteurs natifs. C'est une concentration native de 98,4%. Comparez cela à l'anglais (seulement 25% de locuteurs natifs). Le japonais est massivement une première langue, pas une seconde langue.</p>
        <p>La pénétration Internet du Japon a atteint 84,9% en 2024. C'est 104,4 millions d'internautes. Presque tout le monde en ligne. Cela fait du Japon l'une des sociétés les plus connectées sur Terre.</p>
        <p>Les réseaux sociaux au Japon explosent. 96 millions d'utilisateurs de réseaux sociaux en janvier 2024. C'est 78,1% de la population entière. Instagram a augmenté de 21,3% d'une année sur l'autre. A ajouté 9,8 millions d'utilisateurs en 12 mois. TikTok a bondi de 25,9%, ajoutant 5,4 millions d'utilisateurs.</p>
        <p>Le test JLPT a eu 788 000 candidats en 2022. Ce nombre continue de croître. Le test se déroule dans 85 pays dans le monde. L'inscription a atteint des sommets historiques en 2024. Pourquoi ? L'anime et le manga. L'apprentissage mondial du japonais explose.</p>
        <p>En parlant d'anime : le marché mondial de l'anime a atteint 34,3 milliards de dollars en 2024. Prévu pour atteindre 60,3 milliards de dollars d'ici 2030. C'est une croissance massive. Plus de 800 millions de personnes dans le monde regardent du contenu anime. La Gen Z mène avec 69% de visionnage, contre 57% pour les millennials.</p>
        <p>L'anime stimule l'apprentissage des langues. 86% des apprenants de japonais sur Duolingo ont moins de 30 ans. Et 70% ont entre 13 et 22 ans. Ce sont des fans d'anime et de manga qui veulent comprendre le contenu dans sa langue d'origine. L'influence de la culture pop représente 63% de la motivation des nouveaux apprenants.</p>
        <p>L'écriture japonaise est complexe mais gérable. Les écoles enseignent 2 136 jōyō kanji. Maîtrisez-les et vous pourrez lire 95% du texte publié. Le pool total de kanji dépasse 50 000 caractères. Mais vous n'avez pas besoin de la plupart d'entre eux. Concentrez-vous sur les 2 000 essentiels.</p>
        <p>Le Japon se classe comme la troisième plus grande économie du monde. Le marché du commerce électronique seul a atteint 186,9 milliards de dollars. Cela crée une énorme demande de communication commerciale japonaise. Les entreprises du monde entier ont besoin d'employés parlant japonais.</p>
      `,
      wordCount: 200
    },

    {
      id: 'faq',
      heading: 'Questions fréquemment posées',
      level: 2,
      content: `
        <h3>Puis-je taper en japonais sur mon clavier ordinaire ?</h3>
        <p>Oui, mais cela nécessite une configuration. Windows, Mac et Linux prennent tous en charge la saisie japonaise. Vous l'activez dans les paramètres de langue du système. Le problème est que vos touches physiques affichent toujours des lettres françaises. Vous ne verrez pas les caractères Hiragana ou Katakana. Vous taperez à l'aveugle ou devrez mémoriser les positions. Un clavier en ligne vous montre exactement où se trouve chaque caractère. Beaucoup plus facile pour les débutants et les utilisateurs occasionnels.</p>

        <h3>Dois-je installer quelque chose ?</h3>
        <p>Non. Zéro installation requise. Notre clavier japonais en ligne fonctionne entièrement dans votre navigateur Web. Fonctionne sur Chrome, Firefox, Safari, Edge. Ordinateur de bureau ou mobile. Visitez simplement la page et commencez à taper. Votre texte s'enregistre automatiquement dans votre navigateur. Revenez plus tard et il est toujours là. Pas de comptes. Pas de téléchargements. Pas de tracas.</p>

        <h3>Comment taper des caractères Kanji ?</h3>
        <p>Tapez d'abord en Hiragana. Ensuite, appuyez sur la barre d'espacement. Un menu de conversion apparaît montrant les options Kanji. Sélectionnez le bon Kanji avec votre souris ou les touches fléchées. Appuyez sur Entrée pour confirmer. Cela reflète la façon dont les Japonais natifs tapent. Commencez avec des Kanji courants. Le système se souvient de vos choix et devient plus intelligent avec le temps.</p>

        <h3>Puis-je copier le texte japonais que je tape ?</h3>
        <p>Absolument. Tapez votre texte, puis cliquez sur le bouton de copie. Collez où vous avez besoin. Email, réseaux sociaux, documents, applications de chat, moteurs de recherche. Le texte est du vrai Unicode japonais. Fonctionne partout où le texte japonais est pris en charge. Ce qui est essentiellement partout en 2024. Fonctionne même sur différents systèmes d'exploitation de manière transparente.</p>

        <h3>Ce clavier est-il bon pour apprendre le japonais ?</h3>
        <p>Oui, surtout pour les débutants. Vous voyez chaque caractère visuellement. Cliquez et apprenez les positions. Pratiquez l'Hiragana et le Katakana sans mémoriser les dispositions. Parfait pour les devoirs, la pratique des cartes flash et les exercices d'écriture. Combiné avec des applications d'apprentissage des langues comme Duolingo, cela accélère considérablement votre courbe d'apprentissage.</p>
      `,
      wordCount: 100
    }
  ],

  internalLinks: [
    {
      text: 'clavier coréen',
      href: '/clavier-coreen/',
      context: 'same_region'
    },
    {
      text: 'clavier chinois',
      href: '/chinese-taiwan-keyboard/',
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
