import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children: 'Footer',
  },
  argTypes: {
    children: { type: 'string' },
    html: `<p><a href="http://localhost:3000">Feito por Gerson Santos</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
