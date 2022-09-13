/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let generateDomain = () => {
    let pronoun = ["the", "our"];
    let adj = ["great", "big", "aweletsome", "amazing"];
    let noun = ["jogger", "racoon", "dog"];
    let tld = [".com", ".org", ".net", "io", "us"];
    let domainArray = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let x = 0; x < adj.length; x++) {
        for (let y = 0; y < noun.length; y++) {
          for (let z = 0; z < tld.length; z++) {
            domainArray.push(pronoun[i] + adj[x] + noun[y] + tld[z]);
          }
        }
      }
    }
    return domainArray;
  };
  document.querySelector("#domain").innerHTML = generateDomain();
};
