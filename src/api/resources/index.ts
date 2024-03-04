import { AxiosInstance } from 'axios';
import AuthResource from './AuthResource';
import BlogResource from './BlogResource';
import CategoryResource from './CategoryResource';
import CreditCardResource from './CreditCardResource';
import DesignModelResource from './DesignModelResource';
import FaqCategoryResource from './FaqCategoryResource';
import FaqResource from './FaqResource';
import ImageResource from './ImageResource';
import OrderResource from './OrderResource';
import PatternResource from './PatternResource';
import ProductResource from './ProductResource';
import SampleCartResource from './SampleCartResource';
import SettingResource from './SettingResource';
import ShopProductResource from './ShopProductResource';
import ShopResource from './ShopResource';
import EtsyResource from './EtsyResource';
import MyLibraryResource from './MyLibraryResource';
import CountryVatResource from './CountryVatResource';
import AccountShippingRuleResource from './AccountShippingRuleResource';
import CustomerPodDesignResource from './CustomerPodDesignResource';
import PaymentMethodResource from './PaymentMethodResource';
import BrandingMaterialTemplateResource from './BrandingMaterialTemplateResource';
import BrandedMaterialResource from './BrandedMaterialResource';
import WarehouseItemResource from './WarehouseItemResource';
import PaymentResource from './PaymentResource';

export default function Resource(axios: AxiosInstance) {
  return {
    payment: new PaymentResource(axios),
    customerPodDesign: new CustomerPodDesignResource(axios),
    order: new OrderResource(axios),
    brandingMaterialTemplate: new BrandingMaterialTemplateResource(axios),
    brandedMaterial: new BrandedMaterialResource(axios),
    product: new ProductResource(axios),
    warehouseItem: new WarehouseItemResource(axios),
    pattern: new PatternResource(axios),
    category: new CategoryResource(axios),
    designModel: new DesignModelResource(axios),
    auth: new AuthResource(axios),
    shopProduct: new ShopProductResource(axios),
    shop: new ShopResource(axios),
    image: new ImageResource(axios),
    setting: new SettingResource(axios),
    accountShippingRule: new AccountShippingRuleResource(axios),
    creditCard: new CreditCardResource(axios),
    paymentMethod: new PaymentMethodResource(axios),
    sampleCart: new SampleCartResource(axios),
    faqCategory: new FaqCategoryResource(axios),
    faq: new FaqResource(axios),
    blog: new BlogResource(axios),
    etsy: new EtsyResource(axios),
    myLibrary: new MyLibraryResource(axios),
    countryVat: new CountryVatResource(axios),
  };
}
