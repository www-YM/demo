export enum ShippingRuleConditionType {
  SHOPS = 'shops',
  COUNTRIES = 'countries',
  SHIPPING_METHOD_NAMES_IN_STORE = 'shipping_method_names_in_store',
  WEIGHT_BASE = 'weight_base',
}

declare global {
  type ShippingRuleShippingMethod = { id: number; name: string };

  type ShippingRuleConditionShops = {
    id: number;
    type: ShippingRuleConditionType.SHOPS;
    value: { shops: string[] };
  };

  type ShippingRuleConditionCountries = {
    id: number;
    type: ShippingRuleConditionType.COUNTRIES;
    value: { countries: string[] };
  };

  type ShippingRuleConditionShippingMethodNamesInStore = {
    id: number;
    type: ShippingRuleConditionType.SHIPPING_METHOD_NAMES_IN_STORE;
    value: { shippingMethodNames: string[] };
  };

  type ShippingRuleConditionWeightBase = {
    id: number;
    type: ShippingRuleConditionType.WEIGHT_BASE;
    value: {
      minWeight: number;
      maxWeight: number;
    };
  };

  type ShippingRuleCondition =
    | ShippingRuleConditionCountries
    | ShippingRuleConditionShops
    | ShippingRuleConditionShippingMethodNamesInStore
    | ShippingRuleConditionWeightBase;

  type MultipleShippingMethods = 'multiple_shipping_methods';

  type ShippingRuleAction = {
    id: number;
    type: MultipleShippingMethods;
    value: { shippingMethods: { id: number; name: string }[] };
  };

  interface ShippingRule {
    id: number;
    name: string;
    desc: string;
    priority: number;
    active?: boolean;
    conditions?: ShippingRuleCondition[];
    action: ShippingRuleAction;
  }

  interface UserSetting {
    imageRegions: string[];
    imageRegion: string;
    stripeCustomerId: string;
    autoProcessing: { isAutoProcessing: boolean; autoProcessingDelay: number };
    paymentMethods: {
      id: string;
      type: 'card';
      isDefault: boolean;
      meta: {
        expMonth: string;
        expYear: string;
        last4: string;
        brand: string;
      };
    }[];
    creditCard?: {
      id: string;
      expMonth: string;
      expYear: string;
      last4: string;
      branch: string;
    };
  }

  interface CreditCard {
    last4: string;
    expMonth: string;
    expYear: string;
  }

  interface ShopSetting {
    shopId: number | string;
    name: string;
    website: string;
    isAutoProcessing: boolean;
    autoProcessingDelay: number;
  }

  type GetShippingRuleConditionType<
    T extends ShippingRuleConditionType,
    K extends ShippingRuleCondition = ShippingRuleCondition,
  > = K extends any ? (K['type'] extends T ? K : never) : never;

  type ValueOf<T> = T[keyof T];

  type GetShippingRuleConditionValueType<T extends ShippingRuleConditionType> =
    T extends ShippingRuleConditionType.WEIGHT_BASE
      ? ShippingRuleConditionWeightBase['value']
      : ValueOf<
          GetShippingRuleConditionType<T, ShippingRuleCondition>['value']
        >;
}

export {};
