import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
        consequatur laudantium amet dolor quia delectus illum earum nihil.
        Architecto, molestias! Earum nihil suscipit, sequi omnis soluta
        voluptate est asperiores ex?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
        consequatur laudantium amet dolor quia delectus illum earum nihil.
        Architecto, molestias! Earum nihil suscipit, sequi omnis soluta
        voluptate est asperiores ex?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
        consequatur laudantium amet dolor quia delectus illum earum nihil.
        Architecto, molestias! Earum nihil suscipit, sequi omnis soluta
        voluptate est asperiores ex?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
        consequatur laudantium amet dolor quia delectus illum earum nihil.
        Architecto, molestias! Earum nihil suscipit, sequi omnis soluta
        voluptate est asperiores ex?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
        consequatur laudantium amet dolor quia delectus illum earum nihil.
        Architecto, molestias! Earum nihil suscipit, sequi omnis soluta
        voluptate est asperiores ex?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
        consequatur laudantium amet dolor quia delectus illum earum nihil.
        Architecto, molestias! Earum nihil suscipit, sequi omnis soluta
        voluptate est asperiores ex?
      </p>
      <GoTop {...args} />
    </div>
  );
};
