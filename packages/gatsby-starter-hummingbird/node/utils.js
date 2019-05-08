const parseJSON = (value, { defaultValue = {}, message = "Couldn't parse JSON" } = {}) => {
  let result;

  try {
    result = value ? JSON.parse(value) : {};
  } catch (e) {
    console.log(message);
    console.error(e);
    result = defaultValue;
  }
  return result;
};

const getDesign = () => {
  const { GATSBY_APP_DESIGN: designEnv, GATSBY_APP_THEME: themeEnv } = process.env;
  return parseJSON(designEnv || themeEnv, { message: "Couldn't parse design config." });
};

const getTypographyConfig = () =>
  parseJSON(process.env.GATSBY_TYPOGRAPHY_CONFIG, { message: "Couldn't parse typography config." });

const getFooterConfig = () =>
  parseJSON(process.env.GATSBY_FOOTER_CONFIG, { message: "Couldn't parse footer config." });

module.exports = {
  getDesign,
  getTypographyConfig,
  getFooterConfig,
};
