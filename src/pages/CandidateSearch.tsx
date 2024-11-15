import React, { useState } from 'react';
import { searchGithub } from "../api/API"
const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<any[]>([]); // Just using `any[]` for simplicity
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const fetchCandidates = async () => {
    if (!searchTerm) {
      setMessage('Please enter a search term');
      return;
    }
    searchGithub(searchTerm).then((data: any) => {
      if (!data) {
        setMessage('No candidates found or invalid response');
        setCandidates([]);
        return;
      }
      setCandidates(data);
      setMessage('Candidates loaded');
    });
  };
  
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search GitHub users"
      />
      <button onClick={fetchCandidates}>Load Candidates</button>
      <p>{message}</p>
      {candidates.length > 0 && (
        <ul>
          {candidates.map((candidate: any) => (
            <li key={candidate.id}>
              <img
                src={candidate.avatar_url}
                alt={candidate.login}
                width={50}
                height={50}
              />
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                {candidate.login}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CandidateSearch;