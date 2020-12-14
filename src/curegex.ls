map = {}
Array.from(curegex).map -> map[it.name] = it

main = do
  get: (name, engine=RegExp) ->
    if !(obj = map[name]) => return null
    return new engine(obj.rule, obj.flag or [])

if module? => module.exports = main
else if window? => window.curegex = main
