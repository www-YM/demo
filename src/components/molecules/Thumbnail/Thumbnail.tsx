import { imageProcess } from 'utils/image-process';
import Image from 'components/atoms/Image';

type ThumbProps = {
  src: string;
  width?: number;
  jpeg?: boolean;
  containerWidth?: number | string;
  onClick?: () => void;
  className?: string;
};

const ThumbImage: React.FC<ThumbProps> = ({
  src,
  width,
  containerWidth,
  jpeg,
  onClick,
  ...rest
}) => {
  const thumbWidth = width || 80;
  const thumbUrl = imageProcess(src, { width: thumbWidth, jpeg });
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <Image
      {...rest}
      src={thumbUrl}
      width={containerWidth || thumbWidth}
      onClick={handleClick}
    ></Image>
  );
};

export default ThumbImage;
