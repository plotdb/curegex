``import * as curegex from './curegex.yaml';``
``import * as curegextw from './curegex.tw.yaml';``

map = {}
Array.from(curegex).map -> map[it.name] = it
Array.from(curegextw).map -> map[it.name] = it

main = do
  get: (name, engine=RegExp) ->
    if !(obj = map[name]) => return null
    return new engine(obj.rule, obj.flag or '')
  raw: (name) -> return map[name]

#if module? => module.exports = main
if window? => window.curegex = main
