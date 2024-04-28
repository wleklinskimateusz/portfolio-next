import { Hero } from "../_components/Hero";
import { WhatIsTetrisly } from "./_components/WhatIsTetrisly";
import { LiveDemo } from "./_components/LiveDemo";
import { MyRole } from "./_components/MyRole";
import { WhatILearned } from "./_components/WhatILearned";

export default function TetrislyPage() {
  return (
    <>
      <Hero
        title="Tetrisly Design System"
        logo="/images/projects/tetrisly.svg"
        className=" bg-[rgba(104,84,227,0.1)]"
      />
      <WhatIsTetrisly />
      <LiveDemo />
      <MyRole />
      <WhatILearned />
    </>
  );
}
