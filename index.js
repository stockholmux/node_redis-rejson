function addReJSONModule(redis) {
  var cmds = ["json.del", "json.get", "json.mget", "json.set", "json.type", "json.numincrby", "json.nummultby", "json.strappend", "json.strlen", "json.arrappend", "json.arrindex", "json.arrinsert", "json.arrlen", "json.arrpop", "json.arrtrim", "json.objkeys", "json.objlen", "json.debug", "json.forget", "json.resp"];
  
  cmds.forEach(function(aCmd) {
    redis.addCommand(aCmd);
  });
}
module.exports = addReJSONModule;