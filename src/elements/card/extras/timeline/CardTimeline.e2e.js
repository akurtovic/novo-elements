describe('Element: CardTimeline', () => {
    beforeEach(() => {
        browser.get('/#/cards');
    });

    it('should have <novo-card-timeline>', () => {
        let subject = element(by.css('demo-app novo-card-timeline')).isPresent();
        let result = true;
        expect(subject).toEqual(result);
    });
});