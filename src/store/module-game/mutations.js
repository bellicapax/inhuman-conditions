
export function setJob (state, job) {
  state.job = job
  console.log('Job is now ' + state.job)
}

export function setRole (state, role) {
  state.role = role
}
