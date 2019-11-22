export default async function getHPCharacters() {
  const response = await fetch(`http://hp-api.herokuapp.com/api/characters`);
  const data = await response.json();
  console.log(data);
  return data.name;
}
console.log(getHPCharacters());
