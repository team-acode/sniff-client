'use client';

import React, { useState } from 'react';
import { useSession } from '@/hooks/useSession';
import Slider from '@/components/matchingtest/Slider';
import Vibe from '@/components/matchingtest/Vibe';
import Individuality from '@/components/matchingtest/Individuality';
import Main from '@/components/matchingtest/Main';
import Persistence from '@/components/matchingtest/Persistence';
import Season from '@/components/matchingtest/Season';

interface SelectionsState {
  persistence: string;
  season: string;
  main: string;
  vibe: string[];
  individuality: string[];
}

const Page = () => {
  const [selections, setSelections] = useState<SelectionsState>({
    persistence: '',
    season: '',
    main: '',
    vibe: [],
    individuality: [],
  });

  const updateSelections = (
    category: keyof SelectionsState,
    selection: string | string[],
  ) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [category]: selection,
    }));
  };
  const session = useSession();
  const token = session?.jwt;
  const handleSubmit = async () => {
    const payload = {
      concentration: selections.persistence,
      season: selections.season,
      mainFamily: selections.main,
      scent1: selections.individuality[0], // 첫 번째 선택된 개성
      scent2: selections.individuality[1], // 두 번째 선택된 개성
      style1: selections.vibe[0],
      style2: selections.vibe[1],
    };
    console.log('Submitting selections:', payload);

    const headers = new Headers();
    headers.set('AUTHORIZATION', token!);
    try {
      const res = await fetch(`/api/extract`, {
        method: 'POST',
        body: JSON.stringify({ payload }),
        headers,
      });

      if (!res.ok) {
        throw new Error(`Failed to send request: ${res.status}`);
      }

      const responseData = await res.json();
      console.log('Response from server:', responseData);

      // window.location.replace(`/result`);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const slides = [
    <Persistence
      updateSelection={(selection: string) =>
        updateSelections('persistence', selection)
      }
    />,
    <Season
      updateSelection={(selection: string) =>
        updateSelections('season', selection)
      }
    />,
    <Main
      updateSelection={(selection: string) =>
        updateSelections('main', selection)
      }
    />,
    <Individuality
      updateSelection={(selection: string[]) =>
        updateSelections('individuality', selection)
      }
    />,
    <Vibe
      updateSelection={(selection: string[]) =>
        updateSelections('vibe', selection)
      }
      handleSubmit={handleSubmit}
    />,
  ];
  return (
    <div>
      <div>
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default Page;
