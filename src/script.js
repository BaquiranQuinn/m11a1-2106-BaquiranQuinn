// Module 11, Activity 1 - Never show the user NaN
'use strict';

function parseAmount(raw, label) {
  const text = raw.trim();

  if (text === '') {
    throw new Error(`Enter a ${label}.`);
  }

  const value = Number(text);

  if (Number.isNaN(value)) {
    throw new Error(`${capitalize(label)} must be a number.`);
  }

  if (value < 0) {
    throw new Error(`${capitalize(label)} can't be negative.`);
  }

  return value;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function recalcTotal() {
  const priceInput = document.getElementById('price');
  const qtyInput = document.getElementById('qty');
  const totalEl = document.getElementById('total');
  const errorEl = document.getElementById('error');

  try {
    const price = parseAmount(priceInput.value, 'price');
    const qty = parseAmount(qtyInput.value, 'quantity');

    const total = price * qty;

    totalEl.textContent = total;
    errorEl.textContent = '';
  } catch (error) {
    totalEl.textContent = '--';
    errorEl.textContent = error.message;
    console.error(error);
  }
}

document.getElementById('price').addEventListener('input', recalcTotal);
document.getElementById('qty').addEventListener('input', recalcTotal);

recalcTotal();