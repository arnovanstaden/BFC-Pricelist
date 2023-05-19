import { Theme } from 'src/theme';
import '@styles/global.scss';

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
