import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { QueryParamProvider } from 'components/QueryParamProvider';
import { useRouter } from 'next/router';
import React from 'react';
import {
  findCategory,
  genProductCategoriesURI,
  genProductURI,
} from 'utils/categories';
import BaseNotification from '../../components/BaseNotification';
import { injectIntl, IntlShape } from 'react-intl';
import ProductsList from 'components/business/ProductsList';
import algoliasearch from 'algoliasearch/lite';
import singletonRouter from 'next/router';
import {
  Configure,
  HierarchicalMenu,
  Hits,
  InstantSearch,
  InstantSearchSSRProvider,
  InstantSearchServerState,
  SearchBox,
} from 'react-instantsearch';
import ProductCard from '../../components/business/ProductsList/ProductCard';

const searchClient = algoliasearch(
  'FO1R8KU1Q2',
  'e507d2bee28aa4c5dea75986afe32972',
);

type Props = {
  serverState?: InstantSearchServerState;
  url?: string;
  intl: IntlShape;
};

const HitComponent = ({ hit }) => {
  return (
    <ProductCard
      product={hit}
      onClick={() => console.log('clicked')}
    ></ProductCard>
  );
};

const CustomProducts = ({  serverState, url , intl }: Props): JSX.Element => {
  const router = useRouter();

  function createInstantSearchRouterNext(arg0: { serverUrl: string | undefined; singletonRouter: any; routerOptions: { cleanUrlOnDispose: boolean; }; }): import("instantsearch.js").Router<import("instantsearch.js").UiState> | undefined {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <Section>
        <>
          <SectionHeader
            title={intl.formatMessage({
              defaultMessage: 'Custom products',
              description: 'Custom products',
            })}
            subtitle={intl.formatMessage({
              defaultMessage:
                'Custom printed products and sell them online under your own brand.',
              description:
                'Custom printed products and sell them online under your own brand.',
            })}
            align="left"
            titleVariant="h3"
          />
          <BaseNotification></BaseNotification>

          <InstantSearchSSRProvider {...serverState}>
          <InstantSearch
            searchClient={searchClient}
            indexName="dev_inkpod-products-search"
            future={{ preserveSharedStateOnUnmount: true }}
            routing={{
              router: createInstantSearchRouterNext({
                serverUrl: url,
                singletonRouter,
                routerOptions: {
                  cleanUrlOnDispose: false,
                },
              }),
            }}
          >
            <Configure
              analytics={false}
              hitsPerPage={2}
            />
            <SearchBox />
            <HierarchicalMenu
              attributes={[
                'categories.lvl0',
                'categories.lvl1',
                'categories.lvl2',
              ]}
            ></HierarchicalMenu>
            <Hits hitComponent={HitComponent}></Hits>
          </InstantSearch>
          </InstantSearchSSRProvider>
        </>
      </Section>
    </div>
  );
};

export default injectIntl(CustomProducts);
