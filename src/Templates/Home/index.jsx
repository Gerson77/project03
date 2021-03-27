import { useEffect, useState } from 'react';
import * as Styled from './styles';
import { Base } from '../Base';
import { useLocation } from 'react-router-dom';
import { GridTwoColumn } from '../../Components/GridTwoColumn';
import { mapData } from '../../API/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loadind } from '../Loading';
import { GridContent } from '../../Components/GridContent';
import { GridText } from '../../Components/GridText';
import { GridImage } from '../../Components/GridImage';
import config from '../../config';

const Home = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : config.defaultSlug;

    const load = async () => {
      try {
        const data = await fetch(config.url + slug);
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (error) {
        console.log(error);
      }
    };
    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }
    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }
    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }
  if (data && !data.slug) {
    return <Loadind />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;
  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;
        if (component === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />;
        }
        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }
        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }
        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
};

export default Home;
