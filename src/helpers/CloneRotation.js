function cloneRotation(target, source) {
  if (target && source) {
    target.object3D.rotation.x = source.object3D.rotation.x
    target.object3D.rotation.y = source.object3D.rotation.y
    target.object3D.rotation.z = source.object3D.rotation.z
  }
}
