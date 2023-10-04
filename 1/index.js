function censor() {
  let arr = [];
  return (key, value = null) => {
    if (!value) {
      arr.forEach((el) => {
        const pattern = `(\\b)${el[0]}(\\b)`;
        if (key.match(pattern, "gi")) {
          const regExp = new RegExp(pattern, "gi");
          key = key.replace(regExp, el[1]);
        }
      });
      return key;
    } else {
      let arrKey = arr.map((el) => el[0]);
      arrKey.includes(key)
        ? arr.map((el) => {
            if (el[0] === key) {
              el[1] = value;
            }
          })
        : arr.push([key, value]);
    }
  };
}

const changeScene = censor();

changeScene("PHP", "JS");
changeScene("HTML", "CSS");
changeScene("Bootstrap", "Tailwind CSS");
changeScene("backend", "frontend");

console.log(
  changeScene(
    "PHP is the most popular programming language for backend web-development"
  )
);
