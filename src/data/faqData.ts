import { FAQItem, RegistrationStep, DocumentItem, MythFact, TimelineEvent } from '@/types';

export const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How do I register to vote?',
    answer: 'You can register online through the Voter Service Portal (voters.eci.gov.in) or visit your nearest Electoral Registration Office. Fill Form 6 with your ID and address proof.',
    category: 'Registration',
  },
  {
    id: '2',
    question: 'What is the voting age in India?',
    answer: 'The minimum voting age in India is 18 years. You must be 18 years or older on the qualifying date (January 1st of the year of electoral roll revision).',
    category: 'Eligibility',
  },
  {
    id: '3',
    question: 'What is an EVM?',
    answer: 'EVM stands for Electronic Voting Machine. It is an electronic device used for recording votes in Indian elections. EVMs are standalone devices not connected to any network, ensuring security.',
    category: 'Voting',
  },
  {
    id: '4',
    question: 'Can NRIs vote?',
    answer: 'Yes, NRIs can vote if they are enrolled in the electoral roll and are physically present in their constituency on polling day. They must have a valid Indian passport.',
    category: 'NRI',
  },
  {
    id: '5',
    question: 'What is NOTA?',
    answer: 'NOTA means None Of The Above. It is the last option on the EVM that allows voters to reject all candidates if they do not wish to vote for any of them.',
    category: 'Voting',
  },
  {
    id: '6',
    question: 'How can I find my polling booth?',
    answer: 'You can find your polling booth using the Voter Helpline App or website (electoralsearch.in) by entering your EPIC number or personal details.',
    category: 'Voting',
  },
  {
    id: '7',
    question: 'What documents are required for voting?',
    answer: 'You need to carry your Voter ID card (EPIC) or any other approved photo ID document like Aadhaar, Passport, Driving License, or PAN card to the polling station.',
    category: 'Voting',
  },
  {
    id: '8',
    question: 'Can I vote without a Voter ID?',
    answer: 'Yes, you can vote with alternative photo ID documents approved by the Election Commission if your name is on the electoral roll.',
    category: 'Voting',
  },
];

export const registrationSteps: RegistrationStep[] = [
  {
    id: 1,
    title: 'Check Eligibility',
    description: 'Ensure you are 18+ years old and an Indian citizen. Verify if your name is already on the electoral roll.',
    icon: 'CheckCircle',
  },
  {
    id: 2,
    title: 'Gather Documents',
    description: 'Collect your ID proof (Aadhaar, Passport, etc.) and address proof (Utility bill, Bank statement, etc.).',
    icon: 'FileText',
  },
  {
    id: 3,
    title: 'Fill Form 6',
    description: 'Visit voters.eci.gov.in and fill Form 6 online, or visit your nearest ERO office for offline submission.',
    icon: 'FormInput',
  },
  {
    id: 4,
    title: 'Upload Documents',
    description: 'Upload scanned copies of your documents. Ensure they are clear and legible for verification.',
    icon: 'Upload',
  },
  {
    id: 5,
    title: 'Verification',
    description: 'BLO (Booth Level Officer) will visit your address for verification. Be available with original documents.',
    icon: 'Users',
  },
  {
    id: 6,
    title: 'Receive Voter ID',
    description: 'After verification, your name will be added to the electoral roll and you will receive your EPIC card.',
    icon: 'CreditCard',
  },
];

export const documentsList: DocumentItem[] = [
  { id: '1', name: 'Aadhaar Card', description: 'Primary ID and address proof', required: true },
  { id: '2', name: 'Passport', description: 'Valid Indian passport as ID proof', required: false },
  { id: '3', name: 'PAN Card', description: 'Photo ID proof for identification', required: false },
  { id: '4', name: 'Driving License', description: 'Valid driving license with photo', required: false },
  { id: '5', name: 'Utility Bill', description: 'Electricity/water bill (not older than 3 months) for address proof', required: false },
  { id: '6', name: 'Bank Statement', description: 'Bank passbook or statement as address proof', required: false },
  { id: '7', name: 'Ration Card', description: 'Valid ration card with photograph', required: false },
  { id: '8', name: 'Passport Photo', description: 'Recent passport size photograph', required: true },
];

export const mythFactData: MythFact[] = [
  {
    id: '1',
    myth: 'My vote does not matter',
    fact: 'Every single vote counts. Elections have been won by very narrow margins. Your vote is your voice in democracy.',
    category: 'Voting',
  },
  {
    id: '2',
    myth: 'EVMs can be hacked remotely',
    fact: 'EVMs are standalone devices not connected to any network. They cannot be hacked remotely and are stored securely.',
    category: 'EVM',
  },
  {
    id: '3',
    myth: 'I need to be rich or educated to vote',
    fact: 'Every adult citizen has equal voting rights regardless of wealth or education. Democracy believes in equality.',
    category: 'Eligibility',
  },
  {
    id: '4',
    myth: 'I can vote from any location',
    fact: 'You can only vote at your assigned polling station in your registered constituency where your name appears on the roll.',
    category: 'Location',
  },
  {
    id: '5',
    myth: 'Once registered, I do not need to update',
    fact: 'You should update your registration when you change address, name, or if there are errors. Regular updates ensure accuracy.',
    category: 'Registration',
  },
  {
    id: '6',
    myth: 'Voting takes the whole day',
    fact: 'Voting usually takes only 10-15 minutes. Polling stations are efficient and queues move quickly.',
    category: 'Voting',
  },
];

export const electionTimeline: TimelineEvent[] = [
  {
    id: '1',
    date: 'Announcement',
    title: 'Election Announcement',
    description: 'Election Commission announces dates and schedule for elections.',
  },
  {
    id: '2',
    date: 'Nomination',
    title: 'Filing Nominations',
    description: 'Candidates file nomination papers with required documents and deposits.',
  },
  {
    id: '3',
    date: 'Scrutiny',
    title: 'Nomination Scrutiny',
    description: 'Submitted nominations are verified and scrutinized by officials.',
  },
  {
    id: '4',
    date: 'Campaigning',
    title: 'Campaign Period',
    description: 'Candidates campaign and voters learn about candidates and parties.',
  },
  {
    id: '5',
    date: 'Polling',
    title: 'Voting Day',
    description: 'Citizens cast their votes at designated polling stations.',
  },
  {
    id: '6',
    date: 'Counting',
    title: 'Vote Counting',
    description: 'Votes are counted and results are declared by the Election Commission.',
  },
];
