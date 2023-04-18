import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useViewportSize } from '@mantine/hooks';
import Image from 'next/image';

export default function Slider() {
  const { height, width } = useViewportSize();

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  const images = [
    'https://res.cloudinary.com/dslc2vjcz/image/upload/v1681834368/pedagogia_0011_Capa_0_hij6i9.jpg',
    'https://res.cloudinary.com/dslc2vjcz/image/upload/v1681834367/Mtria_en_Estadi%CC%81stica_cu1vog.jpg',
    'https://res.cloudinary.com/dslc2vjcz/image/upload/v1681834367/Mtria_en_Direccio%CC%81n_e_innovacio%CC%81n_en_los_SS_azrial.jpg',
    'https://res.cloudinary.com/dslc2vjcz/image/upload/v1681834298/pedagogia_0000_Capa_11_raytqp.jpg',
  ];

  return (
    <>
      {/* <div style={{ paddingTop: 60 }}>
        <div ref={sliderRef} className="keen-slider"> */}
      {images.map((src, idx) => (
        <div className="keen-slider__slide number-slide1">
          <Image src={src} alt="" width={width} height={height} />
        </div>
      ))}
      {/* </div>
      </div> */}
    </>
  );
}
