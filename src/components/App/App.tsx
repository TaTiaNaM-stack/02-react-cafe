// import React, { useState } from 'react';
// import css from './App.module.css';
//   const votes = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };
// export default function App() {

//   const [votes, setVotes] = useState(votes);
//   const handleVote = (type) => {
//     setVotes(prevVotes => ({
//       ...prevVotes,
//       [voteType]: prevVotes[voteType] + 1
//     }));
//   }
//   const resetVotes = () => {
//     setVotes({
//       good: 0,
//       neutral: 0,
//       bad: 0
//     });
//   }
//   return (
//     <div className={css.app}></div>
//   );
// }