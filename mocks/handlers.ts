import api from 'api';
import { rest } from 'msw';
import { accounts, CONNECT_CONFIRM_FAILED_TOKEN } from './data/accounts-data';
import {
  confirmRegistrationFailure,
  confirmRegistrationSuccess,
  getProfileFromWowFailure,
  getProfileFromWowSuccess,
  loginFailure,
  registerSuccess,
  resetPasswordFailure,
  resetPasswordSuccess,
  sendResetEmailSuccess,
  tokenData,
} from './data/auth-data';
import { blogDetail, blogs } from './data/blogs-data';
import { categories } from './data/categories-data';
import { collections } from './data/collections-data';
import { designModel } from './data/design-models-data';
import { faqCategories } from './data/faq-categories-data';
import { faqs } from './data/faqs-data';
import {
  getOrderDetail,
  orders,
  orderShippingCarrierOptions,
  updateShippingAddressSuccess,
  updateShippingMethodSuccess,
} from './data/orders-data';
import {
  getOssRegions,
  patternCollections,
  patternToken,
} from './data/patterns-data';
import {
  homepageProducts,
  productDetail,
  products,
} from './data/products-data';
import {
  sampleCartData,
  sampleCartShippingCarrierOptions,
} from './data/sample-cart-data';
import { getShopSetting, settings, updateSettings } from './data/settings-data';
import {
  createPendingProductSuccess,
  deleteShopProductSuccess,
  publishShopProductSuccess,
  shopProductDetail,
  shopProducts,
  updateShopProductShippingMethod,
} from './data/shop-products-data';
import { createdShopData, getShopDetail, shops } from './data/shops-data';
import { etsyCategories } from './data/etsy-shop-data';
import {
  rootFolderId,
  getFolderList,
  getCreatedFolderData,
  libraryImages,
  getFolderDetail,
} from './data/my-library-data';
import { countryVat } from './data/country-vat';
import { accountShippingRules } from './data/account-shipping-rules-data';

const SUCCESS_DATA = { data: 'success' };

