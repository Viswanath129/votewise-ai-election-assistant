// Offline Election Knowledge Base - 50+ FAQs
// VoteWise AI - Smart Local Election Assistant

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
  relatedQuestions?: string[];
}

export const electionFAQs: FAQItem[] = [
  // Voter Registration (10)
  {
    id: 'reg-001',
    question: 'How do I register to vote?',
    answer: 'You can register to vote online at voters.eci.gov.in by filling Form 6. You need to provide ID proof and address proof. After submission, a Booth Level Officer (BLO) will verify your details at your address. Once verified, your name will be added to the electoral roll.',
    category: 'voter registration',
    keywords: ['register', 'registration', 'how to register', 'voter registration', 'form 6', 'enroll', 'sign up', 'join', 'new voter', 'first time'],
    relatedQuestions: ['What documents are required for voter registration?', 'How long does voter registration take?', 'Can I register offline?']
  },
  {
    id: 'reg-002',
    question: 'What documents are required for voter registration?',
    answer: 'You need: (1) ID Proof - Aadhaar, Passport, PAN Card, Driving License, or Ration Card, and (2) Address Proof - Aadhaar, Passport, Utility Bill (not older than 3 months), Bank Statement, or Rent Agreement. A recent passport-size photograph is also required.',
    category: 'voter registration',
    keywords: ['documents', 'documents required', 'papers', 'proof', 'id proof', 'address proof', 'what do i need', 'required documents', 'papers needed'],
    relatedQuestions: ['How do I register to vote?', 'Can I use Aadhaar for both ID and address proof?', 'Is photograph mandatory?']
  },
  {
    id: 'reg-003',
    question: 'How long does voter registration take?',
    answer: 'Voter registration typically takes 2-4 weeks. After you submit Form 6 online or offline, the Booth Level Officer (BLO) visits your address for verification within 1-2 weeks. Once verified, your name is added to the electoral roll and you receive your Voter ID (EPIC) card within 1-2 weeks.',
    category: 'voter registration',
    keywords: ['how long', 'time', 'duration', 'when will i get', 'processing time', 'how many days', 'waiting period', 'timeline'],
    relatedQuestions: ['How do I register to vote?', 'How can I check my voter registration status?']
  },
  {
    id: 'reg-004',
    question: 'Can I register offline?',
    answer: 'Yes, you can register offline by visiting your nearest Electoral Registration Office (ERO) or Assistant Electoral Registration Office (AERO). Collect Form 6, fill it manually, attach photocopies of required documents, and submit it in person. The BLO will then visit your address for verification.',
    category: 'voter registration',
    keywords: ['offline', 'in person', 'manual', 'paper form', 'ero office', 'visit office', 'physical registration', 'not online'],
    relatedQuestions: ['How do I register to vote?', 'Where is my nearest ERO office?']
  },
  {
    id: 'reg-005',
    question: 'How can I check my voter registration status?',
    answer: 'You can check your voter registration status at electoralsearch.in or through the Voter Helpline App. Enter your EPIC number (Voter ID) or search by your name, age, and constituency. You can also call the Voter Helpline at 1950.',
    category: 'voter registration',
    keywords: ['check status', 'verify registration', 'am i registered', 'check my name', 'voter list', 'electoral roll', 'status check'],
    relatedQuestions: ['How do I register to vote?', 'What is EPIC number?']
  },
  {
    id: 'reg-006',
    question: 'What is the minimum age for voter registration?',
    answer: 'The minimum age for voter registration in India is 18 years. You must be 18 years or older as of January 1st of the year when the electoral roll is being revised. There is no maximum age limit - senior citizens can vote lifelong.',
    category: 'voter registration',
    keywords: ['age', 'minimum age', '18 years', 'eligibility age', 'how old', 'voting age', 'adult', 'senior citizen'],
    relatedQuestions: ['I am 17, can I pre-register?', 'What is the voting age?']
  },
  {
    id: 'reg-007',
    question: 'Can NRIs register to vote?',
    answer: 'Yes, NRIs (Non-Resident Indians) can register as voters if they are Indian citizens and have not acquired citizenship of any other country. They must be physically present in their constituency to vote. NRIs need to fill Form 6A and submit it along with a copy of their valid Indian passport.',
    category: 'voter registration',
    keywords: ['nri', 'non resident', 'overseas', 'abroad', 'foreign', 'outside india', 'form 6a', 'overseas voter'],
    relatedQuestions: ['How do I register to vote?', 'Can NRIs vote by postal ballot?']
  },
  {
    id: 'reg-008',
    question: 'Can I register if I just turned 18?',
    answer: 'Yes! If you have just turned 18, you are eligible to register as a voter. Fill Form 6 at voters.eci.gov.in with your Aadhaar or other ID proof. As a first-time voter, you are a priority for election officials. Register early to ensure your name appears in the voter list before elections.',
    category: 'voter registration',
    keywords: ['just turned 18', 'newly 18', 'first time voter', 'young voter', 'youth', 'student', 'college', 'new adult'],
    relatedQuestions: ['What documents are required for voter registration?', 'How long does voter registration take?']
  },
  {
    id: 'reg-009',
    question: 'Where is my nearest ERO office?',
    answer: 'To find your nearest Electoral Registration Office (ERO), visit eci.gov.in and click on Contact Us or Officers. You can also call the Voter Helpline at 1950 or check with your District Collector office. Each constituency has at least one ERO office.',
    category: 'voter registration',
    keywords: ['ero office', 'nearest office', 'where to go', 'office location', 'electoral office', 'find office', 'address'],
    relatedQuestions: ['Can I register offline?', 'How do I register to vote?']
  },
  {
    id: 'reg-010',
    question: 'Can I use Aadhaar for both ID and address proof?',
    answer: 'Yes, Aadhaar card serves as both ID proof and address proof for voter registration. If your Aadhaar has your current address, you only need Aadhaar and a photograph. This makes registration simpler and faster.',
    category: 'voter registration',
    keywords: ['aadhaar', 'both proofs', 'single document', 'same document', 'one document', 'uid'],
    relatedQuestions: ['What documents are required for voter registration?', 'What if my Aadhaar has old address?']
  },

  // Required Documents (8)
  {
    id: 'doc-001',
    question: 'What ID proof documents are accepted?',
    answer: 'Accepted ID proof documents include: Aadhaar Card, Passport, PAN Card, Driving License, Ration Card with photo, Bank/Post Office Passbook with photo, Government ID card, and Pension document with photo. Any one of these is sufficient.',
    category: 'required documents',
    keywords: ['id proof', 'identity proof', 'photo id', 'accepted id', 'valid id', 'which id', 'id documents'],
    relatedQuestions: ['What documents are required for voter registration?', 'Can I use Aadhaar for both ID and address proof?']
  },
  {
    id: 'doc-002',
    question: 'What address proof documents are accepted?',
    answer: 'Accepted address proof documents include: Aadhaar Card, Passport, Utility Bill (electricity/water/gas - not older than 3 months), Bank Statement (not older than 3 months), Rent Agreement, Property Tax Receipt, and Ration Card. Ensure the address matches your current residence.',
    category: 'required documents',
    keywords: ['address proof', 'residence proof', 'current address', 'utility bill', 'bank statement', 'rent agreement', 'address documents'],
    relatedQuestions: ['What documents are required for voter registration?', 'Can I use Aadhaar for both ID and address proof?']
  },
  {
    id: 'doc-003',
    question: 'Is photograph mandatory for voter registration?',
    answer: 'Yes, a recent passport-size photograph is mandatory for voter registration. It should be clear, colored, and show your full face against a light background. The photo is used for your Voter ID (EPIC) card and the electoral roll.',
    category: 'required documents',
    keywords: ['photograph', 'photo', 'passport photo', 'picture', 'image', 'mandatory photo', 'photo required'],
    relatedQuestions: ['What documents are required for voter registration?', 'What are the photo specifications?']
  },
  {
    id: 'doc-004',
    question: 'What are the photo specifications for voter ID?',
    answer: 'Photo specifications: (1) Recent passport-size color photograph, (2) Clear image with full face visible, (3) Light/white background preferred, (4) No caps, sunglasses, or head coverings (except religious), (5) Face should cover 80% of the frame, (6) Minimum resolution 200x200 pixels for online upload.',
    category: 'required documents',
    keywords: ['photo specifications', 'photo size', 'photo requirements', 'image size', 'photo format', 'photo guidelines'],
    relatedQuestions: ['Is photograph mandatory for voter registration?', 'What documents are required for voter registration?']
  },
  {
    id: 'doc-005',
    question: 'Can I submit photocopies or need originals?',
    answer: 'For online registration, you upload scanned copies or photos of documents. For offline registration, you submit photocopies (self-attested) along with the application. However, during BLO verification, you must show the ORIGINAL documents for verification.',
    category: 'required documents',
    keywords: ['photocopies', 'scanned copies', 'originals', 'upload documents', 'copies', 'scanned', 'original documents'],
    relatedQuestions: ['What documents are required for voter registration?', 'How do I register to vote?']
  },
  {
    id: 'doc-006',
    question: 'What if I do not have Aadhaar?',
    answer: 'If you do not have Aadhaar, you can use other documents: Passport, PAN Card, Driving License, or Ration Card for ID proof. For address proof, you can use Passport, Utility Bill, Bank Statement, or Rent Agreement. Aadhaar is convenient but not mandatory.',
    category: 'required documents',
    keywords: ['no aadhaar', 'without aadhaar', 'alternative documents', 'no uid', 'missing aadhaar', 'other documents'],
    relatedQuestions: ['What ID proof documents are accepted?', 'What address proof documents are accepted?']
  },
  {
    id: 'doc-007',
    question: 'Can I use mobile phone bill as address proof?',
    answer: 'Generally, utility bills like electricity, water, and gas are preferred. Some states accept mobile/telephone bills if they are recent (within 3 months) and in your name. However, it is safer to use electricity bill, bank statement, or Aadhaar for guaranteed acceptance.',
    category: 'required documents',
    keywords: ['mobile bill', 'phone bill', 'telephone bill', 'internet bill', 'utility bill', 'broadband bill'],
    relatedQuestions: ['What address proof documents are accepted?', 'What documents are required for voter registration?']
  },
  {
    id: 'doc-008',
    question: 'What if my documents have different addresses?',
    answer: 'If your ID proof and address proof have different addresses, that is acceptable. However, your address proof must show your CURRENT residence where you want to be registered. The BLO will verify your current address during the home visit.',
    category: 'required documents',
    keywords: ['different addresses', 'old address', 'mismatch', 'changed address', 'moved', 'new house', 'current address'],
    relatedQuestions: ['What documents are required for voter registration?', 'How do I update my address in voter ID?']
  },

  // EVM (7)
  {
    id: 'evm-001',
    question: 'What is an EVM?',
    answer: 'EVM stands for Electronic Voting Machine. It is an electronic device used for recording votes in Indian elections. EVMs are standalone machines not connected to any network or internet, making them secure from hacking. Each EVM can record up to 2,000 votes and shows the results instantly after counting.',
    category: 'EVM',
    keywords: ['evm', 'electronic voting machine', 'voting machine', 'electronic machine', 'what is evm', 'evm meaning'],
    relatedQuestions: ['How does EVM work?', 'Is EVM tamper-proof?', 'What is VVPAT?']
  },
  {
    id: 'evm-002',
    question: 'How does EVM work?',
    answer: 'EVM works simply: (1) The presiding officer presses the "Ballot" button to enable voting, (2) The voter presses the blue button next to their chosen candidate\'s name and symbol, (3) A red LED light glows and a beep sound confirms the vote is recorded, (4) The machine records one vote and resets for the next voter. It is battery-powered and works without internet.',
    category: 'EVM',
    keywords: ['how evm works', 'evm process', 'voting process', 'how to use evm', 'evm buttons', 'voting machine working'],
    relatedQuestions: ['What is an EVM?', 'What is VVPAT?', 'How do I vote using EVM?']
  },
  {
    id: 'evm-003',
    question: 'What is VVPAT?',
    answer: 'VVPAT stands for Voter Verifiable Paper Audit Trail. It is a machine attached to the EVM that prints a paper slip showing the candidate you voted for. The slip is visible through a transparent window for 7 seconds before dropping into a sealed box. VVPAT allows voters to verify their vote and enables recounting if needed.',
    category: 'EVM',
    keywords: ['vvpat', 'paper trail', 'voter verifiable', 'paper slip', 'audit trail', 'printed receipt', 'verification'],
    relatedQuestions: ['What is an EVM?', 'How does EVM work?', 'Can I see my vote after pressing button?']
  },
  {
    id: 'evm-004',
    question: 'Is EVM tamper-proof?',
    answer: 'EVMs are designed to be tamper-resistant: (1) They are standalone machines with no network/internet connection, (2) They use one-time programmable chips that cannot be rewritten, (3) They have multiple security seals and checks, (4) Candidates and agents can inspect EVMs before polling, (5) Mock polls are conducted before actual voting. However, no system is 100% tamper-proof, which is why VVPAT was introduced for verification.',
    category: 'EVM',
    keywords: ['tamper proof', 'hacking', 'security', 'safe', 'can evm be hacked', 'evm tampering', 'fraud', 'rigging'],
    relatedQuestions: ['What is an EVM?', 'What is VVPAT?', 'How are EVMs secured?']
  },
  {
    id: 'evm-005',
    question: 'How do I vote using EVM?',
    answer: 'To vote using EVM: (1) Enter the polling booth when called, (2) Verify your identity with the polling officer, (3) Wait for the polling officer to press the "Ballot" button, (4) Press the blue button next to your chosen candidate\'s name and symbol, (5) Check that the red light glows and you hear a beep, (6) If using NOTA, press the last button. Your vote is now recorded securely.',
    category: 'EVM',
    keywords: ['how to vote', 'voting steps', 'use evm', 'press button', 'casting vote', 'voting procedure'],
    relatedQuestions: ['What is an EVM?', 'What is NOTA?', 'How does EVM work?']
  },
  {
    id: 'evm-006',
    question: 'What if EVM stops working?',
    answer: 'If an EVM stops working, the polling officer will: (1) Try to restart or fix the issue, (2) If not resolved within reasonable time, replace it with a spare EVM from reserve stock, (3) All votes already cast remain safely stored in the machine\'s memory. Voting never stops for long -备用 machines are always available at polling stations.',
    category: 'EVM',
    keywords: ['evm not working', 'broken evm', 'evm failure', 'machine problem', 'technical issue', 'evm error'],
    relatedQuestions: ['What is an EVM?', 'How does EVM work?']
  },
  {
    id: 'evm-007',
    question: 'Can EVMs be hacked remotely?',
    answer: 'No, EVMs cannot be hacked remotely because: (1) They have NO internet, Bluetooth, WiFi, or any network connection, (2) They are standalone machines that work independently, (3) They use proprietary software on one-time programmable chips, (4) They are physically sealed and guarded. However, VVPAT provides an additional paper trail for verification and recounting.',
    category: 'EVM',
    keywords: ['hacked remotely', 'remote hacking', 'cyber attack', 'online hacking', 'network hack', 'wireless'],
    relatedQuestions: ['Is EVM tamper-proof?', 'What is an EVM?', 'How are EVMs secured?']
  },

  // NOTA (5)
  {
    id: 'nota-001',
    question: 'What is NOTA?',
    answer: 'NOTA stands for "None Of The Above." It is the last button on the EVM that allows voters to reject all candidates if they do not wish to vote for any of them. NOTA was introduced in 2013 following a Supreme Court directive. While NOTA votes are counted, they do not affect the election outcome - the candidate with the highest valid votes still wins.',
    category: 'NOTA',
    keywords: ['nota', 'none of the above', 'reject all', 'no candidate', 'protest vote', 'negative vote', 'nota meaning'],
    relatedQuestions: ['Does NOTA affect election results?', 'When was NOTA introduced?', 'How do I vote NOTA?']
  },
  {
    id: 'nota-002',
    question: 'Does NOTA affect election results?',
    answer: 'Currently, NOTA does NOT affect election results. Even if NOTA gets the highest votes, the candidate with the most valid votes (excluding NOTA) is declared the winner. However, if NOTA votes exceed winning candidate\'s margin, it indicates strong voter dissatisfaction. The Election Commission has recommended that if NOTA gets majority, fresh elections should be held with new candidates.',
    category: 'NOTA',
    keywords: ['nota results', 'nota impact', 'does nota win', 'nota effect', 'nota consequence', 'what happens if nota wins'],
    relatedQuestions: ['What is NOTA?', 'Should I vote NOTA?', 'How are NOTA votes counted?']
  },
  {
    id: 'nota-003',
    question: 'How do I vote NOTA?',
    answer: 'To vote NOTA: (1) Look for the last button on the EVM, (2) It will be labeled "NOTA" or show a specific symbol, (3) Press the blue button next to NOTA like you would for any candidate, (4) The red light will glow confirming your vote, (5) The VVPAT slip will show "NOTA" for 7 seconds. Your vote is recorded as a rejection of all candidates.',
    category: 'NOTA',
    keywords: ['vote nota', 'how to nota', 'press nota', 'casting nota', 'nota voting', 'select nota'],
    relatedQuestions: ['What is NOTA?', 'What if NOTA wins?', 'Should I vote NOTA?']
  },
  {
    id: 'nota-004',
    question: 'Should I vote NOTA?',
    answer: 'Vote NOTA if: (1) You are dissatisfied with ALL candidates, (2) You want to exercise your right to vote but reject all options, (3) You want to send a message about candidate quality. However, remember that NOTA does not currently change election outcomes. If you want to influence results, choose the candidate closest to your preferences.',
    category: 'NOTA',
    keywords: ['should i vote nota', 'when to nota', 'nota good idea', 'is nota useful', 'why vote nota', 'nota benefit'],
    relatedQuestions: ['What is NOTA?', 'Does NOTA affect election results?', 'What happens if NOTA wins?']
  },
  {
    id: 'nota-005',
    question: 'When was NOTA introduced?',
    answer: 'NOTA was introduced in India in September 2013 following a Supreme Court judgment in the case of PUCL vs. Union of India. The Supreme Court ruled that voters have a fundamental right to know the background of candidates and the right to reject all candidates if dissatisfied. NOTA was first used in the 2013 assembly elections in Delhi, Rajasthan, Madhya Pradesh, and Chhattisgarh.',
    category: 'NOTA',
    keywords: ['nota introduced', 'nota history', 'when nota started', 'nota origin', 'nota supreme court', 'nota 2013'],
    relatedQuestions: ['What is NOTA?', 'Does NOTA affect election results?']
  },

  // Vote Counting (6)
  {
    id: 'count-001',
    question: 'How does vote counting work?',
    answer: 'Vote counting process: (1) EVMs are brought to counting centers under tight security, (2) Counting agents of all candidates are present as observers, (3) Press the "Result" button on each EVM to display vote totals, (4) VVPAT slips from random 5 EVMs per constituency are physically counted to verify electronic results, (5) Results are announced constituency by constituency. The process is transparent with multiple checks.',
    category: 'vote counting',
    keywords: ['vote counting', 'counting votes', 'how votes counted', 'election results', 'counting process', 'result declaration'],
    relatedQuestions: ['When are election results declared?', 'How long does counting take?', 'What is VVPAT verification?']
  },
  {
    id: 'count-002',
    question: 'When are election results declared?',
    answer: 'Election results are typically declared on the same day as voting for Assembly elections. For Lok Sabha (national) elections, counting happens on a scheduled date (usually 3-4 days after the last phase of voting). Counting starts at 8 AM and initial trends are available within 1-2 hours. Final results are declared by evening.',
    category: 'vote counting',
    keywords: ['results declared', 'when results', 'election day results', 'counting day', 'result date', 'when will we know winner'],
    relatedQuestions: ['How does vote counting work?', 'How long does counting take?']
  },
  {
    id: 'count-003',
    question: 'How long does counting take?',
    answer: 'Initial trends are available within 1-2 hours of counting starting at 8 AM. Clear leads emerge within 3-4 hours. Final results for most constituencies are declared by 3-5 PM the same day. However, close contests or re-counts may delay results for specific seats until evening. The entire process is much faster than the old paper ballot system which took days.',
    category: 'vote counting',
    keywords: ['counting time', 'how long counting', 'result time', 'counting duration', 'when final results', 'counting hours'],
    relatedQuestions: ['How does vote counting work?', 'When are election results declared?']
  },
  {
    id: 'count-004',
    question: 'What is VVPAT verification?',
    answer: 'VVPAT verification is a process where paper slips from VVPAT machines are physically counted to cross-check EVM results. As per Supreme Court directions, VVPAT slips from 5 randomly selected EVMs per constituency are counted. If discrepancies are found, more VVPATs can be counted. This ensures transparency and builds confidence in electronic voting.',
    category: 'vote counting',
    keywords: ['vvpat verification', 'vvpat counting', 'paper slip counting', 'audit', 'verification', 'cross check'],
    relatedQuestions: ['What is VVPAT?', 'How does vote counting work?', 'Are EVMs verified?']
  },
  {
    id: 'count-005',
    question: 'Can votes be recounted?',
    answer: 'Yes, votes can be recounted if: (1) The margin of victory is very slim, (2) A candidate requests a recount citing specific irregularities, (3) The Returning Officer orders a recount due to doubts. The request must be made immediately after the initial counting. However, recounts are rare because EVMs provide accurate counts, and VVPAT verification adds another layer of confidence.',
    category: 'vote counting',
    keywords: ['recount', 'vote recount', 'counting again', 'recounting', 'second count', 'recount request'],
    relatedQuestions: ['How does vote counting work?', 'What if counting is wrong?', 'Can I demand recount?']
  },
  {
    id: 'count-006',
    question: 'How are postal ballots counted?',
    answer: 'Postal ballots are counted first, before EVM votes. They include votes from: service voters (armed forces, government employees posted abroad), absentee voters (disabled, elderly above 80 years), and election duty staff. Postal ballots are opened and counted manually under supervision. Their totals are added to the EVM counts for final results.',
    category: 'vote counting',
    keywords: ['postal ballot', 'postal votes', 'service voters', 'absentee voters', 'postal counting', 'mail votes'],
    relatedQuestions: ['How does vote counting work?', 'Who can vote by postal ballot?', 'What are postal ballots?']
  },

  // Election Timeline (5)
  {
    id: 'time-001',
    question: 'What is the election timeline?',
    answer: 'General election timeline: (1) Election Announcement - dates announced by Election Commission, (2) Filing Nominations - candidates submit papers (7-10 days), (3) Scrutiny - nominations verified (next day), (4) Withdrawal - candidates can withdraw (2 days after scrutiny), (5) Campaigning - 2-3 weeks of campaigning, (6) Polling Day - voting conducted, (7) Counting - results declared. Entire process takes 4-6 weeks.',
    category: 'election timeline',
    keywords: ['election schedule', 'timeline', 'election dates', 'election phases', 'election process', 'when is election'],
    relatedQuestions: ['When are elections held?', 'How long is election process?', 'What are election phases?']
  },
  {
    id: 'time-002',
    question: 'When are elections held in India?',
    answer: 'Lok Sabha (national) elections are held every 5 years. The last was in 2024, next expected in 2029. State Assembly elections happen every 5 years on different schedules. By-elections are held when seats become vacant. Elections are typically scheduled in phases (2-7 phases) spread over 2-4 weeks for logistical and security reasons.',
    category: 'election timeline',
    keywords: ['when elections', 'election dates', 'next election', 'lok sabha election', 'assembly election', 'election year'],
    relatedQuestions: ['What is the election timeline?', 'How often are elections held?', 'When is next election?']
  },
  {
    id: 'time-003',
    question: 'How long is the election campaign period?',
    answer: 'The official campaign period is typically 2-3 weeks from the date of nomination scrutiny to polling day. However, political parties start preparations and unofficial campaigning months in advance. The Model Code of Conduct (MCC) comes into effect immediately after election announcement and regulates campaigning until results are declared.',
    category: 'election timeline',
    keywords: ['campaign period', 'how long campaign', 'election campaign', 'campaign duration', 'campaign time', 'how many days campaign'],
    relatedQuestions: ['What is the election timeline?', 'What is Model Code of Conduct?', 'When does campaigning start?']
  },
  {
    id: 'time-004',
    question: 'What is Model Code of Conduct?',
    answer: 'Model Code of Conduct (MCC) is a set of guidelines issued by the Election Commission that regulates political party and candidate behavior during elections. It comes into effect when elections are announced and lasts until results are declared. Key rules: no new government schemes announcements, no use of government resources for campaigning, no hate speech, no bribing voters, equal treatment of all parties by government.',
    category: 'election timeline',
    keywords: ['mcc', 'model code', 'code of conduct', 'election rules', 'campaign rules', 'conduct rules'],
    relatedQuestions: ['What is the election timeline?', 'When does MCC apply?', 'What are election rules?']
  },
  {
    id: 'time-005',
    question: 'What happens between election announcement and voting?',
    answer: 'Between announcement and voting: (1) Model Code of Conduct comes into force immediately, (2) Political parties file nominations (7-10 days), (3) Nomination scrutiny happens (1 day), (4) Withdrawal period (2 days), (5) Campaigning by candidates (2-3 weeks), (6) Polling materials distributed, (7) Security arrangements finalized, (8) Polling booths set up. This entire period is regulated by Election Commission.',
    category: 'election timeline',
    keywords: ['between announcement', 'before voting', 'election preparation', 'pre poll', 'nomination period', 'between phases'],
    relatedQuestions: ['What is the election timeline?', 'How long is election process?', 'What is Model Code of Conduct?']
  },

  // Age Eligibility (5)
  {
    id: 'age-001',
    question: 'What is the minimum voting age in India?',
    answer: 'The minimum voting age in India is 18 years. This is defined in Article 326 of the Indian Constitution. You must complete 18 years on or before the qualifying date (January 1st of the year of electoral roll revision) to be eligible to vote. Universal adult franchise was adopted in 1950, and the voting age was reduced from 21 to 18 in 1989 through the 61st Constitutional Amendment.',
    category: 'age eligibility',
    keywords: ['voting age', 'minimum age', '18 years', 'age limit', 'how old to vote', 'voting eligibility age'],
    relatedQuestions: ['I am 17, can I vote?', 'What is the minimum age for voter registration?', 'Can I pre-register?']
  },
  {
    id: 'age-002',
    question: 'I am 17, can I vote?',
    answer: 'No, you cannot vote if you are 17. You must be 18 years or older as of January 1st of the year when the electoral roll is being revised. However, you can PRE-REGISTER if you will turn 18 between January 1st and the qualifying date for the current revision. Check the specific qualifying date for your state\'s electoral roll revision on the Election Commission website.',
    category: 'age eligibility',
    keywords: ['17 years', 'seventeen', 'under 18', 'minor', 'too young', 'can i vote at 17', '17 year old'],
    relatedQuestions: ['What is the minimum voting age?', 'What is the minimum age for voter registration?', 'Can I pre-register?']
  },
  {
    id: 'age-003',
    question: 'What is the qualifying date for age eligibility?',
    answer: 'The standard qualifying date is January 1st of the year. You must be 18 years or older on January 1st to be included in that year\'s electoral roll revision. However, some states may have different qualifying dates - check the Election Commission notification for your state. If you turn 18 after January 1st but before the next revision, you may need to wait for the next enrollment period.',
    category: 'age eligibility',
    keywords: ['qualifying date', 'cutoff date', 'eligibility date', 'reference date', 'january 1', 'qualification date'],
    relatedQuestions: ['What is the minimum voting age?', 'I am 17, can I vote?', 'When can I register?']
  },
  {
    id: 'age-004',
    question: 'Is there a maximum age limit for voting?',
    answer: 'No, there is no maximum age limit for voting in India. Any citizen who is 18 or older can vote, regardless of age. Senior citizens, including those above 80 or 90 years, have equal voting rights. In fact, senior citizens above 80 years can avail of postal ballot facility and are given priority at polling booths with separate queues.',
    category: 'age eligibility',
    keywords: ['maximum age', 'upper age limit', 'too old', 'senior citizen', 'old age', 'elderly voters', 'age cap'],
    relatedQuestions: ['Can senior citizens vote?', 'Is there any age limit for voting?', 'Do elderly get voting facilities?']
  },
  {
    id: 'age-005',
    question: 'Can I pre-register before turning 18?',
    answer: 'You cannot pre-register before turning 18 in the normal process. However, if you will turn 18 between January 1st (qualifying date) and the actual revision date, some states allow advance applications. Check your state\'s Chief Electoral Officer website. Otherwise, apply immediately after your 18th birthday through Form 6 at voters.eci.gov.in.',
    category: 'age eligibility',
    keywords: ['pre register', 'pre registration', 'before 18', 'advance registration', 'early registration', 'register in advance'],
    relatedQuestions: ['What is the minimum voting age?', 'I am 17, can I vote?', 'What is the qualifying date?']
  },

  // Voter ID Correction (6)
  {
    id: 'correct-001',
    question: 'How do I correct my name in voter ID?',
    answer: 'To correct your name in voter ID: (1) Visit voters.eci.gov.in, (2) Fill Form 8 (Application for Correction to Particulars), (3) Select "Name" as the field to correct, (4) Enter the correct name, (5) Upload supporting document showing correct name (Aadhaar, Passport, etc.), (6) Submit. You can also visit your ERO office with Form 8 and documents. Processing takes 2-3 weeks.',
    category: 'voter ID correction',
    keywords: ['correct name', 'name correction', 'wrong name', 'spelling mistake', 'name change', 'update name', 'fix name'],
    relatedQuestions: ['How do I update my voter ID details?', 'What is Form 8?', 'How do I change my photo?']
  },
  {
    id: 'correct-002',
    question: 'How do I update my address in voter ID?',
    answer: 'To update your address: (1) Visit voters.eci.gov.in, (2) Fill Form 8 (for address correction within same constituency) OR Form 8A (if moving to different constituency), (3) Enter new address, (4) Upload address proof (Aadhaar, utility bill, rent agreement), (5) Submit. If moving to new constituency, your voter ID will be transferred. Processing takes 2-4 weeks including BLO verification.',
    category: 'voter ID correction',
    keywords: ['update address', 'change address', 'new address', 'moved house', 'shifted', 'address correction', 'transfer voter id'],
    relatedQuestions: ['How do I correct my name in voter ID?', 'What is Form 8A?', 'How do I change constituency?']
  },
  {
    id: 'correct-003',
    question: 'How do I change my photo in voter ID?',
    answer: 'To change your photo: (1) Visit voters.eci.gov.in, (2) Fill Form 8, (3) Select photo correction, (4) Upload new passport-size photo with specifications (recent, clear, colored, light background), (5) Submit with valid ID proof. You can also submit at ERO office. Photo changes require verification, so processing may take 3-4 weeks.',
    category: 'voter ID correction',
    keywords: ['change photo', 'update photo', 'new photo', 'photo correction', 'replace photo', 'different photo'],
    relatedQuestions: ['How do I correct my name in voter ID?', 'What are photo specifications?', 'What is Form 8?']
  },
  {
    id: 'correct-004',
    question: 'What is Form 8?',
    answer: 'Form 8 is used to correct errors in existing voter ID entries. Use it to fix: name spelling, father\'s/husband\'s name, age, address (within same constituency), photo, gender, or EPIC number. Submit online at voters.eci.gov.in or offline at ERO office with supporting documents. Form 8 is for corrections, not for new registration.',
    category: 'voter ID correction',
    keywords: ['form 8', 'correction form', 'update form', 'what is form 8', 'form eight', 'correction application'],
    relatedQuestions: ['How do I correct my name in voter ID?', 'How do I update my address?', 'What is Form 8A?']
  },
  {
    id: 'correct-005',
    question: 'What is Form 8A?',
    answer: 'Form 8A is used to change your constituency (transposition of entry) when you move to a new address in a different constituency. This transfers your voter registration from your old constituency to the new one. Submit online or at ERO office with new address proof. Use Form 8 (not 8A) if you moved within the same constituency.',
    category: 'voter ID correction',
    keywords: ['form 8a', 'change constituency', 'transposition', 'move constituency', 'transfer', 'new constituency'],
    relatedQuestions: ['How do I update my address?', 'What is Form 8?', 'How do I change my polling station?']
  },
  {
    id: 'correct-006',
    question: 'How do I delete a duplicate voter ID entry?',
    answer: 'If you have duplicate entries in the voter list (e.g., enrolled in two places): (1) Identify which entry to keep (usually current residence), (2) Fill Form 7 (Objection to Inclusion of Name) for the entry to be deleted, (3) Provide details of both entries, (4) Submit at ERO office with ID proof, (5) Explain the situation. Having multiple entries is illegal under Representation of People Act.',
    category: 'voter ID correction',
    keywords: ['delete entry', 'remove duplicate', 'duplicate voter id', 'two entries', 'double entry', 'delete name', 'form 7'],
    relatedQuestions: ['How do I correct my name?', 'What if I am registered twice?', 'Is duplicate registration illegal?']
  },

  // Polling Booth Info (6)
  {
    id: 'booth-001',
    question: 'How do I find my polling booth?',
    answer: 'Find your polling booth: (1) Visit electoralsearch.in and enter your EPIC number or name, (2) Use Voter Helpline App - click "Booth" tab, (3) Check your voter slip (received via SMS/email before polling), (4) Call Voter Helpline 1950, (5) Check notice boards at local government offices. Polling booth is assigned based on your address in the voter list.',
    category: 'polling booth info',
    keywords: ['polling booth', 'voting center', 'polling station', 'where to vote', 'find booth', 'my booth', 'where do i vote'],
    relatedQuestions: ['What is my polling station?', 'Can I vote at any booth?', 'How do I check voter slip?']
  },
  {
    id: 'booth-002',
    question: 'What time does polling start and end?',
    answer: 'Polling typically runs from 7:00 AM to 6:00 PM. However, timing varies by region - in remote/naxal-affected areas, it may be 6:00 AM to 4:00 PM for security reasons. Voters standing in queue at closing time are allowed to vote. Check exact timing on your voter slip or local election office notice. Most booths have peak hours 9-11 AM and 4-6 PM.',
    category: 'polling booth info',
    keywords: ['polling time', 'voting hours', 'booth timing', 'when to vote', 'polling start', 'polling end', 'timing'],
    relatedQuestions: ['How do I find my polling booth?', 'Can I vote after 6 PM?', 'What are voting hours?']
  },
  {
    id: 'booth-003',
    question: 'What should I carry to the polling booth?',
    answer: 'Carry to polling booth: (1) Voter ID (EPIC card) - mandatory, OR any alternate photo ID if EPIC unavailable (Aadhaar, Passport, Driving License, PAN, etc.), (2) Voter slip (if received - helps locate booth and serial number), (3) Mobile phone (must be switched off inside booth). Do NOT carry: political party symbols/items, cameras, or any campaigning material.',
    category: 'polling booth info',
    keywords: ['what to carry', 'documents needed', 'what to bring', 'required at booth', 'voter slip', 'id card', 'what should i take'],
    relatedQuestions: ['Can I vote without voter ID?', 'What is voter slip?', 'How do I find my polling booth?']
  },
  {
    id: 'booth-004',
    question: 'Can I vote at any polling booth?',
    answer: 'No, you can only vote at your assigned polling booth in your registered constituency where your name appears on the electoral roll. You cannot vote at a different booth even if it is nearby. If you moved to a new area, you must update your address using Form 8A to get assigned to a new booth.',
    category: 'polling booth info',
    keywords: ['any booth', 'different booth', 'wrong booth', 'other booth', 'can i vote anywhere', 'any polling station'],
    relatedQuestions: ['How do I find my polling booth?', 'How do I change my polling station?', 'Can I vote in different constituency?']
  },
  {
    id: 'booth-005',
    question: 'What if my name is not on the voter list at the booth?',
    answer: 'If your name is not on the voter list at the booth: (1) Check if you are at the correct booth (verify at help desk), (2) Check final voter list published before polling at CEO website, (3) Contact your BLO or ERO office immediately, (4) If recently registered, your name may not have been included yet, (5) Unfortunately, you cannot vote if your name is not on that booth\'s list. Register earlier next time.',
    category: 'polling booth info',
    keywords: ['name not in list', 'missing name', 'not on list', 'name not found', 'voter list', 'electoral roll', 'absent from list'],
    relatedQuestions: ['How do I check my voter registration?', 'How do I find my polling booth?', 'What if I cannot vote?']
  },
  {
    id: 'booth-006',
    question: 'Are there facilities for disabled and senior citizens?',
    answer: 'Yes, facilities include: (1) Ramps for wheelchair access at polling stations, (2) Separate queues for senior citizens (80+ years) and persons with disabilities, (3) Priority voting (no waiting), (4) Braille-enabled EVMs for visually impaired, (5) Companions allowed for PwDs, (6) Volunteers to assist, (7) Transport in some areas. Above 80 years can also opt for postal ballot.',
    category: 'polling booth info',
    keywords: ['disabled facilities', 'pwd facilities', 'senior citizen', 'wheelchair', 'accessibility', 'ramp', 'special needs', 'assistance'],
    relatedQuestions: ['How do I find my polling booth?', 'Can senior citizens vote by post?', 'What time does polling start?']
  },

  // Myths vs Facts (8)
  {
    id: 'myth-001',
    question: 'Myth: My single vote does not matter',
    answer: 'FACT: Every vote counts! Many elections in India have been decided by very narrow margins - sometimes just a few votes. In the 2014 Lok Sabha elections, several seats were won by margins under 5,000 votes. Your vote is your voice in democracy. When millions think their vote does not matter and do not vote, it affects the result. Vote to make your voice heard!',
    category: 'myths vs facts',
    keywords: ['single vote', 'my vote matters', 'does my vote count', 'one vote', 'voting impact', 'why vote'],
    relatedQuestions: ['Why should I vote?', 'What is the value of my vote?', 'Can one vote change result?']
  },
  {
    id: 'myth-002',
    question: 'Myth: EVMs can be hacked remotely',
    answer: 'FACT: EVMs cannot be hacked remotely because they are standalone machines with NO internet, WiFi, Bluetooth, or any network connection. They use one-time programmable chips. However, VVPAT (paper trail) provides additional verification. While perfect security is impossible, India\'s EVMs are among the most secure voting systems globally due to their offline design.',
    category: 'myths vs facts',
    keywords: ['evm hacking', 'evm hacked', 'remote hacking', 'evm tampering', 'evm security', 'can evm be hacked'],
    relatedQuestions: ['Is EVM tamper-proof?', 'What is VVPAT?', 'How are EVMs secured?']
  },
  {
    id: 'myth-003',
    question: 'Myth: Rich and educated people have more voting power',
    answer: 'FACT: In India, every adult citizen has exactly ONE vote, regardless of wealth, education, caste, gender, or status. This is "One Person, One Vote, One Value" principle. A billionaire and a daily wage worker both have equal voting power. This equality is the foundation of Indian democracy. Your vote is as powerful as anyone else\'s.',
    category: 'myths vs facts',
    keywords: ['rich vote', 'powerful vote', 'educated vote', 'more voting power', 'influence', 'money power', 'equal vote'],
    relatedQuestions: ['Is voting equal for everyone?', 'Does wealth affect voting?', 'What is one person one vote?']
  },
  {
    id: 'myth-004',
    question: 'Myth: I can vote from any location',
    answer: 'FACT: You can only vote at your assigned polling station in your registered constituency. You cannot vote at a different booth even in the same city. If you have moved, you must update your address using Form 8A at least weeks before elections to transfer your registration to the new constituency.',
    category: 'myths vs facts',
    keywords: ['vote anywhere', 'vote any booth', 'vote different place', 'remote voting', 'vote from anywhere', 'any location'],
    relatedQuestions: ['Can I vote at any polling booth?', 'How do I change my polling station?', 'Can I vote in different city?']
  },
  {
    id: 'myth-005',
    question: 'Myth: Once registered, I never need to update',
    answer: 'FACT: You must update your voter registration when you: change address, change name (after marriage/divorce), detect errors in your details, or your voter ID is lost/damaged. Also, check your status before every election as voter lists are revised regularly. Use Form 8 for corrections and Form 8A for address/constituency change.',
    category: 'myths vs facts',
    keywords: ['update needed', 'change details', 'keep updated', 'registration update', 'when to update', 'voter id update'],
    relatedQuestions: ['How do I update my voter ID?', 'When should I update registration?', 'What is Form 8?']
  },
  {
    id: 'myth-006',
    question: 'Myth: Voting takes the whole day',
    answer: 'FACT: Voting typically takes only 10-15 minutes including queue time. Polling stations are efficient with multiple EVMs. Peak hours are 9-11 AM and 4-6 PM - avoid these for shorter queues. Most people complete voting in under 30 minutes even during busy periods. Planning your visit saves time.',
    category: 'myths vs facts',
    keywords: ['voting time', 'how long voting', 'whole day', 'time consuming', 'quick voting', 'fast voting'],
    relatedQuestions: ['What time does polling start?', 'How long does voting take?', 'Best time to vote?']
  },
  {
    id: 'myth-007',
    question: 'Myth: NRIs cannot vote',
    answer: 'FACT: NRIs CAN vote! Non-Resident Indians who have not acquired foreign citizenship can register as overseas voters using Form 6A. They must be physically present in their constituency to vote (no online voting yet). NRIs play an important role in Indian democracy, and their votes can influence results in close contests.',
    category: 'myths vs facts',
    keywords: ['nri vote', 'can nris vote', 'overseas voting', 'foreign voting', 'nri rights', 'non resident vote'],
    relatedQuestions: ['Can NRIs register to vote?', 'How do NRIs vote?', 'Can I vote from abroad?']
  },
  {
    id: 'myth-008',
    question: 'Myth: Government employees cannot vote',
    answer: 'FACT: All government employees CAN vote! Government servants, including police, teachers, and office staff, have full voting rights. Only those on election duty have special procedures - they can vote by postal ballot or at special polling stations. No one loses voting rights by working for government.',
    category: 'myths vs facts',
    keywords: ['government employee', 'govt servant', 'can govt employees vote', 'officials voting', 'government staff'],
    relatedQuestions: ['Can government servants vote?', 'How do election staff vote?', 'Postal ballot for government employees?']
  },
];

