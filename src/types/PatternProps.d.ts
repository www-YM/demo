type Pattern = {
  id: number;
  objectID: string;
  type: 'public_pattern';
  name: string;
  size: number;
  height: number;
  width: number;
  ext: string;
  collections?: number[];
  tags?: string[];
  source?: string;
};

type PatternWithUrl = Pattern & {
  url: string; // 图片地址
};
