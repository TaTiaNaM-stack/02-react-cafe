import { useState } from 'react'
import css from './App.module.css';
import CafeInfo from './components/CafeInfo/CafeInfo.tsx';
import VoteOptions from './components/VoteOptions/VoteOptions.tsx';
import VoteStats from './components/VoteStats/VoteStats.tsx';
import{type Votes} from './types/votes.ts';
import type {VoteType} from './types/votes.ts';
import Notification from './components/Notification/Notification.tsx';
 
export default function App() {

  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const { good, neutral, bad } = votes;

  const handleVote = (type: VoteType) => {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1
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
      <VoteOptions 
      onVote={handleVote} 
      onReset={resetVotes} 
      canReset={good + neutral + bad > 0} />
      {good + neutral + bad > 0
        ? <VoteStats 
            votes={votes} 
            totalVotes={good + neutral + bad} 
            positiveRate={good > 0
               ? Math.round((good / (good + neutral + bad)) * 100)
               : 0} />
        : <Notification />}
    </div>
  );
}

