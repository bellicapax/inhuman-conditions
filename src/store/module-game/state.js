function loadStore () {
  var store = {}
  var core = require('../../../data/inhumanCore.json')
  store.notes = core.notes
  store.penalties = core.penalties
  store.packets = []
  var starterPackets = require('../../../data/inhumanStarterPackets.json')
  addPackets(store, starterPackets, core.roleTemplates)
  // console.log(store)
  return store
}

function addPackets (store, packetsObject, templates) {
  packetsObject.packets.forEach((packet) => {
    addPacket(store, packet, templates)
  })
}

function addPacket (store, packet, templates) {
  var filledPacket = {}
  filledPacket.name = packet.name
  filledPacket.inquiries = packet.inquiries
  filledPacket.roles = []
  packet.roles.forEach((role) => {
    filledPacket.roles.push(fillRole(role, templates))
  })
  store.packets.push(filledPacket)
}

function fillRole (role, templates) {
  var filledRole = role
  var template = templates[role.name]
  if (template) {
    var directives = template['directives']
    if (directives) {
      if (!filledRole.directives) {
        filledRole.directives = []
      }
      filledRole.directives.push.apply(filledRole.directives, directives)
    }
    var objective = template['objective']
    if (objective) {
      filledRole.objective = objective
    }
  }
  return filledRole
}

export default loadStore()
