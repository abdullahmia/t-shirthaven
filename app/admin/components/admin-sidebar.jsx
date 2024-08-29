'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menus = [
  { title: 'Dashboard', url: '/admin', icon: '/assets/icons/dashboard.png' },
  {
    title: 'Categories',
    url: '/admin/categories',
    icon: '/assets/icons/package.png',
  },
  {
    title: 'Products',
    url: '/admin/products',
    icon: '/assets/icons/products.png',
  },
  {
    title: 'Reviews',
    url: '/admin/reviews',
    icon: '/assets/icons/reviews.png',
  },
  {
    title: 'Orders',
    url: '/admin/orders',
    icon: '/assets/icons/orders.png',
  },
  {
    title: 'Customers',
    url: '/admin/customers',
    icon: '/assets/icons/users.png',
  },
  {
    title: 'Newsletters',
    url: '/admin/newsletters',
    icon: '/assets/icons/newsletter.png',
  },
  {
    title: 'Settings',
    url: '/admin/settings',
    icon: '/assets/icons/settings.png',
  },
];

export default function AdminSidebar() {
  // hooks
  const pathname = usePathname();

  return (
    <div className="sticky top-0 h-screen w-[260px] overflow-y-auto border-r border-[#E9E9EB] bg-white p-5">
      <Link href="/admin">
        <Image
          src="/admin-logo.png"
          width={116}
          height={40}
          alt="admin logo"
          className="m-auto"
        />
      </Link>

      {/* Menus */}
      <ul className="mt-14 list-none space-y-2">
        {menus?.map((menu) => (
          <li key={menu.title}>
            <Link
              href={menu.url}
              className={`flex items-center gap-3 rounded px-6 py-3 text-sm font-medium text-[#5C5F6A] hover:text-primary ${
                pathname === menu.url
                  ? 'bg-[#F7F8FA] text-primary'
                  : 'hover:bg-[#F7F8FA]'
              }`}
            >
              <Image src={menu.icon} width={20} height={20} alt="icon" />
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
