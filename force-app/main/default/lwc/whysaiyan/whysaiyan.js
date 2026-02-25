import { LightningElement, track } from 'lwc';

export default class WhySaiyan extends LightningElement {
    
    @track _faqItems = [
        {
            id: '1',
            question: 'What types of motor insurance are available in Morocco?',
            answer: 'In Morocco, there are two main types of motor insurance: Third-Party Liability Insurance (mandatory) and Comprehensive Insurance. Third-party covers damages to others, while comprehensive covers your own vehicle as well.',
            isOpen: false
        },
        {
            id: '2',
            question: 'Is car insurance mandatory in Morocco?',
            answer: 'Yes, car insurance is mandatory in Morocco. All vehicle owners must have at least third-party liability insurance to legally drive on Morocco roads. This ensures coverage for any damages caused to third parties.',
            isOpen: false
        },
        {
            id: '3',
            question: 'What is the difference between third-party and comprehensive insurance?',
            answer: 'Third-party insurance covers only damages to other vehicles and people, while comprehensive insurance covers damages to your own vehicle, theft, fire, natural disasters, and third-party liabilities. Comprehensive offers broader protection.',
            isOpen: false
        },
        {
            id: '4',
            question: 'Can I insure a car registered under someone else\'s name?',
            answer: 'Generally, the insurance policy should match the vehicle registration. However, some insurance companies may allow you to insure a vehicle registered in someone else\'s name if you can prove insurable interest. Contact our team for specific cases.',
            isOpen: false
        },
        {
            id: '5',
            question: 'What is the no-claims discount (NCD)?',
            answer: 'The No-Claims Discount (NCD) is a reward system where you receive discounts on your insurance premium for every year you don\'t make a claim. The longer you drive without claims, the higher your discount, which can significantly reduce your insurance costs.',
            isOpen: false
        }
    ];

    handleFaqToggle(event) {
        const faqId = event.currentTarget.dataset.id;
        
        this._faqItems = this._faqItems.map(item => {
            if (item.id === faqId) {
                return {
                    ...item,
                    isOpen: !item.isOpen
                };
            }
            return item;
        });
    }

    // Computed property for dynamic classes
    get faqItems() {
        return this._faqItems.map(item => ({
            ...item,
            buttonClass: item.isOpen ? 'faq-button faq-button-active' : 'faq-button',
            contentClass: item.isOpen ? 'faq-content faq-content-open' : 'faq-content',
            chevronClass: item.isOpen ? 'chevron-icon chevron-up' : 'chevron-icon'
        }));
    }
}