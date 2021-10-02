/**
 * index.js
 * 
 * currency amount input field formatter implementation.
 * 
 * function formatAmount(html_input_element_id)
 * 
 * By Debasish Roy, https://github.com/devindia
 * 
 * License : https://github.com/devindia/currency-amount-input-format/blob/main/LICENSE (MIT)
 * source  : https://github.com/devindia/currency-amount-input-format
 * 
 */

var formatAmount = (id) => {
    let _element = document.getElementById(id);
    let running_value = String(_element.value);
    let decimal_position = running_value.indexOf('.');
    let left_flank = running_value.substring(0, decimal_position);
    let right_flank = running_value.substring(decimal_position);
    left_flank = left_flank.replace(/\D/g, '');
    right_flank = right_flank.replace(/\D/, '');
    let detect_NaN = running_value.replace(/\D/, '');
    if (detect_NaN == '' || running_value == '.0')
        _element.value = '';
    else {
        if (running_value.length >= 2) {
            if (right_flank.length > 2)
                right_flank = right_flank.substring(0, 2);
            else if (right_flank.length == 1)
                right_flank += '0';
            else if (right_flank.length == 0)
                right_flank = '00';
            let formatted_amount = left_flank + "." + right_flank;
            _element.value = formatted_amount;
            if (formatted_amount[0] == '.') {
                _element.focus();
                _element.setSelectionRange(0, 0);
            }
        }
    }
}
module.exports.formatAmount = formatAmount;