import React, { useReducer } from 'react';
import {useSpring, animated} from 'react-spring';
const RepoList = ({repos}) =>{
    const propsSpring = useSpring({
        opacity: 1,
        from: {opacity: 0}
    });

  return (
    <animated.ul style={{...propsSpring, maxHeight: '200px', overflowY: 'scroll'}}>
     {
      repos.map((repo) => {
        return (
             <li key={repo.id}>
                 <strong>{repo.name}</strong>
                 <p>{repo.description}</p>
             </li>
         )
      })
     }
    </animated.ul>
  );
}

export default RepoList;
