import { BoldSkill, Skill } from "../../_components/Skill";

export const WhatILearned = () => (
  <section className="text-center sm:text-left">
    <h2 className="lg:text-center">
      What have I learned from working on Tetrisly?
    </h2>
    <ul className="flex flex-wrap items-center justify-center gap-4 rounded bg-slate-100 p-4">
      <Skill>
        The importance of a design system in a project and how it can{" "}
        <BoldSkill>speed up</BoldSkill> the development process
      </Skill>
      <Skill>
        Good practices of <BoldSkill>UX/UI design</BoldSkill>
      </Skill>
      <Skill>
        How to use <BoldSkill>Figma</BoldSkill> efficiently
      </Skill>
      <Skill>
        How the choice of <BoldSkill>styling library</BoldSkill> can impact your
        product
      </Skill>
      <Skill>
        What is the <BoldSkill>design system</BoldSkill>
      </Skill>
      <Skill>
        How to <BoldSkill>test</BoldSkill> complex components in React
      </Skill>
      <Skill>
        Plan correct variants of components with an apropriate{" "}
        <BoldSkill>TypeScript support</BoldSkill>
      </Skill>
    </ul>
  </section>
);
