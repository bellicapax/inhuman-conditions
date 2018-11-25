
export function isInspector (state) {
  return state.role === 'Inspector'
}

export function isSuspect (state) {
  return state.role === 'Suspect'
}
