import { html } from "@microsoft/fast-element";
import { MyCounter } from ".";

export const template = html<MyCounter>`
<template>
  <div class="total-label">
    <slot></slot>:
  </div>

  <span class="controls">
    <button class="control-decrease" @click="${x => x.decrement()}" aria-label="decrease">
      -
    </button>
    <span class="count" part="count">${x => x.value}</span>
    <button class="control-increase" @click="${x => x.increment()}" aria-label="increase">
      +
    </button>
  </span>
</template>
`;
