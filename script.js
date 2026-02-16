// Quiz data
const questions = [
  {
    id: 1,
    text: "What aspect of technology excites you most?",
    answers: [
      { text: "Creating visual designs and user experiences", scores: { frontend: 3, uiux: 3, web3design: 2 } },
      { text: "Building systems and solving complex problems", scores: { backend: 3, blockchain: 2, devops: 2 } },
      { text: "Working with data and analytics", scores: { data: 3, defi: 2, analytics: 2 } },
      { text: "Creating and managing content", scores: { content: 3, community: 2, marketing: 2 } }
    ]
  },
  {
    id: 2,
    text: "How do you prefer to work?",
    answers: [
      { text: "Independently on deep technical challenges", scores: { backend: 2, blockchain: 3, security: 2 } },
      { text: "Collaboratively with teams", scores: { frontend: 2, community: 3, product: 2 } },
      { text: "With creative freedom", scores: { uiux: 3, web3design: 2, content: 2 } },
      { text: "With data and research", scores: { data: 3, analytics: 2, research: 3 } }
    ]
  },
  {
    id: 3,
    text: "What's your current technical skill level?",
    answers: [
      { text: "Complete beginner - no coding experience", scores: { content: 2, community: 2, uiux: 2, marketing: 2 } },
      { text: "Some basics - HTML/CSS or similar", scores: { frontend: 2, uiux: 2, web3design: 1 } },
      { text: "Intermediate - can build simple applications", scores: { frontend: 2, backend: 2, blockchain: 1 } },
      { text: "Advanced - comfortable with multiple languages", scores: { backend: 2, blockchain: 3, security: 2, devops: 2 } }
    ]
  },
  {
    id: 4,
    text: "What interests you about web3?",
    answers: [
      { text: "Financial freedom and DeFi", scores: { defi: 3, blockchain: 2, trading: 2 } },
      { text: "NFTs and digital art", scores: { nft: 3, web3design: 2, content: 2 } },
      { text: "Decentralization and technology", scores: { blockchain: 3, security: 2, protocol: 3 } },
      { text: "Community and social impact", scores: { dao: 3, community: 2, governance: 2 } }
    ]
  },
  {
    id: 5,
    text: "How do you like to learn?",
    answers: [
      { text: "Hands-on projects and building", scores: { frontend: 2, backend: 2, blockchain: 2 } },
      { text: "Reading documentation and research", scores: { research: 3, security: 2, protocol: 2 } },
      { text: "Video tutorials and courses", scores: { frontend: 1, uiux: 1, content: 1 } },
      { text: "Community interaction and mentorship", scores: { community: 3, dao: 2, product: 2 } }
    ]
  },
  {
    id: 6,
    text: "What's your primary goal?",
    answers: [
      { text: "Get a stable tech job", scores: { frontend: 2, backend: 2, data: 2 } },
      { text: "Freelance and work remotely", scores: { frontend: 2, uiux: 2, content: 2, web3design: 2 } },
      { text: "Build my own startup/project", scores: { product: 3, blockchain: 2, protocol: 2 } },
      { text: "Contribute to open source/DAOs", scores: { dao: 3, community: 2, protocol: 2 } }
    ]
  },
  {
    id: 7,
    text: "Which activity sounds most appealing?",
    answers: [
      { text: "Designing beautiful interfaces", scores: { uiux: 3, frontend: 2, web3design: 2 } },
      { text: "Writing smart contracts", scores: { blockchain: 3, security: 2, defi: 2 } },
      { text: "Analyzing market trends", scores: { trading: 3, analytics: 2, data: 2 } },
      { text: "Growing and engaging communities", scores: { community: 3, dao: 2, marketing: 2 } }
    ]
  },
  {
    id: 8,
    text: "What's most important to you in a career?",
    answers: [
      { text: "High earning potential", scores: { blockchain: 2, defi: 2, security: 2, backend: 1 } },
      { text: "Creative expression", scores: { uiux: 3, web3design: 3, content: 2 } },
      { text: "Making an impact", scores: { dao: 2, community: 2, product: 2, protocol: 2 } },
      { text: "Continuous learning", scores: { research: 3, protocol: 2, security: 2 } }
    ]
  }
];

