export default function getDesignData(design, designModelId) {
  for (const bp of design.bluePrints) {
    if (!bp.images.length && !bp.canvas.json) {
      throw new Error('Please add at least one image.');
    }
  }

  return Object.assign({}, design, {
    designModelId,
  });
}
