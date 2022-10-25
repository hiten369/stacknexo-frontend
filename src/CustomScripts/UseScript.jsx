import { useEffect } from 'react';

const useScript = (url,flag=true) => {
  useEffect(() => {
    if(flag)
    {
      const script = document.createElement('script');
      // script.appendChild(document.createTextNode(src));
      script.src = url;
      // script.async = true;
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      }
    }
  }, []);
};

export default useScript;