// Niche definitions
const niches = {
  frontend: {
    name: "Frontend Development",
    description: "Build beautiful, interactive user interfaces for web applications",
    skills: ["HTML/CSS", "JavaScript", "React/Vue", "Responsive Design"],
    salary: "$70k - $150k",
    difficulty: "Beginner-Friendly",
    icon: "💻"
  },
  backend: {
    name: "Backend Development",
    description: "Create server-side logic, APIs, and database architecture",
    skills: ["Node.js/Python", "APIs", "Databases", "System Design"],
    salary: "$80k - $160k",
    difficulty: "Intermediate",
    icon: "⚙️"
  },
  blockchain: {
    name: "Blockchain Developer",
    description: "Build decentralized applications and smart contracts",
    skills: ["Solidity", "Web3.js", "Smart Contracts", "Ethereum/Solana"],
    salary: "$100k - $200k+",
    difficulty: "Advanced",
    icon: "⛓️"
  },
  uiux: {
    name: "UI/UX Designer",
    description: "Design user-centered experiences and visual interfaces",
    skills: ["Figma", "User Research", "Prototyping", "Visual Design"],
    salary: "$60k - $140k",
    difficulty: "Beginner-Friendly",
    icon: "🎨"
  },
  defi: {
    name: "DeFi Specialist",
    description: "Work on decentralized finance protocols and applications",
    skills: ["DeFi Protocols", "Smart Contracts", "Tokenomics", "Financial Markets"],
    salary: "$90k - $180k",
    difficulty: "Advanced",
    icon: "💰"
  },
  community: {
    name: "Community Manager",
    description: "Build and engage web3 communities across platforms",
    skills: ["Discord/Twitter", "Community Building", "Content Creation", "Engagement"],
    salary: "$50k - $100k",
    difficulty: "Beginner-Friendly",
    icon: "👥"
  },
  data: {
    name: "Data Analyst",
    description: "Analyze blockchain data and tech metrics for insights",
    skills: ["SQL", "Python", "Data Visualization", "Analytics Tools"],
    salary: "$70k - $130k",
    difficulty: "Intermediate",
    icon: "📊"
  },
  content: {
    name: "Technical Writer",
    description: "Create documentation, tutorials, and educational content",
    skills: ["Writing", "Documentation", "Research", "Communication"],
    salary: "$60k - $120k",
    difficulty: "Beginner-Friendly",
    icon: "✍️"
  },
  security: {
    name: "Security Auditor",
    description: "Audit smart contracts and web3 protocols for vulnerabilities",
    skills: ["Smart Contract Auditing", "Security", "Solidity", "Cryptography"],
    salary: "$100k - $200k+",
    difficulty: "Advanced",
    icon: "🔒"
  },
  dao: {
    name: "DAO Contributor",
    description: "Participate in decentralized autonomous organizations",
    skills: ["Governance", "Proposal Writing", "Community", "Web3 Tools"],
    salary: "$60k - $140k",
    difficulty: "Beginner-Friendly",
    icon: "🏛️"
  },
  web3design: {
    name: "Web3 Designer",
    description: "Design NFTs, metaverse experiences, and web3 products",
    skills: ["3D Design", "NFT Creation", "Branding", "Digital Art"],
    salary: "$70k - $150k",
    difficulty: "Intermediate",
    icon: "🌐"
  },
  product: {
    name: "Product Manager",
    description: "Lead product strategy and development in tech/web3",
    skills: ["Product Strategy", "Roadmapping", "User Research", "Agile"],
    salary: "$90k - $170k",
    difficulty: "Intermediate",
    icon: "🚀"
  },
  nft: {
    name: "NFT Creator",
    description: "Create and launch NFT projects and digital collectibles",
    skills: ["Digital Art", "Smart Contracts", "Marketing", "Community Building"],
    salary: "$50k - $150k+",
    difficulty: "Intermediate",
    icon: "🖼️"
  },
  trading: {
    name: "Crypto Trader/Analyst",
    description: "Trade cryptocurrencies and analyze market trends",
    skills: ["Technical Analysis", "Trading Strategies", "Risk Management", "Market Research"],
    salary: "$60k - $200k+",
    difficulty: "Intermediate",
    icon: "📈"
  },
  devops: {
    name: "DevOps Engineer",
    description: "Manage infrastructure, deployment, and system reliability",
    skills: ["Docker", "Kubernetes", "CI/CD", "Cloud Platforms"],
    salary: "$90k - $160k",
    difficulty: "Advanced",
    icon: "🔧"
  },
  protocol: {
    name: "Protocol Engineer",
    description: "Design and build blockchain protocols and infrastructure",
    skills: ["Distributed Systems", "Cryptography", "Rust/Go", "Protocol Design"],
    salary: "$120k - $250k+",
    difficulty: "Advanced",
    icon: "🔬"
  },
  analytics: {
    name: "Blockchain Analyst",
    description: "Analyze on-chain data and blockchain metrics",
    skills: ["On-chain Analysis", "SQL", "Python", "Data Science"],
    salary: "$80k - $150k",
    difficulty: "Intermediate",
    icon: "🔍"
  },
  marketing: {
    name: "Web3 Marketer",
    description: "Market web3 projects and grow their presence",
    skills: ["Digital Marketing", "Social Media", "Growth Hacking", "Content Strategy"],
    salary: "$60k - $130k",
    difficulty: "Beginner-Friendly",
    icon: "📢"
  },
  research: {
    name: "Crypto Researcher",
    description: "Research blockchain technology, protocols, and trends",
    skills: ["Research", "Writing", "Analysis", "Cryptography"],
    salary: "$70k - $140k",
    difficulty: "Intermediate",
    icon: "🔬"
  },
  governance: {
    name: "Governance Specialist",
    description: "Design and manage decentralized governance systems",
    skills: ["Tokenomics", "Governance Models", "Community", "Economics"],
    salary: "$80k - $150k",
    difficulty: "Intermediate",
    icon: "⚖️"
  }
};

