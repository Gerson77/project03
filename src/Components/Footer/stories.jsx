import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="http://localhost:3000">Feito por Gerson Santos</a></p>`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
