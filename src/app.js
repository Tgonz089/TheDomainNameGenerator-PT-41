/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let generateDomain = () => {
    let domainArray = [];
    let pronoun = ["the", "our"];
    let adj = [
      "great",
      "big",
      "aweletsome",
      "amazing",
      "only",
      "mysterious",
      "lonely",
      "strong",
      "devious",
      "last",
      "small",
      "sleepy",
    ];
    let noun = [
      "jogger",
      "racoon",
      "dog",
      "llama",
      "cat",
      "gamer",
      "programmer",
    ];
    let tld = [".com", ".org", ".net", "io", "us"];

    for (i of pronoun) {
      for (x of adj) {
        for (y of noun) {
          for (z of tld) {
            domainArray.push(pronoun[i] + adj[x] + noun[y] + tld[z]);
          }
        }
      }
    }
    return domainArray;
  };
  document.querySelector("#domain").innerHTML = generateDomain();
};
