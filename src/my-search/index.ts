import { FASTElement, customElement, html, attr, css, ref } from '@microsoft/fast-element';

/**
 * @tag my-search
 * 
 * @summary This is a search component
 *
 * @attr {string} label - the label associated with the search field
 * 
 * @slot default - content displayed in the search button
 * 
 * @cssprop [--font-size=1rem] - Controls the font size for all elements in the component
 * @cssprop [--padding=0.25rem] - Controls the padding for the `input` and `button` elements
 * 
 */
@customElement({
    name: 'my-search',
    template: html<MySearch>`
        <label>
            ${x => x.label}
            <input type="search" ${ref('searchInput')} @search="${x => x.searchHandler()}" />
        </label>
        <button @click="${x => x.buttonClickHandler()}">
            <slot>Search</slot>
        </button>
    `,
styles: css`
    :host {
        --font-size: 1rem;
        --padding: 0.25rem;

        display: block;
        font-size: var(--font-size);
    }

    input {
        padding: var(--padding);
        font-size: var(--font-size);

    }

    button {
        cursor: pointer;
        padding: var(--padding);
        font-size: var(--font-size);
    }
`
})
export class MySearch extends FASTElement {
    @attr label: string = 'My Search';
    searchInput: HTMLInputElement;

    private searchHandler() {
        this.$emit('find', this.searchInput.value);
    }

    private buttonClickHandler() {
        this.$emit('find', this.searchInput.value);
    }
}