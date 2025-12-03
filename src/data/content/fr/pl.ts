import type { LanguagePageContent } from '../types';

export const content: LanguagePageContent = {
  languageCode: 'pl',
  uiLanguage: 'fr',

  research: [
    {
      statistic: 'Nombre total de locuteurs',
      value: '50-55 millions',
      source: 'Ethnologue (2024)',
      sourceUrl: 'https://www.ethnologue.com/language/pol/',
      year: '2024'
    },
    {
      statistic: 'Locuteurs natifs en Pologne',
      value: '38-40 millions',
      source: 'Office central polonais de statistique',
      sourceUrl: 'https://stat.gov.pl/en/',
      year: '2024'
    },
    {
      statistic: 'Diaspora polonaise',
      value: '10-15 millions',
      source: 'Ministère polonais des Affaires étrangères',
      sourceUrl: 'https://www.gov.pl/web/diplomacy/polish-community-abroad',
      year: '2023'
    },
    {
      statistic: 'Statut de langue officielle',
      value: 'Pologne, Union européenne',
      source: 'Politique linguistique de l\'UE',
      sourceUrl: 'https://europa.eu/european-union/about-eu/countries/eu-member-countries/poland_en',
      year: '2024'
    },
    {
      statistic: 'Utilisateurs Internet en Pologne',
      value: '30,8 millions (86% de pénétration)',
      source: 'DataReportal',
      sourceUrl: 'https://datareportal.com/reports/digital-2024-poland',
      year: '2024'
    },
    {
      statistic: 'Contenu polonais en ligne',
      value: 'Top 20 des langues sur Internet',
      source: 'W3Techs',
      sourceUrl: 'https://w3techs.com/technologies/overview/content_language',
      year: '2024'
    },
    {
      statistic: 'Apprenants du polonais dans le monde',
      value: 'Croissance de 8% par an',
      source: 'Institut polonais de la culture',
      sourceUrl: 'https://instytutpolski.pl/',
      year: '2023'
    },
    {
      statistic: 'Classement économique dans l\'UE',
      value: '6e plus grande économie',
      source: 'Eurostat',
      sourceUrl: 'https://ec.europa.eu/eurostat',
      year: '2024'
    },
    {
      statistic: 'Prix Nobel de littérature',
      value: '5 écrivains polonais',
      source: 'Organisation du Prix Nobel',
      sourceUrl: 'https://www.nobelprize.org/prizes/literature/',
      year: '2024'
    },
    {
      statistic: 'Entreprises technologiques polonaises',
      value: '15 milliards d\'euros de valeur du secteur tech',
      source: 'Agence polonaise pour le développement des entreprises',
      sourceUrl: 'https://www.parp.gov.pl/',
      year: '2023'
    }
  ],

  sections: [
    {
      id: 'a-propos-langue-polonaise',
      heading: 'À propos de la langue polonaise',
      level: 2,
      content: `
        <h3>Qu'est-ce que le polonais ?</h3>
        <p>Le polonais est incroyable. Imaginez : 55 millions de personnes parlent polonais dans le monde. C'est plus que toute la population de l'Espagne ou du Canada. Époustouflant, non ?</p>
        <p>Le polonais appartient à la famille des langues slaves occidentales. C'est un cousin du tchèque, du slovaque et du sorabe. La langue a évolué pendant plus de 1 500 ans à partir du vieux polonais, se développant à travers le Moyen Âge, survivant aux partages de la Pologne, et prospérant aujourd'hui. Le peuple polonais a gardé sa langue en vie même quand leur pays a disparu des cartes pendant 123 ans. C'est de la résilience linguistique.</p>
        <p>Voici la partie fascinante : le polonais est la langue officielle de la Pologne, évidemment. Mais c'est aussi l'une des 24 langues officielles de l'Union européenne. De plus, des millions le parlent dans les communautés de la diaspora mondiale. Les plus grandes communautés polonaises en dehors de la Pologne sont aux États-Unis (9-10 millions), au Royaume-Uni (2-3 millions), en Allemagne (2-3 millions), au Canada (1 million), et au Brésil (1,5 million). C'est une portée mondiale.</p>
        <p>Le polonais se classe parmi les 25 langues les plus parlées au monde. C'est la langue slave occidentale la plus parlée et la deuxième langue slave la plus parlée après le russe. Pensez-y. Plus de locuteurs que le tchèque, le slovaque et le sorabe combinés. C'est une domination linguistique en Europe centrale.</p>

        <h3>Le système d'écriture polonais</h3>
        <p>Maintenant parlons de l'alphabet polonais. Le polonais utilise l'alphabet latin avec neuf lettres spéciales avec diacritiques : ą, ę, ć, ń, ó, ś, ź, ż. Plus trois digrammes : cz, sz, rz. Ces caractères uniques donnent au polonais des sons qui n'existent pas en français.</p>
        <p>L'alphabet polonais compte 32 lettres au total. Pas 26 comme le français. Des lettres supplémentaires signifient des sons supplémentaires. Le polonais capture les voyelles nasales (ą, ę) et des combinaisons de consonnes spéciales que le français ne peut même pas produire. La lettre "ż" sonne comme le "s" dans "plaisir". La lettre "cz" sonne comme "tch" dans "tchao". La lettre "sz" sonne comme "ch" dans "chat". Ces sons précis rendent le polonais incroyablement expressif.</p>
        <p>Voici ce qui rend le polonais spécial : ses complexes amas de consonnes. Des mots comme "szczęście" (bonheur) ont quatre consonnes d'affilée. "Bezwzględny" (impitoyable) a cinq consonnes d'affilée. "Chrząszcz" (coléoptère) a "chrząszcz" - essayez de dire ça cinq fois rapidement ! Ces combinaisons peuvent sembler impossibles, mais elles suivent des règles logiques.</p>
        <p>La prononciation polonaise est étonnamment cohérente. Une fois que vous apprenez les règles, vous pouvez prononcer correctement n'importe quel mot. Contrairement au français avec ses exceptions sans fin. Les lettres polonaises sonnent presque toujours de la même manière. "A" sonne toujours comme "ah" dans "papa". "O" sonne toujours comme "o" dans "eau". C'est de l'efficacité linguistique.</p>
        <p>Le polonais a un genre grammatical riche avec des formes masculines, féminines et neutres. Plus des systèmes de cas complexes avec sept cas. Ça semble compliqué, mais cela permet une précision et une flexibilité incroyables dans l'expression. Vous pouvez dire la même chose de plusieurs manières différentes selon le contexte et la nuance.</p>
      `,
      wordCount: 280
    },

    {
      id: 'pourquoi-clavier-polonais-en-ligne',
      heading: 'Pourquoi utiliser un clavier polonais en ligne ?',
      level: 2,
      content: `
        <h3>Cas d'utilisation courants</h3>
        <p>Soyons pratiques. Quand avez-vous réellement besoin de taper en polonais ?</p>
        <p>Peut-être que vous apprenez le polonais. Duolingo, Babbel ou des manuels traditionnels. Vous devez pratiquer l'écriture de mots polonais avec des diacritiques appropriés. Terminer des devoirs. Discuter avec des partenaires d'échange linguistique. Un clavier en ligne est mieux que d'acheter un clavier physique polonais que vous utiliserez deux fois par semaine. Surtout quand vous avez besoin de ces caractères spéciaux comme ą, ę, et ł.</p>
        <p>Peut-être voyagez-vous à Varsovie, Cracovie, Gdańsk ou Wrocław. Vous réservez des billets de train sur PKP Intercity. Vous recherchez des restaurants sur des sites web polonais. Vous envoyez des messages aux hôtes Airbnb. Votre clavier français devient soudainement inutile quand vous avez besoin de taper "Dziękuję" (merci) ou "Przepraszam" (excusez-moi). Problème résolu avec un clavier virtuel polonais.</p>
        <p>Ou peut-être dirigez-vous une entreprise. La Pologne a la 6e plus grande économie de l'Union européenne. C'est massif. Vous envoyez des emails à des clients polonais, rédigez des propositions ou gérez des équipes à distance. La communication professionnelle en polonais crée de la confiance. Montre que vous respectez leur langue et leur culture. Surtout important puisque la Pologne est un centre majeur pour l'informatique, la fabrication et les services aux entreprises.</p>
        <p>Les réseaux sociaux sont un autre cas d'utilisation massif. Facebook est énorme en Pologne avec plus de 15 millions d'utilisateurs. Instagram et TikTok aussi. Vous voulez engager des publics polonais ? Vous avez besoin de texte polonais avec des diacritiques corrects. Les internautes polonais apprécient quand les étrangers prennent le temps d'écrire correctement avec tous les caractères spéciaux.</p>
        <p>La recherche compte aussi. Le polonais contient un contenu scientifique, technique et historique incroyable. Les articles originaux de Marie Curie. Les œuvres de Nicolas Copernic. La recherche contemporaine en mathématiques, informatique et ingénierie. Les universités polonaises produisent une recherche de pointe. Une grande partie de ces connaissances est mieux accessible en polonais. Vous voulez y accéder ? Apprenez à taper avec les diacritiques polonais.</p>

        <h3>Avantages par rapport aux claviers physiques</h3>
        <p>Pourquoi virtuel au lieu de physique ? Plusieurs raisons.</p>
        <p>Premièrement : accès instantané aux caractères spéciaux. Les claviers polonais ont ces lettres supplémentaires (ą, ę, ć, ń, ó, ś, ź, ż) que les claviers français n'ont pas. Les claviers physiques polonais coûtent 40-70 €. Les autocollants de clavier pour le polonais coûtent 15-20 €. Ils se décollent, s'usent et laissent des résidus collants. Les claviers polonais virtuels vous donnent chaque caractère instantanément. Zéro friction.</p>
        <p>Deuxièmement : apprentissage visuel des diacritiques. Vous voyez exactement quelle touche produit quelle lettre polonaise. Votre cerveau établit des connexions plus rapidement. Où est "ą" ? Comment taper "ż" ? Le clavier visuel vous le montre. Les claviers physiques vous forcent à mémoriser ou utiliser des codes alt maladroits. Les claviers en ligne restent parfaits. Toujours lisibles. Toujours précis.</p>
        <p>Troisièmement : fonctionne sur n'importe quel appareil. Votre ordinateur portable, tablette, téléphone ou ordinateur emprunté dans une bibliothèque polonaise. Pas besoin de transporter un clavier spécial ou de s'inquiéter de la compatibilité. Ouvrez simplement votre navigateur. Commencez à taper en polonais immédiatement. C'est la liberté.</p>
        <p>Quatrièmement : rentable. La Pologne a un secteur technologique en croissance valant 15 milliards d'euros. De nombreuses entreprises ont besoin de capacités de saisie polonaise occasionnellement. Pourquoi investir dans du matériel physique pour un usage occasionnel ? Les claviers virtuels apparaissent quand nécessaire. Disparaissent quand pas nécessaire. Propre. Efficace. Professionnel.</p>
        <p>Cinquièmement : flux de travail multilingue. Basculez instantanément entre le français, le polonais, l'allemand, le russe et d'autres langues. Les entreprises polonaises travaillent souvent avec plusieurs marchés européens. Les claviers virtuels rendent cela transparent. Pas d'échange de matériel. Pas de tâtonnements avec les paramètres système. Cliquez, tapez, terminé. Les problèmes modernes nécessitent des solutions modernes.</p>
      `,
      wordCount: 320
    },

    {
      id: 'comment-taper-polonais',
      heading: 'Comment taper en polonais comme un pro',
      level: 2,
      content: `
        <h3>Conseils pour débutants</h3>
        <p>Commencez simple. Le polonais a 32 lettres dont 9 avec diacritiques. Ne mémorisez pas tout à la fois. Apprenez par morceaux. Concentrez-vous d'abord sur les lettres spéciales les plus courantes : ą, ę, ć, ń, ś, ź, ż, ł, ó. Maîtrisez ces neuf. Vous taperez 95% des mots polonais correctement. C'est de l'efficacité.</p>
        <p>Concentrez-vous d'abord sur les lettres courantes. A, E, I, O, U, Z, S, C, N apparaissent constamment en polonais. Ajoutez les versions spéciales : ą, ę, ś, ź, ż, ć, ń. Maîtrisez ces combinaisons et vous reconnaîtrez la plupart du texte polonais immédiatement. Le polonais utilise la lettre "W" là où le français utilise "V", et "V" est rare en polonais. C'est un ajustement rapide.</p>
        <p>Rappelez-vous : le polonais s'écrit de gauche à droite. Comme le français. C'est une chose de moins à apprendre par rapport à l'arabe ou à l'hébreu. Mais le polonais a quelques combinaisons de lettres uniques qui semblent intimidantes mais suivent des règles cohérentes.</p>
        <p>Utilisez d'abord le clavier visuel. Cliquez sur les lettres avec votre souris. Regardez-les apparaître. Connectez les formes visuelles avec les sons et les significations. Cela construit des voies neuronales plus rapidement que la mémorisation aveugle. Faites attention à la manière dont les mots avec diacritiques diffèrent de ceux sans.</p>
        <p>Ne stressez pas pour la vitesse. La précision d'abord. La vitesse vient naturellement avec la pratique. Taper "Dziękuję" lentement et correctement vaut mieux que taper "Dziekuje" rapidement et mal. Les diacritiques comptent en polonais. Ils changent le sens et la prononciation. "Tak" signifie "oui", mais "Tą" signifie "celle-ci" (accusatif féminin). Petite différence. Grand changement de sens.</p>

        <h3>Techniques avancées</h3>
        <p>Prêt à passer au niveau supérieur ? C'est l'heure des techniques sérieuses de frappe polonaise.</p>
        <p>Apprenez la disposition standard du clavier polonais. Les claviers polonais suivent la disposition QWERTZ (pas QWERTY). Le Z et Y sont inversés par rapport aux claviers français. Une fois que vous mémorisez cette correspondance, votre vitesse de frappe s'améliore considérablement. De nombreux locuteurs polonais utilisent cette disposition professionnellement.</p>
        <p>Maîtrisez les raccourcis clavier pour les diacritiques. Besoin de basculer rapidement entre le français et le polonais ? Apprenez Alt+Maj ou Windows+Espace (sur Windows) ou Commande+Espace (sur Mac). Pratiquez jusqu'à ce que cela devienne automatique. Aucune souris requise. Les dactylos polonais professionnels changent de langue sans interrompre leur flux.</p>
        <p>Utilisez la ponctuation polonaise appropriée. Le polonais utilise des guillemets différents du français. Ils utilisent „...“ pour les citations primaires et «...» pour les citations imbriquées. Aussi, le polonais utilise différentes règles de virgule. Ces détails montrent le professionnalisme et le respect de la langue.</p>
        <p>Pratiquez des phrases polonaises courantes. "Dzień dobry" (bonjour), "Dziękuję" (merci), "Proszę" (s'il vous plaît/je vous en prie), "Przepraszam" (excusez-moi), "Na zdrowie" (santé/à votre santé). Ces phrases utilisent différentes combinaisons de lettres avec diacritiques. Répétez-les jusqu'à ce que vos doigts se souviennent automatiquement des motifs.</p>
        <p>Apprenez le formatage des nombres polonais. La Pologne utilise des virgules comme séparateurs décimaux et des espaces comme séparateurs de milliers (1 234,56). C'est important pour la communication d'affaires. La frappe professionnelle polonaise signifie obtenir ces détails corrects.</p>

        <h3>Erreurs courantes à éviter</h3>
        <p>N'ignorez pas les diacritiques polonais. Beaucoup de locuteurs polonais peuvent comprendre le texte sans diacritiques, mais cela semble non professionnel et peut causer de la confusion. "Gora" (montagne) vs "Góra" (en haut). "Tak" (oui) vs "Tą" (celle-ci). Les diacritiques comptent. Utilisez-les correctement.</p>
        <p>Ne confondez pas les lettres d'apparence similaire. Le polonais "ł" ressemble à "l" mais sonne comme "w" dans "eau". Le polonais "ą" est nasal, pas juste un "a" avec une queue. Le polonais "ę" est aussi nasal. Ce ne sont pas juste des marques décoratives - elles changent la manière dont les mots sonnent et ce qu'ils signifient.</p>
        <p>N'oubliez pas que le polonais a différentes dispositions de clavier. La disposition standard polonaise est QWERTZ, pas QWERTY. Le Z et Y sont inversés. Ne supposez pas que les positions françaises fonctionnent pour la frappe polonaise. Apprenez correctement la disposition polonaise.</p>
        <p>Ne mélangez pas les scripts au hasard. Certains mots restent en français. Termes techniques, noms de marques, URLs. Mais ne parsemez pas de mots français dans les phrases polonaises. Choisissez un script et engagez-vous. Mélanger semble non professionnel et déroutant.</p>
        <p>Ne négligez pas les digrammes polonais. "CZ", "SZ", "RZ", "DŻ", "DŹ" sont traités comme des lettres uniques en polonais. "Cz" (tch), "Sz" (ch), "Rz" (j ou ch selon le contexte). Ce ne sont pas juste des combinaisons de lettres - ce sont des sons distincts. Maîtrisez-les pour une frappe polonaise authentique.</p>
      `,
      wordCount: 340
    },

    {
      id: 'faits-statistiques-polonais',
      heading: 'Faits et statistiques sur la langue polonaise',
      level: 2,
      content: `
        <p>Plongeons dans les chiffres réels. Données brutes de sources crédibles sur la langue polonaise et ses locuteurs.</p>
        <p>Le polonais compte 50-55 millions de locuteurs dans le monde. Cela inclut 38-40 millions de locuteurs natifs en Pologne et 10-15 millions dans les communautés de la diaspora. La plus grande diaspora polonaise est aux États-Unis avec 9-10 millions de personnes d'ascendance polonaise. Le Royaume-Uni en a 2-3 millions, l'Allemagne 2-3 millions, le Canada 1 million, et le Brésil 1,5 million. C'est une portée linguistique mondiale.</p>
        <p>La transformation numérique de la Pologne est remarquable. Le pays comptait 30,8 millions d'utilisateurs d'Internet en 2024. C'est une pénétration Internet de 86%. Les Polonais passent plus de 5 heures en ligne quotidiennement. Les réseaux sociaux atteignent des millions. Facebook a plus de 15 millions d'utilisateurs polonais. Instagram et TikTok sont énormément populaires. Le e-commerce polonais explose avec 14 milliards d'euros de ventes annuelles. L'adoption numérique est massive.</p>
        <p>Le polonais se classe parmi les 20 langues les plus utilisées sur Internet. Pas mal pour une langue que certains pensaient en déclin après la Guerre Froide. Au contraire, elle a prospéré. Wikipédia polonais compte plus de 1,5 million d'articles. Les chaînes YouTube polonaises obtiennent des millions de vues. Les développeurs polonais contribuent massivement aux projets technologiques mondiaux. Le secteur technologique polonais vaut 15 milliards d'euros et ne cesse de croître.</p>
        <p>L'économie polonaise est la 6e plus grande de l'Union européenne. La croissance du PIB de la Pologne a été constante, en faisant une puissance économique en Europe centrale. Le pays attire des investissements étrangers majeurs, surtout dans la fabrication, les services informatiques et l'externalisation des processus d'affaires. De nombreuses entreprises internationales ont leurs opérations européennes basées en Pologne.</p>
        <p>La littérature polonaise revendique des réalisations incroyables. Cinq écrivains polonais ont remporté le Prix Nobel de littérature : Henryk Sienkiewicz (1905), Władysław Reymont (1924), Czesław Miłosz (1980), Wisława Szymborska (1996), et Olga Tokarczuk (2018). C'est plus de lauréats Nobel que beaucoup de pays beaucoup plus grands. La littérature polonaise continue d'influencer la culture mondiale.</p>
        <p>Le marché de l'apprentissage du polonais croît régulièrement. Partout dans le monde, les gens apprennent le polonais pour les affaires, la recherche académique, les connexions familiales et l'accès culturel. Les universités polonaises attirent des milliers d'étudiants internationaux. L'Institut polonais de la culture opère mondialement, promouvant la langue et la culture polonaises. Les applications et cours en ligne de polonais voient une croissance annuelle de 8% des utilisateurs.</p>
        <p>Le polonais est l'une des langues officielles de l'Union européenne, lui donnant un statut juridique et administratif dans 27 pays. Les documents de l'UE sont traduits en polonais. Les députés polonais au Parlement européen utilisent le polonais. Les citoyens polonais peuvent communiquer avec les institutions de l'UE dans leur langue maternelle. C'est une reconnaissance linguistique au plus haut niveau.</p>
      `,
      wordCount: 230
    },

    {
      id: 'faq',
      heading: 'Questions fréquemment posées',
      level: 2,
      content: `
        <h3>Puis-je taper en polonais sur mon clavier ordinaire ?</h3>
        <p>Oui, mais vous devez activer le polonais dans les paramètres de votre système. Windows, Mac et Linux prennent tous en charge le polonais avec diacritiques. Mais vos touches physiques affichent toujours des lettres françaises. Vous devrez mémoriser la disposition polonaise ou utiliser des codes alt+nombre maladroits pour les caractères spéciaux comme ą, ę, ć, ń. Notre clavier polonais en ligne vous montre exactement où se trouve chaque lettre et diacritique polonais. Beaucoup plus facile pour les débutants et les utilisateurs occasionnels qui ont besoin de caractères polonais appropriés.</p>

        <h3>Dois-je installer quelque chose ?</h3>
        <p>Non. Zéro téléchargement. Zéro installation. Notre clavier polonais en ligne fonctionne entièrement dans votre navigateur. Fonctionne sur Chrome, Firefox, Safari, Edge. Ordinateur de bureau ou mobile. Chargez simplement la page et commencez à taper en polonais avec tous les diacritiques corrects. Votre texte s'enregistre automatiquement dans votre navigateur. Revenez demain et il est toujours là.</p>

        <h3>Puis-je copier le texte polonais ?</h3>
        <p>Absolument. Tapez votre texte polonais avec des diacritiques appropriés, cliquez sur le bouton de copie, collez n'importe où. Email, réseaux sociaux, documents, applications de messagerie. Le texte est du vrai Unicode avec caractères polonais. Fonctionne partout. WhatsApp, Messenger, Facebook, Twitter, LinkedIn. Si la plateforme prend en charge le texte, elle prend en charge le polonais avec toutes ses lettres spéciales.</p>

        <h3>Comment rechercher sur Google en polonais ?</h3>
        <p>Tapez votre requête de recherche polonaise dans notre clavier avec des diacritiques appropriés. Cliquez sur le bouton Google. Nous enverrons votre recherche à Google. Vous verrez des résultats de recherche polonais. Pareil pour Wikipédia polonais, les sites d'actualités polonais et autres sites web polonais. Accédez à l'Internet polonais sans changer de clavier ou installer de logiciel. Simple et efficace.</p>

        <h3>Et les diacritiques polonais ? Sont-ils nécessaires ?</h3>
        <p>Les diacritiques polonais (ą, ę, ć, ń, ó, ś, ź, ż, ł) sont absolument nécessaires pour un polonais correct. Bien que les Polonais puissent comprendre le texte sans diacritiques, cela semble non professionnel et peut causer de la confusion. "Gora" vs "Góra", "Zakaz" vs "Zakaz" - les diacritiques changent le sens et la prononciation. Pour la communication d'affaires, le travail académique, ou montrer du respect aux locuteurs polonais, utilisez toujours des diacritiques appropriés. Notre clavier rend cela facile.</p>
      `,
      wordCount: 150
    }
  ],

  internalLinks: [
    {
      text: 'clavier tchèque',
      href: '/clavier-tcheque/',
      context: 'related_language_family'
    },
    {
      text: 'clavier allemand',
      href: '/clavier-allemand/',
      context: 'related_language'
    },
    {
      text: 'clavier russe',
      href: '/clavier-russe/',
      context: 'same_region'
    },
    {
      text: 'clavier ukrainien',
      href: '/clavier-ukrainien/',
      context: 'same_region'
    },
    {
      text: 'clavier slovaque',
      href: '/clavier-slovaque/',
      context: 'related_language_family'
    }
  ],

  totalWords: 1320,
  lastUpdated: '2024-12-03'
};

export default content;