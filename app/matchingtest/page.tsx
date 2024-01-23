'use client';
import React, { useState } from 'react';
import Slider from '@/components/matchingtest/Slider';
import Vibe from '@/components/matchingtest/Vibe';
import Individuality from '@/components/matchingtest/Individuality';
import Main from '@/components/matchingtest/Main';
import Persistence from '@/components/matchingtest/Persistence';
import Season from '@/components/matchingtest/Season';
interface SelectionsState {
  persistence: string[];
  season: string[];
  main: string[];
  individuality: string[];
  vibe: string[];
}

const Page = () => {
  const [selections, setSelections] = useState<SelectionsState>({
    persistence: [],
    season: [],
    main: [],
    individuality: [],
    vibe: [],
  });

  const updateSelections = (
    category: keyof SelectionsState,
    selection: string[],
  ) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [category]: selection,
    }));
  };

  const handleSubmit = () => {
    console.log('Submitting selections:', selections);
  };

  const slides = [
    <Persistence
      updateSelection={(selection: string[]) =>
        updateSelections('persistence', selection)
      }
    />,
    <Season
      updateSelection={(selection: string[]) =>
        updateSelections('season', selection)
      }
    />,
    <Main
      updateSelection={(selection: string[]) =>
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
