import { useEffect, useState } from 'react';
import { Container, fetchContainers } from '../supabase';

export function useContainers() {
  let [containers, setContainers] = useState<Container[]>([]);
  const fetch = () => {
    fetchContainers().then(setContainers);
  };

  useEffect(() => {
    fetch();
  }, []);

  return { containers, fetch };
}
