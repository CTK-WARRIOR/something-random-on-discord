const isURL = (link) => {
if(!link) return;
return link.match("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?") ? true : false
}

module.exports = isURL;