import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { MainHeader } from '../components/Header/MainHeader';
import { MainFooter } from '../components/Footer/MainFooter';
import { Slider } from '../components/Slider/Slider';
import { OurGoals } from '../components/OurGoals/OurGoals';
import { EducativeOfferCard } from '../components/EducativeOffer/EducativeOfferCard';
import { Us } from '../components/Us/Us';

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <Slider />
      <OurGoals />
      <Us />
      <EducativeOfferCard />
      <MainFooter
        data={[
          {
            title: 'U Internacional',
            links: [
              {
                link: 'https://example.com',
                label: 'Nosotros',
              },
              {
                link: 'https://example.com',
                label: 'Oferta Educativa',
              },
              {
                link: 'https://example.com',
                label: 'Reglamento Institucional',
              },
              {
                link: 'https://example.com',
                label: 'Inscríbete',
              },
            ],
          },
          {
            title: 'Contacto',
            links: [
              {
                link: 'https://example.com',
                label:
                  'Manuel de Velasco Martínez No. 101 – B, Colonia Solidaridad. Rincón de Romos, Ags',
              },
              {
                link: 'https://example.com',
                label: 'Teléfono: (465)-111-2117',
              },
              {
                link: 'https://example.com',
                label: 'WhatsApp: (449)-312-7372',
              },
              {
                link: 'https://example.com',
                label: 'Email: informes@iinternacional.edu.mx',
              },
            ],
          },
        ]}
      />
    </>
  );
}
