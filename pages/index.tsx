import { MainHeader } from '../components/Header/MainHeader';
import { MainFooter } from '../components/Footer/MainFooter';
import { OurGoals } from '../components/OurGoals/OurGoals';
import { EducativeOfferCard } from '../components/EducativeOffer/EducativeOfferCard';
import { Us } from '../components/Us/Us';
import { FloatingScreen } from '../components/Fabs/FloatingScreen';
import { FloatingWhatsapp } from '../components/Fabs/FloatingWhatsapp';
import { OurObjective } from '../components/OurObjective/OurObjective';
import Suscribe from '../components/Suscribe/Suscribe';
import { Slider } from '../components/Slider/Slider';

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <Slider/>
      {/* <OurGoals /> */}
      <OurObjective></OurObjective>
      <Us></Us>

      <EducativeOfferCard />
      <FloatingWhatsapp></FloatingWhatsapp>
      <FloatingScreen />
      <Suscribe></Suscribe>
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
                label: 'WhatsApp: (465)-162-1164',
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
