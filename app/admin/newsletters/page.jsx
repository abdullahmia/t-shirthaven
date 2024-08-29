import { getNewsletters } from '@/services/subscribe/service';
import NewsLetterTable from './components/newsletter-table';

export default async function Newsletters() {
  const newsletters = await getNewsletters();
  return (
    <div>
      <NewsLetterTable newsletters={newsletters} />
    </div>
  );
}
