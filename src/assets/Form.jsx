import { useEffect } from 'react';

const Form = () => {
	// The code below will load the embed
	useEffect(() => {
		const widgetScriptSrc = 'https://tally.so/widgets/embed.js';

    const load = () => {
      // Load Tally embeds
      if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
        return;
      }

      // Fallback if window.Tally is not available
      document
        .querySelectorAll('iframe[data-tally-src]:not([src])')
        .forEach((iframeEl) => {
          iframeEl.src = iframeEl.dataset.tallySrc;
        });
    };

    // If Tally is already loaded, load the embeds
    if (typeof Tally !== 'undefined') {
      load();
      return;
    }

    // If the Tally widget script is not loaded yet, load it
    if (document.querySelector(`script[src="${widgetScriptSrc}"]`) === null) {
      const script = document.createElement('script');
      script.src = widgetScriptSrc;
      script.onload = load;
      script.onerror = load;
      document.body.appendChild(script);
      return;
    }
	}, []);

  return (
    <div>    
      <div className='relative w-[30vw]'>
      <button data-tally-open="mJ28NX" data-tally-layout="modal" className='relative inline-flex items-center justify-center p-0.5 mt-5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[12.5px] group bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] group-hover:from-green-400 duration-[0.1s] hover:shadow-[0_0px_15px_0px_rgba(0,255,130,1)] dark:text-white '><span className='font-Montserrat font-light relative transition-all ease-in duration-75 bg-white dark:bg-[#18181b] rounded-[9.5px] px-5 py-2'>Sign Up</span></button>
    </div>
  </div>
  );
};
export default Form;