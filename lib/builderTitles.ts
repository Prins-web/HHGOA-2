export const builderTitles = [
  'CHAIN ALCHEMIST',
  'PIXEL ARCHITECT',
  'AI WHISPERER',
  'NIGHT SHIFT BUILDER',
  'FULL STACK WIZARD',
  'PROMPT ENGINEER',
  'CODE NOMAD',
  'SHIP IT SPECIALIST',
  'BUG HUNTER',
  'NEURAL BUILDER',
  'OPEN SOURCE WARRIOR',
  'CHAOS ENGINEER',
  'SYNTH BUILDER',
  'BUILDER OF SIGNALS',
  'RHYTHM CRAFTER',
];

export function getBuilderTitle(name: string) {
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % builderTitles.length;
  return builderTitles[index];
}
