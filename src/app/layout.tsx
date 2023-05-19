import { Theme } from 'src/theme';
import '@styles/global.scss';

import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  preload: true,
  subsets: ['latin'],
  variable: '--font-josefin',
});

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  )
}

export default RootLayout;
