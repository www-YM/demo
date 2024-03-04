import { shops } from './shops-data';

// 指定测试店铺的ID
const SHOP_ID = shops.data[0].id;

export const homepageProducts = {
  data: [
    {
      id: 197,
      slug: 'breathable-mesh-knit-sneaker-white-d14',
      title: 'D14 Breathable Mesh Knit Sneaker - White',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/202107061507088E4bzP5CHbZ6HJZ7GaQm2QxwnY5rcJ.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/xeRmkQLDGQoQIELZOXPMENpFomZkyPiO.jpeg',
      category: {
        descendant: {
          id: 3,
          breadcrumb: 'Casual Shoes',
          slug: 'casual-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      minCost: 3699,
    },
    {
      id: 198,
      slug: 'breathable-mesh-knit-sneaker-black-d14',
      title: 'D14 Breathable Mesh Knit Sneaker - Black',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210706140731aFxPZkhRPNNjBECkaMQekFfCBP7XHb.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/ttSMQmrrRubbsnLXGmJCNXUiQFxioNaO.jpeg',
      category: {
        descendant: {
          id: 3,
          breadcrumb: 'Casual Shoes',
          slug: 'casual-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      minCost: 3699,
    },
    {
      id: 200,
      slug: 'yoga-mat-sf-f50',
      title: 'SF_F50 Yoga Mat',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210819170815E6KpwPbMNxGCpPKcQZ28ytPQSEknc2.png',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/KnLkmondddRLOYUsRPfzAprkJZhHlxTZ.jpeg',
      category: {
        descendant: { id: 36, breadcrumb: '_', slug: '_' },
        children: {
          id: 35,
          breadcrumb: 'Housewares',
          slug: 'housewares',
        },
        parent: {
          id: 32,
          breadcrumb: 'Home & Living',
          slug: 'home-living',
        },
      },
      minCost: 3499,
    },
    {
      id: 201,
      slug: 'high-top-unisex-sneaker-sf-f9',
      title: 'SF_F9 High Top Unisex Sneaker',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/202106291606137FSTkbSGnhXKTE8DmMydiQwKCypJtb.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/pqARXEmsCqSvPEDSdEvrQjktqbGZTeFQ.jpeg',
      category: {
        descendant: {
          id: 5,
          breadcrumb: 'High-Top Shoes',
          slug: 'high-top-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      minCost: 4299,
    },
    {
      id: 202,
      slug: 'lightweight-mesh-knit-sneaker-white-sf-f39',
      title: 'SF_F39 Lightweight Mesh Knit Sneaker - White',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210628200654hPpjM8ataKz7FFByZpfQEbtXhMbGDx.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/EoDZXlfMOQJvDAhKpQIPGFCASuElccjA.jpeg',
      category: {
        descendant: {
          id: 3,
          breadcrumb: 'Casual Shoes',
          slug: 'casual-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      minCost: 2899,
    },
    {
      id: 188,
      slug: 'high-top-leather-sneaker-d17',
      title: 'D17 High Top Leather Sneaker',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210625180669mmBcX7J6S5NpZw4QAatDszjmdzXMJi.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/tFnuPsaUqhEPHOppCNRSpmOJpWpSopJg.jpeg',
      category: {
        descendant: {
          id: 5,
          breadcrumb: 'High-Top Shoes',
          slug: 'high-top-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      minCost: 3999,
    },
    {
      id: 195,
      slug: 'kids-mesh-knit-sneaker-white-d18',
      title: 'D18 Kids Mesh Knit Sneaker - White',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210710120736ARdxRtTaSCcNWWWmDeGRkcSxNSQjkB.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/TYAluvaQsvgXYpQSMnBPwUyukDOlkoSS.jpeg',
      category: {
        descendant: { id: 41, breadcrumb: '_', slug: '_' },
        children: { id: 40, breadcrumb: 'Shoes', slug: 'shoes' },
        parent: {
          id: 37,
          breadcrumb: 'Kids & Youth',
          slug: 'kids-youth',
        },
      },
      minCost: 3599,
    },
    {
      id: 196,
      slug: 'kids-mesh-knit-sneaker-black-d18',
      title: 'D18 Kids Mesh Knit Sneaker - Black',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210710110740pGm3QM5XXhpmRPeKGNtN7GxXZFYQmP.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/zUjcQQCPjiDmdjXhWEvLPHIPxwpPjItU.jpeg',
      category: {
        descendant: { id: 41, breadcrumb: '_', slug: '_' },
        children: { id: 40, breadcrumb: 'Shoes', slug: 'shoes' },
        parent: {
          id: 37,
          breadcrumb: 'Kids & Youth',
          slug: 'kids-youth',
        },
      },
      minCost: 3599,
    },
    {
      id: 194,
      slug: 'flex-control-sneaker-black-sf-k14',
      title: 'SF_K14 Flex Control Sneaker - Black',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/202106291006013tntcGy6xeP55BRTmSTnQAAJdmxmZF.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/VrXNEbHocOeaRXALXPQmwesIvJmsqUAZ.jpeg',
      category: {
        descendant: {
          id: 3,
          breadcrumb: 'Casual Shoes',
          slug: 'casual-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      minCost: 2999,
    },
  ],
};

export const products = {
  data: [
    {
      id: 197,
      slug: 'breathable-mesh-knit-sneaker-white-d14',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 3,
          breadcrumb: 'Casual Shoes',
          slug: 'casual-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'D14 Breathable Mesh Knit Sneaker - White',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/202107061507088E4bzP5CHbZ6HJZ7GaQm2QxwnY5rcJ.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/xeRmkQLDGQoQIELZOXPMENpFomZkyPiO.jpeg',
      minCost: 3699,
      minDisplayCost: 3699,
      bestseller: false,
      new: true,
    },
    {
      id: 198,
      slug: 'breathable-mesh-knit-sneaker-black-d14',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 3,
          breadcrumb: 'Casual Shoes',
          slug: 'casual-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'D14 Breathable Mesh Knit Sneaker - Black',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210706140731aFxPZkhRPNNjBECkaMQekFfCBP7XHb.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/ttSMQmrrRubbsnLXGmJCNXUiQFxioNaO.jpeg',
      minCost: 3699,
      minDisplayCost: 3699,
      bestseller: false,
      new: true,
    },
    {
      id: 200,
      slug: 'yoga-mat-sf-f50',
      shopId: SHOP_ID,
      category: {
        descendant: { id: 36, breadcrumb: '_', slug: '_' },
        children: {
          id: 35,
          breadcrumb: 'Housewares',
          slug: 'housewares',
        },
        parent: {
          id: 32,
          breadcrumb: 'Home & Living',
          slug: 'home-living',
        },
      },
      title: 'SF_F50 Yoga Mat',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210819170815E6KpwPbMNxGCpPKcQZ28ytPQSEknc2.png',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/KnLkmondddRLOYUsRPfzAprkJZhHlxTZ.jpeg',
      minCost: 3499,
      minDisplayCost: 3499,
      bestseller: false,
      new: true,
    },
    {
      id: 201,
      slug: 'high-top-unisex-sneaker-sf-f9',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 5,
          breadcrumb: 'High-Top Shoes',
          slug: 'high-top-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'SF_F9 High Top Unisex Sneaker',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/202106291606137FSTkbSGnhXKTE8DmMydiQwKCypJtb.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/pqARXEmsCqSvPEDSdEvrQjktqbGZTeFQ.jpeg',
      minCost: 4299,
      minDisplayCost: 4688,
      bestseller: false,
      new: true,
    },
    {
      id: 203,
      slug: 'lightweigh-mesh-knit-sneaker-black-sf-f39',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 3,
          breadcrumb: 'Casual Shoes',
          slug: 'casual-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'SF_F39 Lightweight Mesh Knit Sneaker - Black',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210628200622KYPDQQms7Hx38haSZMD8R3Z8hZGQxH.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/wVQfIBDMUgZTwTjgrPspZQYnbWaTxIDu.jpeg',
      minCost: 2899,
      minDisplayCost: 2899,
      bestseller: false,
      new: true,
    },
    {
      id: 202,
      slug: 'lightweight-mesh-knit-sneaker-white-sf-f39',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 3,
          breadcrumb: 'Casual Shoes',
          slug: 'casual-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'SF_F39 Lightweight Mesh Knit Sneaker - White',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210628200654hPpjM8ataKz7FFByZpfQEbtXhMbGDx.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/EoDZXlfMOQJvDAhKpQIPGFCASuElccjA.jpeg',
      minCost: 2899,
      minDisplayCost: 2899,
      bestseller: false,
      new: true,
    },
    {
      id: 199,
      slug: 'hooded-blanket-sf-f15',
      shopId: SHOP_ID,
      category: {
        descendant: { id: 36, breadcrumb: '_', slug: '_' },
        children: {
          id: 35,
          breadcrumb: 'Housewares',
          slug: 'housewares',
        },
        parent: {
          id: 32,
          breadcrumb: 'Home & Living',
          slug: 'home-living',
        },
      },
      title: 'SF_F15 Hooded Blanket',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210817140848s5f7WSm48WTkhTdYmA2D4n7zGmj6hD.png',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/pvmfNQWUjqOsaXpSwuEfOfgWOThLHBWx.jpeg',
      minCost: 3399,
      minDisplayCost: 3399,
      bestseller: false,
      new: true,
    },
    {
      id: 188,
      slug: 'high-top-leather-sneaker-d17',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 5,
          breadcrumb: 'High-Top Shoes',
          slug: 'high-top-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'D17 High Top Leather Sneaker',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210625180669mmBcX7J6S5NpZw4QAatDszjmdzXMJi.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/tFnuPsaUqhEPHOppCNRSpmOJpWpSopJg.jpeg',
      minCost: 3999,
      minDisplayCost: 3999,
      bestseller: false,
      new: true,
    },
    {
      id: 195,
      slug: 'kids-mesh-knit-sneaker-white-d18',
      shopId: SHOP_ID,
      category: {
        descendant: { id: 41, breadcrumb: '_', slug: '_' },
        children: { id: 40, breadcrumb: 'Shoes', slug: 'shoes' },
        parent: {
          id: 37,
          breadcrumb: 'Kids & Youth',
          slug: 'kids-youth',
        },
      },
      title: 'D18 Kids Mesh Knit Sneaker - White',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210710120736ARdxRtTaSCcNWWWmDeGRkcSxNSQjkB.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/TYAluvaQsvgXYpQSMnBPwUyukDOlkoSS.jpeg',
      minCost: 3599,
      minDisplayCost: 3599,
      bestseller: false,
      new: true,
    },
    {
      id: 196,
      slug: 'kids-mesh-knit-sneaker-black-d18',
      shopId: SHOP_ID,
      category: {
        descendant: { id: 41, breadcrumb: '_', slug: '_' },
        children: { id: 40, breadcrumb: 'Shoes', slug: 'shoes' },
        parent: {
          id: 37,
          breadcrumb: 'Kids & Youth',
          slug: 'kids-youth',
        },
      },
      title: 'D18 Kids Mesh Knit Sneaker - Black',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210710110740pGm3QM5XXhpmRPeKGNtN7GxXZFYQmP.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/zUjcQQCPjiDmdjXhWEvLPHIPxwpPjItU.jpeg',
      minCost: 3599,
      minDisplayCost: 3599,
      bestseller: false,
      new: true,
    },
    {
      id: 194,
      slug: 'flex-control-sneaker-black-sf-k14',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 3,
          breadcrumb: 'Casual Shoes',
          slug: 'casual-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'SF_K14 Flex Control Sneaker - Black',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/202106291006013tntcGy6xeP55BRTmSTnQAAJdmxmZF.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/VrXNEbHocOeaRXALXPQmwesIvJmsqUAZ.jpeg',
      minCost: 2999,
      minDisplayCost: 2999,
      bestseller: false,
      new: true,
    },
    {
      id: 193,
      slug: 'flex-control-sneaker-white-sf-k14',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 3,
          breadcrumb: 'Casual Shoes',
          slug: 'casual-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'SF_K14 Flex Control Sneaker - White',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210629110681ra4snEzRQ6cawdGnDQsPberNrfDetw.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/ZzcrHaCOzkmBjJRxapLTDNbvsIdwTSWM.jpeg',
      minCost: 2999,
      minDisplayCost: 2999,
      bestseller: false,
      new: true,
    },
    {
      id: 191,
      slug: 'womens-casual-slip-on-shoes-lq',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 3,
          breadcrumb: 'Casual Shoes',
          slug: 'casual-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: "LQ Women's Casual Slip On Shoe",
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210706140777r6MsMdBRxBbDntPee264Mpz4RntnWG.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/xAvMHWfroEFNXAIELpJdOqJkqdrmNEev.jpeg',
      minCost: 2499,
      minDisplayCost: 2499,
      bestseller: false,
      new: true,
    },
    {
      id: 192,
      slug: 'casual-flat-driving-shoe-sf-f24',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 3,
          breadcrumb: 'Casual Shoes',
          slug: 'casual-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'SF_F24 Casual Flat Driving Shoe',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210706130761GKTNeQjdEf7srbjXnMAt676ncsTFMh.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/MTNroANlsYQDHAWSlDHmiOnDvPJmTTmu.jpeg',
      minCost: 2499,
      minDisplayCost: 2499,
      bestseller: false,
      new: true,
    },
    {
      id: 204,
      slug: 'faux-fur-leather-boot-sf-d86',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 4,
          breadcrumb: 'Personalized Boots',
          slug: 'personalized-boots',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'SF_D86 Faux Fur Leather Boot',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210430160469HYfDRWWEK7RR6NkZmrdT2WiyCT3zHT.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/lVgxFAxIkRJEQWKhWjMlhiTKoUfEuUBS.jpeg',
      minCost: 3999,
      minDisplayCost: 3999,
      bestseller: false,
      new: true,
    },
    {
      id: 176,
      slug: 'basketball-shoes-white-sf-d89 ',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 10,
          breadcrumb: 'Sport Shoes',
          slug: 'sport-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'SF_D89 Basketball Shoes - White',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210503190567aBP6QczERiSX7BCkPRY7sS5X2KhktA.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/HLTCkApjYKFIvUgYegfzefrwgOPfNEEl.jpeg',
      minCost: 3399,
      minDisplayCost: 3599,
      bestseller: true,
      new: false,
    },
    {
      id: 175,
      slug: 'basketball-shoes-black-sf-d89 ',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 10,
          breadcrumb: 'Sport Shoes',
          slug: 'sport-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'SF_D89 Basketball Shoes - Black',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210503210555hHwneAdtsrk2ymRsnfnbn4ys4m87fd.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/OwgCrsILtfiPgpDqGJzyIBMRBAoYQAEL.jpeg',
      minCost: 3399,
      minDisplayCost: 3599,
      bestseller: true,
      new: false,
    },
    {
      id: 168,
      slug: 'car-seat-covers-d50',
      shopId: SHOP_ID,
      category: {
        descendant: { id: 43, breadcrumb: '_', slug: '_' },
        children: {
          id: 42,
          breadcrumb: 'Car Accessories',
          slug: 'car accessories',
        },
        parent: {
          id: 27,
          breadcrumb: 'Accessories',
          slug: 'accessories',
        },
      },
      title: 'D50 Car Seat Covers',
      image:
        'https://test-cn-shanghai.oss-cn-shanghai.aliyuncs.com/designer/2020110410117542MKMMkn4ijHrhdD58MJD72Dj7hKyD.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/uCjemXgzGOZFWSHkemQMDiarfNijOstd.jpeg',
      minCost: 2488,
      minDisplayCost: 2488,
      bestseller: false,
      new: true,
    },
    {
      id: 205,
      slug: 'auto-sun-shades-sf-f40',
      shopId: SHOP_ID,
      category: {
        descendant: { id: 43, breadcrumb: '_', slug: '_' },
        children: {
          id: 42,
          breadcrumb: 'Car Accessories',
          slug: 'car accessories',
        },
        parent: {
          id: 27,
          breadcrumb: 'Accessories',
          slug: 'accessories',
        },
      },
      title: 'SF_F40 Auto Sun Shades',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210825160877YGP6FYJs7ePxMZTARhMCxCiSxCCksh.png',
      coverImageUrl:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210825160877YGP6FYJs7ePxMZTARhMCxCiSxCCksh.png',
      minCost: 2199,
      minDisplayCost: 2199,
      bestseller: false,
      new: true,
    },
    {
      id: 169,
      slug: 'heighten-low-top-shoes-white-d69',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 6,
          breadcrumb: 'Low-Top Shoes',
          slug: 'low-top-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'D69 Heighten Low Top Shoes - White ',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210624200634z8akwBBKTDHDshGbh5hYnjn84Mey8s.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/qOAbTlCRkvJvgcErxKXEHlrXqqFsmHig.jpeg',
      minCost: 3799,
      minDisplayCost: 3799,
      bestseller: true,
      new: false,
    },
    {
      id: 183,
      slug: 'air-mesh-running-shoes-black-sf-f14',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 10,
          breadcrumb: 'Sport Shoes',
          slug: 'sport-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'SF_F14 Air Mesh Running Shoes - Black',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210503110548TKTzj68nKTcRCjPXEGKixNJmkxsBaB.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/kpUWwBvtiTfBfmFZDaDVWKSbYdsXqQev.jpeg',
      minCost: 3199,
      minDisplayCost: 3199,
      bestseller: true,
      new: false,
    },
    {
      id: 184,
      slug: 'air-mesh-running-shoes-white-sf-f14',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 10,
          breadcrumb: 'Sport Shoes',
          slug: 'sport-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'SF_F14 Air Mesh Running Shoes - White',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210503110540eiyRSFaEe2Crzd6c7SBF8NxsQXptCF.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/AHbDmNMXDuBJwMmyEVkYjFqizVABaVEo.jpeg',
      minCost: 3199,
      minDisplayCost: 3199,
      bestseller: true,
      new: false,
    },
    {
      id: 174,
      slug: 'high-top-canvas-shoes-black-sf-d71 ',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 5,
          breadcrumb: 'High-Top Shoes',
          slug: 'high-top-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'SF_D71 High Top Canvas Shoes - Black ',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210624150606WzspXNeDX2XicMfDQiME6Z5YKErpmZ.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/XAHJutsWvjjArTxmxdSNHkhJXSqpeOrU.jpeg',
      minCost: 2999,
      minDisplayCost: 3199,
      bestseller: true,
      new: false,
    },
    {
      id: 170,
      slug: 'high-top-canvas-shoes-white-d70',
      shopId: SHOP_ID,
      category: {
        descendant: {
          id: 5,
          breadcrumb: 'High-Top Shoes',
          slug: 'high-top-shoes',
        },
        children: {
          id: 2,
          breadcrumb: 'All Shoes',
          slug: 'all-shoes',
        },
        parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
      },
      title: 'D70 High Top Canvas Shoes - White ',
      image:
        'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210623200620Wnkc7DFnBh72RzxBhTp8zh6DnPNyGK.jpg',
      coverImageUrl:
        'https://wow-assets-us.oss-us-east-1.aliyuncs.com/product-covers/ccXqpwpdqbuRGQZhYmkOtzzIesqjcciZ.jpeg',
      minCost: 2999,
      minDisplayCost: 3199,
      bestseller: true,
      new: false,
    },
  ],
  meta: { currentPage: 1, lastPage: 4, perPage: 24, total: 82 },
};

export const productDetail = {
  data: {
    id: 176,
    slug: 'basketball-shoes-white-sf-d89 ',
    title: 'SF_D89 Basketball Shoes - White',
    desc: '<p>• Wear-resistant rubber soles for black high top canvas shoes</p><p></p><p>• Canvas and PU upper material with EVA padded insoles</p><p></p><p>• Completed with 8 eyelets and lace up closure for a classic look</p><p></p><p>• Perfect for every season, suitable for both men and women</p><div class="media-wrap image-wrap"><img class="media-wrap image-wrap" src="https://wow-assets-us.oss-accelerate.aliyuncs.com/desc/sf_d89-size-chart.jpeg"/></div><p></p>',
    shopId: SHOP_ID,
    category: {
      descendant: { id: 10, breadcrumb: 'Sport Shoes', slug: 'sport-shoes' },
      children: { id: 2, breadcrumb: 'All Shoes', slug: 'all-shoes' },
      parent: { id: 1, breadcrumb: 'Shoes', slug: 'all-shoes' },
    },
    options: [
      {
        name: 'Size',
        values: [
          'Men US5 / EU38',
          'Men US6 / EU39',
          'Men US7 / EU40',
          'Men US7.5 / EU41',
          'Men US8.5 / EU42',
          'Men US9.5 / EU43',
          'Men US10 / EU44',
          'Men US11 / EU45',
          'Men US12 / EU46',
          'Men US13 / EU47',
          'Men US14 / EU48',
          'Women US5.5 / EU36',
          'Women US6 / EU37',
          'Women US7 / EU38',
          'Women US8 / EU39',
          'Women US9 / EU40',
          'Women US10 / EU41',
          'Women US11 / EU42',
          'Women US11.5 / EU43',
          'Women US12 / EU44',
        ],
      },
    ],
    variants: [
      {
        id: 5076,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Men US5 / EU38' }],
      },
      {
        id: 5077,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Men US6 / EU39' }],
      },
      {
        id: 5078,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Men US7 / EU40' }],
      },
      {
        id: 5079,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Men US7.5 / EU41' }],
      },
      {
        id: 5080,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Men US8.5 / EU42' }],
      },
      {
        id: 5081,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Men US9.5 / EU43' }],
      },
      {
        id: 5082,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Men US10 / EU44' }],
      },
      {
        id: 5083,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Men US11 / EU45' }],
      },
      {
        id: 5084,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Men US12 / EU46' }],
      },
      {
        id: 5085,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Men US13 / EU47' }],
      },
      {
        id: 5086,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Men US14 / EU48' }],
      },
      {
        id: 5087,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Women US5.5 / EU36' }],
      },
      {
        id: 5088,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Women US6 / EU37' }],
      },
      {
        id: 5089,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Women US7 / EU38' }],
      },
      {
        id: 5090,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Women US8 / EU39' }],
      },
      {
        id: 5091,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Women US9 / EU40' }],
      },
      {
        id: 5092,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Women US10 / EU41' }],
      },
      {
        id: 5093,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Women US11 / EU42' }],
      },
      {
        id: 5094,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Women US11.5 / EU43' }],
      },
      {
        id: 5095,
        cost: 3699,
        displayCost: 0,
        options: [{ name: 'Size', value: 'Women US12 / EU44' }],
      },
    ],
    shippingCarriers: [
      {
        id: 1,
        name: 'Standard Delivery',
        desc: '',
        isDefault: true,
        deliveryTime: '19-27',
        shippingZones: [{ regions: ['WORLDWIDE'], cost: 0 }],
      },
      {
        id: 2,
        name: 'Fast Delivery',
        desc: 'Deliveried by FedEx',
        isDefault: false,
        deliveryTime: '4-10',
        shippingZones: [
          { regions: ['US'], cost: 1000 },
          { regions: ['EU'], cost: 1200 },
          { regions: ['WORLDWIDE'], cost: 2100 },
        ],
      },
    ],
    images: [
      'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210503190567aBP6QczERiSX7BCkPRY7sS5X2KhktA.jpg',
      'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210503190534nam5wyyJn7xTKENrjiiQHdzhd5fCEQ.jpg',
      'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210503190558sfTRY7RPhTsTayxm42wM32BB5bZXW8.jpg',
      'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/202105031905614SpADkkSmxXKHyJ2K4ZKrMzd2b7QDj.jpg',
      'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210503190556wwDnymxwQAskmFcbWEK5mFzWyb2ATb.jpg',
      'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/202105031905874GJQ22E5fw53wNRaeBPGz4pYsJycP7.jpg',
      'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210503190555DAfsbCnXj54pEJ5pMSAy7jFcMTKGMd.jpg',
      'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210503190563XFZ5jnFyzQ2eSknkTf62NQS3JrdDsH.jpg',
      'https://test-cn-shanghai.oss-accelerate.aliyuncs.com/config-generation/20210503190509racJ86JCM8Yfj5MyKHEGXeMkdA3sjM.jpg',
    ],
    designModel: {
      meta: { dpi: 150, width: 4000, height: 4000 },
      resource: {
        templateUrl:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/templates/SF_D89_Basketball_Shoes_20210627.zip',
        templatePreviewUrl:
          'https://wow-assets-us.oss-accelerate.aliyuncs.com/templates/sf-d89-template.jpg',
      },
    },
  },
};
