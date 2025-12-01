import Link from 'next/link';
import { languageInfo, languageCodes } from '@/data/layouts';
import type { LanguageCode } from '@/types/keyboard';
import { Keyboard, Globe, Zap, Shield, Copy, Search } from 'lucide-react';

// Group languages by region for organized display
const languageGroups: { title: string; codes: LanguageCode[] }[] = [
  {
    title: 'Middle East & North Africa',
    codes: ['ar', 'he', 'fa', 'ur', 'ps'],
  },
  {
    title: 'East Asia',
    codes: ['ja', 'ko', 'th', 'vi'],
  },
  {
    title: 'South Asia',
    codes: ['hi', 'bn', 'ta'],
  },
  {
    title: 'Europe',
    codes: ['ru', 'uk', 'el', 'tr', 'hy', 'ka'],
  },
  {
    title: 'Africa',
    codes: ['am', 'ti'],
  },
];

// Features list
const features = [
  {
    icon: Keyboard,
    title: 'Virtual Keyboard',
    description: 'Click or tap keys to type in any script. No installation needed.',
  },
  {
    icon: Zap,
    title: 'Physical Keyboard Mapping',
    description: 'Your QWERTY keyboard automatically types in the target language.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your text stays in your browser. We never see or store what you type.',
  },
  {
    icon: Copy,
    title: 'Easy Export',
    description: 'Copy to clipboard with one click. Use your text anywhere.',
  },
  {
    icon: Search,
    title: 'Quick Search',
    description: 'Search Google or YouTube directly in your target language.',
  },
  {
    icon: Globe,
    title: '20+ Languages',
    description: 'From Arabic to Georgian, we support scripts from around the world.',
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Type in Any Language,{' '}
              <span className="text-primary">Instantly</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Free virtual keyboards for 20+ languages. Type Arabic, Russian, Japanese,
              Hebrew, Korean, and more—right in your browser. No downloads, no plugins.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-2xl sm:text-3xl">
              {['العربية', 'Русский', '日本語', 'עברית', '한국어', 'Ελληνικά'].map((text, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-muted rounded-lg font-medium"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keyboards Grid */}
      <section className="py-12 sm:py-16" id="keyboards">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Choose Your Keyboard
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            Select a language below to start typing. Each keyboard is optimized for
            its script with proper character support and keyboard mapping.
          </p>

          {languageGroups.map((group) => (
            <div key={group.title} className="mb-10">
              <h3 className="text-lg font-semibold text-muted-foreground mb-4 px-1">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.codes.map((code) => {
                  const info = languageInfo[code]!;
                  return (
                    <Link
                      key={code}
                      href={`/${info.enSlug}/`}
                      className="group relative flex flex-col p-5 bg-card border rounded-xl hover:border-primary hover:shadow-lg transition-all duration-200"
                    >
                      {/* Native Name (large, prominent) */}
                      <div
                        className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors"
                        dir={info.direction}
                      >
                        {info.nativeName}
                      </div>

                      {/* English Name */}
                      <div className="text-sm text-muted-foreground mb-3">
                        {info.name} Keyboard
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto pt-3 border-t">
                        <span>{info.speakers} speakers</span>
                        <span>{info.script} script</span>
                      </div>

                      {/* RTL indicator */}
                      {info.direction === 'rtl' && (
                        <div className="absolute top-3 right-3 text-xs bg-muted px-2 py-0.5 rounded">
                          RTL
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Why Type-Native?
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            We built the keyboard experience we wanted ourselves. Fast, private,
            and it just works.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-5 bg-card border rounded-xl"
              >
                <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            How It Works
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8">
              {[
                {
                  step: '1',
                  title: 'Choose your language',
                  description: 'Pick from 20+ keyboards covering scripts from around the world.',
                },
                {
                  step: '2',
                  title: 'Start typing',
                  description: 'Use the virtual keyboard or just type on your physical keyboard—it automatically converts to your target script.',
                },
                {
                  step: '3',
                  title: 'Copy and use',
                  description: 'Copy your text with one click. Paste it into emails, documents, social media—anywhere.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Languages List (for SEO) */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            All Keyboards
          </h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {languageCodes.map((code) => {
              const info = languageInfo[code]!;
              return (
                <Link
                  key={code}
                  href={`/${info.enSlug}/`}
                  className="px-4 py-2 bg-card border rounded-full text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  {info.name}
                </Link>
              );
            })}
          </div>

          {/* French versions */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Aussi disponible en français:
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {languageCodes.map((code) => {
                const info = languageInfo[code]!;
                return (
                  <Link
                    key={code}
                    href={`/${info.frSlug}/`}
                    className="px-3 py-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.frSlug.replace('clavier-', '')}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Typing?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Pick a keyboard above and start typing in seconds.
            No account needed, completely free.
          </p>
          <Link
            href="#keyboards"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Keyboard className="w-5 h-5" />
            Browse Keyboards
          </Link>
        </div>
      </section>
    </main>
  );
}
