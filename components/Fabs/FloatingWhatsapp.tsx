import { Affix } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { IconBrandWhatsapp } from '@tabler/icons';

export function FloatingWhatsapp() {
  return (
    <>
      <Affix position={{ bottom: 80, right: 20 }}>
        <a target="_blank" href="https://api.whatsapp.com/send/?phone=524651621164&text&type=phone_number&app_absent=0" rel="whatsapp">
          <Avatar color="green" radius="xl" size={60}>
            <IconBrandWhatsapp size={32} />
          </Avatar>
        </a>
      </Affix>
    </>
  );
}
