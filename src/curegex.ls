map = {}
curegex.map (regs) -> regs.map -> map[it.name] = it

main = do
  get: (name, engine) ->
    if !engine => engine = @_engine or RegExp
    if !(obj = map[name]) => return null
    return new engine(obj.rule, obj.flag or [])
  engine: -> @_engine = it
  raw: (name) -> return map[name]

if module? => module.exports = main
if window? => window.curegex = main
