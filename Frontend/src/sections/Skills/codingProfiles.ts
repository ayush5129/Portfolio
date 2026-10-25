import { SiCodingninjas, SiGeeksforgeeks, SiHackerrank, SiLeetcode } from 'react-icons/si'

export const codingProfiles = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    icon: SiLeetcode,
    description: 'Algorithms and contests',
    metrics: [{ value: '375', label: 'Problems solved' }, { value: '1,730', label: 'Contest rating' }],
    url: 'https://leetcode.com/u/ayush_singh29/',
  },
  {
    id: 'geeksforgeeks',
    name: 'GeeksforGeeks',
    icon: SiGeeksforgeeks,
    description: 'Data structures and practice',
    metrics: [{ value: '195', label: 'Problems solved' }, { value: '514', label: 'Coding score' }],
    url: 'https://www.geeksforgeeks.org/profile/ayush_singh5129?tab=activity',
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    icon: SiHackerrank,
    description: 'Skills and certifications',
    metrics: [{ value: '3', label: 'Skill badges' }, { value: '3', label: 'Certifications' }],
    url: 'https://www.hackerrank.com/profile/singhayusham5129',
  },
  {
    id: 'code360',
    name: 'Code360',
    icon: SiCodingninjas,
    description: 'Practice and contests',
    metrics: [{ value: '184', label: 'Problems solved' }, { value: '1,687', label: 'Contest rating' }],
    url: 'https://www.naukri.com/code360/profile/singh_ayush',
  },
]
