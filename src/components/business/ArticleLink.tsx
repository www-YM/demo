import { Typography } from '@material-ui/core';
import { Icon } from 'components/atoms';
import Link from 'components/molecules/Link';
import useChat from 'hooks/useChat';

const ArticleLink = (props: {
  href: string;
  articleId: number;
  title: string;
  fontIconClass?: string;
}) => {
  const { href, articleId, title, fontIconClass } = props;

  const { showArticle } = useChat();

  const viewArticle = (e) => {
    e.preventDefault();
    showArticle(articleId);
  };

  return (
    <Link href={href} onClick={viewArticle}>
      <Typography>
        <Icon
          fontIconClass={
            fontIconClass === undefined ? 'fa fa-book-open' : fontIconClass
          }
        />
        &nbsp;{title}
      </Typography>
    </Link>
  );
};

export default ArticleLink;
