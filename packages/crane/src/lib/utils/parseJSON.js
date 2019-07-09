export default function parseJSON(
  value,
  { defaultValue = {}, errorMessage = "Couldn't parse JSON" } = {},
) {
  let result;

  try {
    result = value ? JSON.parse(value) : defaultValue;
  } catch (e) {
    console.log(errorMessage);
    result = defaultValue;
  }
  return result;
}
