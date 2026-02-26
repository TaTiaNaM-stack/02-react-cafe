import { useState } from 'react'
import css from './App.module.css';
import CafeInfo from './components/CafeInfo/CafeInfo.tsx';
import VoteOptions from './components/VoteOptions/VoteOptions.tsx';
import{type Votes} from './types/votes.ts';
import type {VoteType} from './types/votes.ts';
 
   const initialVotes: Votes = {
    good: 0,
    neutral: 0,
    bad: 0
  };

export default function App() {

  const [votes, setVotes] = useState<Votes>(initialVotes);
  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1
    }));
  }
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }
  return (
    <div className={css.app}>
            <CafeInfo />
      <VoteOptions onVote={votes} onReset={handleVote} canReset={resetVotes} />
    </div>
  );
}

