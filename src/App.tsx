import { useState } from 'react'
import css from './App.module.css';
import CafeInfo from './components/CafeInfo/CafeInfo.tsx';
import VoteOptions from './components/VoteOptions/VoteOptions.tsx';
import{type Votes} from './types/votes.ts';
import{type VoteType} from './types/votes.ts';
  const votes = {
    good: 0,
    neutral: 0,
    bad: 0
  };
export default function App() {
  const [votes, setVotes] = useState<Votes>(votes);
  const handleVote = (type: string) => {
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
      <VoteOptions votes={votes} />
    </div>
  );
}

// export default function App() {
//   return (
//     <div className={css.app}>
//       <CafeInfo />
//       <VoteOptions votes={votes} />
//     </div>
//   );
// }