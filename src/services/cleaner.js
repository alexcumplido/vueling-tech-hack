export function cleanObject(element) {
  return {
    id: element.id,
    regular: element.urls.regular || element.urls.full || element.urls.raw,
    description: element.description || element.alt_description,
    user: element.user.username,
    username: element.user.name,
  };
}
