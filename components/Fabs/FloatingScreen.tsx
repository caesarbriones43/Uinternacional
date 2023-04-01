import { IconArrowUp } from "@tabler/icons";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Avatar, Transition } from "@mantine/core";


export function FloatingScreen() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Avatar
              color="black"
              radius="xl"
              style={transitionStyles}
              size={50}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconArrowUp size={32} />
            </Avatar>
          )}
        </Transition>
      </Affix>
    </>
  );
}
