import { GridContent } from '../../Components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Erro 404"
      html="<p>A página não encontrada. <a href='/'>Clique para voltar</a></p>"
    />
  );
};
