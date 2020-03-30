export default name => encodeURIComponent(name.toLowerCase()).replace(/%[0-9A-F]{2}/gi, '');
