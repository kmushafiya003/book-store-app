import { useEffect } from 'react';

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (events) => {
      //agr box ke andr click hua hai to kuch nhi krna

      if (!ref.current || ref.current.contains(events.target)) {
        
        //!ref.current checks if the reference to the DOM element is null or undefined

        //  events.target refers to the element that triggered the event (e.g., a click event).
        // .contains() is a method of DOM elements that returns true if the specified element is a descendant of the calling element.
        return;
      }

      handler(events);
    };

    //add the listener
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    //remove the listener

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
