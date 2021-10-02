
/**
 * Type definitions for index.js
 * 
 * Project: https://github.com/devindia/currency-amount-input-format
 * 
 * Definitions by: Debasish Roy, https://github.com/devindia
 * 
 */

declare namespace FormatCurrencyAmount {

    function formatAmount(id: any): void;

}

declare global {
    const formatAmount: typeof FormatCurrencyAmount.formatAmount;
    interface Window {
        formatAmount: typeof FormatCurrencyAmount.formatAmount;
    }
}

export = FormatCurrencyAmount;
