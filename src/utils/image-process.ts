type ImageProcessParams = {
  webp?: boolean;
  jpeg?: boolean;
  width?: number;
  fileSize?: number;
};

// 阿里云 oss 提供的图片处理的最大文件大小限制
const MAX_ALLOWED_FILE_SIZE = 20 * 1024 * 1024;

const isLargeFile = (fileSize: number): boolean => {
  return fileSize > MAX_ALLOWED_FILE_SIZE;
};

/**
 * 为图片url添加缩放、格式转换等请求参数
 * https://help.aliyun.com/document_detail/44686.html?spm=a2c4g.11186623.6.1235.61a5c1f60U7rVj
 * @param {string} url 图片链接
 * @param {{width: string}} params 参数
 * @param {number} [params.fileSize] 文件的大小 kb
 * @param {string} [params.style] 预定义参数
 * @param {number} [params.width] 等比例缩放宽度
 * @param {boolean} [params.matchScreen=false] 默认false，图片宽度匹配屏幕分辨率，但最大不会超过1980
 * @param {boolean} [params.webp=true] 图片转换为webp，默认true
 * @param {boolean} [params.interlace=true] 图片渐进显示，默认true
 * @return {string} 处理后的图片链接
 */
export const imageProcess = (url: string, params: ImageProcessParams = {}) => {
  if (!url) {
    return url;
  }

  // 用户上传的图片可能超过 oss 图片处理运行的最大限制，需要使用自己的图片处理函数
  if (params.fileSize && isLargeFile(params.fileSize)) {
    const size = params.width > 500 ? 1000 : 500;
    return url.replace('artworks/', `artwork-thumbs/l_${size}/`);
  }

  const cmd = [url, '?x-oss-process=image'];

  // 转换为webp格式，默认不使用
  // params.webp = params.webp === undefined ? true : params.webp
  // if (params.webp && webpSupported) {
  //     cmd.push('/format,webp')
  // }

  // if (params.style) {
  //     cmd.push(params.style)
  // }

  // 图片宽度匹配屏幕分辨率，但最大不会超过1980
  // if (params.matchScreen) {
  //     const width = Math.min(screen.width, 1980)
  //     cmd.push(`/resize,w_${width}`)
  // }

  // 等比例缩放
  if (params.width) {
    cmd.push(`/resize,w_${params.width}`);
  }

  // 渐进显示图片，只对jpg格式有效，默认当浏览器不支持webp图片时使用
  // params.interlace = params.interlace === undefined && !webpSupported ? true : params.interlace
  if (params.jpeg) {
    cmd.push('/format,jpg/interlace,1');
  }

  // 无处理，返回原链接
  if (cmd.length === 2) {
    return url;
  }

  return cmd.join('');
};
