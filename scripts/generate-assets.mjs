import fs from 'fs';
import path from 'path';

const baseDir = process.cwd();

const dirs = [
  'public/images/team',
  'public/images/gallery',
  'public/images/events',
  'public/images/aarambh',
  'public/posters'
];

dirs.forEach(d => {
  fs.mkdirSync(path.join(baseDir, d), { recursive: true });
});

function createSvgPoster(title, category, color1, color2) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="100%" stop-color="${color2}"/>
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00CEC9"/>
        <stop offset="100%" stop-color="#6C5CE7"/>
      </linearGradient>
    </defs>
    <rect width="600" height="800" fill="url(#bg)"/>
    <circle cx="500" cy="150" r="180" fill="white" opacity="0.05"/>
    <circle cx="100" cy="700" r="220" fill="white" opacity="0.04"/>
    <rect x="40" y="40" width="520" height="720" rx="16" fill="none" stroke="white" stroke-opacity="0.15" stroke-width="2"/>
    
    <text x="70" y="110" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="20" fill="#00CEC9" letter-spacing="4">IEDC CEKNPY</text>
    <rect x="70" y="130" width="80" height="26" rx="13" fill="url(#accent)"/>
    <text x="110" y="147" font-family="system-ui, sans-serif" font-weight="600" font-size="12" fill="#ffffff" text-anchor="middle">${category.toUpperCase()}</text>
    
    <text x="70" y="400" font-family="system-ui, sans-serif" font-weight="800" font-size="46" fill="#ffffff">${title}</text>
    <text x="70" y="450" font-family="system-ui, sans-serif" font-weight="400" font-size="20" fill="#cbd5e1">College of Engineering Karunagappally</text>

    <line x1="70" y1="500" x2="530" y2="500" stroke="white" stroke-opacity="0.2" stroke-width="2"/>
    
    <text x="70" y="560" font-family="system-ui, sans-serif" font-weight="500" font-size="18" fill="#e2e8f0">🚀 Innovation • Technology • Entrepreneurship</text>
    <text x="70" y="600" font-family="system-ui, sans-serif" font-weight="500" font-size="18" fill="#e2e8f0">📍 CEKNPY Campus Hub</text>
  </svg>`;
}

function createSvgAvatar(name, role, color1, color2) {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="100%" stop-color="${color2}"/>
      </linearGradient>
    </defs>
    <rect width="400" height="400" rx="200" fill="url(#avatarBg)"/>
    <circle cx="200" cy="200" r="190" fill="none" stroke="white" stroke-opacity="0.2" stroke-width="4"/>
    <text x="200" y="215" font-family="system-ui, sans-serif" font-weight="800" font-size="90" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">${initials}</text>
  </svg>`;
}

