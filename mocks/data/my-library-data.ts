import { getRandomInt } from 'utils/helpers';

export const rootFolderId = 1;

export const getFolderList = (id) => {
  return {
    data: [
      {
        id: id + 1,
        createdAt: '2015-08-05T08:40:51.620Z',
        name: `test${id + 1}`,
        foldersCount: 2,
        imagesCount: 1,
      },
    ],
  };
};

export const getCreatedFolderData = (name) => ({
  id: getRandomInt(1000),
  createdAt: '2015-08-05T08:40:51.620Z',
  name,
  foldersCount: 1,
  imagesCount: 2,
});

export const getFolderDetail = (id) => {
  return {
    data: {
      id,
      createdAt: '2015-08-05T08:40:51.620Z',
      name: `test${id}`,
      parent: id - 1,
      folders: [
        {
          id: id + 1,
          createdAt: '2015-08-05T08:40:51.620Z',
          name: `test${id + 1}`,
          foldersCount: 1,
          imagesCount: 2,
        },
      ],
      images: [
        {
          id: 1,
          name: 'test image',
          url: 'https://wow-assets-us.oss-accelerate.aliyuncs.com/artwork-thumbs/l_1000/2021-8-6/tkNQynJYYPCmpjYEJN6eTe2S4dEadX1630909792627.jpg',
          createdAt: '2015-08-05T08:40:51.620Z',
          type: 'image/jpeg',
          size: '415.37 KB',
          resolution: '1000 x 1000',
        },
      ],
    },
  };
};

export const libraryImages = {
  data: [
    {
      id: 1,
      name: 'test image',
      url: 'https://wow-assets-us.oss-accelerate.aliyuncs.com/artwork-thumbs/l_1000/2021-8-6/tkNQynJYYPCmpjYEJN6eTe2S4dEadX1630909792627.jpg',
      createdAt: '2015-08-05T08:40:51.620Z',
      type: 'image/jpeg',
      size: '415.37 KB',
      resolution: '1000 x 1000',
    },
  ],
  meta: { currentPage: 1, lastPage: 2, perPage: 10, total: 16 },
};
