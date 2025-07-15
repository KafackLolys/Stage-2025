import LanguageProvider from './components/LanguageProvider';

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  return (
    <LanguageProvider params={params}>
      {children}
    </LanguageProvider>
  );
}
