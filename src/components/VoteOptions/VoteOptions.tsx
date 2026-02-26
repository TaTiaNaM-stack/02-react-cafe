// import { useState } from "react";  
import css from "./VoteOptions.module.css";
// import{type Votes} from '../../types/votes.ts';

interface VoteOptionsProps {
    onVote: (type: string) => void;
    onReset: () => void;
    canReset: true;
}

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps){
const onVoteHandler = (type: string) => {
    onVote(type);
}
const onResetHandler = () => {
    onReset();
}
    return (
        <div className={css.container}>
            <button className={css.button} onClick={() => onVoteHandler("Good")}>Good</button>
            <button className={css.button} onClick={() => onVoteHandler("Neutral")}>Neutral</button>
            <button className={css.button} onClick={() => onVoteHandler("Bad")}>Bad</button>
            <button className={`${css.button} ${css.reset}`} onClick={onResetHandler} disabled={!canReset}>Reset</button>
        </div>
  );
}





// interface VoteOptionsProps {
//     votes: Votes;
//     canReset: true;
//     handleVote: (type: string) => void;
//     resetVotes: () => void;
//     onVote: (type: string) => void;
// }

// export default function VoteOptions({ votes, canReset, handleVote, resetVotes }: VoteOptionsProps) {
// const onVote = (type: string) => {
//     handleVote(type);
// }
// }
// const resetVotes = () => {    console.log("Votes reset");
// }

//     return (
//         <div className={css.container}>
//             <button className={css.button} onClick={onVote}>Good</button>
//             <button className={css.button} onClick={onVote}>Neutral</button>
//             <button className={css.button} onClick={onVote}>Bad</button>
//             <button className={`${css.button} ${css.reset}`} onClick={resetVotes}>Reset</button>
//         </div>
//   );
// };


// export default function VoteOptions({ votes, canReset, handleVote, resetVotes, onVote }: VoteOptionsProps) {
//     // локальна функція-проксі, яку можна викликати з кнопок
//     const handleVoteClick = (type: string) => {
//         // викликаємо проп-колбек
//         onVote(type);
//     };

//     return (
//         <div className={css.container}>
//             <button className={css.button} onClick={onVote}>Good</button>
//             <button className={css.button} onClick={() => handleVoteClick("Neutral")}>Neutral</button>
//             <button className={css.button} onClick={() => handleVoteClick("Bad")}>Bad</button>
//             <button className={`${css.button} ${css.reset}`} onClick={resetVotes} disabled={!canReset}>
//                 Reset
//             </button>
//         </div>
//     );
// };