// State
let currentQuestion = 0;
let answers = [];
let scores = {};

// Initialize all niche scores
Object.keys(niches).forEach(niche => {
  scores[niche] = 0;
});

// Start quiz
function startQuiz() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');
  showQuestion();
}

// Show current question
function showQuestion() {
  const question = questions[currentQuestion];
  
  // Update progress
  const progress = ((currentQuestion) / questions.length) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
  document.getElementById('progress-percent').textContent = Math.round(progress) + '%';
  document.getElementById('question-counter').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  document.getElementById('progress-text').textContent = `${currentQuestion + 1}/${questions.length}`;
  
  // Update question text
  document.getElementById('question-text').textContent = question.text;
  
  // Create answer buttons
  const answersContainer = document.getElementById('answers-container');
  answersContainer.innerHTML = '';
  
  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.className = 'w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all';
    button.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
          <div class="w-3 h-3 rounded-full bg-blue-600 hidden answer-dot"></div>
        </div>
        <span class="text-gray-900 font-medium">${answer.text}</span>
      </div>
    `;
    
    // Check if this answer was previously selected
    if (answers[currentQuestion] === index) {
      button.classList.add('border-blue-500', 'bg-blue-50');
      button.querySelector('.answer-dot').classList.remove('hidden');
    }
    
    button.onclick = () => selectAnswer(index);
    answersContainer.appendChild(button);
  });
  
  // Update button states
  document.getElementById('prev-btn').disabled = currentQuestion === 0;
  document.getElementById('next-btn').disabled = answers[currentQuestion] === undefined;
}

// Select answer
function selectAnswer(answerIndex) {
  answers[currentQuestion] = answerIndex;
  
  // Update UI
  const buttons = document.querySelectorAll('#answers-container button');
  buttons.forEach((btn, index) => {
    if (index === answerIndex) {
      btn.classList.add('border-blue-500', 'bg-blue-50');
      btn.querySelector('.answer-dot').classList.remove('hidden');
    } else {
      btn.classList.remove('border-blue-500', 'bg-blue-50');
      btn.querySelector('.answer-dot').classList.add('hidden');
    }
  });
  
  // Enable next button
  document.getElementById('next-btn').disabled = false;
}

// Next question
function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    calculateResults();
  }
}

// Previous question
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

// Calculate results
function calculateResults() {
  // Reset scores
  Object.keys(scores).forEach(key => {
    scores[key] = 0;
  });
  
  // Calculate scores based on answers
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    const answer = question.answers[answerIndex];
    
    Object.keys(answer.scores).forEach(niche => {
      scores[niche] = (scores[niche] || 0) + answer.scores[niche];
    });
  });
  
  // Sort niches by score
  const sortedNiches = Object.keys(scores)
    .sort((a, b) => scores[b] - scores[a])
    .slice(0, 5); // Top 5 recommendations
  
  showResults(sortedNiches);
}

// Show results
function showResults(topNiches) {
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('results-screen').classList.remove('hidden');
  
  const container = document.getElementById('recommendations-container');
  container.innerHTML = '';
  
  topNiches.forEach((nicheKey, index) => {
    const niche = niches[nicheKey];
    const score = scores[nicheKey];
    const maxScore = Math.max(...Object.values(scores));
    const percentage = (score / maxScore) * 100;
    
    const card = document.createElement('div');
    card.className = 'bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all';
    
    if (index === 0) {
      card.classList.add('border-blue-500', 'shadow-sm');
    }
    
    card.innerHTML = `
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-start gap-4">
          <div class="text-4xl">${niche.icon}</div>
          <div>
            <div class="flex items-center gap-2 mb-1">
              <h3 class="text-xl font-bold text-gray-900">${niche.name}</h3>
              ${index === 0 ? '<span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Best Match</span>' : ''}
            </div>
            <p class="text-gray-600 mb-3">${niche.description}</p>
          </div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-bold text-blue-600">${Math.round(percentage)}%</div>
          <div class="text-xs text-gray-500">Match</div>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div class="text-xs text-gray-500 mb-1">Avg. Salary</div>
          <div class="font-semibold text-gray-900">${niche.salary}</div>
        </div>
        <div>
          <div class="text-xs text-gray-500 mb-1">Difficulty</div>
          <div class="font-semibold text-gray-900">${niche.difficulty}</div>
        </div>
      </div>
      
      <div class="mb-4">
        <div class="text-xs text-gray-500 mb-2">Key Skills</div>
        <div class="flex flex-wrap gap-2">
          ${niche.skills.map(skill => `
            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">${skill}</span>
          `).join('')}
        </div>
      </div>
      
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div class="bg-blue-600 h-2 rounded-full transition-all duration-500" style="width: ${percentage}%"></div>
      </div>
    `;
    
    container.appendChild(card);
  });
  
  // Update progress text
  document.getElementById('progress-text').textContent = 'Complete';
}

// Reset quiz
function resetQuiz() {
  currentQuestion = 0;
  answers = [];
  Object.keys(scores).forEach(key => {
    scores[key] = 0;
  });
  
  document.getElementById('results-screen').classList.add('hidden');
  document.getElementById('welcome-screen').classList.remove('hidden');
  document.getElementById('progress-text').textContent = 'Start Quiz';
}

// Share results
function shareResults() {
  const topNiche = Object.keys(scores).sort((a, b) => scores[b] - scores[a])[0];
  const nicheName = niches[topNiche].name;
  
  const shareText = `I just discovered my ideal tech niche: ${nicheName}! Find yours with Niche Navigator.`;
  
  if (navigator.share) {
    navigator.share({
      title: 'My Tech Niche Results',
      text: shareText
    }).catch(err => console.log('Share failed:', err));
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Results copied to clipboard!');
    });
  }
}