import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg:
      'https://raw.githubusercontent.com/luizomf/strapi_landing_pages/master/public/DADOS/landing-page-2.svg',
    link: 'http://localhost',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};
