import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Error, nihil laborum! Eum at dolorem, quasi odio repellat quae autem aperiam
    aliquam reprehenderit tempore molestiae, ipsum voluptates consequatur,
    sint asperiores dolorum!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
