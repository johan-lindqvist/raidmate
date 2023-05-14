export const createTransition = (tempo: 'slow' | 'normal' | 'fast', ...properties: string[]) => {
  const tempoMap = {
    slow: '325ms',
    normal: '225ms',
    fast: '175ms',
  };

  return properties.map((property) => `${property} ${tempoMap[tempo]} ease-in-out`).join(', ');
};
