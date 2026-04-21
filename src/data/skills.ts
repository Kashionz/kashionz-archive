export type SkillGroup = {
  title: string
  skills: string[]
}

export const homeSkillGroups: SkillGroup[] = [
  {
    title: 'Operating Systems',
    skills: ['Windows', 'Linux', 'macOS']
  },
  {
    title: 'DevOps',
    skills: ['Git', 'AWS', 'Docker', 'Vercel', 'GitHub Actions', 'SSH']
  },
  {
    title: 'AI Assistants',
    skills: ['Claude', 'Codex', 'Gemini']
  },
  {
    title: 'Backend',
    skills: ['C#', 'Python', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'IDE',
    skills: ['VS Code', 'Cursor', 'Antigravity']
  },
  {
    title: 'Design',
    skills: ['Photoshop', 'Canva']
  },
  {
    title: 'Other',
    skills: ['Markdown']
  }
]
