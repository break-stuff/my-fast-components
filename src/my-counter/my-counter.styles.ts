import { css } from '@microsoft/fast-element'

export const styles = css`
  :host {
    --button-fill-color: #40527c;
    --button-text-color: white;
    --button-border-radius: 10rem;
    --border-color: #40527c;
    --border-size: 2px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 150px;
    text-align: center;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    display: inline-flex;
    margin-bottom: 1rem;
  }

  .control-decrease {
    font-size: 1.5rem;
    padding: 0.75rem 1rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .control-increase {
    font-size: 1.5rem;
    padding: 0.75rem 1rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .count {
    font-size: 1.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    border: solid var(--border-size) var(--border-color);
    margin: 0 calc(var(--border-size)*-1);
  }

  button {
    line-height: 1;
    cursor: pointer;
    border: solid var(--border-size) var(--border-color);
    border-radius: var(--button-border-radius);
    color: var(--button-text-color);
    background-color: var(--button-fill-color);
  }
`;
