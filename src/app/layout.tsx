import { Theme } from 'src/theme';
import '@styles/global.scss';
import { Josefin_Sans, Lato } from 'next/font/google'
import classNames from 'classnames';
import Notification from '@components/atoms/Notification';

const josefinSans = Josefin_Sans({
  style: ['normal', 'italic'],
  preload: true,
  subsets: ['latin'],
  variable: '--font-josefin',
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  preload: true,
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={classNames(lato.className, josefinSans.variable)}>
      <body>
        <Theme>
          {children}
          <Notification />
        </Theme>
      </body>
    </html>
  )
}

export default RootLayout;
