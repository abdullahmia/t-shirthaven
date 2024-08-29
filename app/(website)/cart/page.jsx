'use client';

import ClientWrapper from '@/components/client-wrapper';
import { GenerateBreadcrumb } from '@/components/generate-breadcrumb';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import CartItems from './components/cart-items';
import CartTotal from './components/cart-total';

export default function Cart() {
  return (
    <ClientWrapper>
      <div>
        <Provider store={store}>
          <GenerateBreadcrumb title={'Cart'} />

          <div className="responsive container flex flex-col gap-28 pt-20 md:flex-row">
            <div className="md:w-3/4">
              <h2 className="text-lg font-semibold text-primary">Your cart</h2>

              <div className="pb-10 pt-2">
                <hr className="" />
              </div>

              <CartItems />
            </div>
            <div className="md:w-1/4">
              <CartTotal />
            </div>
          </div>
        </Provider>
      </div>
    </ClientWrapper>
  );
}
