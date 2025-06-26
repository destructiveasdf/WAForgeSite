import { useEffect } from 'react'

const ForgeConInterest = () => {
    useEffect(() => {
        const widgetScriptSrc = 'https://tally.so/widgets/embed.js';

        const load = () => {
            if (typeof Tally !== 'undefined') {
                Tally.loadEmbeds();
                return;
            }

            document
                .querySelectorAll('iframe[data-tally-src]:not([src])')
                .forEach((iframeEl) => {
                    iframeEl.src = iframeEl.dataset.tallySrc;
                });
        };

        if (typeof Tally !== 'undefined') {
            load();
            return;
        }

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
                <button
                    data-tally-open="mYbG7N"
                    data-tally-layout="modal"
                    className='relative inline-flex items-center justify-center p-0.5 mt-5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[12.5px] group bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] group-hover:from-green-400 duration-[0.1s] hover:shadow-[0_0px_15px_0px_rgba(0,255,130,1)] dark:text-white '
                >
                    <span className='tracking-[2px] font-Montserrat font-light relative transition-all ease-in duration-75 bg-white dark:bg-[#18181b] rounded-[9.5px] px-10 py-3'>
                        INTERESTED?
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ForgeConInterest;