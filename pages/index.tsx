import { MainHeader } from '../components/Header/MainHeader';
import { MainFooter } from '../components/Footer/MainFooter';
import { Slider } from '../components/Slider/Slider';
import { OurGoals } from '../components/OurGoals/OurGoals';
import { EducativeOfferCard } from '../components/EducativeOffer/EducativeOfferCard';
import { Us } from '../components/Us/Us';
import { FloatingScreen } from '../components/Fabs/FloatingScreen';
import { FloatingWhatsapp } from '../components/Fabs/FloatingWhatsapp';

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <Slider />
      <OurGoals />
      <Us />
      <EducativeOfferCard />
      <FloatingWhatsapp></FloatingWhatsapp>
      <FloatingScreen />
      <MainFooter
        data={[
          {
            title: 'U Internacional',
            links: [
              {
                link: 'us',
                label: 'Nosotros',
              },
              {
                link: 'offert',
                label: 'Oferta Educativa',
              },
              {
                link: '',
                label: 'Reglamento Institucional',
              },
              {
                link: '',
                label: 'Inscríbete',
              },
            ],
          },
          {
            title: 'Contacto',
            links: [
              {
                link: '',
                label:
                  'Manuel de Velasco Martínez No. 101 – B, Colonia Solidaridad. Rincón de Romos, Ags',
              },
              {
                link: '',
                label: 'Teléfono: (465)-111-2117',
              },
              {
                link: '',
                label: 'WhatsApp: (449)-312-7372',
              },
              {
                link: '',
                label: 'Email: informes@iinternacional.edu.mx',
              },
            ],
          },
        ]}
      />
    </>
  );
}
