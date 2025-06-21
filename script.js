// Floating hearts animation
function createFloatingHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heartEmojis = ['💕', '💖', '💗', '💓', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 300);
}

// Sparkles animation
function createSparkles() {
    const sparklesContainer = document.getElementById('sparklesContainer');
    const sparkleEmojis = ['✨', '⭐', '💫', '🌟'];
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDuration = (Math.random() * 2 + 3) + 's';
        
        sparklesContainer.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 5000);
    }, 500);
}

// 100 Reasons Why I'm Sorry (50 original + 50 new communication-focused)
const sorryReasons = [
    // Original 50 reasons
    "I'm sorry for not listening to you when you needed me to",
    "I'm sorry for being selfish and thinking only about myself",
    "I'm sorry for not appreciating you enough",
    "I'm sorry for taking you for granted",
    "I'm sorry for not being there when you needed support",
    "I'm sorry for not communicating properly",
    "I'm sorry for letting my pride get in the way",
    "I'm sorry for not understanding your feelings",
    "I'm sorry for being insensitive to your needs",
    "I'm sorry for not making you feel valued",
    "I'm sorry for not showing you enough affection",
    "I'm sorry for not being patient with you",
    "I'm sorry for not respecting your boundaries",
    "I'm sorry for not being honest with you",
    "I'm sorry for not making time for you",
    "I'm sorry for not being romantic enough",
    "I'm sorry for not remembering important dates",
    "I'm sorry for not being supportive of your dreams",
    "I'm sorry for not being understanding when you were stressed",
    "I'm sorry for not being the partner you deserved",
    "I'm sorry for not working on our relationship enough",
    "I'm sorry for not being emotionally available",
    "I'm sorry for not being trustworthy",
    "I'm sorry for not being reliable",
    "I'm sorry for not being kind enough",
    "I'm sorry for not being thoughtful",
    "I'm sorry for not being considerate of your feelings",
    "I'm sorry for not being respectful",
    "I'm sorry for not being loving enough",
    "I'm sorry for not being caring",
    "I'm sorry for not being attentive",
    "I'm sorry for not being present in our relationship",
    "I'm sorry for not being committed enough",
    "I'm sorry for not being faithful",
    "I'm sorry for not being loyal",
    "I'm sorry for not being honest about my feelings",
    "I'm sorry for not being open with you",
    "I'm sorry for not being vulnerable",
    "I'm sorry for not being authentic",
    "I'm sorry for not being the best version of myself",
    "I'm sorry for not working on my issues",
    "I'm sorry for not seeking help when I needed it",
    "I'm sorry for not being accountable for my actions",
    "I'm sorry for not taking responsibility",
    "I'm sorry for not learning from my mistakes",
    "I'm sorry for not growing as a person",
    "I'm sorry for not being the man you fell in love with",
    "I'm sorry for not being worthy of your love",
    "I'm sorry for not being the partner you needed",
    "I'm sorry for not being the person you deserved",
    
    // 50 new reasons focused on communication, ignoring, and being rude
    "I'm sorry for ignoring your messages when you were trying to reach out to me",
    "I'm sorry for giving you one-word responses when you deserved full conversations",
    "I'm sorry for not texting you back for hours or days when you needed me",
    "I'm sorry for being cold and distant when you were trying to connect with me",
    "I'm sorry for shutting down during important conversations we needed to have",
    "I'm sorry for not asking how your day was or showing interest in your life",
    "I'm sorry for being rude and snapping at you when you didn't deserve it",
    "I'm sorry for not calling you when I knew you were having a hard time",
    "I'm sorry for being dismissive of your feelings and concerns",
    "I'm sorry for not making an effort to communicate with you regularly",
    "I'm sorry for being short-tempered and taking my frustrations out on you",
    "I'm sorry for not being there to talk when you were going through difficult times",
    "I'm sorry for being passive-aggressive instead of talking things out properly",
    "I'm sorry for not sharing my thoughts and feelings with you openly",
    "I'm sorry for being distant and unavailable when you needed emotional support",
    "I'm sorry for not making time to have meaningful conversations with you",
    "I'm sorry for being rude and disrespectful in our arguments",
    "I'm sorry for not listening when you were trying to tell me something important",
    "I'm sorry for being defensive instead of understanding your perspective",
    "I'm sorry for not being present in our conversations and always being distracted",
    "I'm sorry for being harsh and critical when you were just trying to help",
    "I'm sorry for not being patient when you were trying to explain your feelings",
    "I'm sorry for being dismissive of your opinions and thoughts",
    "I'm sorry for not being supportive when you were trying to communicate with me",
    "I'm sorry for being rude and insensitive when you were being vulnerable",
    "I'm sorry for not being there to talk through our problems together",
    "I'm sorry for being cold and unresponsive when you were reaching out to me",
    "I'm sorry for not being understanding when you were trying to express yourself",
    "I'm sorry for being rude and mean when you were just trying to connect",
    "I'm sorry for not being available to talk when you needed someone to listen",
    "I'm sorry for being dismissive of your attempts to improve our communication",
    "I'm sorry for not being respectful during our disagreements",
    "I'm sorry for being distant and unavailable when you wanted to spend time together",
    "I'm sorry for not being there to have the deep conversations you wanted",
    "I'm sorry for being rude and insensitive when you were being honest with me",
    "I'm sorry for not being present and engaged in our conversations",
    "I'm sorry for being defensive and closed off when you were trying to open up",
    "I'm sorry for not being supportive when you were trying to communicate better",
    "I'm sorry for being rude and disrespectful when you were being kind to me",
    "I'm sorry for not being there to talk through our relationship issues",
    "I'm sorry for being cold and distant when you were trying to be close to me",
    "I'm sorry for not being understanding when you were trying to work on us",
    "I'm sorry for being rude and mean when you were just trying to love me",
    "I'm sorry for not being available to have the conversations you needed",
    "I'm sorry for being dismissive of your feelings and emotions",
    "I'm sorry for not being there to talk when you were feeling alone",
    "I'm sorry for being rude and insensitive when you were being patient with me",
    "I'm sorry for not being present and engaged when you were trying to connect",
    "I'm sorry for being defensive and closed off when you were being open",
    "I'm sorry for not being supportive when you were trying to make us work",
    "I'm sorry for being rude and disrespectful when you deserved kindness",
    "I'm sorry for not being there to have the honest conversations we needed",
    "I'm sorry for being cold and distant when you were trying to be warm",
    "I'm sorry for not being understanding when you were trying to fix us",
    "I'm sorry for being rude and mean when you were just trying to help us grow"
];

