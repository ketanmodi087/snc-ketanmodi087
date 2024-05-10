export const fetchPerson = async (person: string, signal: AbortSignal) => {
  const res = await fetch(`api/person?person=${person}`, { signal }).then(
    (res) => res.json(),
  );
  // Check if the request was aborted
  if (signal.aborted) {
    throw new Error("Request was aborted");
  }

  return res; // Return the Pokémon data
};
