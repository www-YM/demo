import { useRouter } from 'next/router';

export default function useGoto() {
  const router = useRouter();

  const goto = (uri: string) => {
    router.push(uri);
  };

  return { goto };
}