// 100 Reasons Why I Love You
const loveReasons = [
    "I love your beautiful smile that lights up my world",
    "I love the way you laugh and make everything better",
    "I love your kind and caring heart",
    "I love your intelligence and wisdom",
    "I love your strength and resilience",
    "I love your beautiful eyes that I could get lost in",
    "I love your gentle and loving nature",
    "I love the way you care for others",
    "I love your sense of humor",
    "I love your beautiful voice",
    "I love the way you make me feel special",
    "I love your passion for life",
    "I love your creativity and imagination",
    "I love your determination and drive",
    "I love your honesty and integrity",
    "I love the way you understand me",
    "I love your patience with me",
    "I love your forgiveness and grace",
    "I love your beautiful soul",
    "I love the way you inspire me",
    "I love your courage and bravery",
    "I love your compassion for others",
    "I love your beautiful mind",
    "I love your gentle touch",
    "I love the way you comfort me",
    "I love your positive energy",
    "I love your beautiful spirit",
    "I love the way you make me want to be better",
    "I love your loyalty and devotion",
    "I love your beautiful heart",
    "I love the way you love me",
    "I love your beautiful personality",
    "I love your grace and elegance",
    "I love your beautiful smile",
    "I love the way you make me happy",
    "I love your beautiful soul",
    "I love your kindness and generosity",
    "I love your beautiful mind",
    "I love the way you think",
    "I love your beautiful heart",
    "I love your compassion",
    "I love your beautiful spirit",
    "I love your strength",
    "I love your beautiful eyes",
    "I love your beautiful voice",
    "I love your beautiful laugh",
    "I love your beautiful smile",
    "I love your beautiful soul",
    "I love your beautiful heart",
    "I love your beautiful mind",
    "I love your beautiful spirit",
    "I love your beautiful personality",
    "I love your beautiful nature",
    "I love your beautiful character",
    "I love your beautiful qualities",
    "I love your beautiful traits",
    "I love your beautiful features",
    "I love your beautiful essence",
    "I love your beautiful being",
    "I love your beautiful presence",
    "I love your beautiful energy",
    "I love your beautiful aura",
    "I love your beautiful light",
    "I love your beautiful warmth",
    "I love your beautiful love",
    "I love your beautiful care",
    "I love your beautiful support",
    "I love your beautiful encouragement",
    "I love your beautiful motivation",
    "I love your beautiful inspiration",
    "I love your beautiful guidance",
    "I love your beautiful wisdom",
    "I love your beautiful advice",
    "I love your beautiful perspective",
    "I love your beautiful outlook",
    "I love your beautiful attitude",
    "I love your beautiful approach",
    "I love your beautiful way",
    "I love your beautiful style",
    "I love your beautiful taste",
    "I love your beautiful choices",
    "I love your beautiful decisions",
    "I love your beautiful actions",
    "I love your beautiful words",
    "I love your beautiful thoughts",
    "I love your beautiful feelings",
    "I love your beautiful emotions",
    "I love your beautiful reactions",
    "I love your beautiful responses",
    "I love your beautiful gestures",
    "I love your beautiful movements",
    "I love your beautiful expressions",
    "I love your beautiful reactions",
    "I love your beautiful responses",
    "I love your beautiful way of being",
    "I love your beautiful way of living",
    "I love your beautiful way of loving",
    "I love your beautiful way of caring",
    "I love your beautiful way of giving",
    "I love your beautiful way of sharing",
    "I love your beautiful way of being you"
];

// Populate reasons
function populateReasons() {
    const sorryGrid = document.getElementById('sorryReasonsGrid');
    const loveGrid = document.getElementById('loveReasonsGrid');
    
    // Populate sorry reasons
    sorryReasons.forEach((reason, index) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.innerHTML = `
            <div class="reason-number">${index + 1}.</div>
            <div class="reason-text">${reason}</div>
        `;
        sorryGrid.appendChild(card);
    });
    
    // Populate love reasons
    loveReasons.forEach((reason, index) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.innerHTML = `
            <div class="reason-number">${index + 1}.</div>
            <div class="reason-text">${reason}</div>
        `;
        loveGrid.appendChild(card);
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    createSparkles();
    populateReasons();
    setupOpenWhenButton();
});

function setupOpenWhenButton() {
    const openButton = document.getElementById('openSadButton');
    const message = document.getElementById('sadMessage');

    if (openButton && message) {
        openButton.addEventListener('click', () => {
            // Toggle the display of the message
            if (message.style.display === 'block') {
                message.style.display = 'none';
            } else {
                message.style.display = 'block';
            }
        });
    }
} 