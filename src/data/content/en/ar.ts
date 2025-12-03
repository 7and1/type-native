import type { LanguagePageContent } from '../types';

export const content: LanguagePageContent = {
  languageCode: 'ar',
  uiLanguage: 'en',

  research: [
    {
      statistic: 'Total speakers worldwide',
      value: '422 million',
      source: 'Ethnologue (2024)',
      sourceUrl: 'https://www.babbel.com/en/magazine/the-10-most-spoken-languages-in-the-world',
      year: '2024'
    },
    {
      statistic: 'Native speakers',
      value: '313 million',
      source: 'Ethnologue 27th Edition',
      sourceUrl: 'https://www.babbel.com/en/magazine/the-10-most-spoken-languages-in-the-world',
      year: '2024'
    },
    {
      statistic: 'Countries with official status',
      value: '22-25 countries',
      source: 'IstiZada Research',
      sourceUrl: 'https://istizada.com/complete-list-of-arabic-speaking-countries/',
      year: '2024'
    },
    {
      statistic: 'Arabic digital content online',
      value: 'Only 3%',
      source: 'UNESCO',
      sourceUrl: 'https://www.unesco.org/en/articles/world-arabic-language-day-2024',
      year: '2024'
    },
    {
      statistic: 'Arabic learning market value',
      value: '$4.78 billion (2025)',
      source: 'Research and Markets',
      sourceUrl: 'https://www.researchandmarkets.com/report/arabic-language-learning-market',
      year: '2025'
    },
    {
      statistic: 'Projected market growth',
      value: '$10.61 billion by 2030',
      source: 'Research and Markets',
      sourceUrl: 'https://www.researchandmarkets.com/report/arabic-language-learning-market',
      year: '2030'
    },
    {
      statistic: 'Social media growth (UAE)',
      value: '+19.4% (2023-2024)',
      source: 'DataReportal',
      sourceUrl: 'https://datareportal.com/reports/digital-2024-united-arab-emirates',
      year: '2024'
    },
    {
      statistic: 'Writing system ranking',
      value: '2nd most used alphabet globally',
      source: 'Wikipedia - Arabic Script',
      sourceUrl: 'https://en.wikipedia.org/wiki/Arabic_script',
      year: '2024'
    }
  ],

  sections: [
    {
      id: 'about-arabic-language',
      heading: 'About the Arabic Language',
      level: 2,
      content: `
        <h3>What is Arabic?</h3>
        <p>Arabic is one of the world's most spoken languages. Think of it like this: if all Arabic speakers stood in a line, they'd stretch from New York to Tokyo. Twice. That's 422 million people!</p>
        <p>Arabic belongs to the Semitic language family. It's cousins with Hebrew and Aramaic. The language has been around for over 1,500 years. Pretty old, right?</p>
        <p>Here's something cool: Arabic is the official language in 22 to 25 countries. Most are in the Middle East and North Africa. Places like Egypt, Saudi Arabia, Morocco, and Iraq.</p>
        <p>But here's the tricky part. Arabic isn't just one language. It's like a family of languages. There's Modern Standard Arabic (MSA). That's the formal version. Then there are many dialects. Egyptian Arabic sounds different from Moroccan Arabic. Sometimes people from different regions can't understand each other. But they all use MSA for writing and formal communication.</p>

        <h3>The Arabic Writing System</h3>
        <p>Now this is where it gets interesting. Arabic writes from right to left. Yep, the opposite of English. Why? Because ancient scribes were mostly right-handed. Writing right-to-left meant they wouldn't smudge the ink. Smart, huh?</p>
        <p>The Arabic alphabet has 28 letters. But wait. Most letters change shape depending on where they appear in a word. Beginning? One shape. Middle? Different shape. End? Another shape. Alone? Yet another shape. So 22 letters have four different forms each. It's like each letter is an actor playing different roles.</p>
        <p>Here's another twist: Arabic is technically an "abjad," not an alphabet. What's the difference? It mostly shows consonants. Vowels are optional. You add them as tiny marks above or below letters. But in everyday writing? People skip them. You figure out the vowels from context. Your brain fills in the blanks.</p>
        <p>Arabic letters connect to each other when you write. They hold hands, basically. This creates that beautiful, flowing script you see. Only six letters refuse to connect to the next letter. They're the rebels.</p>
        <p>Fun fact: Arabic script is the second most used writing system in the world. Other languages borrowed it too. Persian, Urdu, Pashto, and Kurdish all use modified versions of Arabic script.</p>
      `,
      wordCount: 250
    },

    {
      id: 'why-use-online-arabic-keyboard',
      heading: 'Why Use an Online Arabic Keyboard?',
      level: 2,
      content: `
        <h3>Common Use Cases</h3>
        <p>Let's talk about real life. When do you need to type in Arabic?</p>
        <p>Maybe you're learning Arabic. You want to practice writing. Or you need to complete homework. An online keyboard helps you learn letter positions without buying special equipment.</p>
        <p>Perhaps you're traveling to Dubai, Cairo, or Beirut. You need to book hotels, write emails, or chat with locals. But your laptop only has English keys. Problem solved with an online Arabic keyboard.</p>
        <p>Or maybe you're running a business. You're sending messages to clients in Saudi Arabia or Morocco. Professional communication in Arabic builds trust. Shows respect for their culture.</p>
        <p>Social media is huge in the Arab world. The UAE has one of the highest social media adoption rates globally. Instagram use in Saudi Arabia hit 72.2% in 2024. If you want to engage Arabic-speaking audiences, you need to write in Arabic.</p>
        <p>Research is another big use case. Searching for Arabic content, reading Arabic websites, or accessing Arabic databases. Only 3% of online content is in Arabic, according to UNESCO. But that 3% contains valuable information you can't find in English.</p>

        <h3>Advantages Over Physical Keyboards</h3>
        <p>Why use a virtual keyboard instead of buying an Arabic physical keyboard?</p>
        <p>First: zero installation. No software downloads. No driver updates. No IT headaches. Just open your browser and start typing. Works on any device. Your laptop, your phone, your tablet. Even your friend's computer.</p>
        <p>Second: it's free. Physical Arabic keyboards cost money. Plus shipping. Plus time waiting for delivery. Why spend $30 when you can type for free right now?</p>
        <p>Third: you see the keys. Physical Arabic stickers wear off. Keys fade. You forget which letter is where. Online keyboards show you exactly what you're clicking. Visual feedback helps you learn faster.</p>
        <p>Fourth: no mess. Keyboard stickers look terrible. They peel off. Leave sticky residue. Make your keyboard look like a kindergarten art project. Online keyboards keep your physical keyboard clean and professional.</p>
        <p>Fifth: flexibility. Maybe you only need Arabic occasionally. Why clutter your desk with a physical Arabic keyboard you use once a month? Online keyboards appear when you need them. Disappear when you don't.</p>
      `,
      wordCount: 300
    },

    {
      id: 'how-to-type-arabic',
      heading: 'How to Type in Arabic Like a Pro',
      level: 2,
      content: `
        <h3>Beginner Tips</h3>
        <p>Start with the basics. Arabic has 28 letters. Don't try to memorize all of them in one day. Learn five letters per day. In six days, you'll know them all.</p>
        <p>Practice the most common letters first. Alif (ا), Ba (ب), Ta (ت), Tha (ث), and Noon (ن) appear constantly. Master these. You'll recognize half of any Arabic text.</p>
        <p>Remember: Arabic writes right to left. Your cursor starts on the right side. Moves left as you type. Feels weird at first. Your brain adapts quickly. Give it a week.</p>
        <p>Use the visual keyboard. Click the letters with your mouse initially. Watch how they connect to each other. Notice how shapes change based on position. This visual learning sticks better than memorizing layouts.</p>
        <p>Don't worry about vowel marks yet. Native speakers skip them in casual writing. Focus on consonants first. Add vowels later when you're comfortable with basic typing.</p>

        <h3>Advanced Techniques</h3>
        <p>Ready to level up? Time for speed typing.</p>
        <p>Learn the QWERTY to Arabic key mapping. If you're a fast English typist, you can transfer that muscle memory. The Arabic letters roughly match English keyboard positions. Not perfectly, but close enough.</p>
        <p>Use keyboard shortcuts. Need to switch between English and Arabic quickly? Don't reach for the mouse. Learn the quick-switch commands. Alt+Shift or Ctrl+Shift usually work. Check your browser settings.</p>
        <p>Master diacritics. These are the tiny marks that show vowels and pronunciation. Shift key plus a letter usually adds them. Fatha, Kasra, Damma, Sukoon, and Shadda are the main ones. They make your writing clearer and more professional.</p>
        <p>Try typing common phrases. "How are you?" (كيف حالك؟), "Thank you" (شكراً), "Hello" (مرحباً). These phrases use different letter combinations. Practice them until your fingers remember the patterns.</p>

        <h3>Common Mistakes to Avoid</h3>
        <p>Don't type too fast at first. Speed comes later. Accuracy comes first. One wrong letter can change meaning completely. "كتب" (kataba, "he wrote") versus "كذب" (kadhaba, "he lied"). See the difference? One dot.</p>
        <p>Don't forget letter positions. Remember: letters change shape. Beginning, middle, end, or isolated. Each position looks different. Using the wrong form makes text unreadable. Let the keyboard handle this automatically.</p>
        <p>Don't mix English and Arabic randomly. Some words need to stay in English. Technical terms, brand names, URLs. But don't pepper English words throughout Arabic sentences. Pick one language direction and stick with it.</p>
        <p>Don't ignore numbers. Arabic uses Eastern Arabic numerals (٠١٢٣) and Western numerals (0123). Know when to use which. Most modern contexts use Western numerals. But classical texts use Eastern Arabic numerals.</p>
      `,
      wordCount: 300
    },

    {
      id: 'arabic-facts-statistics',
      heading: 'Arabic Language Facts & Statistics',
      level: 2,
      content: `
        <p>Let's talk numbers. Real data from real sources.</p>
        <p>Arabic has 422 million speakers globally. That includes 313 million native speakers. The rest learned it as a second language. Many Muslims worldwide learn Arabic to read the Quran, even if they don't speak it daily.</p>
        <p>Arabic is official in 22 to 25 countries, depending on how you count. The 22 Arab League members all use Arabic officially. Then there's Israel (co-official), Chad, Eritrea, and Tanzania (minority regions). The Arab World population totals 491 million people.</p>
        <p>But here's a shocking stat: only 3% of internet content is in Arabic. Think about that. Arabic ranks 5th in total speakers but 15th in internet content. Massive gap. Huge opportunity for Arabic content creators.</p>
        <p>The social media story is different. Arabs love social media. WhatsApp reaches 80% of users. Instagram hit 80.1% in UAE, 72.2% in Saudi Arabia. Social media users in the UAE increased 19.4% from 2023 to 2024. That's explosive growth.</p>
        <p>Arabic script is the world's second most-used writing system. Over a billion people use Arabic script for different languages. Not just Arabic. Persian (Farsi), Urdu, Pashto, Kurdish, Sindhi, and others all use Arabic letters.</p>
        <p>The Arabic learning market is booming. Worth $4.78 billion in 2025. Expected to hit $10.61 billion by 2030. That's 17.32% annual growth. Why? Businesses need Arabic speakers. Tourism is growing. Cultural exchange is increasing.</p>
        <p>December 18th is World Arabic Language Day. UNESCO established it in 2012. The date marks when Arabic became the UN's sixth official language in 1973. That's over 50 years of official recognition.</p>
      `,
      wordCount: 200
    },

    {
      id: 'faq',
      heading: 'Frequently Asked Questions',
      level: 2,
      content: `
        <h3>Can I type Arabic on my regular keyboard?</h3>
        <p>Yes, but you need to enable Arabic in your system settings. Windows, Mac, and Linux all support Arabic. But you won't see the Arabic letters on your physical keys. You'll need to memorize positions or use keyboard stickers. An online keyboard shows you exactly where each letter is. Much easier for beginners.</p>

        <h3>Do I need to install anything?</h3>
        <p>Nope. Nothing. Zero installations. Our online Arabic keyboard runs entirely in your browser. Works on Chrome, Firefox, Safari, Edge. Desktop or mobile. Just visit the page and start typing. Your text auto-saves in your browser. Come back later and it's still there.</p>

        <h3>Can I copy the Arabic text?</h3>
        <p>Absolutely. Type your text, click the copy button, and paste anywhere. Email, social media, documents, messages. The text is real Unicode Arabic. Works everywhere that supports Arabic text. Which is basically everywhere in 2024.</p>

        <h3>How do I search Google in Arabic?</h3>
        <p>Type your Arabic search query in our keyboard. Then click the Google button. We'll send your search to Google. You'll see Arabic search results. Same works for YouTube, Twitter, and Amazon. Search the Arabic web without switching keyboards.</p>
      `,
      wordCount: 100
    }
  ],

  internalLinks: [
    {
      text: 'Persian keyboard',
      href: '/persian-keyboard/',
      context: 'related_language_family'
    },
    {
      text: 'Urdu keyboard',
      href: '/urdu-keyboard/',
      context: 'related_language_family'
    },
    {
      text: 'Hebrew keyboard',
      href: '/hebrew-keyboard/',
      context: 'same_region'
    }
  ],

  totalWords: 1150,
  lastUpdated: '2024-12-02'
};

export default content;
