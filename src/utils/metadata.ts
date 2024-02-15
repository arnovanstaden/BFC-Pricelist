import { Metadata } from 'next';

/**
 * Generates Custom Meta Data for Pages
 * @param appRoute predefined app route key
 * @param customPrefix custom string to prefix title
 * @returns Metadata
 */

interface IProps {
  title: string;
  description: string;
}

export const generateCustomMetaData = ({ title, description }: IProps): Metadata => {
  const url = 'https://www.beautoxfiller.co.za';

  const metadata: Metadata = {
    title,
    icons: ['/favicon.png'],
    description,
    metadataBase: new URL(url),
    openGraph: {
      description,
      url: url,
      siteName: 'The Beautox and Filler Clinic',
      images: {
        url: '/logo.png',
        width: 250,
        height: 50850,
      },
    },
  };
  return metadata;

};