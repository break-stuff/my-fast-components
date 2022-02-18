import { FASTElement, attr, customElement } from '@microsoft/fast-element';
import { template } from './my-component.template';
import { styles } from './my-counter.styles';

/**
 * @tag my-counter
 * 
 * @summary This is a simple Storybook Button
 * 
 * @attr {number} value - starting value displayed in component
 * 
 * @slot default - The label displayed at the top of the component
 * 
 * @csspart count - Shadow part for styling the "count"
 *
 * @cssprop [--button-fill-color=#40527c] - Controls the color of the buttons
 * @cssprop [--button-text-color=white] - Controls the color of the button text
 * @cssprop [--button-border-radius=10rem] - Controls the border-radius of the buttons
 * @cssprop [--border-color=#40527c] - Controls the border colors
 * @cssprop [--border-size=2px] - Controls the border sizes
 *
 * @event {CustomEvent} updated - Emitted when the value changes
 *
 */
@customElement({
  name: 'my-counter',
  template,
  styles
})
export class MyCounter extends FASTElement {
  @attr value: number = 0;

  increment(): void {
    this.resetNonNumbers();
    this.value++;
    this.sendUpdate();
  }

  decrement(): void {
    this.resetNonNumbers();
    this.value--;
    this.sendUpdate();
  }

  private sendUpdate() {
    this.$emit('updated', this.value);
  }

  private resetNonNumbers() {
    if (isNaN(this.value)) {
      this.value = 0;
    }
  }
}
