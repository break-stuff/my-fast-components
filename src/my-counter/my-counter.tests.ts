import { fixture, assert } from '@open-wc/testing';
import { MyCounter } from './index';

const tag = new MyCounter().tagName;

describe('MyCounter', () => {
  it('increases the count on button click', async () => {
    // Arrange
    const el = await fixture<MyCounter>(`<${tag}></${tag}>`);
    const button = el.shadowRoot?.querySelector('.control-increase') as HTMLButtonElement;

    // Act
    button.click();

    // Assert
    assert.equal(el.value, 1);
    assert.isAccessible(el);
  });

  it('decreases the count on button click', async () => {
    // Arrange
    const el = await fixture<MyCounter>(`<${tag}></${tag}>`);
    const button = el.shadowRoot?.querySelector('.control-decrease') as HTMLButtonElement;

    // Act
    button.click();

    // Assert
    assert.equal(el.value, -1);
  });
});
