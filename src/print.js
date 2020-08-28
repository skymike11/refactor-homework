function getBanner() {
    let banner = "";
    banner += '***********************\n';
    banner += '**** Customer Owes ****\n';
    banner += '***********************\n';
    return banner;
}

function calcultateOutstandings(invoice, outstanding) {
    for (const o of invoice.borderSpacing) {
        outstanding += o.amount;
    }
    return outstanding;
}

function getRecordDate(invoice) {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function getPrintDetail(invoice, outstanding, dueDate) {
    let detail = "";
    detail += `name: ${invoice.customer}\n`;
    detail += `amount: ${outstanding}\n`;
    detail += `amount: ${dueDate.toLocaleDateString()}\n`;
    return detail;
}

function printOwing(invoice) {
    let outstanding = 0;
    let result = "";
    result += getBanner();

    outstanding = calcultateOutstandings(invoice, outstanding);
    result += getPrintDetail(invoice, outstanding, getRecordDate(invoice));
    return result;
}

module.exports = {
    printOwing
};
