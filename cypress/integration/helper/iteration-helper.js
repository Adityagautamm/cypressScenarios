export const iterator = {
    test: function (xpath) {
        var text;
        var text;
        cy.xpath(xpath).each(($el, index, $list) => {
            text = $el.text();
            total += text;
            cy.log('log:' + total);
            cy.pause();
        })
        return total;
    }

}