export const handlers = [
  rest.get(api.etsy.getCategoriesUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(etsyCategories));
  }),
  rest.post(api.auth.loginUrl, (req, res, ctx) => {
    const { email, password } = req.body as { email: string; password: string };

    const emails = accounts.map((account) => account.email);

    if (!emails.includes(email)) {
      return res(ctx.status(401), ctx.json(loginFailure));
    }

    const account = accounts.find((account) => account.email === email);

    if (account.password !== password) {
      return res(ctx.status(401), ctx.json(loginFailure));
    }

    return res(ctx.status(200), ctx.json(account.data()));
  }),
  rest.post(api.shop.confirmConnectionUrl, (req, res, ctx) => {
    const token = req.headers.get('Authorization').replace('Bearer ', '');
    if (token === CONNECT_CONFIRM_FAILED_TOKEN) {
      return res(
        ctx.status(400),
        ctx.json({
          data: {
            message: 'The shop has been associated with another account.',
          },
        }),
      );
    }
    return res(ctx.status(200), ctx.json({ data: 'success' }));
  }),
  rest.get(api.shop.getShopsUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(shops));
  }),
  rest.put(api.shop.createShopsUrl, (req, res, ctx) => {
    const { name } = req.body as CreateCustomShopParams;

    return res(ctx.status(200), ctx.json(createdShopData(name)));
  }),
  rest.delete(api.shop.removeShopsUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SUCCESS_DATA));
  }),
  rest.get(api.setting.getShopSettingUrl, (req, res, ctx) => {
    const shopId = req.url.searchParams.get('shopId');
    return res(ctx.status(200), ctx.json(getShopSetting(shopId)));
  }),
  rest.put(api.setting.updateShopInfoUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SUCCESS_DATA));
  }),
  rest.put(api.setting.updateShopOrderSettingUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SUCCESS_DATA));
  }),
  rest.post(api.shop.createShopsUrl, (req, res, ctx) => {
    const { name } = req.body as CreateCustomShopParams;

    return res(ctx.status(200), ctx.json(createdShopData(name)));
  }),
  rest.get(api.shop.getShopDetailUrl, (req, res, ctx) => {
    const { id = 1 } = req.params as { id: string | number };

    return res(ctx.status(200), ctx.json(getShopDetail(id)));
  }),
  rest.get(api.myLibrary.rootFolderId, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(rootFolderId));
  }),
  rest.get(api.myLibrary.getFolderListUrl, (req, res, ctx) => {
    const { id } = req.params as { id: string };
    return res(ctx.status(200), ctx.json(getFolderList(parseInt(id))));
  }),
  rest.get(api.myLibrary.folderUrl, (req, res, ctx) => {
    const { id } = req.params as { id: string };
    return res(ctx.status(200), ctx.json(getFolderDetail(parseInt(id))));
  }),
  rest.post(api.myLibrary.foldersUrl, (req, res, ctx) => {
    const { name } = req.body as { name: string };
    return res(ctx.status(200), ctx.json(getCreatedFolderData(name)));
  }),
  rest.put(api.myLibrary.folderUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SUCCESS_DATA));
  }),
  rest.delete(api.myLibrary.folderUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SUCCESS_DATA));
  }),
  rest.get(api.myLibrary.getImageListUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(libraryImages));
  }),
  rest.put(api.myLibrary.imageUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SUCCESS_DATA));
  }),
  rest.delete(api.myLibrary.imageUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SUCCESS_DATA));
  }),
  rest.get(api.product.homePageProductUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(homepageProducts));
  }),
  rest.get(api.product.getProductsUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),
  rest.get(api.category.getCategoriesUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categories));
  }),
  rest.get(api.product.findProductBySlugUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productDetail));
  }),
  rest.get(api.designModel.findByProductIdUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(designModel));
  }),
  rest.get(api.blog.getBlogsUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(blogs));
  }),
  rest.get(api.blog.findBlogUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(blogDetail));
  }),
  rest.get(api.faqCategory.getCategoriesUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(faqCategories));
  }),
  rest.get(api.faq.getFaqsByCategoryIdUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(faqs));
  }),
  rest.post(api.auth.registerUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(registerSuccess));
  }),
  rest.post(api.auth.sendResetEmailUrl, (req, res, ctx) => {
    const { email } = req.body as { email: string };

    if (email === process.env.NEXT_PUBLIC_MOCK_DEFAULT_SHOP_ACCOUNT_EMAIL) {
      return res(ctx.status(200), ctx.json(sendResetEmailSuccess));
    }

    return res(ctx.status(401), ctx.json(loginFailure));
  }),
  rest.post(api.auth.resetPasswordUrl, (req, res, ctx) => {
    const { email, code } = req.body as {
      email: string;
      code: string;
    };

    if (
      email === process.env.NEXT_PUBLIC_MOCK_DEFAULT_SHOP_ACCOUNT_EMAIL &&
      code === '123'
    ) {
      return res(ctx.status(200), ctx.json(resetPasswordSuccess));
    }

    return res(ctx.status(404), ctx.json(resetPasswordFailure));
  }),
  rest.post(api.auth.confirmRegistrationUrl, (req, res, ctx) => {
    const { code } = req.body as {
      code: string;
    };
    const token = req.headers.get('Authorization');

    if (token === 'Bearer ' + tokenData && code === '123') {
      return res(ctx.status(200), ctx.json(confirmRegistrationSuccess));
    }

    return res(ctx.status(404), ctx.json(confirmRegistrationFailure));
  }),
  rest.get(api.auth.getProfileFromWowUrl, (req, res, ctx) => {
    const wowToken = req.url.searchParams.get('wowToken');

    if (wowToken === getProfileFromWowSuccess.wowToken) {
      return res(ctx.status(200), ctx.json(getProfileFromWowSuccess));
    }

    return res(ctx.status(400), ctx.json(getProfileFromWowFailure));
  }),
  rest.post(api.shopProduct.createPendingProductUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(createPendingProductSuccess));
  }),
  rest.get(api.shopProduct.getShopProductsUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(shopProducts));
  }),
  rest.get(api.shopProduct.findShopProductUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(shopProductDetail));
  }),
  rest.delete(api.shopProduct.deleteShopProductUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(deleteShopProductSuccess));
  }),
  rest.post(api.shopProduct.publishShopProductToShopifyUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(publishShopProductSuccess));
  }),
  rest.post(api.shopProduct.copyShopProductUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SUCCESS_DATA));
  }),
  rest.get(api.shopProduct.getThirdPartyCollectionsUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(collections));
  }),
  rest.get(api.order.getOrdersUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(orders));
  }),
  rest.put(api.order.updateShippingAddressUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(updateShippingAddressSuccess));
  }),
  rest.get(api.setting.getSettingUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(settings));
  }),
  rest.put(api.setting.updateSettingUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(updateSettings));
  }),
  rest.get(api.order.getShippingMethodsUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(orderShippingCarrierOptions));
  }),
  rest.put(api.order.updateShippingMethodUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(updateShippingMethodSuccess));
  }),
  rest.get(api.order.getFindOrderUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getOrderDetail(req.params['id'])));
  }),
  rest.get(api.sampleCart.getSampleCartUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(sampleCartData));
  }),
  rest.delete(api.sampleCart.removeItemUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SUCCESS_DATA));
  }),
  rest.post(api.sampleCart.addItemUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SUCCESS_DATA));
  }),
  rest.post(api.sampleCart.createPendingOrderUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(SUCCESS_DATA));
  }),
  rest.get(api.sampleCart.getShippingMethodsUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(sampleCartShippingCarrierOptions));
  }),
  rest.get(api.creditCard.getCreditCardUrl, (req, res, ctx) => {
    return res(ctx.status(404));
  }),
  rest.get(api.pattern.getTokenUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(patternToken));
  }),
  rest.get(api.pattern.getCollectionsUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(patternCollections));
  }),
  rest.get(api.pattern.getOssRegionsUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getOssRegions));
  }),
  rest.put(
    api.shopProduct.updateShopProductShippingMethodUrl,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(
          updateShopProductShippingMethod(
            req.params['id'],
            JSON.parse(JSON.stringify(req.body)).shippingCarrierId,
          ),
        ),
      );
    },
  ),
  rest.get(api.pattern.getTokenUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(patternToken));
  }),
  rest.get(api.pattern.getCollectionsUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(patternCollections));
  }),
  rest.get(api.pattern.getOssRegionsUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getOssRegions));
  }),
  rest.get(api.countryVat.getCountryVatUrl, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(countryVat));
  }),
  rest.get(
    api.accountShippingRule.getAccountShippingRulesUrl,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(accountShippingRules));
    },
  ),
  rest.delete(
    api.accountShippingRule.deleteAccountShippingRuleUrl,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(SUCCESS_DATA));
    },
  ),
];
