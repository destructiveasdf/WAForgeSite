import { useEffect } from 'react'
import styled from 'styled-components';
const ForgeConInterest = (plugin) => {
    const {thing} = plugin;
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
        
        <StyledWrapper>
        <a target="_blank" rel="noopener noreferrer">
      <button   data-tally-open="3yA2GB"
                    data-tally-layout="modal" className="styled-button ml-0 mr-14 h-[60px] md:ml-30 md:mr-5">
                        
        {thing}
        
      </button></a>
    </StyledWrapper>
    );
};
const StyledWrapper = styled.div`
  .styled-button {
    position: relative;
    padding: 0.5rem 2rem;
    font-size: 1.1rem;
    font-weight: bold;
    color: #ffffff;
    background: linear-gradient(to bottom,rgba(23, 23, 23, 0.5),rgba(36, 36, 36, 0.5));
    border-radius: 9999px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 1), 0 10px 20px rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solidrgba(41, 41, 41, 0.5);

    
    margin-top: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    
  }

  .styled-button::before {
    content: "";
    position: absolute;
    top: -2px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    background: linear-gradient(to bottom, #292929, #000000);
    z-index: -1;
    border-radius: 9999px;
    transition: all 0.2s ease;
    opacity: 1;
  }

  .styled-button:active {
    transform: translateY(2px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 1), 0 5px 10px rgba(0, 0, 0, 0.4);
  }

  .styled-button .inner-button {
    position: relative; /* Ensure relative positioning for pseudo-element */
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #171717, #242424);
    width: 40px;
    height: 40px;
    margin-left: 10px;
    border-radius: 50%;
    box-shadow: 0 0 1px rgba(0, 0, 0, 1);
    border: 1px solid #252525;
    transition: all 0.2s ease;
  }

  .styled-button .inner-button::before {
    content: "";
    position: absolute;
    top: -2px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    background: linear-gradient(to bottom, #292929, #000000);
    z-index: -1;
    border-radius: 9999px;
    transition: all 0.2s ease;
    opacity: 1;
  }
  .styled-button .inner-button .icon {
    filter: drop-shadow(0 10px 20px rgba(26, 25, 25, 0.9))
      drop-shadow(0 0 4px rgba(0, 0, 0, 1));
    transition: all 0.4s ease-in-out;
  }
  .styled-button .inner-button .icon:hover {
    filter: drop-shadow(0 10px 20px rgba(50, 50, 50, 1))
      drop-shadow(0 0 20px rgba(2, 2, 2, 1));
    transform: rotate(-35deg);
  }`;


export default ForgeConInterest;