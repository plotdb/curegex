var curegex = 
[
  {
    "name": "email",
    "rule": "^[-a-z0-9~!$%^&*_=+}{\\'?]+(\\.[-a-z0-9~!$%^&*_=+}{\\'?]+)*@([a-z0-9_][-a-z0-9_]*(\\.[-a-z0-9_]+)*\\.[a-z]{2,}|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,5})?$",
    "flag": "i"
  },
  {
    "name": "url",
    "rule": "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#()?&//=]*)"
  },
  {
    "name": "password-len8-cn",
    "rule": "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"
  },
  {
    "name": "password-len8-cns",
    "rule": "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
  },
  {
    "name": "password-len8-uln",
    "rule": "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$"
  },
  {
    "name": "password-len8-ulns",
    "rule": "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
  }
]
var map, main;
map = {};
Array.from(curegex).map(function(it){
  return map[it.name] = it;
});
main = {
  get: function(name, engine){
    var obj;
    engine == null && (engine = RegExp);
    if (!(obj = map[name])) {
      return null;
    }
    return new engine(obj.rule, obj.flag || []);
  }
};
if (typeof module != 'undefined' && module !== null) {
  module.exports = main;
} else if (typeof window != 'undefined' && window !== null) {
  window.curegex = main;
}
