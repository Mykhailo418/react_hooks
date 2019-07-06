import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Repositories = () => {
    const [sinceRepoId, setSinceRepoId] = useState(1);
	const [repos, setRepos] = useState([]);

    const loadRepos = async () => {
        const res = await fetch(`https://api.github.com/repositories?since=${sinceRepoId}`);
        const resposList = await res.json();
        setRepos(resposList);
    }

    useEffect(() => {
        loadRepos();
        return () => {
            // cleanup
            console.log('useEffect - clean up');
            setRepos([]);
        }
    }, [sinceRepoId]);

    return (
      <section>
        <h3>Repositories:</h3>
        <input type="number" value={sinceRepoId} onChange={onChangeId} />
        {outputRepos()}
      </section>
    );

    function onChangeId(e){
        const value = (e.target.value < 1) ? 1 : e.target.value;
        setSinceRepoId(value);
    }

    function outputRepos(){
        if(!repos || !repos.length) return 'Loading...';
        const list = repos.map((repo) => {
           return (
                <li key={repo.id}>
                    <strong>{repo.name}</strong>
                    <p>{repo.description}</p>
                </li>
            )
        });
        return <ul style={{maxHeight: '200px', overflowY: 'scroll'}}>{list}</ul>
    }
    
}

export default Repositories;