function createSvgPhoto(title, color1, color2) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
    <defs>
      <linearGradient id="photoBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="100%" stop-color="${color2}"/>
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#photoBg)"/>
    <circle cx="400" cy="300" r="180" fill="white" opacity="0.05"/>
    <text x="400" y="300" font-family="system-ui, sans-serif" font-weight="700" font-size="32" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">${title}</text>
    <text x="400" y="350" font-family="system-ui, sans-serif" font-weight="400" font-size="18" fill="#94a3b8" text-anchor="middle">IEDC CEKNPY Photo Archive</text>
  </svg>`;
}

// Generate Posters
const posters = [
  { path: 'public/posters/aarambh-main.svg', title: 'AARAMBH 2026', cat: 'Summit', c1: '#0F172A', c2: '#0F52BA' },
  { path: 'public/posters/hackcraft.svg', title: "HackCraft '26", cat: '24h Hackathon', c1: '#1E1B4B', c2: '#6C5CE7' },
  { path: 'public/posters/ignite-pitch.svg', title: 'IgnitePitch 3.0', cat: 'Pitching', c1: '#042F2E', c2: '#00CEC9' },
  { path: 'public/posters/maker-expo.svg', title: 'Maker & Robotics', cat: 'Expo', c1: '#311042', c2: '#A855F7' },
  { path: 'public/posters/ai-bootcamp.svg', title: 'Generative AI', cat: 'Bootcamp', c1: '#0F172A', c2: '#2563EB' },
  { path: 'public/posters/web3-summit.svg', title: 'Web3 & Solidity', cat: 'Masterclass', c1: '#1E293B', c2: '#475569' },
  { path: 'public/posters/legal-101.svg', title: 'Startup Legal 101', cat: 'Talk', c1: '#064E3B', c2: '#10B981' },
  { path: 'public/posters/design-sprint.svg', title: 'UI/UX Design Sprint', cat: 'Workshop', c1: '#4C1D95', c2: '#8B5CF6' }
];

posters.forEach(p => {
  fs.writeFileSync(path.join(baseDir, p.path), createSvgPoster(p.title, p.cat, p.c1, p.c2));
});

// Generate Team Avatars
const avatars = [
  { path: 'public/images/team/nodal-officer.svg', name: 'Jyothi S', role: 'Nodal Officer', c1: '#0F52BA', c2: '#6C5CE7' },
  { path: 'public/images/team/faculty-coord.svg', name: 'Rajesh V', role: 'Faculty Coordinator', c1: '#2563EB', c2: '#00CEC9' },
  { path: 'public/images/team/campus-lead.svg', name: 'Adithya R', role: 'Campus Lead', c1: '#6C5CE7', c2: '#00CEC9' },
  { path: 'public/images/team/tech-lead.svg', name: 'Devanand M', role: 'Tech Lead', c1: '#0F172A', c2: '#0F52BA' },
  { path: 'public/images/team/women-lead.svg', name: 'Ananya Nair', role: 'Women Lead', c1: '#EC4899', c2: '#8B5CF6' },
  { path: 'public/images/team/innovation-lead.svg', name: 'Kiran S', role: 'Innovation Lead', c1: '#F59E0B', c2: '#EF4444' },
  { path: 'public/images/team/finance-lead.svg', name: 'Siddharth V', role: 'Finance Lead', c1: '#10B981', c2: '#059669' },
  { path: 'public/images/team/marketing-lead.svg', name: 'Rhea Pillai', role: 'Marketing Lead', c1: '#8B5CF6', c2: '#EC4899' },
  { path: 'public/images/team/media-lead.svg', name: 'Gautham Krishna', role: 'Media Lead', c1: '#3B82F6', c2: '#1D4ED8' },
  { path: 'public/images/team/design-lead.svg', name: 'Meera Santhosh', role: 'Design Lead', c1: '#06B6D4', c2: '#3B82F6' },
  { path: 'public/images/team/community-lead.svg', name: 'Abhiram P', role: 'Community Lead', c1: '#6366F1', c2: '#4338CA' },
  { path: 'public/images/team/past-lead-1.svg', name: 'Arjun V', role: 'Past Lead', c1: '#475569', c2: '#1E293B' },
  { path: 'public/images/team/past-lead-2.svg', name: 'Sneha Susan', role: 'Past Tech Lead', c1: '#475569', c2: '#1E293B' },
  { path: 'public/images/team/past-lead-3.svg', name: 'Rahul Nair', role: 'Past Innovation Lead', c1: '#475569', c2: '#1E293B' },
  { path: 'public/images/team/past-lead-4.svg', name: 'Nikhil Raj', role: 'Past Lead', c1: '#475569', c2: '#1E293B' },
  { path: 'public/images/team/past-lead-5.svg', name: 'Fathima H', role: 'Past Women Lead', c1: '#475569', c2: '#1E293B' },
  { path: 'public/images/team/past-lead-6.svg', name: 'Anoop K', role: 'Past Finance Lead', c1: '#475569', c2: '#1E293B' },
  { path: 'public/images/team/speaker-1.svg', name: 'Saji Gopinath', role: 'Keynote Speaker', c1: '#1E1B4B', c2: '#4338CA' },
  { path: 'public/images/team/speaker-2.svg', name: 'Anoop Ambika', role: 'CEO KSUM', c1: '#042F2E', c2: '#0F766E' },
  { path: 'public/images/team/speaker-3.svg', name: 'Roshni Thomas', role: 'CTO FinTech', c1: '#4C1D95', c2: '#7C3AED' },
  { path: 'public/images/team/speaker-4.svg', name: 'Abhinav Mohan', role: 'AI Speaker', c1: '#0F172A', c2: '#2563EB' }
];

avatars.forEach(a => {
  fs.writeFileSync(path.join(baseDir, a.path), createSvgAvatar(a.name, a.role, a.c1, a.c2));
});

// Generate Photos & Banner SVG placeholders
const photos = [
  { path: 'public/images/aarambh/hero-banner.svg', title: 'AARAMBH 2026 HERO BANNER', c1: '#0F172A', c2: '#0F52BA' },
  { path: 'public/images/events/ai-banner.svg', title: 'AI BOOTCAMP BANNER', c1: '#0F172A', c2: '#2563EB' },
  { path: 'public/images/gallery/aarambh-1.jpg', title: 'Aarambh Keynote Session', c1: '#0F172A', c2: '#0F52BA' },
  { path: 'public/images/gallery/aarambh-2.jpg', title: 'Aarambh Inauguration', c1: '#1E1B4B', c2: '#6C5CE7' },
  { path: 'public/images/gallery/aarambh-3.jpg', title: 'Student Startup Pitch', c1: '#042F2E', c2: '#00CEC9' },
  { path: 'public/images/gallery/aarambh-4.jpg', title: 'Crowd & Attendees', c1: '#311042', c2: '#A855F7' },
  { path: 'public/images/gallery/hackcraft-1.jpg', title: 'HackCraft 24h Coding', c1: '#1E1B4B', c2: '#6C5CE7' },
  { path: 'public/images/gallery/hackcraft-2.jpg', title: 'HackCraft Mentorship', c1: '#0F172A', c2: '#0F52BA' },
  { path: 'public/images/gallery/hackcraft-3.jpg', title: 'HackCraft Final Demos', c1: '#042F2E', c2: '#00CEC9' },
  { path: 'public/images/gallery/expo-1.jpg', title: 'Maker & Robotics Expo', c1: '#311042', c2: '#A855F7' },
  { path: 'public/images/gallery/expo-2.jpg', title: 'Robot Drone Demo', c1: '#0F172A', c2: '#0F52BA' },
  { path: 'public/images/gallery/ignite-1.jpg', title: 'IgnitePitch VC Presentation', c1: '#042F2E', c2: '#00CEC9' },
  { path: 'public/images/gallery/ignite-2.jpg', title: 'IgnitePitch Winners', c1: '#10B981', c2: '#059669' },
  { path: 'public/images/gallery/workshop-1.jpg', title: 'Generative AI Workshop', c1: '#0F172A', c2: '#2563EB' },
  { path: 'public/images/gallery/workshop-2.jpg', title: 'RAG Lab Session', c1: '#1E293B', c2: '#3B82F6' },
  { path: 'public/images/gallery/web3-1.jpg', title: 'Web3 Masterclass', c1: '#1E293B', c2: '#475569' },
  { path: 'public/images/gallery/web3-2.jpg', title: 'Solidity Lab', c1: '#0F172A', c2: '#334155' },
  { path: 'public/images/gallery/legal-1.jpg', title: 'KSUM Grant Briefing', c1: '#064E3B', c2: '#10B981' },
  { path: 'public/images/gallery/legal-2.jpg', title: 'Patent Advisory Panel', c1: '#0F172A', c2: '#059669' },
  { path: 'public/images/gallery/design-1.jpg', title: 'Figma Design Sprint', c1: '#4C1D95', c2: '#8B5CF6' },
  { path: 'public/images/gallery/design-2.jpg', title: 'UI Wireframing Lab', c1: '#6366F1', c2: '#A855F7' },
  { path: 'public/images/gallery/execom-1.jpg', title: 'Execom Retreat 2025', c1: '#0F52BA', c2: '#00CEC9' },
  { path: 'public/images/gallery/achievement-1.jpg', title: 'KSUM Grant ₹3L Award', c1: '#F59E0B', c2: '#D97706' }
];

photos.forEach(p => {
  fs.writeFileSync(path.join(baseDir, p.path), createSvgPhoto(p.title, p.c1, p.c2));
});

console.log('Successfully generated all SVG placeholders for posters, team avatars, and photo gallery!');
