import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit
          rem est deleniti ratione quia nesciunt quaerat, neque sed possimus
          reiciendis temporibus ipsum et perferendis officiis nulla enim sit
          amet?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
