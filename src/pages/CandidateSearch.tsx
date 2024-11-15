import React, { useState } from 'react';

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<any[]>([]); // State for storing candidates
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for the search input
  const [message, setMessage] = useState<string>(''); // State for displaying messages

  const fetchCandidates = async () => {
    if (!searchTerm) {
      setMessage('Please enter a search term');
      return;
    }
  
    try {
      // Ensure you are using `import.meta.env.VITE_GITHUB_TOKEN` here.
      const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`, // Correct usage of `import.meta.env`
        },
      });
  
      const data = await response.json();
      console.log('Fetched data:', data);
  
      if (!response.ok || !data.items) {
        setMessage('No candidates found or invalid response');
        setCandidates([]);
        return;
      }
  
      setCandidates(data.items);  // Update candidates
      setMessage('Candidates loaded');
    } catch (err) {
      console.error('Error fetching candidates:', err);
      setMessage('An error occurred while fetching candidates.');
    }
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
        <div>
          {/* Displaying the first candidate's details */}
          <h2>{candidates[0].login}</h2>
          <img
            src={candidates[0].avatar_url}
            alt={candidates[0].login}
            width={50}
            height={50}
          />
          <p>Location: {candidates[0].location || 'N/A'}</p>
          <p>Email: {candidates[0].email || 'N/A'}</p>
          <p>Company: {candidates[0].company || 'N/A'}</p>
          <a href={candidates[0].html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;
