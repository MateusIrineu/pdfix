<<<<<<< HEAD
import HomePage from "../components/homePage/HomePage";

export default function Home() {
  return <HomePage />;
}
=======
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/login');
}

>>>>>>> origin/develop
