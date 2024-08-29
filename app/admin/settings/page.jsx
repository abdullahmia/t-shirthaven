import SettingsForm from './components/settings-form';

export const metadata = {
  title: 'Settings',
  description: 'Manage settings. Update, delete settings.',
};

export default function Settings() {
  return (
    <div>
      <SettingsForm />
    </div>
  );
}