// Create a flat list of all FAQs for searching
export const allFAQs = electionFAQs;

// Category-wise grouping
export const faqsByCategory = {
  'voter registration': electionFAQs.filter(f => f.category === 'voter registration'),
  'required documents': electionFAQs.filter(f => f.category === 'required documents'),
  'EVM': electionFAQs.filter(f => f.category === 'EVM'),
  'NOTA': electionFAQs.filter(f => f.category === 'NOTA'),
  'vote counting': electionFAQs.filter(f => f.category === 'vote counting'),
  'election timeline': electionFAQs.filter(f => f.category === 'election timeline'),
  'age eligibility': electionFAQs.filter(f => f.category === 'age eligibility'),
  'voter ID correction': electionFAQs.filter(f => f.category === 'voter ID correction'),
  'polling booth info': electionFAQs.filter(f => f.category === 'polling booth info'),
  'myths vs facts': electionFAQs.filter(f => f.category === 'myths vs facts'),
};

// Quick responses for common greetings and non-election queries
export const quickResponses = {
  greeting: [
    "Hello! I'm VoteWise AI, your offline election assistant. Ask me about voter registration, documents, EVMs, voting process, or any election-related questions!",
    "Hi there! Ready to help you understand Indian elections. What would you like to know?",
    "Namaste! I'm here to answer your election questions. Feel free to ask about registration, voting, or election procedures!"
  ],
  thanks: [
    "You're welcome! Happy to help. Remember, every vote counts - register and vote! 🗳️",
    "Glad I could help! Spread the word about voting awareness.",
    "My pleasure! Exercise your democratic right - vote wisely!"
  ],
  goodbye: [
    "Goodbye! Don't forget to register and vote. Jai Hind! 🇮🇳",
    "Take care! Make your voice heard in the next election.",
    "See you! Remember: Your vote is your power. Use it wisely!"
  ],
  unknown: [
    "I'm not sure about that. Try asking about: voter registration, required documents, EVM, NOTA, vote counting, election timeline, age eligibility, or polling booth info.",
    "I don't have information on that topic. I can help with election-related questions like registration, voting process, documents, EVMs, etc.",
    "That's outside my knowledge base. I'm specialized in Indian election information. Ask me about voting, registration, or election procedures!"
  ],
  help: [
    "I can help you with:\n• Voter registration process\n• Required documents\n• How EVMs work\n• NOTA option\n• Vote counting process\n• Election timeline\n• Age eligibility\n• Voter ID corrections\n• Polling booth information\n• Election myths vs facts\n\nWhat would you like to know?"
  ]
};

// Get random response from category
export function getQuickResponse(category: keyof typeof quickResponses): string {
  const responses = quickResponses[category];
  return responses[Math.floor(Math.random() * responses.length)];
}
