import { auth } from '@/lib/auth';
import { getUserByEmail } from '@/services/user';
import AddressForm from './components/address-form';

export const metadata = {
  title: 'Shipping Address',
  description: 'This is your address page. You can manage your address here.',
};

export default async function Address() {
  const { user: loggedInUser } = await auth();
  const user = await getUserByEmail(loggedInUser?.email);
  return (
    <div>
      <h2 className="text-[16px] font-semibold text-primary">
        Shipping Address
      </h2>

      <div className="mt-12 w-full lg:w-4/6">
        <AddressForm
          initialData={{
            ...user.address,
            id: user?.id,
          }}
        />
      </div>
    </div>
  );
}
