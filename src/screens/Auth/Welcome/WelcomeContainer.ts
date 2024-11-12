import { navigate } from '@Service/navigationService';
import { useAuthStore } from '@Store/authStore';

export default function useWelcome() {
  const {setUserAuthentication} = useAuthStore();

  const handleNavigate = (route: string) => {
    navigate(route);
  }

  const handleGuest = () => {
    setUserAuthentication(true, null);
  }

  return {
    handleNavigate,
    handleGuest
  };
}
