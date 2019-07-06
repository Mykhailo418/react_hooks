import { useEffect } from 'react';

export default function useOnClickOutside(ref, handle){
	useEffect(() => {
	
		function listener(event){
			if(!ref.current || !ref.current.contains(event.target)){
				handle(true);
			}else{
				handle(false);
			} 
		}

		document.addEventListener('click', listener);

		return () => {
			document.removeEventListener('click', listener);
		}
	}, []);
}