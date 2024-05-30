//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
  return Object.values(object);
  // code
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//  /* global keysToString */
//  QUnit.test("keysToString() : Should take an object and return all its keys in a string each separated with a space", function(assert){
//     var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
//     var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
//     assert.equal(keysToString(objectOne), "a b ponies dingle");
//     assert.equal(keysToString(objectTwo), "c d crayons dangle");
//   });

function keysToString(object) {
  let keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// QUnit.test("valuesToString() : Should take an object and return all its string values in a string each separated with a
// space", function(assert){
//     var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};
//     var objectTwo = {c: "three", boolean: false, d: "four", crayons: "ponies", dangle: "dingle"};
//     assert.equal(valuesToString(objectOne), "one two crayons dangle");
//     assert.equal(valuesToString(objectTwo), "three four ponies dingle");
//   });

function valuesToString(object) {
  let values = [];
  for (var key in object) {
    if (typeof object[key] === "string") {
      values.push(object[key]);
    }
  }
  return values.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
QUnit.test(
  "arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object",
  function (assert) {
    assert.equal(arrayOrObject({ a: "one" }), "object");
    assert.equal(arrayOrObject([1, 2, {}]), "array");
  }
);

function arrayOrObject(collection) {
  if (Array.isArray(collection)) {
    return "array";
  } else if (typeof collection === "object") {
    return "object";
  }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

QUnit.test(
  "capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized",
  function (assert) {
    assert.equal(capitalizeWord("greg"), "Greg");
    assert.equal(capitalizeWord("pumpkin"), "Pumpkin");
    assert.equal(capitalizeWord("quattuordecillion"), "Quattuordecillion");
  }
);

function capitalizeWord(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
QUnit.test(
  "capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized ",
  function (assert) {
    assert.equal(
      capitalizeAllWords("one two three four"),
      "One Two Three Four"
    );
    assert.equal(
      capitalizeAllWords("please excuse my dear aunt sally"),
      "Please Excuse My Dear Aunt Sally"
    );
  }
);

function capitalizeAllWords(string) {
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
QUnit.test(
  "welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'",
  function (assert) {
    assert.equal(welcomeMessage({ name: "bert" }), "Welcome Bert!");
    assert.equal(welcomeMessage({ name: "Charlie" }), "Welcome Charlie!");
  }
);

function welcomeMessage(object) {
  let name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
  return "Welcome " + name + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
QUnit.test(
  "profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'",
  function (assert) {
    assert.equal(
      profileInfo({ name: "jake", species: "dog" }),
      "Jake is a Dog"
    );
    assert.equal(
      profileInfo({ name: "reggie", species: "dog" }),
      "Reggie is a Dog"
    );
  }
);

function profileInfo(object) {
  let name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
  let species =
    object.species.charAt(0).toUpperCase() + object.species.slice(1);
  return name + " is a " + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
QUnit.test(
  "maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'",
  function (assert) {
    assert.equal(
      maybeNoises({ noises: ["bark", "woof", "squeak", "growl"] }),
      "bark woof squeak growl"
    );
    assert.equal(maybeNoises({ noises: [] }), "there are no noises");
    assert.equal(maybeNoises({}), "there are no noises");
  }
);

function maybeNoises(object) {
  if (object.noises && object.noises.length > 0) {
    return object.noises.join(" ");
  } else {
    return "there are no noises";
  }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
QUnit.test(
  "hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.",
  function (assert) {
    var data = "This is a super awesome string of words";
    assert.strictEqual(hasWord(data, "awesome"), true);
    assert.strictEqual(hasWord(data, "words"), true);
    assert.strictEqual(hasWord(data, "turtle"), false);
  }
);

function hasWord(string, word) {
  return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
QUnit.test(
  "addFriend() : Should take a name and an object and add the name to the object's friends array then return the object",
  function (assert) {
    assert.deepEqual(addFriend("lester", { friends: [] }), {
      friends: ["lester"],
    });
    assert.deepEqual(addFriend("jimmy", { friends: ["bobby", "jones"] }), {
      friends: ["bobby", "jones", "jimmy"],
    });
  }
);

function addFriend(name, object) {
  object.friends.push(name);
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
QUnit.test(
  "isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise",
  function (assert) {
    assert.equal(isFriend("jimmy", { friends: ["bobby", "ralf"] }), false);
    assert.equal(isFriend("ralf", { friends: ["bobby", "ralf"] }), true);
    assert.equal(isFriend("chuck", {}), false);
  }
);

function isFriend(name, object) {
  if (Array.isArray(object.friends)) {
    return object.friends.includes(name);
  }
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
QUnit.test(
  "nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with",
  function (assert) {
    var data = [
      { name: "Jimmy", friends: ["Sara", "Liza"] },
      { name: "Bob", friends: [] },
      { name: "Liza", friends: ["Jimmy"] },
      { name: "Sara", friends: ["Jimmy"] },
    ];
    assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
    assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
    assert.deepEqual(nonFriends("Sara", data), ["Bob", "Liza"]);
  }
);

function nonFriends(name, array) {
  let notFriends = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].name !== name) {
      if (!array[i].friends.includes(name)) {
        notFriends.push(array[i].name);
      }
    }
  }
  return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
QUnit.test(
  "updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.",
  function (assert) {
    var data = { a: "one", b: "two", hokey: false };
    assert.deepEqual(updateObject(data, "b", "three"), {
      a: "one",
      b: "three",
      hokey: false,
    });
    var data = { a: "one", b: "two", hokey: false };
    assert.deepEqual(updateObject(data, "ponies", "yes"), {
      a: "one",
      b: "two",
      hokey: false,
      ponies: "yes",
    });
    var data = { a: "one", b: "two", hokey: false };
    assert.deepEqual(updateObject(data, "a", Infinity), {
      a: Infinity,
      b: "two",
      hokey: false,
    });
  }
);

function updateObject(object, key, value) {
  object[key] = value;
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* global removeProperties */
QUnit.test(
  "removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>",
  function (assert) {
    var data = { a: "one", b: "two", hokey: false };
    removeProperties(data, ["a", "hokey"]);
    assert.deepEqual(data, { b: "two" });

    var data = { a: "one", b: "two", hokey: false };
    removeProperties(data, ["b"]);
    assert.deepEqual(data, { a: "one", hokey: false });

    var data = { a: "one", b: "two", hokey: false };
    removeProperties(data, []);
    assert.deepEqual(data, { a: "one", b: "two", hokey: false });
  }
);

function removeProperties(object, array) {
  for (var i = 0; i < array.length; i++) {
    delete object[array[i]];
  }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
QUnit.test(
  "dedup() : Should take an array and return an array with all the duplicates removed",
  function (assert) {
    var arrayOne = [1, 2, 2, 2, 3, 4, 5, 5, 5, 5, "a", "b", "b", "b", "c"];
    var arrayTwo = [
      "hello",
      "hello",
      "hello",
      "hello",
      "hello",
      "world",
      "hello",
      "world",
      "world",
      "world",
    ];
    assert.deepEqual(dedup(arrayOne), [1, 2, 3, 4, 5, "a", "b", "c"]);
    assert.deepEqual(dedup(arrayTwo), ["hello", "world"]);
  }
);

function dedup(array) {
  let singles = [];
  for (let i = 0; i < array.length; i++) {
    if (!singles.includes(array[i])) {
      singles.push(array[i]);
    }
  }
  return singles;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.objectValues = objectValues;
  module.exports.keysToString = keysToString;
  module.exports.valuesToString = valuesToString;
  module.exports.arrayOrObject = arrayOrObject;
  module.exports.capitalizeWord = capitalizeWord;
  module.exports.capitalizeAllWords = capitalizeAllWords;
  module.exports.welcomeMessage = welcomeMessage;
  module.exports.profileInfo = profileInfo;
  module.exports.maybeNoises = maybeNoises;
  module.exports.hasWord = hasWord;
  module.exports.addFriend = addFriend;
  module.exports.isFriend = isFriend;
  module.exports.nonFriends = nonFriends;
  module.exports.updateObject = updateObject;
  module.exports.removeProperties = removeProperties;
  module.exports.dedup = dedup;
}
